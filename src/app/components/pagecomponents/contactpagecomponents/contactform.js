import "./styles/contactform.css";

export default function ContactForm() {
  return (
    <form className="contact-form" action="#" method="post">
      <div className="form-grid">
        <input
          className="form-field font-kaisei"
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          aria-label="Full Name"
        />
        <input
          className="form-field font-kaisei"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          aria-label="Email Address"
        />
        <input
          className="form-field font-kaisei"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          aria-label="Phone Number"
        />
        <input
          className="form-field font-kaisei"
          type="text"
          name="subject"
          placeholder="Message Subject"
          aria-label="Message Subject"
        />
        <textarea
          className="form-field font-kaisei form-textarea"
          name="message"
          placeholder="Begin typing your message here"
          rows="4"
          required
          aria-label="Message"
        ></textarea>
      </div>

      <button className="btn-send font-kaisei" type="submit">
        SEND
      </button>
    </form>
  );
}
