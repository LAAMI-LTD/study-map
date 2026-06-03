import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/app/sanity";
import { PortableText } from "@portabletext/react";
import ContactForm from "./contactform";

type Service = {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  fullDescription?: any[];
  heroImage: any;
  icon?: any;
  contactMessage?: string;
};

async function getService(slug: string): Promise<Service | null> {
  const query = `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      summary,
      fullDescription,
      heroImage,
      icon,
      contactMessage
    }
  `;
  
  const params = { slug };
  return await client.fetch(query, params);
}

async function getAllServiceSlugs() {
  const query = `
    *[_type == "service" && defined(slug.current)] {
      "slug": slug.current
    }
  `;
  const services = await client.fetch(query);
  return services;
}

export async function generateStaticParams() {
  const services = await getAllServiceSlugs();
  return services.map((service: { slug: string }) => ({
    slug: service.slug,
  }));
}

// Portable Text components
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="sd-body-text" style={{ marginBottom: "1.5rem" }}>{children}</p>,
    h2: ({ children }: any) => <h2 className="sd-section-heading" style={{ marginTop: "2rem", marginBottom: "1rem" }}>{children}</h2>,
    h3: ({ children }: any) => <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1.25rem", color: "#002856", marginTop: "1.5rem", marginBottom: "0.75rem" }}>{children}</h3>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="sd-feature-list" style={{ marginBottom: "1.5rem" }}>{children}</ul>,
    number: ({ children }: any) => <ol style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }} className="sd-body-text">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li style={{ padding: "8px 0" }}>{children}</li>,
  },
  types: {
    image: ({ value }: any) => (
      <div style={{ margin: "2rem 0", position: "relative", height: "auto", minHeight: "300px", aspectRatio: "16/9", borderRadius: "8px", overflow: "hidden" }}>
        <Image
          src={urlFor(value).url()}
          alt={value.alt || "Service image"}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = await getService(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .sd-page { 
          font-family: 'DM Sans', sans-serif; 
          overflow-x: hidden;
        }

        .sd-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .sd-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(36px, 8vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: #FFFFFF;
        }

        .sd-section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(28px, 5vw, 42px);
          letter-spacing: -0.02em;
          color: #002856;
          line-height: 1.05;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .sd-section-heading {
            margin-bottom: 32px;
          }
        }

        .sd-body-text {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 14px;
          line-height: 1.65;
          color: #5A6878;
        }

        @media (min-width: 768px) {
          .sd-body-text {
            font-size: 15px;
            line-height: 1.75;
          }
        }

        .sd-feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sd-feature-list li {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
          line-height: 1.6;
          color: #5A6878;
          padding: 10px 0;
          border-bottom: 1px solid #DDE3EC;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        @media (min-width: 768px) {
          .sd-feature-list li {
            font-size: 14px;
            padding: 12px 0;
            gap: 12px;
          }
        }

        .sd-feature-list li::before {
          content: "→";
          color: #0A63B3;
          font-weight: 600;
          flex-shrink: 0;
        }

        .sd-back-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 11px;
          color: #0A63B3;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s ease;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .sd-back-link {
            font-size: 12px;
            margin-bottom: 32px;
          }
        }

        .sd-back-link:hover {
          gap: 10px;
        }

        /* Hero Section */
        .sd-hero {
          position: relative;
          min-height: 400px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #0D1B2A;
        }

        @media (min-width: 768px) {
          .sd-hero {
            min-height: 480px;
          }
        }

        .sd-hero-content {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .sd-hero-content {
            padding: 100px 24px;
          }
        }

        @media (min-width: 768px) {
          .sd-hero-content {
            padding: 120px 24px 80px;
          }
        }

        .sd-hero-title {
          margin-bottom: 20px;
          max-width: 100%;
        }

        @media (min-width: 768px) {
          .sd-hero-title {
            margin-bottom: 24px;
            max-width: 800px;
          }
        }

        .sd-hero-summary {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255,255,255,0.55);
          max-width: 100%;
          padding-left: 16px;
          border-left: 2px solid rgba(255,255,255,0.12);
        }

        @media (min-width: 640px) {
          .sd-hero-summary {
            font-size: 15px;
            max-width: 500px;
          }
        }

        @media (min-width: 768px) {
          .sd-hero-summary {
            font-size: 16px;
            max-width: 580px;
            padding-left: 20px;
          }
        }

        /* Main Content Layout */
        .sd-main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 20px;
        }

        @media (min-width: 640px) {
          .sd-main-content {
            padding: 60px 24px;
          }
        }

        @media (min-width: 768px) {
          .sd-main-content {
            padding: 80px 24px;
          }
        }

        .sd-grid {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        @media (min-width: 1024px) {
          .sd-grid {
            display: grid;
            grid-template-columns: 1fr 380px;
            gap: 64px;
          }
        }

        /* Right Column - Sticky on Desktop */
        .sd-form-column {
          width: 100%;
        }

        @media (min-width: 1024px) {
          .sd-form-column {
            position: sticky;
            top: 24px;
            align-self: start;
          }
        }

        /* Responsive Images */
        .sd-hero-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .sd-hero-image img {
          object-fit: cover;
          opacity: 0.22;
        }

        /* Gradient Overlay */
        .sd-gradient-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to right, #0D1B2A 35%, transparent 75%);
        }

        @media (max-width: 640px) {
          .sd-gradient-overlay {
            background: linear-gradient(to right, #0D1B2A 50%, rgba(13,27,42,0.8) 100%);
          }
        }

        /* Rules */
        .sd-rule-top, .sd-rule-bottom {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255,255,255,0.07);
          z-index: 2;
        }

        .sd-rule-top { top: 0; }
        .sd-rule-bottom { bottom: 0; }
      `}</style>

      <div className="sd-page">
        {/* Hero Section */}
        <section className="sd-hero">
          {service.heroImage && (
            <div className="sd-hero-image">
              <Image
                src={urlFor(service.heroImage).url()}
                alt={service.title}
                fill
                priority
              />
            </div>
          )}

          <div className="sd-gradient-overlay" />
          <div className="sd-rule-top" />
          <div className="sd-rule-bottom" />

          <div className="sd-hero-content">
            <Link href="/services" className="sd-back-link">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1M6 2L1 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Services
            </Link>
            <span className="sd-eyebrow" style={{ display: "block", marginBottom: "16px", color: "#4A9FE0" }}>
              Our Service
            </span>
            <h1 className="sd-h1 sd-hero-title">
              {service.title}
            </h1>
            <p className="sd-hero-summary">
              {service.summary}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="sd-main-content">
          <div className="sd-grid">
            
            {/* Left Column - Overview */}
            <div>
              {service.fullDescription && service.fullDescription.length > 0 && (
                <>
                  <h2 className="sd-section-heading">Overview</h2>
                  <div>
                    <PortableText 
                      value={service.fullDescription} 
                      components={portableTextComponents}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Right Column - Contact Form */}
            <div className="sd-form-column">
              <ContactForm 
                serviceTitle={service.title} 
                contactMessage={service.contactMessage}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}