"use client";

// AnimatedBackground.tsx
// Education & abroad-themed animated shapes: graduation caps, books, globes, planes, compass, maps

import { useEffect, useRef } from "react";

// ─── New Palette ─────────────────────────────────────────────────────────────────
const PALETTE = {
  duskBlue:       "#2D4971",
  brightMarine:   "#2170BA",
  oceanDeep:      "#0A63B3",
  twilightIndigo: "#0D2A57",
  platinum:       "#EDEEF2",
};

// ─── Education & Abroad-themed shape definitions ──────────────────────────────────

const SHAPES: Shape[] = [
  // Graduation Cap - top left
  {
    id: "grad-cap-tl",
    style: {
      position: "absolute",
      top: "8%",
      left: "5%",
      animation: "abg-drift-a 18s ease-in-out infinite",
    },
    svg: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L1 9L12 15L21 10.5V17H23V9L12 3Z" fill={PALETTE.brightMarine} fillOpacity="0.5"/>
        <path d="M5 13V17L12 21L19 17V13L12 17L5 13Z" fill={PALETTE.oceanDeep} fillOpacity="0.4"/>
        <rect x="10" y="15" width="4" height="6" fill={PALETTE.duskBlue} fillOpacity="0.3"/>
      </svg>
    ),
  },

  // Open Book - center left
  {
    id: "book-cl",
    style: {
      position: "absolute",
      top: "45%",
      left: "2%",
      animation: "abg-float 14s ease-in-out infinite",
    },
    svg: (
      <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6C4 5 5 4 6 4H10V14L7 12L4 14V6Z" fill={PALETTE.twilightIndigo} fillOpacity="0.5"/>
        <path d="M20 6C20 5 19 4 18 4H14V14L17 12L20 14V6Z" fill={PALETTE.brightMarine} fillOpacity="0.4"/>
        <path d="M10 4H14V20H10V4Z" fill={PALETTE.oceanDeep} fillOpacity="0.3"/>
      </svg>
    ),
  },

  // Paper Plane (study abroad) - top right
  {
    id: "plane-tr",
    style: {
      position: "absolute",
      top: "15%",
      right: "8%",
      animation: "abg-fly 20s ease-in-out infinite",
    },
    svg: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16L14 9L21 4L16 11L21 16Z" fill={PALETTE.oceanDeep} fillOpacity="0.6"/>
        <path d="M3 12L12 9L9 12L12 15L3 12Z" fill={PALETTE.brightMarine} fillOpacity="0.5"/>
        <path d="M12 9L14 4L16 11L12 9Z" fill={PALETTE.duskBlue} fillOpacity="0.4"/>
        <path d="M9 12L3 12L5 14L9 12Z" fill={PALETTE.twilightIndigo} fillOpacity="0.3"/>
      </svg>
    ),
  },

  // Globe/Compass Rose (international) - bottom right
  {
    id: "globe-br",
    style: {
      position: "absolute",
      bottom: "12%",
      right: "6%",
      animation: "abg-spin-cw 25s linear infinite",
    },
    svg: (
      <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke={PALETTE.brightMarine} strokeWidth="1.5" fill="none" strokeOpacity="0.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke={PALETTE.oceanDeep} strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke={PALETTE.duskBlue} strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        <path d="M12 3L12 21M3 12L21 12" stroke={PALETTE.twilightIndigo} strokeWidth="0.8" strokeOpacity="0.3"/>
        <circle cx="12" cy="12" r="2" fill={PALETTE.oceanDeep} fillOpacity="0.4"/>
      </svg>
    ),
  },

  // Passport/Visa Stamp - bottom left
  {
    id: "passport-bl",
    style: {
      position: "absolute",
      bottom: "20%",
      left: "8%",
      animation: "abg-drift-b 16s ease-in-out infinite",
    },
    svg: (
      <svg width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke={PALETTE.duskBlue} strokeWidth="1.5" fill="none" strokeOpacity="0.5"/>
        <rect x="6" y="7" width="12" height="10" rx="1" fill={PALETTE.oceanDeep} fillOpacity="0.2"/>
        <path d="M8 11L11 14L16 9" stroke={PALETTE.brightMarine} strokeWidth="1.2" fill="none" strokeOpacity="0.6"/>
        <circle cx="17" cy="17" r="2" stroke={PALETTE.twilightIndigo} strokeWidth="1" fill="none" strokeOpacity="0.4"/>
      </svg>
    ),
  },

  // Map Pin/Location (destination) - center right
  {
    id: "pin-cr",
    style: {
      position: "absolute",
      top: "50%",
      right: "3%",
      animation: "abg-pulse 12s ease-in-out infinite",
    },
    svg: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={PALETTE.oceanDeep} fillOpacity="0.4"/>
        <circle cx="12" cy="9" r="3" fill={PALETTE.brightMarine} fillOpacity="0.6"/>
        <path d="M12 2L12 6M12 12L12 14" stroke={PALETTE.platinum} strokeWidth="0.8" strokeOpacity="0.5"/>
      </svg>
    ),
  },

  // Diploma/Scroll (achievement) - top center
  {
    id: "diploma-tc",
    style: {
      position: "absolute",
      top: "25%",
      left: "42%",
      animation: "abg-float 15s ease-in-out infinite reverse",
    },
    svg: (
      <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="3" width="14" height="18" rx="1" stroke={PALETTE.duskBlue} strokeWidth="1.2" fill="none" strokeOpacity="0.5"/>
        <path d="M8 8H16M8 12H13M8 16H12" stroke={PALETTE.oceanDeep} strokeWidth="1" fill="none" strokeOpacity="0.4"/>
        <path d="M19 6L21 8L19 10" stroke={PALETTE.brightMarine} strokeWidth="1" fill="none" strokeOpacity="0.5"/>
        <path d="M19 14L21 16L19 18" stroke={PALETTE.brightMarine} strokeWidth="1" fill="none" strokeOpacity="0.5"/>
      </svg>
    ),
  },

  // Compass (direction/guidance) - bottom center
  {
    id: "compass-bc",
    style: {
      position: "absolute",
      bottom: "8%",
      left: "45%",
      animation: "abg-spin-ccw 30s linear infinite",
    },
    svg: (
      <svg width="65" height="65" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke={PALETTE.twilightIndigo} strokeWidth="1.2" fill="none" strokeOpacity="0.4"/>
        <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill={PALETTE.brightMarine} fillOpacity="0.3"/>
        <path d="M12 6L13 11L18 12L13 13L12 18L11 13L6 12L11 11L12 6Z" fill={PALETTE.oceanDeep} fillOpacity="0.5"/>
      </svg>
    ),
  },

  // Connecting Dots (pathway/network) - scattered
  {
    id: "dots-network",
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      animation: "abg-fade 10s ease-in-out infinite",
    },
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none">
        <circle cx="150" cy="200" r="4" fill={PALETTE.brightMarine} fillOpacity="0.5">
          <animate attributeName="r" values="2;6;2" dur="6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="650" cy="350" r="4" fill={PALETTE.oceanDeep} fillOpacity="0.5">
          <animate attributeName="r" values="2;6;2" dur="7s" repeatCount="indefinite"/>
        </circle>
        <circle cx="400" cy="150" r="4" fill={PALETTE.duskBlue} fillOpacity="0.4">
          <animate attributeName="r" values="2;5;2" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="550" cy="500" r="4" fill={PALETTE.twilightIndigo} fillOpacity="0.4">
          <animate attributeName="r" values="2;5;2" dur="8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="250" cy="450" r="4" fill={PALETTE.brightMarine} fillOpacity="0.4">
          <animate attributeName="r" values="2;4;2" dur="6.5s" repeatCount="indefinite"/>
        </circle>
        {/* Connecting lines */}
        <line x1="150" y1="200" x2="400" y2="150" stroke={PALETTE.oceanDeep} strokeWidth="0.5" strokeOpacity="0.2">
          <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="400" y1="150" x2="650" y2="350" stroke={PALETTE.brightMarine} strokeWidth="0.5" strokeOpacity="0.2">
          <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="7s" repeatCount="indefinite"/>
        </line>
        <line x1="650" y1="350" x2="550" y2="500" stroke={PALETTE.duskBlue} strokeWidth="0.5" strokeOpacity="0.2">
          <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite"/>
        </line>
        <line x1="550" y1="500" x2="250" y2="450" stroke={PALETTE.twilightIndigo} strokeWidth="0.5" strokeOpacity="0.2">
          <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="8s" repeatCount="indefinite"/>
        </line>
        <line x1="250" y1="450" x2="150" y2="200" stroke={PALETTE.oceanDeep} strokeWidth="0.5" strokeOpacity="0.2">
          <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="6.5s" repeatCount="indefinite"/>
        </line>
      </svg>
    ),
  },
];

