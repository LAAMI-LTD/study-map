"use client";

export default function PrivacyPage() {
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
      title: "1. Information We Collect",
      content: `We collect information that you provide directly to us, including but not limited to:`,
      list: [
        "Name and contact information (email address, phone number, mailing address)",
        "Educational background and academic history",
        "Application materials and supporting documents",
        "Communication preferences and feedback",
        "Payment information for paid services"
      ]
    },
    {
      title: "2. How We Collect Information",
      content: `We collect information through various methods:`,
      list: [
        "Direct submissions through our website forms and applications",
        "Email and telephone communications with our team",
        "Cookies and similar tracking technologies",
        "Third-party services you connect to our platform",
        "Analytics and usage data from your interactions"
      ]
    },
    {
      title: "3. How We Use Your Information",
      content: `We use the collected information to:`,
      list: [
        "Provide, maintain, and improve our educational consulting services",
        "Process your university and scholarship applications",
        "Communicate with you about your applications and our services",
        "Send you relevant updates, newsletters, and marketing communications (with your consent)",
        "Analyze usage patterns to enhance user experience",
        "Comply with legal obligations and protect against fraud"
      ]
    },
    {
      title: "4. Legal Basis for Processing",
      content: `We process your personal information based on one or more of the following legal grounds:`,
      list: [
        "Your consent to specific processing activities",
        "Performance of a contract with you (e.g., providing consulting services)",
        "Compliance with legal obligations under Kenyan law",
        "Legitimate interests of StudyMap that do not override your rights"
      ]
    },
    {
      title: "5. Sharing Your Information",
      content: `We may share your information with:`,
      list: [
        "Partner universities and educational institutions (with your consent)",
        "Service providers who assist our operations (e.g., payment processors, email services)",
        "Professional advisors, including lawyers and auditors",
        "Law enforcement or government agencies when required by law",
        "Successors in the event of a merger or acquisition"
      ],
      note: "We do not sell your personal information to third parties."
    },
    {
      title: "6. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information, including encryption, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      title: "7. Data Retention",
      content: `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When your information is no longer needed, we will securely delete or anonymize it.`
    },
    {
      title: "8. Your Rights",
      content: `Under Kenyan data protection laws and the General Data Protection Regulation (GDPR), you have the following rights:`,
      list: [
        "Access: Request a copy of your personal information",
        "Rectification: Correct inaccurate or incomplete information",
        "Erasure: Request deletion of your information (subject to legal obligations)",
        "Restriction: Limit how we use your information",
        "Portability: Receive your information in a structured format",
        "Objection: Object to certain processing activities",
        "Withdraw Consent: Withdraw previously given consent"
      ]
    },
    {
      title: "9. Cookies and Tracking Technologies",
      content: `We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Essential cookies cannot be disabled as they are necessary for basic website functionality.`
    },
    {
      title: "10. Children's Privacy",
      content: `Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18 without parental consent, we will take steps to delete that information.`
    },
    {
      title: "11. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than Kenya, including countries that may have different data protection laws. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses approved by relevant authorities.`
    },
    {
      title: "12. Third-Party Links",
      content: `Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.`
    },
    {
      title: "13. Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.`
    },
    {
      title: "14. Contact Us",
      content: `If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact our Data Protection Officer at:`,
      contactInfo: true
    }
  ];

  return (
    <main style={{ backgroundColor: colors.white, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap');
        
        .privacy-content {
          font-family: 'DM Sans', sans-serif;
        }
        
        .privacy-content h1 {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .privacy-section h2 {
          font-family: 'DM Sans', sans-serif;
        }
        
        .privacy-section p, .privacy-section ul, .privacy-section li {
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
            Your Privacy Matters
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
            Privacy Policy
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
      <div className="privacy-content" style={{
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
            At StudyMap, we are committed to protecting your privacy and safeguarding your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and protect your information when you use 
            our website and services. Please read this policy carefully.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="privacy-section" style={{
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
            
            {!section.list ? (
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                lineHeight: 1.7,
                color: colors.slate,
                marginBottom: 0
              }}>
                {section.content}
              </p>
            ) : (
              <>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: colors.slate,
                  marginBottom: "12px"
                }}>
                  {section.content}
                </p>
                <ul style={{
                  marginLeft: "20px",
                  marginBottom: "12px",
                  paddingLeft: "0"
                }}>
                  {section.list.map((item, i) => (
                    <li key={i} style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: colors.slate,
                      marginBottom: "8px"
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
                {section.note && (
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: colors.oceanDeep,
                    marginTop: "8px",
                    fontStyle: "italic"
                  }}>
                    {section.note}
                  </p>
                )}
              </>
            )}

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
                  <div style={{ marginBottom: "12px" }}>
                    <strong style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: colors.prussianBlue,
                      display: "block",
                      marginBottom: "8px"
                    }}>
                      Data Protection Officer:
                    </strong>
                    <a
                      href="mailto:dpo@studymap.com"
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
                      dpo@studymap.com
                    </a>
                  </div>
                  <div>
                    <strong style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: colors.prussianBlue,
                      display: "block",
                      marginBottom: "8px"
                    }}>
                      Mailing Address:
                    </strong>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: colors.slate,
                      margin: 0
                    }}>
                      StudyMap Legal Department<br />
                      Sirgoi Plaza, Eldoret<br />
                      Kenya
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Additional Rights Note */}
        <div style={{
          marginTop: "40px",
          padding: "24px",
          backgroundColor: colors.mist,
          border: `1px solid ${colors.border}`,
          borderRadius: "2px"
        }}>
          <h3 style={{
            fontSize: "14px",
            fontWeight: 600,
            color: colors.prussianBlue,
            marginBottom: "12px",
            fontFamily: "'DM Sans', sans-serif"
          }}>
            How to Exercise Your Rights
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            lineHeight: 1.6,
            color: colors.slate,
            marginBottom: 0
          }}>
            To exercise any of your data protection rights, please submit a request to our Data Protection Officer at dpo@studymap.com. 
            We will respond to your request within 30 days. You may be required to verify your identity before we process your request.
          </p>
        </div>

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
            By using StudyMap, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information in accordance with this policy.
          </p>
        </div>
      </div>
    </main>
  );
}