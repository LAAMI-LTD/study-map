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
            className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden pt-24 md:pt-0"
            style={{ backgroundColor: colors.white }}
        >
            {/* Image Background Container */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/50" />
                <Image
                    src="/global3.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Right side decorative shapes - adjusted for image */}
            <div className="absolute right-0 top-0 w-full lg:w-7/12 h-[50vh] lg:h-full z-10 overflow-hidden pointer-events-none">
                {/* Decorative geometric shapes */}
                <div
                    className="absolute -top-20 -right-20 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full"
                    style={{ backgroundColor: colors.prussianBlue, opacity: 0.15 }}
                />
                <div
                    className="absolute bottom-0 left-0 w-40 h-40 lg:w-64 lg:h-64"
                    style={{ backgroundColor: colors.oceanDeep, opacity: 0.12 }}
                />
            </div>

            {/* Main content - removed manual margins */}
            <div className="relative w-full max-w-6xl py-24 z-30">
                {/* Logo and badge */}
                <div
                    className="inline-flex items-center bg-white gap-3 mb-8 px-5 py-2.5"
                    style={{
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
                </div>

                {/* Hero Title with solid styling */}
                <h1 className="text-[3.5rem] sm:text-[5rem] md:text-7xl lg:text-[8rem] font-black leading-[0.9] tracking-tighter mb-10 uppercase">
                    <span style={{ color: colors.white }}>YOUR MAP TO</span>
                    <br />
                    <span
                        className="stroke-text inline-block"
                        style={{ WebkitTextStrokeColor: colors.white }}
                    >
                        GLOBAL
                    </span>
                    <br />
                    <span style={{ color: colors.white }}>EDUCATION.</span>
                </h1>

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
                            border: `2px solid ${colors.white}`,
                            color: colors.white,
                            backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.white;
                            e.currentTarget.style.borderColor = colors.white;
                            e.currentTarget.style.color = colors.prussianBlue;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.borderColor = colors.white;
                            e.currentTarget.style.color = colors.white;
                        }}
                    >
                        Book Consultation
                    </Link>
                </div>

                {/* Stats section */}
                <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pl-4 pt-8 border-t" style={{ borderColor: colors.paleSlate }}>
                    <div>
                        <div className="text-3xl font-black" style={{ color: colors.oceanDeep }}>10+</div>
                        <div className="text-xs font-bold uppercase tracking-wide text-white/80">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black" style={{ color: colors.oceanDeep }}>500+</div>
                        <div className="text-xs font-bold uppercase tracking-wide text-white/80">Students Placed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black" style={{ color: colors.oceanDeep }}>8+</div>
                        <div className="text-xs font-bold uppercase tracking-wide text-white/80">Partner Universities</div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-8 hidden lg:block z-30">
                <div className="flex flex-col items-center gap-3">
                    <span
                        className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[0.3em]"
                        style={{ color: colors.white }}
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