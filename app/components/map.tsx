"use client";

import { useState } from "react";

export default function MapsSection() {
  const colors = {
    white: "#FFFFFF",
    prussianBlue: "#002856",
    oceanDeep: "#0A63B3",
    ink: "#0D1B2A",
    mist: "#F0F3F7",
    border: "#DDE3EC",
    slate: "#8A96A8",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    copyToSelf: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      label: "Email",
      value: "info@studymap.com",
      href: "mailto:info@studymap.com",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Mobile",
      value: "+254 987 654 321",
      href: "tel:+254987654321",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Landline",
      value: "(0421) 431 2030",
      href: "tel:04214312030",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.054-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Address",
      value: "Sirgoi Plaza, Eldoret, Kenya",
      href: "https://maps.google.com",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const fieldStyle = (id: string) => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === id ? colors.oceanDeep : colors.border}`,
    outline: "none",
    padding: "10px 0",
    fontSize: "13px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    color: colors.prussianBlue,
    transition: "border-color 0.2s ease",
    resize: "none" as const,
  });

  return (
    <section className="p-3 lg:p-6" style={{ backgroundColor: colors.white, position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        .maps-section { font-family: 'DM Sans', sans-serif; }

        .maps-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${colors.oceanDeep};
          font-family: 'DM Sans', sans-serif;
        }

        .maps-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(30px, 3.5vw, 46px);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: ${colors.prussianBlue};
        }

        .maps-heading em {
          font-style: italic;
          font-weight: 300;
          color: ${colors.oceanDeep};
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid ${colors.border};
          text-decoration: none;
          transition: padding-left 0.2s ease;
        }
        .contact-item:first-child { border-top: 1px solid ${colors.border}; }
        .contact-item:hover { padding-left: 4px; }
        .contact-item:hover .contact-icon { color: ${colors.oceanDeep}; }

        .contact-icon {
          color: ${colors.slate};
          flex-shrink: 0;
          margin-top: 1px;
          transition: color 0.2s ease;
        }

        .contact-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${colors.slate};
          margin-bottom: 3px;
          font-family: 'DM Sans', sans-serif;
        }

        .contact-value {
          font-size: 13px;
          font-weight: 400;
          color: ${colors.prussianBlue};
          font-family: 'DM Sans', sans-serif;
        }

        .field-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${colors.slate};
          display: block;
          margin-bottom: 2px;
          font-family: 'DM Sans', sans-serif;
        }

        .submit-btn {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          background: ${colors.prussianBlue};
          color: #fff;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
          width: 100%;
          justify-content: center;
        }
        .submit-btn:hover { background: ${colors.oceanDeep}; }
      `}</style>

      {/* Map — using the specified design */}
      <div
        className="map-container"
        style={{
          height: "50vh",
          minHeight: "350px",
          maxHeight: "600px",
          width: "100%",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251.9509572011887!2d35.276100487511464!3d0.5162032068360302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781012320ccf0f1%3A0x761d376dd7c5f642!2sSirgoi%20Plaza!5e1!3m2!1sen!2ske!4v1780054801592!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Sirgoi Plaza Location"
        />
      </div>

      {/* Content below map */}
      <div
        className="maps-section"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 100px" }}
      >
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <span className="maps-eyebrow" style={{ display: "block", marginBottom: "16px" }}>Get In Touch</span>
          <h2 className="maps-heading">
            We'd Love to <em>Hear From You.</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "80px",
          alignItems: "start",
        }}>

          {/* Left — form */}
          <div>
            {submitted ? (
              <div style={{
                padding: "40px 32px",
                border: `1px solid ${colors.border}`,
                textAlign: "center",
              }}>
                <div style={{
                  width: "40px", height: "40px",
                  border: `1.5px solid ${colors.oceanDeep}`,
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                  color: colors.oceanDeep,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: colors.slate, lineHeight: 1.7 }}>
                  Thank you — we've received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <label className="field-label" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={fieldStyle("name")}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={fieldStyle("email")}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={fieldStyle("message")}
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Checkbox */}
                <label style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: colors.slate,
                  userSelect: "none",
                }}>
                  <div style={{
                    width: "14px", height: "14px", flexShrink: 0,
                    border: `1px solid ${formData.copyToSelf ? colors.prussianBlue : colors.border}`,
                    background: formData.copyToSelf ? colors.prussianBlue : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s ease",
                  }}>
                    {formData.copyToSelf && (
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    id="copyToSelf"
                    checked={formData.copyToSelf}
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                  Send me a copy of this message
                </label>

                <button type="submit" className="submit-btn">
                  Send Message
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right — contact info */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: 1.75,
              color: colors.slate,
              marginBottom: "36px",
              maxWidth: "360px",
            }}>
              Our team is available Monday through Friday. We aim to respond to all enquiries within one business day.
            </p>

            <div>
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="contact-item"
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office hours */}
            <div style={{
              marginTop: "36px",
              padding: "20px 24px",
              background: colors.mist,
              border: `1px solid ${colors.border}`,
            }}>
              <div style={{
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: colors.slate,
                marginBottom: "12px",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Office Hours
              </div>
              {[
                { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
                { day: "Saturday", time: "9:00 AM – 1:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((row, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: i < 2 ? "8px" : 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  <span style={{ fontSize: "12px", color: colors.prussianBlue }}>{row.day}</span>
                  <span style={{ fontSize: "12px", color: colors.slate }}>{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}