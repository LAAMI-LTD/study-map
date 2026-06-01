"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

type Props = {
  fadeUp: Variants;
  staggerContainer: Variants;
  imageVariants: Variants;
  contentVariants: Variants;
};

export default function CTASection({
  fadeUp,
  staggerContainer,
  imageVariants,
  contentVariants,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#F0F3F7] dark:bg-[#0D1B2A]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');
        .cta-section { font-family: 'DM Sans', sans-serif; }
        .cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.0;
          letter-spacing: -0.02em;
        }
        .cta-heading em {
          font-style: italic;
          font-weight: 300;
        }
      `}</style>

      {/* Video — low opacity, respects light/dark */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        >
          <source src="/streak.webm" type="video/webm" />
          <source src="/streak.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top border rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#DDE3EC] dark:bg-white/10 z-10" />

      <motion.div
        className="cta-section relative z-10 mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20 lg:items-center">

          {/* Left — image */}
          <motion.div
            className="flex-shrink-0 lg:w-[38%]"
            variants={imageVariants}
          >
            <div className="relative mx-auto max-w-[300px] lg:mx-0 lg:max-w-full">
              {/* Subtle inset shadow frame */}
              <div
                className="absolute -inset-3 -z-10"
                style={{ transform: "translate(6px, 6px)" }}
              />
              <img
                src="/card.png"
                alt="Study abroad card"
                className="h-auto w-full"
              />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={contentVariants}
          >
            {/* Eyebrow */}
            <motion.span
              className="inline-block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#0A63B3] dark:text-[#4A9FE0] mb-5"
              variants={fadeUp}
            >
              Ready to Begin?
            </motion.span>

            {/* Headline */}
            <motion.h2
              className="cta-heading text-[clamp(32px,4vw,52px)] text-[#002856] dark:text-white mb-6"
              variants={fadeUp}
            >
              Take the First Step<br />
              Toward <em>Global Education.</em>
            </motion.h2>

            {/* Body */}
            <motion.p
              className="text-sm font-light leading-relaxed text-[#4B5563] dark:text-white/70 max-w-[380px] mx-auto lg:mx-0 mb-10"
              variants={fadeUp}
            >
              Get in touch with our team today. We'll help you navigate every step — from choosing the right institution to arriving ready on the other side of the world.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeUp}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-[11px] font-semibold tracking-[0.1em] uppercase
                    bg-[#002856] text-white
                    dark:bg-white dark:text-[#002856]
                    hover:bg-[#0A63B3] dark:hover:bg-[#DDE3EC]
                    transition-colors duration-200"
                >
                  Contact Us Today
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-[11px] font-semibold tracking-[0.1em] uppercase
                    border border-[#DDE3EC] text-[#002856]
                    dark:border-white/20 dark:text-white/70
                    hover:border-[#002856] hover:text-[#002856]
                    dark:hover:border-white/50 dark:hover:text-white
                    transition-colors duration-200"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom border rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#DDE3EC] dark:bg-white/10 z-10" />
    </section>
  );
}