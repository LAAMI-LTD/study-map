"use client";

import { useState, useRef, useEffect } from "react";
import { colors } from "./colors";

const processSteps = [
    {
        step: "01",
        title: "Course Counselling",
        description:
            "Our dedicated team will help you find the best international courses and the perfect program for you. We discuss your academic goals, career aspirations, and current qualifications to tailor recommendations that match your ambitions.",
    },
    {
        step: "02",
        title: "Institution Application",
        description:
            "Our counsellors will guide you through the admission process and keep you updated on your application's progress every step of the way — from document preparation to submission and confirmation.",
    },
    {
        step: "03",
        title: "Student Visa Application",
        description:
            "Our counsellors are experts in visa applications and will assist you at every stage — from compiling financial evidence and documentation to preparing for your interview with confidence.",
    },
    {
        step: "04",
        title: "Pre-Departure Briefings",
        description:
            "Our student counsellor will ensure you are well prepared for your travel and destination with all the necessary information — including cultural orientation, packing guidance, and what to expect on arrival.",
    },
    {
        step: "05",
        title: "Ongoing Support",
        description:
            "On arrival at your destination, we shall continue to provide support. Whether it's settling into student life, academic challenges, or navigating daily life abroad, our team remains in your corner.",
    },
    {
        step: "06",
        title: "Airport Pickup & Accommodation",
        description:
            "We offer airport pickup and welcome services at your destination as part of our comprehensive support — so your very first moments in Australia feel familiar, safe, and well-organised.",
    },
];

