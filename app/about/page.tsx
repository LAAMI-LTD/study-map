"use client";

import { motion, Variants } from "framer-motion";
import AboutCTA from "./components/AboutCTA";
import AboutHeader from "./components/AboutHeader";
import CTASection from "./components/CTASection";
import MissionValues from "./components/MissionValues";
import WhyHow from "./components/WhyHow";
import { colors } from "./components/colors";
import DirectorsMessage from "./components/directors";
import MapsSection from "../components/map";

export default function About() {
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
    <section
      className="relative min-h-screen flex flex-col overflow-hidden md:pt-0"
      style={{ backgroundColor: colors.white }}
    >
      <div className="relative w-full z-30">
        <AboutHeader />
        {/* <MissionValues /> */}
        <WhyHow />
        <AboutCTA />
        <DirectorsMessage />
        <CTASection
          fadeUp={fadeUp}
          staggerContainer={staggerContainer}
          imageVariants={imageVariants}
          contentVariants={contentVariants}
        />
      </div>

      <MapsSection />
      <style jsx>{`
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