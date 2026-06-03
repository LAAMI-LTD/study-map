"use client";

import { useState, useRef, useEffect } from "react";

const colors = {
  white: "#FFFFFF",
  prussianBlue: "#002856",
  oceanDeep: "#0A63B3",
  ink: "#0D1B2A",
  mist: "#F0F3F7",
  border: "#DDE3EC",
  slate: "#8A96A8",
};

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
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setSectionVisible(true); obs.disconnect(); }
      },
      { threshold: 0.06 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const toggleStep = (i: number) =>
    setOpenSteps((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  return (
    <section style={{ position: "relative", overflow: "hidden", backgroundColor: colors.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        .hww2-root { font-family: 'DM Sans', sans-serif; }

        /* Background image */
        .hww2-bg-img {
          position: absolute;
          inset: 0;
          background-image: url('/global3.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          opacity: 0.15;
          z-index: 0;
        }

        /* Top/bottom rules */
        .hww2-rule-top, .hww2-rule-bottom {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: rgba(255,255,255,0.12);
          z-index: 2;
        }
        .hww2-rule-top { top: 0; }
        .hww2-rule-bottom { bottom: 0; }

        /* Content */
        .hww2-inner {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
        }

        @media (min-width: 1024px) {
          .hww2-inner {
            grid-template-columns: 340px 1fr;
            gap: 80px;
            align-items: start;
          }
        }

        /* Reveal */
        .hww2-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hww2-reveal.in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Left column */
        .hww2-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${colors.oceanDeep};
          display: block;
          margin-bottom: 18px;
          font-family: 'DM Sans', sans-serif;
        }

        .hww2-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(36px, 4.5vw, 56px);
          line-height: 0.97;
          letter-spacing: -0.02em;
          color: ${colors.white};
          margin-bottom: 24px;
        }

        .hww2-heading em {
          font-style: italic;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
        }

        .hww2-sub {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 14px;
          line-height: 1.75;
          color: rgba(255,255,255,0.65);
          max-width: 280px;
          margin-bottom: 40px;
        }

        /* Progress pill */
        .hww2-progress-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 8px;
        }
        .hww2-progress-track {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
        }
        .hww2-progress-fill {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          background: ${colors.oceanDeep};
          transition: width 0.4s ease;
        }
        .hww2-progress-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.4);
          margin-top: 6px;
        }

        /* Steps */
        .hww2-steps { display: flex; flex-direction: column; }

        .hww2-step {
          border-bottom: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .hww2-step:first-child { border-top: 1px solid rgba(255,255,255,0.08); }

        .hww2-step-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          user-select: none;
        }

        /* Number */
        .hww2-step-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.3);
          flex-shrink: 0;
          width: 28px;
          transition: color 0.2s ease;
        }
        .hww2-step.open .hww2-step-num { color: ${colors.oceanDeep}; }

        /* Active indicator bar */
        .hww2-step-bar {
          width: 2px;
          height: 20px;
          background: rgba(255,255,255,0.12);
          flex-shrink: 0;
          transition: background 0.2s ease, height 0.2s ease;
        }
        .hww2-step.open .hww2-step-bar {
          background: ${colors.oceanDeep};
        }

        /* Title */
        .hww2-step-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          flex: 1;
          transition: color 0.2s ease;
          letter-spacing: -0.01em;
        }
        .hww2-step.open .hww2-step-title { color: ${colors.white}; font-weight: 600; }
        .hww2-step:hover .hww2-step-title { color: rgba(255,255,255,0.85); }

        /* Toggle icon */
        .hww2-toggle {
          width: 22px; height: 22px;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: rgba(255,255,255,0.4);
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.3s ease;
        }
        .hww2-step.open .hww2-toggle {
          border-color: ${colors.oceanDeep};
          color: ${colors.oceanDeep};
          transform: rotate(45deg);
        }

        /* Expandable description */
        .hww2-step-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.38s cubic-bezier(0.4,0,0.2,1);
        }
        .hww2-step-body.open { grid-template-rows: 1fr; }
        .hww2-step-body-inner { overflow: hidden; }

        .hww2-step-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
          line-height: 1.75;
          color: rgba(255,255,255,0.55);
          padding: 0 0 20px 50px;
        }
      `}</style>

      <div className="hww2-bg-img" />
      <div className="hww2-rule-top" />
      <div className="hww2-rule-bottom" />

      <div className="hww2-root hww2-inner" ref={sectionRef}>

        {/* Left — header */}
        <div className={`hww2-reveal${sectionVisible ? " in" : ""}`}>
          <span className="hww2-eyebrow">Our Process</span>
          <h2 className="hww2-heading">
            How We<br />
            <em>Work.</em>
          </h2>
          <p className="hww2-sub">
            Step-by-step guidance to help you achieve your international study goals — from first conversation to arrival.
          </p>

          {/* Progress tracker */}
          <div style={{ marginTop: "auto" }}>
            <div className="hww2-progress-label">Steps completed</div>
            <div className="hww2-progress-track">
              <div
                className="hww2-progress-fill"
                style={{ width: `${(openSteps.length / processSteps.length) * 100}%` }}
              />
            </div>
            <div className="hww2-progress-num">
              {openSteps.length} / {processSteps.length} explored
            </div>
          </div>
        </div>

        {/* Right — accordion */}
        <div
          className={`hww2-reveal hww2-steps${sectionVisible ? " in" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          {processSteps.map((step, i) => {
            const isOpen = openSteps.includes(i);
            return (
              <div
                key={i}
                className={`hww2-step${isOpen ? " open" : ""}`}
                onClick={() => toggleStep(i)}
              >
                <div className="hww2-step-header">
                  <span className="hww2-step-num">{step.step}</span>
                  <div className="hww2-step-bar" />
                  <span className="hww2-step-title">{step.title}</span>
                  <div className="hww2-toggle">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="5" y1="1" x2="5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className={`hww2-step-body${isOpen ? " open" : ""}`}>
                  <div className="hww2-step-body-inner">
                    <p className="hww2-step-desc">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}