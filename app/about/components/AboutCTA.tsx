import Link from "next/link";
import { colors } from "./colors";

export default function AboutCTA() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t">
      <p
        className="text-sm"
        style={{ color: colors.prussianBlue, opacity: 0.6 }}
      >
        Interested in working with us or applying to study in Australia?
      </p>
      <Link
        href="/contact"
        className="group flex items-center justify-center gap-3 px-6 py-2.5 text-sm font-black uppercase tracking-wider transition-all"
        style={{
          backgroundColor: colors.oceanDeep,
          color: colors.white,
        }}
      >
        <span>Get in touch</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
}
