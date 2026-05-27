"use client";

import { useEffect, useRef, useState } from "react";
import { colors } from "./colors";

const directors = [
  {
    name: "John Mwangi",
    title: "Co-Founder & Director",
    location: "Nairobi, Kenya",
    description:
      "With over 15 years of experience in international education, John leads our strategic partnerships with Australian institutions. His passion for helping East African students access world-class education drives our mission forward. John has personally counseled hundreds of students and holds certifications in education consulting from leading industry bodies.",
    image: "/potrait1.jpg",
    accent: colors.oceanDeep,
    tag: "01",
    socials: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Sarah Okello",
    title: "Co-Founder & Director",
    location: "Kampala, Uganda",
    description:
      "Sarah brings extensive expertise in student visa processing and compliance. Her dedication to ensuring every student meets Genuine Student requirements has resulted in exceptional success rates. Sarah regularly conducts workshops and training sessions for aspiring international students across East Africa.",
    image: "/potrait3.jpg",
    accent: colors.dustyDenim,
    tag: "02",
    socials: { linkedin: "#", twitter: "#", email: "#" },
  },
];

export default function DirectorsMessage() {
  const [visible, setVisible] = useState<boolean[]>(
    new Array(directors.length).fill(false)
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, i) => {
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
            }, i * 150);
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .dm-root * { box-sizing: border-box; }
        .dm-root {
          padding: 5rem 1.5rem;
          background: ${colors.white};
          margin-bottom: 5rem;
        }
        .dm-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .dm-header {
          text-align: center;
          margin-bottom: 4.5rem;
        }
        .dm-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 1rem;
          border-radius: 999px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: ${colors.oceanDeep};
          color: ${colors.white};
          margin-bottom: 1.2rem;
        }
        .dm-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${colors.white};
          animation: dm-pulse 1.8s ease-in-out infinite;
        }
        @keyframes dm-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.7); }
        }
        .dm-heading {
          font-size: clamp(2rem, 4.5vw, 3.3rem);
          font-weight: 800;
          color: ${colors.prussianBlue};
          line-height: 1.1;
          margin: 0 0 1rem;
        }
        .dm-heading em {
          font-style: normal;
          color: ${colors.oceanDeep};
          position: relative;
        }
        .dm-heading em::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 2px;
          height: 3px;
          background: ${colors.oceanDeep};
          border-radius: 2px;
          transform-origin: left;
          animation: dm-lineGrow 0.6s 0.5s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes dm-lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .dm-sub {
          font-size: 1.05rem;
          color: ${colors.prussianBlue};
          opacity: 0.6;
          max-width: 34rem;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Director card ── */
        .dm-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.6s cubic-bezier(.22,1,.36,1),
            transform 0.6s cubic-bezier(.22,1,.36,1),
            box-shadow 0.3s ease;
          box-shadow: 0 4px 24px rgba(0,40,86,0.08);
        }
        .dm-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .dm-card:hover {
          box-shadow: 0 20px 60px rgba(0,40,86,0.14);
        }
        .dm-card.reverse {
          direction: rtl;
        }
        .dm-card.reverse > * {
          direction: ltr;
        }

        @media (max-width: 720px) {
          .dm-card, .dm-card.reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          .dm-card.reverse > * { direction: ltr; }
          .dm-img-col { min-height: 320px; }
        }

        /* ── Image column ── */
        .dm-img-col {
          position: relative;
          overflow: hidden;
          min-height: 460px;
        }
        .dm-img-col img {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s cubic-bezier(.22,1,.36,1);
          display: block;
        }
        .dm-card:hover .dm-img-col img {
          transform: scale(1.04);
        }

        /* Tag badge over image */
        .dm-img-tag {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${colors.white};
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          z-index: 2;
        }

        /* Bottom name strip over image */
        .dm-img-strip {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 1rem 1.5rem;
          z-index: 2;
        }
        .dm-img-strip-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 0.1rem;
          line-height: 1.1;
        }
        .dm-img-strip-title {
          font-size: 0.78rem;
          color: ${colors.white};
          opacity: 0.72;
          margin: 0;
          letter-spacing: 0.03em;
        }

        /* ── Content column ── */
        .dm-content-col {
          background: ${colors.paleSlate};
          padding: 2.75rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        /* Accent bar on top of content */
        .dm-content-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          border-radius: 0;
        }

        /* Location chip */
        .dm-location {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: ${colors.prussianBlue};
          opacity: 0.5;
          margin-bottom: 1.25rem;
        }
        .dm-location svg {
          width: 13px; height: 13px;
          flex-shrink: 0;
        }

        /* Quote mark decoration */
        .dm-quote-mark {
          font-size: 5rem;
          line-height: 0.6;
          color: ${colors.prussianBlue};
          opacity: 0.07;
          margin-bottom: 0.5rem;
          user-select: none;
        }

        /* Description */
        .dm-desc {
          font-size: 0.9rem;
          line-height: 1.8;
          color: ${colors.prussianBlue};
          opacity: 0.72;
          margin: 0 0 2rem;
          flex-grow: 1;
        }

        /* Divider */
        .dm-rule {
          height: 1px;
          background: ${colors.prussianBlue};
          opacity: 0.1;
          margin-bottom: 1.75rem;
        }

        /* Bottom row: CTA + socials */
        .dm-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* CTA button */
        .dm-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.35rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${colors.white};
          border: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          text-decoration: none;
        }
        .dm-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(10,99,179,0.3);
        }
        .dm-cta svg {
          width: 14px; height: 14px;
          stroke: ${colors.white};
          transition: transform 0.25s ease;
        }
        .dm-cta:hover svg {
          transform: translateX(3px);
        }

        /* Socials */
        .dm-socials {
          display: flex;
          gap: 0.6rem;
        }
        .dm-social-btn {
          width: 34px; height: 34px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid ${colors.prussianBlue}20;
          background: ${colors.white};
          color: ${colors.prussianBlue};
          opacity: 0.55;
          transition: opacity 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          text-decoration: none;
        }
        .dm-social-btn:hover {
          opacity: 1;
          transform: translateY(-3px);
          border-color: currentColor;
        }
        .dm-social-btn svg {
          width: 14px; height: 14px;
          fill: currentColor;
        }
      `}</style>

      <div className="dm-root">
        <div className="dm-inner">

          {/* Header */}
          <div className="dm-header">
            <span className="dm-pill">
              <span className="dm-pill-dot" />
              Leadership
            </span>
            <h2 className="dm-heading">
              Message from Our <em>Directors</em>
            </h2>
            <p className="dm-sub">
              Meet the passionate leaders behind Study Map Consultants
            </p>
          </div>

          {/* Cards */}
          {directors.map((director, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`dm-card${visible[index] ? " visible" : ""}${index % 2 !== 0 ? " reverse" : ""}`}
            >
              {/* Image */}
              <div className="dm-img-col">
                <img src={director.image} alt={director.name} />

                {/* Tag */}
                <span
                  className="dm-img-tag"
                  style={{ background: director.accent }}
                >
                  {director.tag}
                </span>

                {/* Bottom strip with solid overlay */}
                <div
                  className="dm-img-strip"
                  style={{ background: director.accent }}
                >
                  <p className="dm-img-strip-name">{director.name}</p>
                  <p className="dm-img-strip-title">{director.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="dm-content-col">
                <div
                  className="dm-content-bar"
                  style={{ background: director.accent }}
                />

                {/* Location */}
                <span className="dm-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 14-8 14S4 15.25 4 10a8 8 0 0 1 8-8z" />
                  </svg>
                  {director.location}
                </span>

                {/* Decorative quote */}
                <div className="dm-quote-mark">"</div>

                <p className="dm-desc">{director.description}</p>

                <div className="dm-rule" />

                <div className="dm-bottom">
                  <a
                    href={director.socials.email}
                    className="dm-cta"
                    style={{ background: director.accent }}
                  >
                    Get In Touch
                    <svg viewBox="0 0 14 14" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="2" y1="7" x2="11" y2="7" />
                      <polyline points="8,4 11,7 8,10" />
                    </svg>
                  </a>

                  <div className="dm-socials">
                    {/* LinkedIn */}
                    <a
                      href={director.socials.linkedin}
                      className="dm-social-btn"
                      style={{ color: director.accent }}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    {/* Twitter / X */}
                    <a
                      href={director.socials.twitter}
                      className="dm-social-btn"
                      style={{ color: director.accent }}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                    >
                      <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    {/* Email */}
                    <a
                      href={`mailto:${director.socials.email}`}
                      className="dm-social-btn"
                      style={{ color: director.accent }}
                      title="Email"
                    >
                      <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}