"use client";

export default function WhyChooseUs() {
    const colors = {
        white: "#FFFEFE",
        dustyDenim: "#738DAF",
        oceanDeep: "#0A63B3",
        prussianBlue: "#002856",
        paleSlate: "#C7CDD8",
    };

    const features = [
        {
            title: "Trusted Student Guidance",
            description:
                "Accurate and reliable information to help students make informed academic and career decisions.",
        },
        {
            title: "End-to-End Support",
            description:
                "From counselling to visa guidance and pre-departure preparation, we support students at every stage.",
        },
    ];

    return (
        <section
            className="w-full py-16 md:py-8 lg:py-8 bg-white/50"
        >
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12 max-w-screen-xl mx-auto">
                    {/* Image Section - Left side on desktop */}
                    <div className="sm:w-1/2 p-4 sm:p-6 lg:p-8">
                        <div className="image object-center text-center relative">
                            <div className="relative inline-block">
                                {/* Decorative accent behind image */}
                                <div
                                    className="absolute -top-4 -left-4 w-24 h-24 rounded-full -z-10"
                                    style={{ backgroundColor: colors.paleSlate, opacity: 0.5 }}
                                />
                                <div
                                    className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full -z-10"
                                    style={{ backgroundColor: colors.oceanDeep, opacity: 0.1 }}
                                />
                                <img
                                    src="https://i.imgur.com/WbQnbas.png"
                                    alt="Study Map Consultants - Why choose us illustration"
                                    className="max-w-full h-auto object-contain"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content Section - Right side on desktop */}
                    <div className="sm:w-1/2 p-4 sm:p-6 lg:p-8">
                        <div className="text-left">
                            {/* Section label with underline accent */}
                            <div className="inline-block mb-4">
                                <span
                                    className="text-sm font-bold uppercase tracking-wider"
                                    style={{ color: colors.oceanDeep }}
                                >
                                    Why Choose Us
                                </span>
                                <div
                                    className="h-0.5 w-12 mt-1"
                                    style={{ backgroundColor: colors.oceanDeep }}
                                />
                            </div>

                            {/* Main heading */}
                            <h2
                                className="my-4 font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight"
                                style={{ color: colors.prussianBlue }}
                            >
                                Your Success,{" "}
                                <span style={{ color: colors.oceanDeep }}>Our Mission</span>
                            </h2>

                            {/* Lead paragraph */}
                            <p
                                className="text-base sm:text-lg mb-8 leading-relaxed"
                                style={{ color: colors.prussianBlue, opacity: 0.8 }}
                            >
                                We provide accurate and reliable information to help students make
                                informed academic and career decisions. Our team screens applicants
                                for Genuine Student eligibility and supports every stage from
                                counselling to pre-departure preparation.
                            </p>

                            {/* Features list */}
                            <div className="space-y-6 mt-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 group">
                                        {/* Icon / bullet point */}
                                        <div className="flex-shrink-0 mt-1">
                                            <div
                                                className="w-5 h-5 rounded-full transition-all duration-300 group-hover:scale-110"
                                                style={{ backgroundColor: colors.oceanDeep }}
                                            />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-lg md:text-xl font-bold mb-2"
                                                style={{ color: colors.prussianBlue }}
                                            >
                                                {feature.title}
                                            </h3>
                                            <p
                                                className="text-sm md:text-base leading-relaxed"
                                                style={{ color: colors.prussianBlue, opacity: 0.7 }}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA link (optional) */}
                            <div className="mt-10">
                                <button
                                    className="group flex items-center gap-3 font-bold uppercase tracking-wide text-sm transition-all duration-300"
                                    style={{ color: colors.oceanDeep }}
                                >
                                    <span>Learn more about our approach</span>
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}