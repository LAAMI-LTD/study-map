"use client";

import { useState } from "react";

interface ContactFormProps {
  serviceTitle: string;
  contactMessage?: string;
}

export default function ContactForm({ serviceTitle, contactMessage }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const predefinedMessage = contactMessage || 
      `I'm interested in the ${serviceTitle} service. Please provide me with more information.`;

    const whatsappMessage = `*New Service Inquiry - ${serviceTitle}*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n\n` +
      `*Message:* ${predefinedMessage}\n\n` +
      `Please contact this person regarding the ${serviceTitle} service.`;

    const phoneNumber = "254724801455";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    setIsSent(true);
    
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{
      background: "#F8F9FB",
      border: "1px solid #DDE3EC",
      padding: "24px",
      width: "100%",
    }}>
      <style>{`
        @media (min-width: 640px) {
          .cf-container {
            padding: 28px;
          }
        }
        @media (min-width: 768px) {
          .cf-container {
            padding: 32px;
          }
        }
        .cf-input {
          width: 100%;
          padding: 10px 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          border: 1px solid #DDE3EC;
          background: #FFFFFF;
          transition: border-color 0.2s ease;
          outline: none;
        }
        .cf-input:focus {
          border-color: #0A63B3;
        }
        .cf-button {
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 20px;
          background: #25D366;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .cf-button:hover {
          opacity: 0.9;
        }
        .cf-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        @media (min-width: 640px) {
          .cf-button {
            padding: 13px 28px;
          }
        }
      `}</style>

      <div className="cf-container">
        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: "18px",
          color: "#002856",
          marginBottom: "8px",
        }}>
          Get in Touch
        </h3>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "13px",
          color: "#8A96A8",
          marginBottom: "24px",
          lineHeight: 1.5,
        }}>
          Fill in your details and we'll get back to you via WhatsApp
        </p>

        {isSent ? (
          <div style={{
            padding: "20px",
            background: "#E8F5E9",
            border: "1px solid #4CAF50",
            color: "#2E7D32",
            textAlign: "center",
            borderRadius: "4px",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 12px" }}>
              <path d="M20 6L9 17L4 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontWeight: 500, margin: 0 }}>Message sent!</p>
            <p style={{ fontSize: "12px", marginTop: "8px" }}>WhatsApp will open with your inquiry</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <label style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#002856",
                display: "block",
                marginBottom: "6px",
              }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="cf-input"
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#002856",
                display: "block",
                marginBottom: "6px",
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="cf-input"
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#002856",
                display: "block",
                marginBottom: "6px",
              }}>
                Phone Number (for WhatsApp) *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="0712345678"
                className="cf-input"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cf-button"
            >
              {isSubmitting ? "Sending..." : "Send via WhatsApp"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        )}

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          color: "#8A96A8",
          textAlign: "center",
          marginTop: "16px",
          marginBottom: 0,
        }}>
          We'll respond via WhatsApp within 24 hours
        </p>
      </div>
    </div>
  );
}