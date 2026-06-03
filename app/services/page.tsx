import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/app/sanity";

type Service = {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  heroImage: any;
};

async function getServices(): Promise<Service[]> {
  const query = `
    *[_type == "service"] | order(title asc) {
      _id, title, slug, summary, heroImage
    }
  `;
  return await client.fetch(query);
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        .sp-page { font-family: 'DM Sans', sans-serif; }

        .sp-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .sp-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(44px, 6.5vw, 82px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: #FFFFFF;
        }

        .sp-h1 em {
          font-style: italic;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
        }

        .sp-section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(28px, 3.5vw, 42px);
          letter-spacing: -0.02em;
          color: #002856;
          line-height: 1.05;
        }

        /* Service cards */
        .sp-card {
          background: #FFFFFF;
          border: 1px solid #DDE3EC;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          height: 100%;
        }
        .sp-card:hover {
          border-color: #0A63B3;
          box-shadow: 0 8px 32px rgba(10,99,179,0.09);
        }
        .sp-card:hover .sp-card-img {
          transform: scale(1.04);
        }
        .sp-card:hover .sp-card-arrow {
          opacity: 1;
          transform: translate(0,0);
        }
        .sp-card:hover .sp-card-num {
          color: #0A63B3;
        }

        .sp-card-img {
          transition: transform 0.55s cubic-bezier(0.4,0,0.2,1);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sp-card-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.01em;
          color: #002856;
          margin-bottom: 8px;
        }

        .sp-card-summary {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
          line-height: 1.65;
          color: #8A96A8;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .sp-card-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: #DDE3EC;
          transition: color 0.2s ease;
          margin-bottom: 12px;
          display: block;
        }

        .sp-card-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0A63B3;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          transition: gap 0.2s ease;
          pointer-events: none;
        }
        
        /* Make the arrow in the link visible but non-clickable since the whole card is clickable */
        .sp-card-link svg {
          pointer-events: none;
        }

        .sp-card-arrow {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #002856;
          opacity: 0;
          transform: translate(4px, -4px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }

        /* CTA Button */
        .sp-cta-btn {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          background: #002856;
          color: #fff;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .sp-cta-btn:hover {
          background: #0A63B3;
        }

        /* Empty state */
        .sp-empty {
          border: 1px dashed #DDE3EC;
          padding: 64px 32px;
          text-align: center;
        }

        /* Hero scroll indicator */
        .sp-scroll-line {
          animation: spScrollDrop 2.2s ease-in-out infinite;
        }
        @keyframes spScrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0.3; }
        }

        /* Stagger reveal — CSS-only approach */
        .sp-card-wrap { animation: spFadeUp 0.5s ease both; }
        .sp-card-wrap:nth-child(1) { animation-delay: 0.05s; }
        .sp-card-wrap:nth-child(2) { animation-delay: 0.12s; }
        .sp-card-wrap:nth-child(3) { animation-delay: 0.19s; }
        .sp-card-wrap:nth-child(4) { animation-delay: 0.26s; }
        .sp-card-wrap:nth-child(5) { animation-delay: 0.33s; }
        .sp-card-wrap:nth-child(6) { animation-delay: 0.40s; }
        @keyframes spFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="sp-page">

        {/* ── Hero ── */}
        <section style={{ position: "relative", minHeight: "540px", display: "flex", alignItems: "center", overflow: "hidden", backgroundColor: "#0D1B2A" }}>

          {/* Background image */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image
              src="/global2.jpg"
              alt="Services hero background"
              fill
              className="object-cover"
              priority
              style={{ opacity: 0.22 }}
            />
          </div>

          {/* Left fade */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to right, #0D1B2A 35%, transparent 75%)",
          }} />

          {/* Top & bottom rules */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.07)", zIndex: 2 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.07)", zIndex: 2 }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 3, maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 100px", width: "100%" }}>
            <span className="sp-eyebrow" style={{ display: "block", marginBottom: "20px", color: "#4A9FE0" }}>
              What We Offer
            </span>
            <h1 className="sp-h1" style={{ marginBottom: "24px" }}>
              End-to-End<br />
              <em>Student Support.</em>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.48)",
              maxWidth: "420px",
              paddingLeft: "20px",
              borderLeft: "2px solid rgba(255,255,255,0.12)",
            }}>
              From career guidance and course selection through to visa support and pre-departure preparation — comprehensive assistance for every stage of your journey.
            </p>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: "absolute", bottom: "32px", right: "32px", zIndex: 3,
            display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "9px", fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
              writingMode: "vertical-lr",
            }}>Scroll</span>
            <div style={{ width: "1px", height: "44px", background: "rgba(255,255,255,0.1)", position: "relative", overflow: "hidden" }}>
              <div className="sp-scroll-line" style={{ position: "absolute", inset: 0, background: "#0A63B3" }} />
            </div>
          </div>
        </section>

        {/* ── Services grid ── */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 100px" }}>

          {/* Section header */}
          <div style={{
            display: "flex", flexDirection: "column", gap: "12px",
            marginBottom: "56px",
            paddingBottom: "40px",
            borderBottom: "1px solid #DDE3EC",
          }}>
            <span className="sp-eyebrow" style={{ color: "#0A63B3" }}>Our Services</span>
            <h2 className="sp-section-heading">
              Explore What<br />
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#0A63B3" }}>
                We Can Do For You
              </span>
            </h2>
          </div>

          {services.length === 0 ? (
            <div className="sp-empty">
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                color: "#8A96A8", lineHeight: 1.6,
              }}>
                No services found. Add services in Sanity Studio to display them here.
              </p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1px",
              background: "#DDE3EC",
              border: "1px solid #DDE3EC",
            }}>
              {services.map((service, i) => (
                <div key={service._id} className="sp-card-wrap">
                  <Link 
                    href={`/services/${service.slug.current}`} 
                    className="sp-card"
                    style={{ height: "100%", display: "block" }}
                  >
                    {/* Image */}
                    {service.heroImage && (
                      <div style={{ height: "200px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                        <Image
                          src={urlFor(service.heroImage).url()}
                          alt={service.title}
                          fill
                          className="sp-card-img"
                        />
                        {/* Subtle dark overlay on image */}
                        <div style={{ position: "absolute", inset: 0, background: "rgba(0,20,50,0.18)" }} />

                        {/* Arrow badge */}
                        <div className="sp-card-arrow">
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Body */}
                    <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <span className="sp-card-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="sp-card-title">{service.title}</div>
                      <p className="sp-card-summary">{service.summary}</p>
                      <div className="sp-card-link">
                        Learn More
                        <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA strip */}
          <div style={{
            marginTop: "64px",
            paddingTop: "40px",
            borderTop: "1px solid #DDE3EC",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "#8A96A8",
              maxWidth: "360px",
              lineHeight: 1.6,
            }}>
              Not sure where to start? Book a free consultation and we'll help you find the right path.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="sp-cta-btn">
                Book a Consultation
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}