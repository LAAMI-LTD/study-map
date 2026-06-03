"use client";

import { useState, useEffect, useRef } from "react";

const colors = {
  white: "#FFFFFF",
  prussianBlue: "#002856",
  oceanDeep: "#0A63B3",
  ink: "#0D1B2A",
  mist: "#F0F3F7",
  border: "#DDE3EC",
  slate: "#8A96A8",
};

const advantages = [
  {
    number: "01",
    title: "Trusted Student Guidance",
    desc: "Accurate and reliable information to help students make informed academic and career decisions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Genuine Student Screening",
    desc: "We carefully assess applicants to ensure they meet Genuine Student and financial eligibility requirements.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "End-to-End Support",
    desc: "From counselling to visa guidance and pre-departure preparation, we support students at every stage.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "East Africa Focused",
    desc: "Our strong regional understanding allows us to effectively support students across East Africa.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Partner Institution Network",
    desc: "We collaborate with reputable colleges and institutions in Australia to provide quality study options.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

// One card is dark (featured), rest are light — alternating for visual interest
const cardVariants = ["light", "light", "dark", "light", "light"] as const;

export default function WhyChooseUs() {
  const [visible, setVisible] = useState<boolean[]>(new Array(advantages.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 90);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(ref);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section style={{ backgroundColor: colors.mist, position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        .wcu2-section { font-family: 'DM Sans', sans-serif; }

        .wcu2-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${colors.oceanDeep};
        }

        .wcu2-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(34px, 4.5vw, 56px);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: ${colors.prussianBlue};
        }

        .wcu2-heading em {
          font-style: italic;
          font-weight: 300;
          color: ${colors.oceanDeep};
        }

        /* Light card */
        .wcu2-card-light {
          background: ${colors.white};
          border: 1px solid ${colors.border};
          padding: 32px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 12px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .wcu2-card-light.in {
          opacity: 1;
          transform: translateY(0);
        }
        .wcu2-card-light:hover {
          border-color: ${colors.oceanDeep};
          box-shadow: 0 8px 32px rgba(10,99,179,0.08);
        }
        .wcu2-card-light:hover .wcu2-icon { color: ${colors.oceanDeep}; }

        /* Dark (featured) card */
        .wcu2-card-dark {
          background: ${colors.prussianBlue};
          border: 1px solid ${colors.prussianBlue};
          padding: 32px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 12px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .wcu2-card-dark.in {
          opacity: 1;
          transform: translateY(0);
        }
        .wcu2-card-dark:hover { box-shadow: 0 8px 32px rgba(0,40,86,0.18); }
        .wcu2-card-dark:hover .wcu2-icon-dark { color: #fff; }

        .wcu2-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: ${colors.border};
          display: block;
        }
        .wcu2-num-dark {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.2);
          display: block;
        }

        .wcu2-icon {
          color: ${colors.prussianBlue};
          opacity: 0.35;
          transition: color 0.2s ease, opacity 0.2s ease;
        }
        .wcu2-card-light:hover .wcu2-icon { opacity: 1; }

        .wcu2-icon-dark {
          color: rgba(255,255,255,0.45);
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        .wcu2-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.01em;
          color: ${colors.prussianBlue};
          line-height: 1.3;
        }
        .wcu2-title-dark {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.01em;
          color: ${colors.white};
          line-height: 1.3;
        }

        .wcu2-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
          line-height: 1.65;
          color: ${colors.slate};
          flex: 1;
        }
        .wcu2-desc-dark {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
          line-height: 1.65;
          color: rgba(255,255,255,0.45);
          flex: 1;
        }

        /* Decorative large number watermark */
        .wcu2-bg-num {
          position: absolute;
          bottom: -8px;
          right: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 80px;
          line-height: 1;
          color: ${colors.border};
          opacity: 0.5;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }
        .wcu2-bg-num-dark {
          position: absolute;
          bottom: -8px;
          right: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 80px;
          line-height: 1;
          color: rgba(255,255,255,0.05);
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }
      `}</style>

      <div className="wcu2-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 24px" }}>

        {/* Header */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          marginBottom: "64px",
          alignItems: "flex-start",
        }}
          className="lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="wcu2-eyebrow" style={{ display: "block", marginBottom: "16px" }}>Why Choose Us</span>
            <h2 className="wcu2-heading">
              The Study Map<br />
              <em>Difference.</em>
            </h2>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: 1.75,
            color: colors.slate,
            maxWidth: "340px",
          }}>
            We combine local expertise with global opportunities to help students across East Africa succeed in their international education journey.
          </p>
        </div>

        {/* Cards grid — flush borders */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1px",
          background: colors.border,
          border: `1px solid ${colors.border}`,
        }}>
          {advantages.map((item, i) => {
            const isDark = cardVariants[i] === "dark";
            return (
              <div
                key={i}
                ref={(el) => { refs.current[i] = el; }}
                className={isDark
                  ? `wcu2-card-dark${visible[i] ? " in" : ""}`
                  : `wcu2-card-light${visible[i] ? " in" : ""}`
                }
                style={{ background: isDark ? colors.prussianBlue : colors.white }}
              >
                {/* Small index */}
                <span className={isDark ? "wcu2-num-dark" : "wcu2-num"}>{item.number}</span>

                {/* Icon */}
                <span className={isDark ? "wcu2-icon-dark" : "wcu2-icon"}>
                  {item.icon}
                </span>

                {/* Title */}
                <div className={isDark ? "wcu2-title-dark" : "wcu2-title"}>
                  {item.title}
                </div>

                {/* Description */}
                <p className={isDark ? "wcu2-desc-dark" : "wcu2-desc"}>
                  {item.desc}
                </p>

                {/* Watermark number */}
                <span className={isDark ? "wcu2-bg-num-dark" : "wcu2-bg-num"} aria-hidden>
                  {item.number}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}