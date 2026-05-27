import { colors } from "./colors";
import { useEffect, useRef, useState } from "react";

export default function MissionValues() {
    const [visible, setVisible] = useState<boolean[]>([false, false, false]);
    const [bottomVisible, setBottomVisible] = useState(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const bottomRef = useRef<HTMLDivElement | null>(null);

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
                        }, i * 130);
                        obs.disconnect();
                    }
                },
                { threshold: 0.15 }
            );
            obs.observe(ref);
            observers.push(obs);
        });

        if (bottomRef.current) {
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setBottomVisible(true);
                        obs.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            obs.observe(bottomRef.current);
            observers.push(obs);
        }

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const values = [
        {
            title: "Integrity First",
            description:
                "We maintain the highest standards of honesty and ethical behavior in all our dealings with students, parents, and partner institutions. Every advice is given with your best interests at heart.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            accent: colors.oceanDeep,
            number: "01",
        },
        {
            title: "Student Success",
            description:
                "Your success is our mission. We provide end-to-end support from university selection to visa application, ensuring you're fully prepared for your educational journey abroad.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            ),
            accent: colors.dustyDenim,
            number: "02",
        },
        {
            title: "Global Excellence",
            description:
                "We connect East African students with world-class Australian institutions, ensuring you receive an internationally recognized education that opens doors globally.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            accent: colors.prussianBlue,
            number: "03",
        },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .mv-root * { box-sizing: border-box; }

        .mv-root {
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 5rem;
        }

        /* ── Header ── */
        .mv-header {
          text-align: center;
          margin-bottom: 4rem;
        }


        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        @keyframes pillDrop {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mv-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: ${colors.prussianBlue};
          line-height: 1.1;
          margin: 0 0 1rem;
          animation: fadeUp 0.7s 0.1s cubic-bezier(.22,1,.36,1) both;
        }

        .mv-heading em {
          font-style: normal;
          color: ${colors.oceanDeep};
          position: relative;
        }

        .mv-heading em::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          bottom: 2px;
          height: 3px;
          background: ${colors.oceanDeep};
          border-radius: 2px;
          transform-origin: left;
          animation: lineGrow 0.6s 0.7s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .mv-sub {
          font-size: 1.05rem;
          color: ${colors.prussianBlue};
          opacity: 0.6;
          max-width: 36rem;
          margin: 0 auto;
          line-height: 1.65;
          animation: fadeUp 0.7s 0.2s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Cards grid ── */
        .mv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        /* ── Card ── */
        .mv-card {
          background: ${colors.white};
          border-radius: 20px;
          padding: 2.25rem 2rem;
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.55s cubic-bezier(.22,1,.36,1),
            transform 0.55s cubic-bezier(.22,1,.36,1),
            box-shadow 0.3s ease;
          box-shadow: 0 2px 12px rgba(0,40,86,0.07);
        }

        .mv-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mv-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 50px rgba(0,40,86,0.13);
        }

        /* Animated corner accent */
        .mv-card-corner {
          position: absolute;
          top: 0; right: 0;
          width: 80px; height: 80px;
          border-radius: 0 20px 0 100%;
          transition: width 0.35s ease, height 0.35s ease;
        }

        .mv-card:hover .mv-card-corner {
          width: 110px;
          height: 110px;
        }

        .mv-card-number {
          position: absolute;
          top: 1.1rem;
          right: 1.4rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: ${colors.white};
          z-index: 1;
        }

        /* Bottom border bar */
        .mv-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 3px;
          width: 0;
          border-radius: 0 0 0 20px;
          transition: width 0.4s cubic-bezier(.22,1,.36,1);
        }

        .mv-card:hover::after {
          width: 100%;
        }

        /* Icon */
        .mv-icon-wrap {
          width: 56px; height: 56px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          position: relative;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1);
        }

        .mv-card:hover .mv-icon-wrap {
          transform: rotate(-6deg) scale(1.12);
        }

        .mv-icon-ring {
          position: absolute;
          inset: -4px;
          border-radius: 20px;
          border: 2px dashed transparent;
          transition: border-color 0.3s ease, transform 0.6s linear;
        }

        .mv-card:hover .mv-icon-ring {
          border-color: currentColor;
          transform: rotate(90deg);
        }

        /* Title */
        .mv-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 0.85rem;
        }

        /* Description */
        .mv-card-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: ${colors.prussianBlue};
          opacity: 0.72;
          margin: 0 0 1.5rem;
        }

        /* Link */
        .mv-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: gap 0.25s ease;
        }

        .mv-link:hover {
          gap: 0.7rem;
        }

        .mv-link-arrow {
          width: 20px; height: 20px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }

        .mv-link:hover .mv-link-arrow {
          transform: translateX(3px);
        }

        /* ── Bottom panels ── */
        .mv-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid ${colors.paleSlate};
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s 0.1s cubic-bezier(.22,1,.36,1), transform 0.6s 0.1s cubic-bezier(.22,1,.36,1);
        }

        .mv-bottom.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .mv-bottom { grid-template-columns: 1fr; }
        }

        .mv-panel {
          border-radius: 20px;
          padding: 2rem 2rem 2rem 2.25rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .mv-panel:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,40,86,0.1);
        }

        .mv-panel-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          border-radius: 20px 0 0 20px;
        }

        /* Animated shimmer on panel bar */
        .mv-panel-bar::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0; right: 0;
          height: 50%;
          background: rgba(255,255,255,0.35);
          border-radius: inherit;
          animation: shimmerBar 2.5s 1s ease-in-out infinite;
        }

        @keyframes shimmerBar {
          0%   { top: -100%; }
          100% { top: 200%; }
        }

        .mv-panel-label {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
          margin-bottom: 0.75rem;
          color: ${colors.white};
        }

        .mv-panel-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: ${colors.prussianBlue};
          margin: 0 0 0.85rem;
        }

        .mv-panel-text {
          font-size: 0.9rem;
          line-height: 1.75;
          color: ${colors.prussianBlue};
          opacity: 0.72;
          margin: 0;
        }
      `}</style>

            <div className="mv-root">
                {/* Header */}
                <div className="mv-header">

                    <h2 className="mv-heading">
                        What <em>Drives</em> Us
                    </h2>
                    <p className="mv-sub">
                        Our core values guide everything we do, from student consultations to university partnerships
                    </p>
                </div>

                {/* Values Cards */}
                <div className="mv-grid">
                    {values.map((value, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className={`mv-card${visible[i] ? " visible" : ""}`}
                            style={{
                                // card-specific CSS custom props for ::after pseudo
                                // We inject real styles via style attr where possible
                            }}
                        >
                            {/* Corner accent */}
                            <div
                                className="mv-card-corner"
                                style={{ background: value.accent }}
                            />
                            <span className="mv-card-number">{value.number}</span>

                            {/* Icon */}
                            <div
                                className="mv-icon-wrap"
                                style={{
                                    background: `${value.accent}18`,
                                    color: value.accent,
                                }}
                            >
                                <div
                                    className="mv-icon-ring"
                                    style={{ color: value.accent }}
                                />
                                {value.icon}
                            </div>

                            {/* Text */}
                            <h3 className="mv-card-title" style={{ color: value.accent }}>
                                {value.title}
                            </h3>
                            <p className="mv-card-desc">{value.description}</p>

                            {/* Link */}
                            <a
                                href="#"
                                className="mv-link"
                                style={{ color: value.accent }}
                            >
                                Learn more
                                <span
                                    className="mv-link-arrow"
                                    style={{ background: `${value.accent}15` }}
                                >
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M2 5h6M5.5 2.5 8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </a>

                            {/* Bottom line — inline since ::after can't use dynamic vars easily */}
                            <style>{`
                .mv-card:nth-child(${i + 1})::after { background: ${value.accent}; }
              `}</style>
                        </div>
                    ))}
                </div>

                {/* Bottom panels */}
                <div
                    className={`mv-bottom${bottomVisible ? " visible" : ""}`}
                    ref={bottomRef}
                >
                    {/* Mission */}
                    <div
                        className="mv-panel"
                        style={{ background: colors.paleSlate }}
                    >
                        <div className="mv-panel-bar" style={{ background: colors.oceanDeep }} />
                        <span className="mv-panel-label" style={{ background: colors.oceanDeep }}>
                            Mission
                        </span>
                        <h2 className="mv-panel-title">Our Mission</h2>
                        <p className="mv-panel-text">
                            To bridge the gap between ambition and opportunity by providing professional guidance throughout the entire study abroad journey. We prioritize integrity, compliance, transparency, and student success while ensuring all applicants meet Australian education and student visa requirements.
                        </p>
                    </div>

                    {/* Who We Are */}
                    <div
                        className="mv-panel"
                        style={{ background: colors.paleSlate }}
                    >
                        <div className="mv-panel-bar" style={{ background: colors.dustyDenim }} />
                        <span className="mv-panel-label" style={{ background: colors.dustyDenim }}>
                            About Us
                        </span>
                        <h2 className="mv-panel-title">Who We Are</h2>
                        <p className="mv-panel-text">
                            Study Map Consultants is an education consultancy dedicated to helping students from East Africa pursue quality education opportunities in Australia. We work closely with students, parents, partner schools, and Australian institutions to ensure every application process is smooth, compliant, and student-focused.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}