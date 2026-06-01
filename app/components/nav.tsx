"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const colors = {
    white: "#FFFFFF",
    prussianBlue: "#002856",
    oceanDeep: "#0A63B3",
    ink: "#0D1B2A",
    mist: "#F0F3F7",
    slate: "#8A96A8",
    border: "#DDE3EC",
  };

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.6-12.046c0-.213-.005-.425-.015-.636A9.936 9.936 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@600&display=swap');

        .nav-root {
          font-family: 'DM Sans', sans-serif;
        }

        .nav-logo-name {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .nav-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 13.5px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s ease;
          text-decoration: none;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #0A63B3;
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1.5px solid #002856;
          color: #002856;
          background: transparent;
          padding: 8px 20px;
          transition: background 0.2s ease, color 0.2s ease;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .nav-cta:hover {
          background: #002856;
          color: #ffffff;
        }

        .mobile-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 22px;
          letter-spacing: -0.01em;
          display: block;
          padding: 14px 0;
          border-bottom: 1px solid #DDE3EC;
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }

        .mobile-link:hover {
          padding-left: 8px;
          color: #0A63B3 !important;
        }

        .mobile-cta {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: block;
          text-align: center;
          padding: 14px 24px;
          background: #002856;
          color: #FFFFFF;
          text-decoration: none;
          margin-top: 24px;
          transition: background 0.2s ease;
        }

        .mobile-cta:hover {
          background: #0A63B3;
        }

        .divider-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #DDE3EC;
          display: inline-block;
          margin: 0 10px;
          vertical-align: middle;
        }
      `}</style>

      <nav
        className="nav-root fixed top-0 left-0 w-full z-50"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
          background: "#FFFFFF",
          borderBottom: `1px solid ${scrolled ? colors.border : "transparent"}`,
          boxShadow: scrolled ? "0 1px 12px rgba(0,40,86,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick} style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ position: "relative", width: "36px", height: "36px", flexShrink: 0 }}>
              <Image src="/smlogo.png" alt="Study Map Consultants" fill className="object-contain" priority />
            </div>
            <div>
              <div className="nav-logo-name" style={{ color: colors.prussianBlue, fontSize: "16px" }}>
                Study Map
              </div>
              <div className="nav-logo-sub" style={{ color: colors.oceanDeep }}>
                Consultants Ltd
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center" style={{ gap: "36px" }}>
            {navigationLinks.map((item) => (
              <Link key={item.name} href={item.href} className="nav-link" style={{ color: colors.prussianBlue }}>
                {item.name}
              </Link>
            ))}
            <span className="divider-dot" />
            <Link href="/contact" className="nav-cta">
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9"
            style={{ gap: "5px", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: colors.prussianBlue,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transformOrigin: "center",
                transform: isOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: colors.prussianBlue,
                transition: "opacity 0.3s ease",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: colors.prussianBlue,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transformOrigin: "center",
                transform: isOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="lg:hidden fixed inset-0 z-40"
        style={{
          background: "rgba(0,20,50,0.45)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
          backdropFilter: "blur(2px)",
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile panel */}
      <div
        className="lg:hidden fixed top-0 right-0 z-50 h-full"
        style={{
          width: "300px",
          maxWidth: "88vw",
          background: "#FFFFFF",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          padding: "0 32px",
          overflowY: "auto",
        }}
      >
        {/* Panel header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            borderBottom: `1px solid ${colors.border}`,
            flexShrink: 0,
          }}
        >
          <Link href="/" onClick={handleLinkClick} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ position: "relative", width: "30px", height: "30px" }}>
              <Image src="/smlogo.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="nav-logo-name" style={{ color: colors.prussianBlue, fontSize: "15px" }}>
              Study Map
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", color: colors.slate, padding: "4px" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, paddingTop: "32px" }}>
          {navigationLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className="mobile-link"
              style={{ color: colors.prussianBlue }}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" onClick={handleLinkClick} className="mobile-cta">
            Contact Us
          </Link>
        </nav>

        {/* Footer */}
        <div
          style={{
            borderTop: `1px solid ${colors.border}`,
            paddingTop: "24px",
            paddingBottom: "32px",
            flexShrink: 0,
          }}
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: colors.slate, marginBottom: "14px" }}>
            Follow Us
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${colors.border}`,
                  color: colors.prussianBlue,
                  transition: "background 0.2s, border-color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.prussianBlue;
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = colors.prussianBlue;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = colors.prussianBlue;
                  e.currentTarget.style.borderColor = colors.border;
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}