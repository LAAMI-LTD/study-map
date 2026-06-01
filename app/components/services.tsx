"use client";

import Link from "next/link";

export default function Services() {
  const colors = {
    white: "#FFFFFF",
    prussianBlue: "#002856",
    oceanDeep: "#0A63B3",
    ink: "#0D1B2A",
    mist: "#F0F3F7",
    border: "#DDE3EC",
    slate: "#8A96A8",
  };

  const services = [
    {
      number: "01",
      title: "Student Counselling",
      description:
        "We help students identify suitable courses, institutions, and career pathways aligned with their goals and academic background.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Visa Guidance",
      description:
        "Expert support on student visa requirements, documentation preparation, and compliance throughout the application process.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 20H19V18H5V20ZM5 4H19V2H5V4ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Applications Support",
      description:
        "Assistance with preparing and submitting polished, professional applications to partner institutions worldwide.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Pre-Departure Prep",
      description:
        "Guidance on travel, accommodation, cultural adjustment, and everything needed before you arrive at your destination.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.41 4 20 7.59 20 12C20 13.39 19.64 14.68 19.05 15.85L15.15 11.95L12 15.1L8.85 11.95L4.95 15.85C4.36 14.68 4 13.39 4 12C4 7.59 7.59 4 12 4Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Career Pathway Planning",
      description:
        "Strategic long-term guidance on career outcomes, graduate employment trends, and post-study opportunities.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 13H8V21H3V13ZM10 8H15V21H10V8ZM17 3H22V21H17V3Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "English Test Preparation",
      description:
        "Resources and referrals for IELTS and PTE preparation to help you meet university language entry requirements.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 6H20V4H4V6ZM4 10H20V8H4V10ZM4 14H20V12H4V14ZM4 18H14V16H4V18Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "07",
      title: "Scholarship Assistance",
      description:
        "Support in identifying scholarship opportunities and preparing strong applications to maximize funding prospects.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L2 8L12 13L20 9V15H22V8L12 3ZM6 12V16C6 18.21 8.69 20 12 20C15.31 20 18 18.21 18 16V12L12 15L6 12Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "08",
      title: "Accommodation Support",
      description:
        "Assistance in securing suitable student accommodation, including university residences and private housing options.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L3 10V21H10V15H14V21H21V10L12 3ZM19 19H16V13H8V19H5V11L12 5.5L19 11V19Z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.white,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;600&display=swap');

        .svc-section { font-family: 'DM Sans', sans-serif; }

        .svc-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${colors.oceanDeep};
        }

        .svc-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: ${colors.prussianBlue};
        }

        .svc-subheading {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.7;
          color: ${colors.slate};
          // max-width: 380px;
        }

        .svc-card {
          padding: 32px;
          border: 1px solid ${colors.border};
          position: relative;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background: ${colors.white};
          cursor: default;
        }

        .svc-card:hover {
          border-color: ${colors.oceanDeep};
          box-shadow: 0 8px 32px rgba(10,99,179,0.08);
        }

        .svc-card:hover .svc-card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        .svc-card:hover .svc-card-icon {
          color: ${colors.oceanDeep};
        }

        .svc-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 13px;
          letter-spacing: 0.06em;
          color: ${colors.border};
          margin-bottom: 20px;
          display: block;
        }

        .svc-card-icon {
          color: ${colors.prussianBlue};
          opacity: 0.4;
          transition: color 0.2s ease, opacity 0.2s ease;
          margin-bottom: 16px;
        }

        .svc-card:hover .svc-card-icon {
          opacity: 1;
        }

        .svc-card-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.01em;
          color: ${colors.prussianBlue};
          margin-bottom: 10px;
        }

        .svc-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 13px;
          line-height: 1.65;
          color: ${colors.slate};
        }

        .svc-card-arrow {
          position: absolute;
          bottom: 28px;
          right: 28px;
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          color: ${colors.oceanDeep};
        }

        .svc-cta {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 12px;
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
          cursor: pointer;
        }
        .svc-cta:hover { background: ${colors.oceanDeep}; }

        /* Decorative rule */
        .svc-rule {
          width: 1px;
          background: ${colors.border};
          position: absolute;
          top: 0; bottom: 0;
          left: 50%;
          display: none;
        }

        @media (min-width: 1024px) {
          .svc-rule { display: block; }
        }
      `}</style>

      <div className="svc-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 24px" }}>

        {/* Header row */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          marginBottom: "72px",
        }} className="lg:flex-row lg:justify-between">
          <div>
            <span className="svc-eyebrow" style={{ display: "block", marginBottom: "16px" }}>
              What We Do
            </span>
            <h2 className="svc-heading ">
              Comprehensive<br />
              <span style={{ fontStyle: "italic", fontWeight: 300, color: colors.oceanDeep }}>Support</span>
              {" "}at Every Step
            </h2>
          </div>
          <div>
            <p className="svc-subheading">
              From your first consultation through to arrival and beyond — we guide students at each stage of the journey to global education.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1px",
          background: colors.border,
          border: `1px solid ${colors.border}`,
        }}>
          {services.map((service, i) => (
            <div key={i} className="svc-card" style={{ background: colors.white }}>
              <span className="svc-num">{service.number}</span>
              <div className="svc-card-icon">{service.icon}</div>
              <div className="svc-card-title">{service.title}</div>
              <p className="svc-card-desc">{service.description}</p>
              <div className="svc-card-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "56px", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <Link href="/services" className="svc-cta">
            View All Services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/contact" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: colors.slate,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            transition: "color 0.2s ease",
          }}
            onMouseEnter={e => e.currentTarget.style.color = colors.prussianBlue}
            onMouseLeave={e => e.currentTarget.style.color = colors.slate}
          >
            Book a Consultation
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}