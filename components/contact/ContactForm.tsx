"use client"

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form) as any);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent — we'll be in touch soon.");
        form.reset();
      } else {
        const json = await res.json();
        setStatus(json?.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          First name
          <input name="firstName" type="text" placeholder="First name" required />
        </label>
        <label>
          Last name
          <input name="lastName" type="text" placeholder="Last name" required />
        </label>
      </div>

      <label>
        Email
        <input name="email" type="email" placeholder="Email" required />
      </label>

      <label>
        Company
        <input name="company" type="text" placeholder="Company" required />
      </label>

      <label>
        Briefly tell us about your project and your current goals.
        <textarea name="message" placeholder="How can we help you?" rows={5} required />
      </label>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button type="submit" className="button button-primary form-submit" disabled={loading}>
          {loading ? "Sending…" : "Send message"}
        </button>
        {status && <span style={{ color: "#fff" }}>{status}</span>}
      </div>
    </form>
  );
}
