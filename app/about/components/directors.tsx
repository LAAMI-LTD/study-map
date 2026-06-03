"use client";

import { useEffect, useRef, useState } from "react";

const colors = {
  white: "#FFFFFF",
  prussianBlue: "#002856",
  oceanDeep: "#0A63B3",
  ink: "#0D1B2A",
  mist: "#F0F3F7",
  border: "#DDE3EC",
  slate: "#8A96A8",
};

const directors = [
  {
    name: "John Mwangi",
    title: "Co-Founder & Director",
    location: "Nairobi, Kenya",
    description:
      "With over 15 years of experience in international education, John leads our strategic partnerships with Australian institutions. His passion for helping East African students access world-class education drives our mission forward. John has personally counseled hundreds of students and holds certifications in education consulting from leading industry bodies.",
    image: "/potrait1.jpg",
    tag: "01",
    socials: { linkedin: "#", twitter: "#", email: "john@studymap.com" },
  },
  {
    name: "Sarah Okello",
    title: "Co-Founder & Director",
    location: "Kampala, Uganda",
    description:
      "Sarah brings extensive expertise in student visa processing and compliance. Her dedication to ensuring every student meets Genuine Student requirements has resulted in exceptional success rates. Sarah regularly conducts workshops and training sessions for aspiring international students across East Africa.",
    image: "/potrait3.jpg",
    tag: "02",
    socials: { linkedin: "#", twitter: "#", email: "sarah@studymap.com" },
  },
];

export default function DirectorsMessage() {
  const [visible, setVisible] = useState<boolean[]>(new Array(directors.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible((p) => { const n = [...p]; n[i] = true; return n; }), i * 140);
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
    <section style={{ backgroundColor: colors.white }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        .dm2-root { font-family: 'DM Sans', sans-serif; }

        .dm2-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${colors.oceanDeep};
          font-family: 'DM Sans', sans-serif;
        }

        .dm2-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(34px, 4.5vw, 54px);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: ${colors.prussianBlue};
        }
        .dm2-heading em {
          font-style: italic;
          font-weight: 300;
          color: ${colors.oceanDeep};
        }

        /* Card */
        .dm2-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid ${colors.border};
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.2s ease;
        }
        .dm2-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .dm2-card:hover {
          box-shadow: 0 12px 40px rgba(0,40,86,0.09);
        }
        .dm2-card.flip {
          direction: rtl;
        }
        .dm2-card.flip > * { direction: ltr; }

        @media (max-width: 720px) {
          .dm2-card, .dm2-card.flip {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          .dm2-card.flip > * { direction: ltr; }
          .dm2-img-col { min-height: 300px; }
        }

        /* Image */
        .dm2-img-col {
          position: relative;
          overflow: hidden;
          min-height: 480px;
          background: ${colors.ink};
        }
        .dm2-img-col img {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
          opacity: 0.88;
          transition: transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
        }
        .dm2-card:hover .dm2-img-col img {
          transform: scale(1.035);
          opacity: 0.78;
        }

        /* Image tag */
        .dm2-img-num {
          position: absolute;
          top: 20px;
          left: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
          z-index: 2;
        }

        /* Bottom name strip */
        .dm2-img-footer {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 24px;
          background: rgba(0,20,50,0.55);
          z-index: 2;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .dm2-img-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 22px;
          color: ${colors.white};
          letter-spacing: -0.01em;
          display: block;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .dm2-img-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          display: block;
        }

        /* Content col */
        .dm2-content {
          background: ${colors.mist};
          padding: 40px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          border-left: 1px solid ${colors.border};
        }
        .dm2-card.flip .dm2-content {
          border-left: none;
          border-right: 1px solid ${colors.border};
        }

        /* Location */
        .dm2-location {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${colors.slate};
          margin-bottom: 20px;
          font-family: 'DM Sans', sans-serif;
        }

        /* Open quote */
        .dm2-quote-glyph {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          line-height: 0.7;
          color: ${colors.border};
          user-select: none;
          margin-bottom: 12px;
          display: block;
        }

        /* Description */
        .dm2-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
          line-height: 1.8;
          color: ${colors.slate};
          flex: 1;
          margin-bottom: 32px;
        }

        /* Divider */
        .dm2-rule { height: 1px; background: ${colors.border}; margin-bottom: 24px; }

        /* Bottom row */
        .dm2-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* CTA */
        .dm2-cta {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: ${colors.prussianBlue};
          color: ${colors.white};
          text-decoration: none;
          transition: background 0.2s ease;
          border: none;
          cursor: pointer;
        }
        .dm2-cta:hover { background: ${colors.oceanDeep}; }

        /* Socials */
        .dm2-socials { display: flex; gap: 8px; }
        .dm2-social {
          width: 32px; height: 32px;
          border: 1px solid ${colors.border};
          display: flex; align-items: center; justify-content: center;
          color: ${colors.slate};
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .dm2-social:hover {
          border-color: ${colors.prussianBlue};
          color: ${colors.prussianBlue};
        }
        .dm2-social svg { width: 13px; height: 13px; fill: currentColor; }
      `}</style>

      <div className="dm2-root" style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <span className="dm2-eyebrow" style={{ display: "block", marginBottom: "16px" }}>Leadership</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <h2 className="dm2-heading">
              Message from<br />
              <em>Our Directors.</em>
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              lineHeight: 1.75,
              color: colors.slate,
              maxWidth: "300px",
            }}>
              Meet the passionate leaders behind Study Map Consultants and the vision driving our work.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: colors.border }}>
          {directors.map((d, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              className={`dm2-card${visible[i] ? " in" : ""}${i % 2 !== 0 ? " flip" : ""}`}
            >
              {/* Image */}
              <div className="dm2-img-col">
                <img src={d.image} alt={d.name} />
                <span className="dm2-img-num">{d.tag}</span>
                <div className="dm2-img-footer">
                  <span className="dm2-img-name">{d.name}</span>
                  <span className="dm2-img-role">{d.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="dm2-content">
                <span className="dm2-location">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 14-8 14S4 15.25 4 10a8 8 0 0 1 8-8z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {d.location}
                </span>

                <span className="dm2-quote-glyph" aria-hidden>"</span>

                <p className="dm2-desc">{d.description}</p>

                <div className="dm2-rule" />

                <div className="dm2-bottom">
                  <a href={`mailto:${d.socials.email}`} className="dm2-cta">
                    Get In Touch
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  <div className="dm2-socials">
                    <a href={d.socials.linkedin} className="dm2-social" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <a href={d.socials.twitter} className="dm2-social" target="_blank" rel="noopener noreferrer" title="X / Twitter">
                      <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a href={`mailto:${d.socials.email}`} className="dm2-social" title="Email">
                      <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}