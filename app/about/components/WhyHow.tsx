"use client";

import WhyChooseUs from "./WhyChooseUs";
import HowWeWork from "./HowWeWork";
import { colors } from "./colors";

export default function WhyHow() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .wh-root * { box-sizing: border-box; }
        .wh-root {
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 5rem;
        }

        /* ── Shared Header ── */
        .wh-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .wh-pill {
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
          animation: wh-pillDrop 0.6s cubic-bezier(.22,1,.36,1) both;
        }
        .wh-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${colors.white};
          animation: wh-pulse 1.8s ease-in-out infinite;
        }
        @keyframes wh-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.7); }
        }
        @keyframes wh-pillDrop {
          from { opacity:0; transform:translateY(-14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .wh-heading {
          font-size: clamp(1.9rem, 4.5vw, 3.3rem);
          font-weight: 800;
          color: ${colors.prussianBlue};
          line-height: 1.1;
          margin: 0 0 1rem;
          animation: wh-fadeUp 0.7s 0.1s cubic-bezier(.22,1,.36,1) both;
        }
        .wh-heading em {
          font-style: normal;
          color: ${colors.oceanDeep};
          position: relative;
        }
        .wh-heading em::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 2px;
          height: 3px;
          background: ${colors.oceanDeep};
          border-radius: 2px;
          transform-origin: left;
          animation: wh-lineGrow 0.6s 0.7s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes wh-lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .wh-sub {
          font-size: 1.05rem;
          color: ${colors.prussianBlue};
          opacity: 0.6;
          max-width: 36rem;
          margin: 0 auto;
          line-height: 1.65;
          animation: wh-fadeUp 0.7s 0.2s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes wh-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── Why Cards ── */
        .wh-cards-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;
}

/* Tablet */
@media (min-width: 640px) {
  .wh-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .wh-cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

        .wh-card {
          background: ${colors.white};
          border-radius: 20px;
          padding: 2rem 1.75rem;
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
        .wh-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .wh-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 50px rgba(0,40,86,0.13);
        }

        /* Corner accent */
        .wh-card-corner {
          position: absolute;
          top: 0; right: 0;
          width: 75px; height: 75px;
          border-radius: 0 20px 0 100%;
          transition: width 0.35s ease, height 0.35s ease;
        }
        .wh-card:hover .wh-card-corner {
          width: 105px; height: 105px;
        }
        .wh-card-number {
          position: absolute;
          top: 1rem; right: 1.3rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: ${colors.white};
          z-index: 1;
        }

        /* Bottom sweep line */
        .wh-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 3px;
          width: 0;
          border-radius: 0 0 0 20px;
          transition: width 0.4s cubic-bezier(.22,1,.36,1);
        }
        .wh-card:hover::after { width: 100%; }

        /* Icon */
        .wh-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.35rem;
          position: relative;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1);
        }
        .wh-card:hover .wh-icon-wrap {
          transform: rotate(-6deg) scale(1.12);
        }
        .wh-icon-ring {
          position: absolute;
          inset: -4px;
          border-radius: 18px;
          border: 2px dashed transparent;
          transition: border-color 0.3s ease, transform 0.6s linear;
        }
        .wh-card:hover .wh-icon-ring {
          border-color: currentColor;
          transform: rotate(90deg);
        }
        .wh-icon-svg {
          width: 24px; height: 24px;
        }

        .wh-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.75rem;
        }
        .wh-card-desc {
          font-size: 0.875rem;
          line-height: 1.7;
          color: ${colors.prussianBlue};
          opacity: 0.72;
          margin: 0;
        }

        /* ── Process Section ── */
        .wh-process {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(.22,1,.36,1), transform 0.6s cubic-bezier(.22,1,.36,1);
        }
        .wh-process.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .wh-steps {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        /* Vertical connector line between steps */
        .wh-steps::before {
          content: '';
          position: absolute;
          left: 2.4rem;
          top: 3.5rem;
          bottom: 3.5rem;
          width: 2px;
          background: ${colors.paleSlate};
          border-radius: 2px;
          z-index: 0;
        }

        .wh-step {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 1.5rem 0;
          position: relative;
          z-index: 1;
          cursor: pointer;
          transition: none;
        }

        /* Step number bubble */
        .wh-step-num {
          flex-shrink: 0;
          width: 4rem; height: 4rem;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: ${colors.white};
          background: ${colors.prussianBlue};
          transition: background 0.3s ease, transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
          position: relative;
          z-index: 2;
        }
        .wh-step.open .wh-step-num {
          background: ${colors.oceanDeep};
          transform: scale(1.1);
          box-shadow: 0 6px 20px ${colors.oceanDeep}50;
        }

        /* Step body */
        .wh-step-body {
          flex: 1;
          padding: 0.6rem 0 0;
        }
        .wh-step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .wh-step-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: ${colors.prussianBlue};
          margin: 0;
          transition: color 0.3s ease;
        }
        .wh-step.open .wh-step-title {
          color: ${colors.oceanDeep};
        }

        /* Toggle icon */
        .wh-step-toggle {
          flex-shrink: 0;
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: ${colors.paleSlate};
          transition: background 0.3s ease, transform 0.3s cubic-bezier(.22,1,.36,1);
        }
        .wh-step.open .wh-step-toggle {
          background: ${colors.oceanDeep};
          transform: rotate(45deg);
        }
        .wh-step-toggle svg {
          width: 14px; height: 14px;
          stroke: ${colors.prussianBlue};
          transition: stroke 0.3s ease;
        }
        .wh-step.open .wh-step-toggle svg {
          stroke: ${colors.white};
        }

        /* Expandable content */
        .wh-step-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(.22,1,.36,1);
        }
        .wh-step-content.open {
          grid-template-rows: 1fr;
        }
        .wh-step-content-inner {
          overflow: hidden;
        }
        .wh-step-divider {
          height: 1px;
          background: ${colors.prussianBlue}18;
          margin: 0.9rem 0 0.9rem;
        }
        .wh-step-desc {
          font-size: 0.9rem;
          line-height: 1.75;
          color: ${colors.prussianBlue};
          opacity: 0.72;
          margin: 0 0 0.5rem;
          padding-bottom: 0.25rem;
        }

        /* Divider between sections */
        .wh-divider {
          height: 1px;
          background: ${colors.paleSlate};
          margin: 5rem 0;
        }
      `}</style>

      <div className="wh-root">
        <WhyChooseUs />
        <div className="wh-divider" />
        <HowWeWork />
      </div>
    </>
  );
}