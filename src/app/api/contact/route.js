import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure Node runtime (not Edge)
export const dynamic = "force-dynamic";

const LOGO_URL = "https://www.lumhera.com/images/Lumhera_logo_no_background.png";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Strip CR/LF so user input can't inject mail headers
function cleanHeader(value) {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim();
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

    const { EMAIL_USER, EMAIL_PASS } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error("Contact form: EMAIL_USER / EMAIL_PASS env vars are not set.");
      return new Response(
        JSON.stringify({ success: false, message: "Email service is not configured." }),
        { status: 500 }
      );
    }

    // Create transporter (Gmail with app password recommended)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true, // 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    const safeName = cleanHeader(name);
    const safeEmail = cleanHeader(email);
    const safeSubject = cleanHeader(subject) || "No subject";
    const safePhone = cleanHeader(phone);
    const fromAddress = `"Lumhera Team" <${EMAIL_USER}>`;

    // Email to Admin/HR
    const hrMailOptions = {
      from: fromAddress,
      replyTo: `"${safeName.replace(/"/g, "")}" <${safeEmail}>`,
      to: "belqis@lumhera.com",
      subject: `Contact Form Submission: ${safeSubject}`,
      text: [
        "New Contact Form Submission",
        "",
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        safePhone ? `Phone: ${safePhone}` : null,
        `Subject: ${safeSubject}`,
        "",
        "Message:",
        message
      ]
        .filter((line) => line !== null)
        .join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <img src="${LOGO_URL}" alt="Lumhera" height="30" style="height: 30px;" />
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          ${safePhone ? `<p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>` : ""}
          <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
          <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </div>
      `
    };

    // Thank-you email to user
    const thankYouMailOptions = {
      from: fromAddress,
      replyTo: EMAIL_USER,
      to: safeEmail,
      subject: "Thank You for Contacting Us!",
      text: [
        `Hello ${safeName},`,
        "",
        "Thank you for contacting Lumhera. We have received your message and a member of our team will get back to you as soon as possible.",
        "",
        "Lumhera Team",
        "https://www.lumhera.com"
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #602537;background-color:#fdfaf7">
          <img src="${LOGO_URL}" alt="Lumhera" height="50" style="height: 50px">
          <h1 style="text-align: center; color: #602537; font-size: 24px; font-weight: 300; font-family:inter, serif">Thank You for contacting Lumhera<sup style="font-size:0.5em; line-height:0;">&reg;</sup></h1>
          <p style="font-size: 16px; color: #602537; text-align: center;">
            Hello ${escapeHtml(safeName)}, we have received your message and a member of our team will get back to you as soon as possible.
          </p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <p style="font-size:14px; color:#602537; font-weight:300; margin:0;">
            <strong>Lumhera<sup style="font-size:0.5em; line-height:0;">&reg;</sup> Team</strong><br>
            <a href="https://www.lumhera.com" style="color:#602537; text-decoration:none;">www.lumhera.com</a>
          </p>
        </div>
      `
    };

    // Send both mails
    const hrInfo = await transporter.sendMail(hrMailOptions);
    console.log("Admin mail:", hrInfo.accepted, hrInfo.rejected, hrInfo.response);
    const thankYouInfo = await transporter.sendMail(thankYouMailOptions);
    console.log("Thank-you mail:", thankYouInfo.accepted, thankYouInfo.rejected, thankYouInfo.response);

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
