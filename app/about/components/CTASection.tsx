"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import AnimatedBackground from "../../components/animatedbg";

type Props = {
  fadeUp: Variants;
  staggerContainer: Variants;
  imageVariants: Variants;
  contentVariants: Variants;
};

export default function CTASection({ fadeUp, staggerContainer, imageVariants, contentVariants }: Props) {
  return (
    <motion.section
      className="relative overflow-hidden bg-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <AnimatedBackground intensity="vivid" />
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Left side - Image with subtle animation */}
          <motion.div className="flex-shrink-0 lg:w-2/5" variants={imageVariants}>
            <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-full">
              <img
                src="/card.png"
                alt="Study abroad card"
                className="h-auto w-full rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right side - Content with subtle animation */}
          <motion.div className="flex-1 text-center lg:text-left" variants={contentVariants}>
            <motion.p className="mx-auto mt-4 max-w-2xl text-base font-bold text-white sm:text-xl lg:mx-0" variants={fadeUp}>
              Get in touch with our team today and take the first step toward your education in Abroad.
            </motion.p>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