export default function HowWeWork() {
    const [openSteps, setOpenSteps] = useState<number[]>([0]);
    const [stepsVisible, setStepsVisible] = useState(false);
    const stepsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!stepsRef.current) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStepsVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.06 }
        );
        obs.observe(stepsRef.current);
        return () => obs.disconnect();
    }, []);

    const toggleStep = (index: number) => {
        setOpenSteps((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .hww-root * { box-sizing: border-box; }
        .hww-root {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          isolation: isolate;
        }

        /* ── Fixed-within-section background ── */
        .hww-bg {
          position: absolute;
          inset: 0;
          background-image: url('/global3.jpg');
          background-size: cover;
          background-position: center top;
          background-attachment: fixed;
          z-index: 0;
        }

        /* Solid-color overlay (no gradients) */
        .hww-overlay {
          position: absolute;
          inset: 0;
          background: ${colors.prussianBlue};
          opacity: 0.78;
          z-index: 1;
        }

        /* Decorative top accent bar */
        .hww-accent-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: ${colors.oceanDeep};
          z-index: 3;
        }

        /* Content sits above overlay */
        .hww-content {
          position: relative;
          z-index: 2;
          padding: 4rem 1.5rem 4.5rem;
          max-width: 860px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .hww-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .hww-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 1rem;
          border-radius: 999px;
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: ${colors.oceanDeep};
          color: ${colors.white};
          margin-bottom: 1.2rem;
        }
        .hww-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${colors.white};
          animation: hww-pulse 1.8s ease-in-out infinite;
        }
        @keyframes hww-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.7); }
        }
        .hww-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.9rem, 4.5vw, 3.1rem);
          font-weight: 800;
          color: ${colors.white};
          line-height: 1.1;
          margin: 0 0 1rem;
        }
        .hww-heading em {
          font-style: normal;
          color: ${colors.dustyDenim};
          position: relative;
        }
        .hww-heading em::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 2px;
          height: 3px;
          background: ${colors.dustyDenim};
          border-radius: 2px;
          transform-origin: left;
          animation: hww-lineGrow 0.6s 0.5s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes hww-lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .hww-sub {
          font-size: 1rem;
          color: ${colors.white};
                    max-width: 34rem;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Process fade-in ── */
        .hww-process {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1);
        }
        .hww-process.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Steps timeline ── */
        .hww-steps {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        /* Vertical connector */
        .hww-steps::before {
          content: '';
          position: absolute;
          left: 1.95rem;
          top: 4rem;
          bottom: 4rem;
          width: 2px;
          background: ${colors.white};
          opacity: 0.1;
          border-radius: 2px;
          z-index: 0;
        }

        .hww-step {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 1.25rem 0;
          position: relative;
          z-index: 1;
          cursor: pointer;
        }

        /* Step number bubble */
        .hww-step-num {
          flex-shrink: 0;
          width: 3.9rem; height: 3.9rem;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: ${colors.white};
          background: ${colors.white};
          color: ${colors.prussianBlue};
                    transition: opacity 0.3s ease, background 0.3s ease, color 0.3s ease,
                      transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
          position: relative;
          z-index: 2;
        }
        .hww-step.open .hww-step-num {
          background: ${colors.oceanDeep};
          color: ${colors.white};
          opacity: 1;
          transform: scale(1.1);
          box-shadow: 0 6px 24px ${colors.oceanDeep}70;
        }
        .hww-step:not(.open):hover .hww-step-num {
          opacity: 0.5;
        }

        /* Body */
        .hww-step-body {
          flex: 1;
          padding: 0.55rem 0 0;
        }
        .hww-step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .hww-step-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: ${colors.white};
                    margin: 0;
          transition: opacity 0.3s ease, color 0.3s ease;
        }
        .hww-step.open .hww-step-title,
        .hww-step:not(.open):hover .hww-step-title {
          opacity: 1;
        }
        .hww-step.open .hww-step-title {
          color: ${colors.dustyDenim};
        }

        /* Toggle */
        .hww-step-toggle {
          flex-shrink: 0;
          width: 30px; height: 30px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid ${colors.white};
                    transition: opacity 0.3s ease, background 0.3s ease,
                      border-color 0.3s ease, transform 0.35s cubic-bezier(.22,1,.36,1);
        }
        .hww-step.open .hww-step-toggle {
          background: ${colors.oceanDeep};
          border-color: ${colors.oceanDeep};
          opacity: 1;
          transform: rotate(45deg);
        }
        
        .hww-step-toggle svg {
          width: 12px; height: 12px;
          stroke: ${colors.white};
        }

        /* Expandable content */
        .hww-step-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(.22,1,.36,1);
        }
        .hww-step-content.open {
          grid-template-rows: 1fr;
        }
        .hww-step-content-inner { overflow: hidden; }

        .hww-step-divider {
          height: 1px;
          background: ${colors.white};
          opacity: 0.1;
          margin: 0.85rem 0;
        }
        .hww-step-desc {
          font-size: 0.9rem;
          line-height: 1.78;
          color: ${colors.white};
                    margin: 0 0 0.5rem;
        }

        /* Row separator between steps (not a full divider) */
        .hww-step + .hww-step {
          border-top: 1px solid ${colors.white}0d;
        }
      `}</style>

            <div className="hww-root">
                {/* Background layers */}
                <div className="hww-bg" />
                <div className="hww-overlay" />
                <div className="hww-accent-bar" />

                {/* Content */}
                <div className="hww-content">
                    <div
                        className={`hww-process${stepsVisible ? " visible" : ""}`}
                        ref={stepsRef}
                    >
                        {/* Header */}
                        <div className="hww-header">
                            <span className="hww-pill">
                                <span className="hww-pill-dot" />
                                Our Process
                            </span>
                            <h2 className="hww-heading">
                                Our Working <em>Process</em>
                            </h2>
                            <p className="hww-sub">
                                Step-by-step guide to achieving your study goals in Australia
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="hww-steps">
                            {processSteps.map((step, index) => {
                                const isOpen = openSteps.includes(index);
                                return (
                                    <div
                                        key={index}
                                        className={`hww-step${isOpen ? " open" : ""}`}
                                        onClick={() => toggleStep(index)}
                                    >
                                        <div className="hww-step-num">{step.step}</div>

                                        <div className="hww-step-body">
                                            <div className="hww-step-header">
                                                <h3 className="hww-step-title">{step.title}</h3>
                                                <div className="hww-step-toggle">
                                                    <svg viewBox="0 0 12 12" fill="none" strokeWidth="2" strokeLinecap="round">
                                                        <line x1="2" y1="6" x2="10" y2="6" />
                                                        <line x1="6" y1="2" x2="6" y2="10" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className={`hww-step-content${isOpen ? " open" : ""}`}>
                                                <div className="hww-step-content-inner">
                                                    <div className="hww-step-divider" />
                                                    <p className="hww-step-desc">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}