// ─── CSS keyframes ───────────────────────────────────────────────────────────
const KEYFRAMES = `
@keyframes abg-drift-a {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33%       { transform: translate(15px, -12px) rotate(3deg); }
  66%       { transform: translate(-10px, 15px) rotate(-3deg); }
}
@keyframes abg-drift-b {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(-20px, 18px); }
}
@keyframes abg-spin-cw {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes abg-spin-ccw {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}
@keyframes abg-float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-20px); }
}
@keyframes abg-fly {
  0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
  25%       { transform: translate(30px, -20px) rotate(15deg); opacity: 0.8; }
  50%       { transform: translate(60px, 0px) rotate(0deg); opacity: 0.4; }
  75%       { transform: translate(30px, 20px) rotate(-15deg); opacity: 0.7; }
}
@keyframes abg-pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50%       { transform: scale(1.15); opacity: 0.9; }
}
@keyframes abg-fade {
  0%, 100% { opacity: 0.3; }
  50%       { opacity: 0.7; }
}
`;

// ─── Types ────────────────────────────────────────────────────────────────────
interface Shape {
  id: string;
  style: React.CSSProperties;
  svg?: React.ReactNode;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AnimatedBackground({
  intensity = "normal",
}: {
  intensity?: "subtle" | "normal" | "vivid";
}) {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (document.getElementById("abg-keyframes")) return;
    const el = document.createElement("style");
    el.id = "abg-keyframes";
    el.textContent = KEYFRAMES;
    document.head.appendChild(el);
    styleRef.current = el;
    return () => {
      if (el.parentNode) el.remove();
    };
  }, []);

  const opacityMap = { subtle: 0.5, normal: 0.75, vivid: 1 };
  const globalOpacity = opacityMap[intensity];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        opacity: globalOpacity,
      }}
    >
      {SHAPES.map(({ id, style, svg }) => (
        <div key={id} style={style}>
          {svg}
        </div>
      ))}
    </div>
  );
}