"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
    const colors = {
        white: "#FFFFFF",
        prussianBlue: "#002856",
        oceanDeep: "#0A63B3",
        ink: "#0D1B2A",
        mist: "#F0F3F7",
        border: "#DDE3EC",
        slate: "#8A96A8",
    };

    const headlineRef = useRef(null);

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(".hero-reveal");

        elements.forEach((el, i) => {
            el.style.opacity = "0";
            el.style.transform = "translateY(28px)";

            setTimeout(() => {
                el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 120 + i * 90);
        });
    }, []);

    const stats = [
        { number: "5+", label: "Years Experience" },
        { number: "50+", label: "Students Placed" },
        { number: "8+", label: "Partner Universities" },
    ];

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                overflow: "hidden",
                backgroundColor: colors.ink,
                display: "flex",
                alignItems: "stretch",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');

        .hero-display {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 0.92;
          letter-spacing: -0.02em;
        }

        .hero-display-italic {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          line-height: 0.92;
          letter-spacing: -0.01em;
        }

        .hero-body {
          font-family: 'DM Sans', sans-serif;
        }

        .hero-cta-primary {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          background: ${colors.oceanDeep};
          color: #fff;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .hero-cta-primary:hover { background: ${colors.prussianBlue}; }

        .hero-cta-ghost {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border: 1px solid rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .hero-cta-ghost:hover {
          border-color: rgba(255,255,255,0.7);
          color: #fff;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 1;
          color: #fff;
        }

        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-top: 4px;
        }

        .tag-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.6);
        }

        .scroll-line {
          animation: scrollDrop 2.2s ease-in-out infinite;
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          51%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0.2; }
        }

        .image-panel {
          position: absolute;
          top: 0; right: 0;
          width: 52%;
          height: 100%;
        }

        @media (max-width: 1023px) {
          .image-panel {
            width: 100%;
            opacity: 0.22;
          }
        }

        .hero-reveal { will-change: opacity, transform; }
      `}</style>

            {/* Background image panel */}
            <div className="image-panel">
                <Image
                    src="/global3.jpg"
                    alt="Global Education"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Fade left into dark bg */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(to right, ${colors.ink} 0%, ${colors.ink}CC 18%, transparent 55%), linear-gradient(to top, ${colors.ink}99 0%, transparent 40%)`,
                }} />
            </div>

            {/* Thin vertical rule */}
            <div style={{
                position: "absolute",
                left: "calc(48% - 1px)",
                top: 0, bottom: 0,
                width: "1px",
                background: "rgba(255,255,255,0.07)",
                zIndex: 2,
                display: "none",
            }} className="hidden lg:block" />

            {/* Content */}
            <div style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "120px 24px 80px",
            }}>
                <div style={{ maxWidth: "620px", width: "100%" }}>

                    {/* Top tag */}
                    <div className="hero-reveal" style={{ marginBottom: "36px" }}>
                        <span className="tag-pill">
                            <div style={{
                                width: "6px", height: "6px", borderRadius: "50%",
                                background: colors.oceanDeep,
                                flexShrink: 0,
                            }} />
                            Study Map Consultants Ltd
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 style={{ margin: 0 }}>
                        <span
                            className="hero-reveal hero-display"
                            style={{
                                display: "block",
                                fontSize: "clamp(52px, 8vw, 104px)",
                                color: colors.white,
                            }}
                        >
                            Your Map
                        </span>
                        <span
                            className="hero-reveal hero-display-italic"
                            style={{
                                display: "block",
                                fontSize: "clamp(52px, 8vw, 104px)",
                                color: "transparent",
                                WebkitTextStroke: `1px rgba(255,255,255,0.45)`,
                            }}
                        >
                            to Global
                        </span>
                        <span
                            className="hero-reveal hero-display"
                            style={{
                                display: "block",
                                fontSize: "clamp(52px, 8vw, 104px)",
                                color: colors.white,
                            }}
                        >
                            Education.
                        </span>
                    </h1>

                    {/* Sub copy */}
                    <p
                        className="hero-reveal hero-body"
                        style={{
                            marginTop: "28px",
                            marginBottom: 0,
                            fontSize: "15px",
                            fontWeight: 300,
                            lineHeight: 1.7,
                            color: "rgba(255,255,255,0.5)",
                            maxWidth: "400px",
                        }}
                    >
                        Expert guidance for students pursuing undergraduate, postgraduate, and professional programmes at leading universities worldwide.
                    </p>

                    {/* CTA row */}
                    <div
                        className="hero-reveal"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "44px",
                        }}
                    >
                        <Link href="/contact" className="hero-cta-primary">
                            Start Your Journey
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="/services" className="hero-cta-ghost">
                            Our Services
                        </Link>
                    </div>

                    {/* Stats */}
                    <div
                        className="hero-reveal"
                        style={{
                            display: "flex",
                            gap: "40px",
                            marginTop: "64px",
                            paddingTop: "32px",
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                            flexWrap: "wrap",
                        }}
                    >
                        {stats.map((s, i) => (
                            <div key={i}>
                                <div className="stat-number">{s.number}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: "absolute",
                bottom: "40px",
                right: "40px",
                zIndex: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
            }} className="hidden lg:flex">
                <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    writingMode: "vertical-lr",
                }}>Scroll</span>
                <div style={{
                    width: "1px",
                    height: "48px",
                    background: "rgba(255,255,255,0.1)",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div className="scroll-line" style={{
                        position: "absolute",
                        inset: 0,
                        background: colors.oceanDeep,
                    }} />
                </div>
            </div>
        </section>
    );
}