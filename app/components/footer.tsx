"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const colors = {
        white: "#FFFEFE",
        dustyDenim: "#738DAF",
        oceanDeep: "#0A63B3",
        prussianBlue: "#002856",
        paleSlate: "#C7CDD8",
    };

    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { name: "About Us", href: "/about" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Contact Us", href: "/contact" },
    ];

    const blogLinks = [
        { name: "Study in Australia Guide", href: "/blog/study-guide" },
        { name: "Visa Application Tips", href: "/blog/visa-tips" },
        { name: "Scholarship Opportunities", href: "/blog/scholarships" },
        { name: "Student Life in Australia", href: "/blog/student-life" },
        { name: "See More Articles", href: "/blog" },
    ];

    const socialLinks = [
        {
            name: "Facebook",
            href: "https://facebook.com",
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
            ),
        },
        {
            name: "Twitter",
            href: "https://twitter.com",
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://instagram.com",
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com",
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "https://youtube.com",
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="relative w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/australia.jpg"
                    alt="Australia background"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
                <div className="flex flex-wrap justify-between -mx-4">
                    {/* Company Info Column */}
                    <div className="px-4 my-4 w-full xl:w-1/3">
                        <div className="relative h-20 w-20 sm:h-24 sm:w-24 mb-6">
                            <Image
                                src="/smlogo.png"
                                alt="Study Map Consultants Logo"
                                fill
                                priority
                                sizes="(max-width: 640px) 224px, 288px"
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p
                            className="text-sm leading-relaxed text-justify"
                            style={{ color: colors.paleSlate, opacity: 0.85 }}
                        >
                            Study Map Consultants Ltd provides expert guidance for East African
                            students seeking quality education in Australia. We support students
                            at every stage — from counselling to visa guidance and pre-departure
                            preparation.
                        </p>
                    </div>

                    {/* Company Links Column */}
                    <div className="px-4 my-4 w-full sm:w-auto">
                        <div className="mb-4">
                            <h2
                                className="inline-block text-xl font-bold pb-3 mb-2 border-b-2"
                                style={{
                                    color: colors.white,
                                    borderBottomColor: colors.oceanDeep,
                                }}
                            >
                                Company
                            </h2>
                        </div>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="transition-colors duration-200 text-sm"
                                        style={{ color: colors.paleSlate, opacity: 0.8 }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = colors.oceanDeep;
                                            e.currentTarget.style.opacity = "1";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = colors.paleSlate;
                                            e.currentTarget.style.opacity = "0.8";
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blog Links Column */}
                    <div className="px-4 my-4 w-full sm:w-auto">
                        <div className="mb-4">
                            <h2
                                className="inline-block text-xl font-bold pb-3 mb-2 border-b-2"
                                style={{
                                    color: colors.white,
                                    borderBottomColor: colors.oceanDeep,
                                }}
                            >
                                Resources
                            </h2>
                        </div>
                        <ul className="space-y-2">
                            {blogLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="transition-colors duration-200 text-sm"
                                        style={{ color: colors.paleSlate, opacity: 0.8 }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = colors.oceanDeep;
                                            e.currentTarget.style.opacity = "1";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = colors.paleSlate;
                                            e.currentTarget.style.opacity = "0.8";
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect With Us Column */}
                    <div className="px-4 my-4 w-full sm:w-auto xl:w-1/4">
                        <div className="mb-4">
                            <h2
                                className="inline-block text-xl font-bold pb-3 mb-2 border-b-2"
                                style={{
                                    color: colors.white,
                                    borderBottomColor: colors.oceanDeep,
                                }}
                            >
                                Connect With Us
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                                    style={{
                                        border: `1px solid ${colors.paleSlate}`,
                                        color: colors.paleSlate,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = colors.oceanDeep;
                                        e.currentTarget.style.color = colors.oceanDeep;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = colors.paleSlate;
                                        e.currentTarget.style.color = colors.paleSlate;
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <div>
                            <p className="text-xs" style={{ color: colors.paleSlate, opacity: 0.6 }}>
                                Email: info@studymap.com
                            </p>
                            <p className="text-xs mt-1" style={{ color: colors.paleSlate, opacity: 0.6 }}>
                                Phone: +254 123 456 789
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                className="relative z-10 w-full py-5"
                style={{ backgroundColor: `rgba(0, 40, 86, 0.85)`, borderTop: `1px solid ${colors.oceanDeep}20` }}
            >
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
                        <p className="text-xs" style={{ color: colors.paleSlate, opacity: 0.7 }}>
                            Copyright © {currentYear} Study Map Consultants Ltd. All rights reserved.
                        </p>
                        <p className="text-xs" style={{ color: colors.paleSlate, opacity: 0.7 }}>
                            Designed with care for students worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}