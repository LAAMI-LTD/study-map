"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const colors = {
    white: "#FFFFFF",
    prussianBlue: "#002856",
    oceanDeep: "#0A63B3",
    ink: "#0D1B2A",
    mist: "#F0F3F7",
    border: "#DDE3EC",
    slate: "#8A96A8",
  };

  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const resourceLinks = [
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
      icon: <svg width="13" height="13" viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <svg width="13" height="13" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <svg width="13" height="13" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>,
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: <svg width="13" height="13" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305z" /></svg>,
    },
  ];

  return (
    <footer style={{ position: "relative", overflow: "hidden", backgroundColor: colors.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        .ft-root { font-family: 'DM Sans', sans-serif; }

        /* Background image */
        .ft-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .ft-bg img {
          object-fit: cover;
          opacity: 0.07;
        }

        /* Rules */
        .ft-top-rule {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: rgba(255,255,255,0.07);
          z-index: 2;
        }

        /* Content */
        .ft-inner {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 24px 0;
        }

        /* Top strip: logo + tagline + socials */
        .ft-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 48px;
        }

        .ft-brand { display: flex; flex-direction: column; gap: 16px; max-width: 300px; }

        .ft-logo-row { display: flex; align-items: center; gap: 12px; text-decoration: none; }

        .ft-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 18px;
          color: ${colors.white};
          letter-spacing: -0.01em;
          line-height: 1.1;
        }
        .ft-brand-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        .ft-tagline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 13px;
          line-height: 1.75;
          color: rgba(255,255,255,0.7);
          max-width: 260px;
        }

        /* Socials */
        .ft-socials { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
        .ft-social {
          width: 34px; height: 34px;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .ft-social:hover {
          border-color: ${colors.oceanDeep};
          color: ${colors.oceanDeep};
        }

        /* Link columns grid */
        .ft-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 48px 40px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 0;
        }

        .ft-col-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
          display: block;
        }

        .ft-link {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          padding: 5px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .ft-link:last-child { border-bottom: none; }
        .ft-link:hover {
          color: ${colors.white};
          padding-left: 4px;
        }

        /* Contact column */
        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .ft-contact-item:last-child { border-bottom: none; }
        .ft-contact-icon { color: rgba(255,255,255,0.5); flex-shrink: 0; margin-top: 1px; }
        .ft-contact-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 1px;
        }
        .ft-contact-val {
          font-size: 12px;
          color: rgba(255,255,255,0.65);
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        a.ft-contact-val:hover { color: ${colors.white}; }

        /* Bottom bar */
        .ft-bottom {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ft-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          font-weight: 400;
        }
      `}</style>

      {/* Background image */}
      <div className="ft-bg">
        <Image src="/australia.jpg" alt="" fill quality={80} aria-hidden />
      </div>
      <div className="ft-top-rule" />

      <div className="ft-root ft-inner">
        {/* Top: brand + socials */}
        <div className="ft-top">
          <div className="ft-brand">
            <Link href="/" className="ft-logo-row">
              <div style={{ position: "relative", width: "32px", height: "32px", flexShrink: 0 }}>
                <Image src="/smlogo.png" alt="Study Map Consultants" fill className="object-contain" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
              <div>
                <div className="ft-brand-name">Study Map</div>
                <div className="ft-brand-sub">Consultants Ltd</div>
              </div>
            </Link>
            <p className="ft-tagline">
              Expert guidance for East African students seeking quality education in Australia — from first consultation to arrival.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}>Follow Us</span>
            <div className="ft-socials">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} className="ft-social" target="_blank" rel="noopener noreferrer" title={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="ft-links-grid">

          {/* Company */}
          <div>
            <span className="ft-col-label">Company</span>
            {companyLinks.map((l) => (
              <Link key={l.name} href={l.href} className="ft-link">{l.name}</Link>
            ))}
          </div>

          {/* Resources */}
          <div>
            <span className="ft-col-label">Resources</span>
            {resourceLinks.map((l) => (
              <Link key={l.name} href={l.href} className="ft-link">{l.name}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <span className="ft-col-label">Contact</span>
            <div className="ft-contact-item">
              <span className="ft-contact-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 14-8 14S4 15.25 4 10a8 8 0 0 1 8-8z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <div>
                <div className="ft-contact-label">Address</div>
                <div className="ft-contact-val">Sirgoi Plaza, Eldoret, Kenya</div>
              </div>
            </div>
            <div className="ft-contact-item">
              <span className="ft-contact-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.054-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div className="ft-contact-label">Phone</div>
                <a href="tel:+254724801455" className="ft-contact-val">+254 724 801 455</a>
              </div>
            </div>
            <div className="ft-contact-item">
              <span className="ft-contact-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div className="ft-contact-label">Email</div>
                <a href="mailto:studymapconsultants@gmail.com" className="ft-contact-val">studymapconsultants@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div className="ft-root ft-bottom">
          <span className="ft-copy">
            © {currentYear} Study Map Consultants Ltd. All rights reserved.
          </span>

          <span className="ft-copy">
            Empowering East African students through global education.
          </span>

          <a
            href="https://laamilabs.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="ft-copy"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span>Designed & Developed by</span>
            <Image
              src="https://laamilabs.co.ke/_next/image?url=%2Flaami.png&w=96&q=75"
              alt="LAAMI Ltd"
              width={80}
              height={20}
              style={{
                width: "auto",
                height: "20px",
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}