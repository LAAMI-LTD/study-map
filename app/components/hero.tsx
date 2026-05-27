"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    // Color palette from design system
    const colors = {
        white: "#FFFEFE",
        dustyDenim: "#738DAF",
        oceanDeep: "#0A63B3",
        prussianBlue: "#002856",
        paleSlate: "#C7CDD8",
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen py-12 mb-12 flex items-center justify-start px-6 md:px-12 overflow-hidden pt-[120px] md:pt-0"
            style={{ backgroundColor: colors.white }}
        >
            {/* Background large text */}
            <div
                className="absolute top-1/2 left-0 -translate-y-1/2 text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] font-black italic tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap"
                style={{ color: colors.paleSlate, opacity: 0.4 }}
            >
                STUDY MAP
            </div>

            {/* Right side image area with geometric shape accent */}
            <div className="absolute right-0 top-0 w-full lg:w-7/12 h-[50vh] lg:h-full z-10 overflow-hidden">
                {/* Decorative geometric shape behind image */}
                <div
                    className="absolute -top-20 -right-20 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full z-0"
                    style={{ backgroundColor: colors.prussianBlue, opacity: 0.08 }}
                />
                <div
                    className="absolute bottom-0 left-0 w-40 h-40 lg:w-64 lg:h-64 z-0"
                    style={{ backgroundColor: colors.oceanDeep, opacity: 0.06 }}
                />

                {/* Image container with solid border accent */}
                <div className="relative h-full w-full z-10 lg:pl-12 lg:py-12">
                    <div
                        className="relative h-full w-full overflow-hidden shadow-2xl"
                        style={{
                            borderLeft: `8px solid ${colors.oceanDeep}`,
                            borderBottom: `8px solid ${colors.dustyDenim}`,
                        }}
                    >
                        <img
                            src="/hero.jpg"
                            className="w-full h-full object-cover md:opacity-50 contrast-[110%] hover:scale-110 transition-transform duration-1000"
                            alt="Students studying abroad"
                        />
                        {/* Overlay gradient removed - using solid overlay instead */}
                        <div
                            className="absolute inset-0 mix-blend-multiply lg:hidden z-20"
                            style={{ backgroundColor: colors.white, opacity: 0.3 }}
                        />
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="relative w-full max-w-6xl z-30 mt-[35vh] lg:mt-0">
                {/* Logo and badge */}
                <div
                    className="inline-flex items-center gap-3 mb-8 px-5 py-2.5"
                    style={{
                        backgroundColor: colors.paleSlate,
                        borderLeft: `4px solid ${colors.oceanDeep}`,
                    }}
                >
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                        <Image
                            src="/smlogo.png"
                            alt="Study Map Consultants Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span
                        className="font-bold tracking-widest text-[10px] md:text-xs uppercase"
                        style={{ color: colors.prussianBlue }}
                    >
                        Study Map Consultants Ltd
                    </span>
                </div>

                {/* Hero Title with solid styling */}
                <h1 className="text-[3.5rem] sm:text-[5rem] md:text-7xl lg:text-[8rem] font-black leading-[0.9] tracking-tighter mb-10 uppercase">
                    <span style={{ color: colors.prussianBlue }}>YOUR MAP TO</span>
                    <br />
                    <span
                        className="stroke-text inline-block"
                        style={{ WebkitTextStrokeColor: colors.prussianBlue }}
                    >
                        GLOBAL
                    </span>
                    <br />
                    <span style={{ color: colors.oceanDeep }}>EDUCATION.</span>
                </h1>

                {/* Description with solid border */}
                <div className="max-w-xl mb-12">
                    <p
                        className="text-lg md:text-xl font-medium leading-relaxed pl-6"
                        style={{
                            color: colors.prussianBlue,
                            borderLeft: `4px solid ${colors.oceanDeep}`,
                            opacity: 0.85,
                        }}
                    >
                        Your trusted pathway to{" "}
                        <span style={{ color: colors.oceanDeep }} className="font-bold">
                            quality education in Australia
                        </span>
                        . Expert guidance for East African students seeking international
                        opportunities.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <Link
                        href="/contact"
                        className="group flex items-center justify-center gap-4 px-8 py-4 transition-all font-black uppercase tracking-wider text-sm"
                        style={{
                            backgroundColor: colors.oceanDeep,
                            color: colors.white,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.prussianBlue;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = colors.oceanDeep;
                        }}
                    >
                        <span>Start Your Journey</span>
                        <div
                            className="p-1 rounded transition-transform group-hover:translate-x-1"
                            style={{ backgroundColor: `${colors.white}20` }}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="square"
                                    strokeLinejoin="miter"
                                    strokeWidth="3"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </div>
                    </Link>

                    <Link
                        href="/contact"
                        className="px-8 py-4 transition-all font-black uppercase tracking-wider text-sm text-center"
                        style={{
                            border: `2px solid ${colors.oceanDeep}`,
                            color: colors.oceanDeep,
                            backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.prussianBlue;
                            e.currentTarget.style.borderColor = colors.prussianBlue;
                            e.currentTarget.style.color = colors.white;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.borderColor = colors.oceanDeep;
                            e.currentTarget.style.color = colors.oceanDeep;
                        }}
                    >
                        Book Consultation
                    </Link>
                </div>

                {/* Stats section - new addition */}
                <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t" style={{ borderColor: colors.paleSlate }}>
                    <div>
                        <div className="text-3xl font-black" style={{ color: colors.oceanDeep }}>10+</div>
                        <div className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.prussianBlue, opacity: 0.6 }}>Years Experience</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black" style={{ color: colors.oceanDeep }}>500+</div>
                        <div className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.prussianBlue, opacity: 0.6 }}>Students Placed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black" style={{ color: colors.oceanDeep }}>8+</div>
                        <div className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.prussianBlue, opacity: 0.6 }}>Partner Universities</div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-8 hidden lg:block z-30">
                <div className="flex flex-col items-center gap-3">
                    <span
                        className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[0.3em]"
                        style={{ color: colors.dustyDenim }}
                    >
                        Scroll
                    </span>
                    <div
                        className="w-[2px] h-12 relative overflow-hidden"
                        style={{ backgroundColor: colors.paleSlate }}
                    >
                        <div
                            className="absolute top-0 left-0 w-full h-1/2 animate-[scrollAnim_2s_infinite]"
                            style={{ backgroundColor: colors.oceanDeep }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scrollAnim {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(200%);
                    }
                }

                /* Stroke text effect for "GLOBAL" */
                .stroke-text {
                    -webkit-text-stroke-width: 2px;
                    -webkit-text-stroke-color: inherit;
                    color: transparent;
                }
                @media (min-width: 768px) {
                    .stroke-text {
                        -webkit-text-stroke-width: 3px;
                    }
                }
            `}</style>
        </section>
    );
}