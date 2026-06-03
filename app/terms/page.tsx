"use client";

export default function TermsPage() {
  const colors = {
    white: "#FFFFFF",
    prussianBlue: "#002856",
    oceanDeep: "#0A63B3",
    ink: "#0D1B2A",
    mist: "#F0F3F7",
    border: "#DDE3EC",
    slate: "#8A96A8",
  };

  const lastUpdated = "June 1, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using StudyMap's website, services, and applications (collectively, the "Service"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the Service. We reserve the right to modify these terms at any time, and continued use of the Service constitutes acceptance of any changes.`
    },
    {
      title: "2. Description of Services",
      content: `StudyMap provides educational consulting, study abroad guidance, university application assistance, and related services. We strive to provide accurate and up-to-date information but do not guarantee specific outcomes including, but not limited to, university admissions, visa approvals, or scholarship awards.`
    },
    {
      title: "3. User Eligibility",
      content: `You must be at least 18 years old to use our services. By using the Service, you represent and warrant that you meet this age requirement. If you are under 18, you may only use the Service with the involvement of a parent or guardian.`
    },
    {
      title: "4. User Accounts",
      content: `When you create an account with us, you must provide accurate, complete, and current information. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.`
    },
    {
      title: "5. Fees and Payments",
      content: `Certain services may require payment of fees. All fees are non-refundable unless otherwise stated in writing. We reserve the right to change our fees at any time with reasonable notice. You agree to pay all charges incurred by you or any users of your account at the prices in effect when such charges are incurred.`
    },
    {
      title: "6. Intellectual Property",
      content: `All content, features, and functionality on the Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of StudyMap or its licensors and are protected by Kenyan and international copyright, trademark, and other intellectual property laws.`
    },
    {
      title: "7. User Content",
      content: `By submitting content to our Service, you grant StudyMap a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content. You represent that you own or have the necessary permissions to submit such content and that it does not violate any third-party rights.`
    },
    {
      title: "8. Prohibited Activities",
      content: `You agree not to: (a) use the Service for any unlawful purpose; (b) attempt to gain unauthorized access to any portion of the Service; (c) interfere with or disrupt the Service or servers; (d) use any automated means to access the Service; (e) impersonate any person or entity; (f) harass, abuse, or harm another person; (g) upload viruses or malicious code; (h) collect user information without consent.`
    },
    {
      title: "9. Third-Party Links",
      content: `Our Service may contain links to third-party websites or services that are not owned or controlled by StudyMap. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that StudyMap shall not be responsible for any damage or loss caused by such third-party services.`
    },
    {
      title: "10. Disclaimer of Warranties",
      content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. STUDYMAP DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES. TO THE FULLEST EXTENT PERMITTED BY LAW, STUDYMAP DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`
    },
    {
      title: "11. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL STUDYMAP BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE.`
    },
    {
      title: "12. Indemnification",
      content: `You agree to defend, indemnify, and hold harmless StudyMap and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your use of the Service, your violation of these Terms, or your violation of any rights of another party.`
    },
    {
      title: "13. Termination",
      content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Service will cease immediately. Sections which by their nature should survive termination shall survive.`
    },
    {
      title: "14. Governing Law",
      content: `These Terms shall be governed and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions. Any legal action arising out of these Terms shall be brought exclusively in the courts located in Eldoret, Kenya.`
    },
    {
      title: "15. Dispute Resolution",
      content: `Any dispute arising from or relating to these Terms shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot be resolved within 30 days, either party may submit the dispute to binding arbitration in Eldoret, Kenya, in accordance with the Arbitration Act of Kenya.`
    },
    {
      title: "16. Severability",
      content: `If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.`
    },
    {
      title: "17. Entire Agreement",
      content: `These Terms constitute the entire agreement between you and StudyMap regarding the use of the Service, superseding any prior agreements between you and StudyMap relating to the Service.`
    },
    {
      title: "18. Contact Information",
      content: `For questions about these Terms, please contact us at:`,
      contactInfo: true
    }
  ];

  return (
    <main style={{ backgroundColor: colors.white, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');
        
        .terms-content {
          font-family: 'DM Sans', sans-serif;
        }
        
        .terms-content h1 {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .terms-section h2 {
          font-family: 'DM Sans', sans-serif;
        }
        
        .terms-section p, .terms-section ul, .terms-section li {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <div style={{
        borderBottom: `1px solid ${colors.border}`,
        padding: "80px 24px 60px",
        backgroundColor: colors.mist
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <span style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: colors.oceanDeep,
            display: "block",
            marginBottom: "16px",
            fontFamily: "'DM Sans', sans-serif"
          }}>
            Legal Agreement
          </span>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "clamp(38px, 5vw, 56px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: colors.prussianBlue,
            marginBottom: "20px"
          }}>
            Terms & Conditions
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: colors.slate,
            letterSpacing: "0.01em"
          }}>
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="terms-content" style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 24px 100px"
      }}>
        {/* Introduction */}
        <div style={{
          marginBottom: "48px",
          padding: "30px",
          backgroundColor: colors.mist,
          border: `1px solid ${colors.border}`,
          borderRadius: "2px"
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            lineHeight: 1.7,
            color: colors.prussianBlue,
            marginBottom: 0
          }}>
            Welcome to StudyMap. These Terms and Conditions govern your use of our website, services, 
            and applications. By accessing or using our services, you agree to be bound by these terms. 
            Please read them carefully before proceeding.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="terms-section" style={{
            marginBottom: "40px",
            scrollMarginTop: "80px"
          }}>
            <h2 style={{
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: colors.prussianBlue,
              marginBottom: "16px",
              paddingBottom: "8px",
              borderBottom: `1px solid ${colors.border}`
            }}>
              {section.title}
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              lineHeight: 1.7,
              color: colors.slate,
              marginBottom: 0
            }}>
              {section.content}
            </p>
            {section.contactInfo && (
              <div style={{ marginTop: "16px" }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: colors.slate,
                  marginBottom: "8px"
                }}>
                  {section.content}
                </p>
                <div style={{ marginTop: "12px" }}>
                  <a
                    href="mailto:legal@studymap.com"
                    style={{
                      color: colors.oceanDeep,
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 500,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.prussianBlue}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.oceanDeep}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    legal@studymap.com
                  </a>
                  <br />
                  <a
                    href="tel:+254987654321"
                    style={{
                      color: colors.oceanDeep,
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 500,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "8px",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.prussianBlue}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.oceanDeep}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.054-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    +254 987 654 321
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Footer Note */}
        <div style={{
          marginTop: "60px",
          padding: "24px",
          borderTop: `1px solid ${colors.border}`,
          textAlign: "center"
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: colors.slate,
            lineHeight: 1.6,
            marginBottom: 0
          }}>
            By continuing to use StudyMap, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </main>
  );
}