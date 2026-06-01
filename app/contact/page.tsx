"use client";

import Link from "next/link";
import MapsSection from "../components/map";

export default function Contact() {
  const colors = {
    white: "#FFFFFF",
    prussianBlue: "#002856",
    oceanDeep: "#0A63B3",
    ink: "#0D1B2A",
    mist: "#F0F3F7",
    border: "#DDE3EC",
    slate: "#8A96A8",
  };

  const contactDetails = [
    {
      label: "Address",
      value: "Sirgoi Plaza, Oginga Odinga Street\nEldoret, Kenya",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+254 724 801 455",
      href: "tel:+254724801455",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.054-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: "studymapconsultants@gmail.com",
      href: "mailto:studymapconsultants@gmail.com",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const partnerServices = [
    "Targeted student recruitment",
    "Genuine Student screening",
    "Financial eligibility assessment",
    "Student counselling support",
    "Ethical recruitment practices",
  ];

  const faqs = [
    {
      q: "Which countries do you support?",
      a: "We primarily support students from East Africa seeking education opportunities in Australia.",
    },
    {
      q: "Do you help with student visas?",
      a: "Yes. We provide guidance on student visa application processes and required documentation.",
    },
    {
      q: "Can you help me choose a course?",
      a: "Absolutely. We provide personalised counselling based on your academic background and career goals.",
    },
    {
      q: "Do you work with Australian institutions?",
      a: "Yes. We collaborate with partner colleges and institutions across Australia.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.white,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        .contact-page { font-family: 'DM Sans', sans-serif; }

        .contact-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${colors.oceanDeep};
          font-family: 'DM Sans', sans-serif;
        }

        .contact-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: ${colors.prussianBlue};
        }

        .contact-h1 em {
          font-style: italic;
          font-weight: 300;
          color: ${colors.oceanDeep};
        }

        .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(22px, 2.5vw, 30px);
          letter-spacing: -0.02em;
          color: ${colors.prussianBlue};
          line-height: 1.1;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid ${colors.border};
        }
        .info-row:first-child { border-top: 1px solid ${colors.border}; }

        .info-icon { color: ${colors.slate}; flex-shrink: 0; margin-top: 1px; }
        .info-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${colors.slate};
          margin-bottom: 2px;
          font-family: 'DM Sans', sans-serif;
        }
        .info-value {
          font-size: 13px;
          color: ${colors.prussianBlue};
          font-family: 'DM Sans', sans-serif;
          line-height: 1.5;
          text-decoration: none;
          white-space: pre-line;
        }
        a.info-value:hover { color: ${colors.oceanDeep}; }

        .partner-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid ${colors.border};
          font-size: 13px;
          color: ${colors.prussianBlue};
          font-family: 'DM Sans', sans-serif;
        }
        .partner-item:last-child { border-bottom: none; }

        .faq-item {
          padding: 20px 0;
          border-bottom: 1px solid ${colors.border};
        }
        .faq-item:last-child { border-bottom: none; }
        .faq-q {
          font-size: 13px;
          font-weight: 600;
          color: ${colors.prussianBlue};
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 6px;
        }
        .faq-a {
          font-size: 13px;
          font-weight: 300;
          color: ${colors.slate};
          font-family: 'DM Sans', sans-serif;
          line-height: 1.65;
        }

        .cta-primary {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: ${colors.prussianBlue};
          color: #fff;
          text-decoration: none;
          transition: background 0.2s ease;
          border: none;
        }
        .cta-primary:hover { background: ${colors.oceanDeep}; }

        .cta-ghost {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border: 1px solid ${colors.border};
          color: ${colors.prussianBlue};
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .cta-ghost:hover { border-color: ${colors.prussianBlue}; }

        /* Decorative vertical index line */
        .index-line {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 1px;
          background: ${colors.border};
        }
      `}</style>

      <div className="contact-page" style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 100px" }}>

        {/* ── Hero header ── */}
        <div style={{ marginBottom: "80px", maxWidth: "720px" }}>
          <span className="contact-eyebrow" style={{ display: "block", marginBottom: "20px" }}>Get In Touch</span>
          <h1 className="contact-h1" style={{ marginBottom: "28px" }}>
            Reach Out<br />
            <em>Today.</em>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: 1.75,
            color: colors.slate,
            maxWidth: "460px",
            paddingLeft: "20px",
            borderLeft: `2px solid ${colors.border}`,
          }}>
            Our team is here to guide you through every step — applications, visa guidance, pre-departure preparation, and everything in between.
          </p>
        </div>

        {/* ── CTA buttons ── */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "80px" }}>
          <Link href="/apply" className="cta-primary">
            Apply Now
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/consultation" className="cta-ghost">
            Schedule Consultation
          </Link>
        </div>

        {/* ── Three-column content grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: colors.border,
          border: `1px solid ${colors.border}`,
          marginBottom: "80px",
        }}>

          {/* Contact info */}
          <div style={{ background: colors.white, padding: "36px 32px" }}>
            <div style={{ marginBottom: "24px" }}>
              <span className="contact-eyebrow" style={{ display: "block", marginBottom: "10px" }}>Contact</span>
              <h2 className="section-heading">Study Map<br />Consultants Ltd</h2>
            </div>
            <div>
              {contactDetails.map((item, i) => (
                <div key={i} className="info-row">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <div className="info-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="info-value">{item.value}</a>
                    ) : (
                      <div className="info-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner support */}
          <div style={{ background: colors.mist, padding: "36px 32px" }}>
            <div style={{ marginBottom: "24px" }}>
              <span className="contact-eyebrow" style={{ display: "block", marginBottom: "10px" }}>For Institutions</span>
              <h2 className="section-heading">Partner<br />Support</h2>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              lineHeight: 1.7,
              color: colors.slate,
              marginBottom: "20px",
            }}>
              We support Australian colleges seeking reliable recruitment support across East Africa with ethical, compliance-focused processes.
            </p>
            <div>
              {partnerServices.map((item, i) => (
                <div key={i} className="partner-item">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "2px", color: colors.oceanDeep }}>
                    <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ background: colors.white, padding: "36px 32px" }}>
            <div style={{ marginBottom: "24px" }}>
              <span className="contact-eyebrow" style={{ display: "block", marginBottom: "10px" }}>Common Questions</span>
              <h2 className="section-heading">FAQ</h2>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer strip ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          paddingTop: "28px",
          borderTop: `1px solid ${colors.border}`,
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "12px",
            color: colors.slate,
          }}>
            Empowering East African students through global education opportunities.
          </p>
          <Link href="/" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.slate,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            transition: "color 0.2s ease",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = colors.prussianBlue)}
            onMouseLeave={e => (e.currentTarget.style.color = colors.slate)}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      <MapsSection />
    </section>
  );
}