"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Hero from "./components/hero";
import WhyChooseUs from "./components/why";
import Services from "./components/services";
import AnimatedBackground from "./components/animatedbg";
import CTASection from "./about/components/CTASection";
import MissionValues from "./about/components/MissionValues";
import MapsSection from "./components/map";

export const dynamic = "force-static";

export default function Home() {
  // Fade-up animation variants with proper easing type
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-white">
      {/* ── Hero ── needs relative + overflow-hidden so shapes stay contained */}
      <motion.section
        className="relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <AnimatedBackground intensity="vivid" />
        <div className="relative z-10">
          <Hero />
        </div>
      </motion.section>

      {/* <motion.section
        className="relative py-8 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <MissionValues />
      </motion.section> */}

      {/* ── Services Grid ── mid-tone palette background */}
      <motion.section
        className="relative overflow-hidden"
        style={{ background: "#F4F6F9" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <AnimatedBackground intensity="normal" />
        <div className="relative z-10">
          <Services />
        </div>
      </motion.section>
      <CTASection
        fadeUp={fadeUp}
        staggerContainer={staggerContainer}
        imageVariants={imageVariants}
        contentVariants={contentVariants}
      />
      {/* ── Why Choose Us ── lighter treatment on the light section */}
      <motion.section
        className="relative overflow-hidden bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <AnimatedBackground intensity="subtle" />
        <div className="relative z-10">
          <WhyChooseUs />
        </div>
      </motion.section>

      {/* ── CTA ── dark section, shapes pop nicely */}

      <MapsSection />
    </main>
  );
}