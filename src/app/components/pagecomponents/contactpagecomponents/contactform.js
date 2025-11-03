"use client";

import { useState } from "react";
import "./styles/contactform.css";

export default function ContactForm() {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  async function onSubmit(e) {
    e.preventDefault(); // HTML5 validation has already run
    setStatus({ loading: true, ok: null, msg: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("fullName")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      subject: formData.get("subject")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send.");
      }
      setStatus({
        loading: false,
        ok: true,
        msg: "Message sent. We’ll reply soon.",
      });
      form.reset();
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        msg: err.message || "Something went wrong.",
      });
    }
  }

  return (
    <>
      {/* Native validation is ON (no `noValidate`) */}
      <form
        className="contact-form"
        action="#"
        method="post"
        onSubmit={onSubmit}
      >
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
            required
            aria-label="Phone Number"
          />

          <input
            className="form-field font-kaisei"
            type="text"
            name="subject"
            placeholder="Message Subject"
            required
            aria-label="Message Subject"
          />

          <textarea
            className="form-field font-kaisei form-textarea"
            name="message"
            placeholder="Begin typing your message here"
            rows={4}
            required
            aria-label="Message"
          />
        </div>

        <button
          className="btn-send font-kaisei"
          type="submit"
          disabled={status.loading}
        >
          {status.loading ? "SENDING..." : "SEND"}
        </button>

        <div
          aria-live="polite"
          className="font-kaisei"
          style={{ marginTop: 8 }}
        >
          {status.msg && (status.ok ? "✅ " : "❌ ")}
          {status.msg}
        </div>
      </form>
    </>
  );
}
