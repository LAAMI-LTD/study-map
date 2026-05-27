"use client";

import { useState, useEffect, useRef } from "react";
import { colors } from "./colors";

const advantages = [
    {
        title: "Trusted Student Guidance",
        desc: "Accurate and reliable information to help students make informed academic and career decisions.",
        number: "01",
        accent: colors.oceanDeep,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="wh-icon-svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Genuine Student Screening",
        desc: "We carefully assess applicants to ensure they meet Genuine Student and financial eligibility requirements.",
        number: "02",
        accent: colors.dustyDenim,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="wh-icon-svg">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <path d="M11 8v6M8 11h6" />
            </svg>
        ),
    },
    {
        title: "End-to-End Support",
        desc: "From counselling to visa guidance and pre-departure preparation, we support students at every stage.",
        number: "03",
        accent: colors.prussianBlue,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="wh-icon-svg">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        title: "East Africa Focused",
        desc: "Our strong regional understanding allows us to effectively support students across East Africa.",
        number: "04",
        accent: colors.oceanDeep,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="wh-icon-svg">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
        ),
    },
    {
        title: "Partner Institution Network",
        desc: "We collaborate with reputable colleges and institutions in Australia to provide quality study options.",
        number: "05",
        accent: colors.dustyDenim,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="wh-icon-svg">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
            </svg>
        ),
    },
];

export default function WhyChooseUs() {
    const [cardVisible, setCardVisible] = useState<boolean[]>(new Array(advantages.length).fill(false));
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        cardRefs.current.forEach((ref, i) => {
            if (!ref) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setCardVisible((prev) => {
                                const next = [...prev];
                                next[i] = true;
                                return next;
                            });
                        }, i * 100);
                        obs.disconnect();
                    }
                },
                { threshold: 0.12 }
            );
            obs.observe(ref);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <>
            <div className="wh-header">
                <span className="wh-pill">
                    <span className="wh-pill-dot" />
                    Why Us?
                </span>
                <h2 className="wh-heading">
                    Why Choose <em>Study Map</em>
                </h2>
                <p className="wh-sub">We combine local expertise with global opportunities to help you succeed</p>
            </div>

            <div className="wh-cards-grid">
                {advantages.map((item, i) => (
                    <div
                        key={i}
                        ref={(el) => { cardRefs.current[i] = el; }}
                        className={`wh-card${cardVisible[i] ? " visible" : ""}`}
                    >
                        <div className="wh-card-corner" style={{ background: item.accent }} />
                        <span className="wh-card-number">{item.number}</span>

                        <div className="wh-icon-wrap" style={{ background: `${item.accent}18`, color: item.accent }}>
                            <div className="wh-icon-ring" style={{ color: item.accent }} />
                            {item.icon}
                        </div>

                        <h3 className="wh-card-title" style={{ color: item.accent }}>{item.title}</h3>
                        <p className="wh-card-desc">{item.desc}</p>

                        <style>{`.wh-card:nth-child(${i + 1})::after { background: ${item.accent}; }`}</style>
                    </div>
                ))}
            </div>
        </>
    );
}
