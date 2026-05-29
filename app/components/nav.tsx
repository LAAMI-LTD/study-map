"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Color palette from design system
  const colors = {
    white: "#FFFEFE",
    dustyDenim: "#738DAF",
    oceanDeep: "#0A63B3",
    prussianBlue: "#002856",
    paleSlate: "#C7CDD8",
  };

  // Centralized navigation links for easy edits and updates
  const navigationLinks = [
    { name: "Home", href: "/" },
    // { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Testimonials", href: "/testimonials" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.6-12.046c0-.213-.005-.425-.015-.636A9.936 9.936 0 0024 4.59z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.3-.536-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.241 2.86.118 3.16.768.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      )
    }
  ];

  // Handle scroll hide/show
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Scroll down - hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      }
      // Scroll up - show navbar
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-sm`}
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          borderBottom: `1px solid ${colors.paleSlate}`,
          boxShadow: lastScrollY > 10 ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto py-2.5 md:py-3">
          {/* Logo - Left side */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={handleLinkClick}>
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Image
                src="/smlogo.png"
                alt="Study Map Consultants Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col ">
              <span
                className="self-center text-sm sm:text-base font-bold whitespace-nowrap"
                style={{ color: colors.prussianBlue }}
              >
                Study Map Consultants
              </span>
            </div>
          </Link>

          {/* Right side - Desktop Navigation & Contact Button */}
          <div className="flex items-center lg:order-2">
            {/* Contact Button - Desktop */}
            <Link href="/contact" className="hidden sm:block">
              <button
                className="text-white font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-all duration-300 hover:shadow-lg mr-2 lg:mr-0"
                style={{
                  backgroundColor: colors.oceanDeep,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.prussianBlue;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.oceanDeep;
                }}
              >
                Contact
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none"
              style={{ color: colors.prussianBlue }}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors duration-300"
                    style={{ color: colors.prussianBlue }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.oceanDeep;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.prussianBlue;
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{ backgroundColor: `${colors.prussianBlue}CC` }}
        onClick={() => setIsOpen(false)}
      >
        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{ backgroundColor: colors.white }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: colors.paleSlate }}>
            <Link href="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
              <div className="relative h-8 w-8">
                <Image
                  src="/smlogo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-sm" style={{ color: colors.prussianBlue }}>
                Study Map
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg"
              style={{ color: colors.prussianBlue }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col p-6 gap-2">
            {navigationLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="block py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 hover:bg-gray-50"
                style={{ color: colors.prussianBlue }}
              >
                {item.name}
              </Link>
            ))}
            {/* Contact Link in Mobile Menu */}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block py-3 px-4 text-base font-medium rounded-lg transition-all duration-300"
              style={{ backgroundColor: colors.oceanDeep, color: colors.white }}
            >
              Contact
            </Link>
          </div>

          {/* Menu Footer with Social Links */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t" style={{ borderColor: colors.paleSlate }}>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: colors.paleSlate, color: colors.prussianBlue }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}