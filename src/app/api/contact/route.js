import nodemailer from "nodemailer";
import path from "path";

export const runtime = "nodejs"; // ensure Node runtime (not Edge)
export const dynamic = "force-dynamic";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject = "", message = "", phone = "", _hp = "" } = body || {};

    // Honeypot
    if (_hp) {
      return new Response(JSON.stringify({ success: true, message: "OK" }), { status: 200 });
    }

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields." }),
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email." }),
        { status: 400 }
      );
    }

    // Create transporter (Gmail with app password recommended)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true, // 465
      auth: {
        user: "nemesiswebmail@gmail.com",
        pass: "uzis nrdp anel ejrs"
      }
    });

    // Inline images (optional)
    const attachments = [
      {
        filename: "Lumhera_logo_no_background.png",
        path: path.join(process.cwd(), "public/images", "Lumhera_logo_no_background.png"),
        cid: "moslogo"
      },
      {
        filename: "Lumhera_logo_no_background.png",
        path: path.join(process.cwd(), "public/images", "Lumhera_logo_no_background.png"),
        cid: "mosfooterlogo"
      }
    ];

    // Email to Admin/HR
    const hrMailOptions = {
      from: `Lumhera Team <${process.env.EMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO || "atz.softprgmr@gmail.com",
      subject: `Contact Form Submission: ${subject || "No subject"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <img src="cid:moslogo" alt="MOS Logo" style="height: 30px;" />
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Subject:</strong> ${subject || "No subject"}</p>
          <p><strong>Message:</strong><br>${(message || "").replace(/\n/g, "<br>")}</p>
          <br />
          <img src="cid:mosfooterlogo" alt="MOS Footer Logo" style="height: 38px;" />
        </div>
      `,
      attachments
    };

    // Thank-you email to user
    const thankYouMailOptions = {
      from: `Lumhera Team <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Us!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #602537;background-color:#fdfaf7">
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left">
                 <img src="cid:moslogo" alt="Lumhera Team" style="height: 50px">
              </td>
              <td align="right"></td>
            </tr>
          </table>
          <h1 style="text-align: center; color: #602537; font-size: 24px; font-weight: 300; font-family:inter, serif">Thank You for contacting Lumhera</h1>
          <p style="font-size: 16px; color: #602537; text-align: center;">
            We would like to inform you that we have received your email and a member of our team will get back to you as soon as possible.
          </p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left" style="font-size:14px; color:#602537; font-weight:300;">
                   <strong style="font-size:14px; color:#602537; font-weight:300;">Lumhera Team</strong><br>
                     <a href="#" style="color:#602537; text-decoration:none;">14 Street,</a><br>
                     <a href="#" style="color:#602537; text-decoration:none;">Monaco.</a><br>
              </td>
              <td align="right">
                <img src="cid:mosfooterlogo" alt="Mos Letter Logo" style="height: 30px;" />
              </td>
            </tr>
          </table>
        </div>
      `,
      attachments
    };

    // Send both mails
    await transporter.sendMail(hrMailOptions);
    await transporter.sendMail(thankYouMailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
