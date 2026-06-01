"use client";

import Link from "next/link";

export default function WhyChooseUs() {
  const colors = {
    white: "#FFFFFF",
    prussianBlue: "#002856",
    oceanDeep: "#0A63B3",
    ink: "#0D1B2A",
    mist: "#F0F3F7",
    border: "#DDE3EC",
    slate: "#8A96A8",
  };

  const features = [
    {
      number: "01",
      title: "Trusted Student Guidance",
      description:
        "Accurate, reliable information to help students make informed academic and career decisions — with no pressure, just clarity.",
    },
    {
      number: "02",
      title: "End-to-End Support",
      description:
        "From your first counselling session through visa guidance and pre-departure preparation, we're with you at every step.",
    },
    {
      number: "03",
      title: "Genuine Student Screening",
      description:
        "We carefully screen applicants for Genuine Student eligibility, ensuring your application is strong and compliant from the start.",
    },
  ];

  return (
    <section style={{ backgroundColor: colors.mist, position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        .wcu-section { font-family: 'DM Sans', sans-serif; }

        .wcu-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${colors.oceanDeep};
        }

        .wcu-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(34px, 4.5vw, 56px);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: ${colors.prussianBlue};
        }

        .wcu-heading em {
          font-style: italic;
          font-weight: 300;
          color: ${colors.oceanDeep};
        }

        .wcu-body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 14px;
          line-height: 1.75;
          color: ${colors.slate};
        }

        .wcu-feature-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: ${colors.border};
        }

        .wcu-feature-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.01em;
          color: ${colors.prussianBlue};
          margin: 6px 0 6px;
        }

        .wcu-feature-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
          line-height: 1.65;
          color: ${colors.slate};
        }

        .wcu-feature {
          padding: 24px 0;
          border-bottom: 1px solid ${colors.border};
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: padding-left 0.2s ease;
        }
        .wcu-feature:first-child { border-top: 1px solid ${colors.border}; }
        .wcu-feature:hover { padding-left: 6px; }
        .wcu-feature:hover .wcu-dot { background: ${colors.oceanDeep}; transform: scale(1.3); }

        .wcu-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${colors.border};
          flex-shrink: 0;
          margin-top: 6px;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .wcu-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${colors.prussianBlue};
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s ease;
        }
        .wcu-link:hover { color: ${colors.oceanDeep}; }

        .wcu-img-frame {
          position: relative;
        }
        .wcu-img-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid ${colors.border};
          transform: translate(10px, 10px);
          z-index: 0;
        }

        .wcu-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 1;
          color: ${colors.prussianBlue};
        }
        .wcu-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${colors.slate};
          margin-top: 4px;
        }
      `}</style>

      <div
        className="wcu-section"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 24px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "64px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left — image */}
          <div className="wcu-img-frame" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ position: "relative", zIndex: 1, background: colors.white, padding: "8px", border: `1px solid ${colors.border}` }}>
              <img
                src="/services1.jpg"
                alt="Study Map Consultants illustration"
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="eager"
              />
            </div>

            {/* Floating stat cards */}
            <div style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              background: colors.white,
              border: `1px solid ${colors.border}`,
              padding: "16px 20px",
              zIndex: 2,
              boxShadow: "0 4px 24px rgba(0,40,86,0.08)",
            }}>
              <div className="wcu-stat-num">500+</div>
              <div className="wcu-stat-label">Students Placed</div>
            </div>

            <div style={{
              position: "absolute",
              top: "-16px",
              left: "-16px",
              background: colors.prussianBlue,
              padding: "14px 18px",
              zIndex: 2,
            }}>
              <div className="wcu-stat-num" style={{ color: colors.white }}>10+</div>
              <div className="wcu-stat-label" style={{ color: "rgba(255,255,255,0.5)" }}>Years Experience</div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <span className="wcu-eyebrow" style={{ display: "block", marginBottom: "20px" }}>
              Why Choose Us
            </span>

            <h2 className="wcu-heading" style={{ marginBottom: "20px" }}>
              Your Success,<br />
              <em>Our Mission.</em>
            </h2>

            <p className="wcu-body" style={{ marginBottom: "40px", maxWidth: "420px" }}>
              We provide accurate and reliable information to help students make informed academic and career decisions. Our team screens applicants for Genuine Student eligibility and supports every stage from counselling to pre-departure preparation.
            </p>

            {/* Features */}
            <div style={{ marginBottom: "36px" }}>
              {features.map((f, i) => (
                <div key={i} className="wcu-feature">
                  <div className="wcu-dot" />
                  <div style={{ flex: 1 }}>
                    <div className="wcu-feature-num">{f.number}</div>
                    <div className="wcu-feature-title">{f.title}</div>
                    <p className="wcu-feature-desc">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="wcu-link">
              Learn more about our approach
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}