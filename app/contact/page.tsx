"use client";

import Link from "next/link";

export default function Contact() {
    const colors = {
        white: "#FFFEFE",
        dustyDenim: "#738DAF",
        oceanDeep: "#0A63B3",
        prussianBlue: "#002856",
        paleSlate: "#87b1ff26",
        brightMarine: "#00AEEF",
    };

    return (
        <section
            className="relative min-h-screen flex items-center justify-start px-6 md:px-12 overflow-hidden pt-[120px] md:pt-0"
            style={{ backgroundColor: colors.white }}
        >
            {/* Background large text */}
            <div
                className="absolute top-1/2 left-0 -translate-y-1/2 text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] font-black italic tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap"
                style={{ color: colors.paleSlate, opacity: 0.4 }}
            >
                CONNECT
            </div>

            {/* Right side decorative shapes */}
            <div className="absolute right-0 top-0 w-full lg:w-7/12 h-[50vh] lg:h-full z-10 overflow-hidden">
                <div
                    className="absolute -top-20 -right-20 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full z-0"
                    style={{ backgroundColor: colors.prussianBlue, opacity: 0.08 }}
                />
                <div
                    className="absolute bottom-0 left-0 w-40 h-40 lg:w-64 lg:h-64 z-0"
                    style={{ backgroundColor: colors.oceanDeep, opacity: 0.06 }}
                />
                <div
                    className="absolute top-1/2 right-10 w-32 h-32 lg:w-48 lg:h-48 z-0"
                    style={{ backgroundColor: colors.dustyDenim, opacity: 0.1 }}
                />
            </div>

            {/* Main content */}
            <div className="relative w-full  z-30 mt-[35vh] lg:mt-0">
                {/* Header */}
                <div className=" mb-12">
                    <div
                        className="inline-flex items-center gap-3 mb-8 px-5 py-2.5"
                        style={{
                            backgroundColor: colors.paleSlate,
                            borderLeft: `4px solid ${colors.oceanDeep}`,
                        }}
                    >
                        <span
                            className="font-bold tracking-widest text-[10px] md:text-xs uppercase"
                            style={{ color: colors.prussianBlue }}
                        >
                            Get In Touch
                        </span>
                    </div>

                    <h1 className="text-[3.5rem] sm:text-[5rem] md:text-7xl lg:text-[8rem] font-black leading-[0.9] tracking-tighter mb-6 uppercase">
                        <span style={{ color: colors.prussianBlue }}>REACH</span>
                        {" "}
                        <span
                            className="stroke-text inline-block"
                            style={{ WebkitTextStrokeColor: colors.prussianBlue }}
                        >
                            OUT
                        </span>
                        {" "}
                        <span style={{ color: colors.oceanDeep }}>TODAY</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl font-medium leading-relaxed pl-6 max-w-2xl"
                        style={{
                            color: colors.prussianBlue,
                            borderLeft: `4px solid ${colors.oceanDeep}`,
                            opacity: 0.85,
                        }}
                    >
                        Our team is here to guide you through every step of the process.
                        Reach out for support with applications, visa guidance,
                        pre-departure preparation, and more.
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid gap-6 md:gap-8 lg:grid-cols-2 mb-12">
                    {/* Contact Information Card */}
                    <div
                        className="group rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
                        style={{
                            backgroundColor: colors.paleSlate,
                            borderLeft: `4px solid ${colors.oceanDeep}`,
                        }}
                    >
                        <div
                            className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                            style={{ backgroundColor: colors.white }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                    fill={colors.oceanDeep}
                                    fillOpacity="0.7"
                                />
                                <circle cx="12" cy="9" r="3" fill={colors.white} />
                            </svg>
                        </div>
                        <h2
                            className="mb-4 text-2xl md:text-3xl font-bold"
                            style={{ color: colors.prussianBlue }}
                        >
                            Contact Information
                        </h2>
                        <div
                            className="mb-4 space-y-2 text-base leading-relaxed"
                            style={{ color: colors.prussianBlue, opacity: 0.8 }}
                        >
                            <p className="font-semibold" style={{ color: colors.prussianBlue }}>
                                Study Map Consultants Ltd
                            </p>
                            <p>Sirgoi Plaza, Oginga Odinga Street</p>
                            <p>Eldoret, Kenya</p>
                            <p>+254 724 801 455</p>
                        </div>
                        <div className="pt-4">
                            <p className="text-sm" style={{ color: colors.prussianBlue, opacity: 0.8 }}>
                                Email:{" "}
                                <a
                                    href="mailto:studymapconsultants@gmail.com"
                                    className="font-medium transition-colors duration-200"
                                    style={{ color: colors.oceanDeep }}
                                >
                                    studymapconsultants@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Partner Support Card */}
                    <div
                        className="group rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
                        style={{
                            backgroundColor: colors.paleSlate,
                            borderLeft: `4px solid ${colors.dustyDenim}`,
                        }}
                    >
                        <div
                            className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                            style={{ backgroundColor: colors.white }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                                    stroke={colors.oceanDeep}
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                                <path
                                    d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"
                                    stroke={colors.brightMarine}
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                                <path
                                    d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
                                    fill={colors.oceanDeep}
                                    fillOpacity="0.7"
                                />
                            </svg>
                        </div>
                        <h2
                            className="mb-4 text-2xl md:text-3xl font-bold"
                            style={{ color: colors.prussianBlue }}
                        >
                            Partner Support
                        </h2>
                        <p
                            className="mb-4 text-base leading-relaxed"
                            style={{ color: colors.prussianBlue, opacity: 0.8 }}
                        >
                            We support Australian colleges and institutions seeking reliable
                            recruitment support across East Africa with ethical,
                            compliance-focused processes.
                        </p>
                        <ul className="space-y-2 text-sm">
                            {[
                                "Targeted student recruitment",
                                "Genuine Student screening",
                                "Financial eligibility assessment",
                                "Student counselling support",
                                "Ethical recruitment practices",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="mt-0.5 flex-shrink-0"
                                    >
                                        <path
                                            d="M20 6L9 17L4 12"
                                            stroke={colors.oceanDeep}
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span style={{ color: colors.prussianBlue, opacity: 0.8 }}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12">
                    <Link
                        href="/apply"
                        className="group flex items-center justify-center gap-4 px-8 py-4 transition-all font-black uppercase tracking-wider text-sm"
                        style={{
                            backgroundColor: colors.oceanDeep,
                            color: colors.white,
                        }}
                    >
                        <span>Apply Now</span>
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
                        href="/consultation"
                        className="px-8 py-4 transition-all font-black uppercase tracking-wider text-sm text-center"
                        style={{
                            border: `2px solid ${colors.oceanDeep}`,
                            color: colors.oceanDeep,
                            backgroundColor: "transparent",
                        }}
                    >
                        Schedule Consultation
                    </Link>
                </div>

                {/* FAQ Section */}
                <div
                    className="rounded-2xl p-6 md:p-8"
                    style={{
                        backgroundColor: colors.paleSlate,
                        borderLeft: `4px solid ${colors.prussianBlue}`,
                    }}
                >
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-6"
                        style={{ color: colors.prussianBlue }}
                    >
                        Frequently Asked Questions
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                q: "Which countries do you support?",
                                a: "We primarily support students from East Africa seeking education opportunities in Australia.",
                            },
                            {
                                q: "Do you help with student visas?",
                                a: "Yes. We provide guidance on student visa application processes and required documentation.",
                            },
                            {
                                q: "Can you help me choose a course?",
                                a: "Absolutely. We provide personalized counselling based on your academic background and career goals.",
                            },
                            {
                                q: "Do you work with Australian institutions?",
                                a: "Yes. We collaborate with partner colleges and institutions in Australia.",
                            },
                        ].map((faq, i) => (
                            <div key={i}>
                                <p
                                    className="mb-2 font-bold"
                                    style={{ color: colors.prussianBlue }}
                                >
                                    {faq.q}
                                </p>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: colors.prussianBlue, opacity: 0.7 }}
                                >
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer / Back to Home */}
                <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm" style={{ color: colors.prussianBlue, opacity: 0.6 }}>
                        Empowering East African students through global education opportunities.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-black uppercase tracking-wider transition-all"
                        style={{
                            backgroundColor: colors.prussianBlue,
                            color: colors.white,
                        }}
                    >
                        Back to Home
                    </Link>
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