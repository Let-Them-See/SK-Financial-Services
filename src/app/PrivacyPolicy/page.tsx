import PageNavigation from "@/components/shared/PageNavigation";
import PageHero from "@/components/shared/PageHero";
import PageFooter from "@/components/shared/PageFooter";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly to us, such as name, email address, phone number, and financial preferences when you request a consultation, subscribe to our newsletter, or interact with our services. We also collect information automatically through cookies and similar technologies.",
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the information to provide personalised financial advisory services, communicate with you about your portfolio, send relevant financial insights and market updates, improve our services, and comply with regulatory requirements under AMFI and IRDAI guidelines.",
  },
  {
    title: "3. Sharing of Information",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share information with regulatory authorities (AMFI, IRDAI, SEBI) as required by law, with service providers operating under strict confidentiality agreements, and with your consent for specific services.",
  },
  {
    title: "4. Data Security",
    content: "We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your personal and financial information from unauthorised access, disclosure, alteration, or destruction.",
  },
  {
    title: "5. Cookies & Tracking",
    content: "Our website uses cookies to enhance your browsing experience, analyse website traffic, and personalise content. You can control cookie settings through your browser. Disabling cookies may affect certain website features.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at the details provided below.",
  },
  {
    title: "7. Contact Us",
    content: "For any privacy-related queries, please contact SK Financial Services at info@skfinancialservices.com or call +91 98765 43210. Our registered office is located in Mumbai, Maharashtra, India.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: "#001F3E" }}>
      <PageNavigation />
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/PrivacyPolicy" }]}
      />

      <section style={{ background: "#001F3E", padding: "80px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 40, padding: "16px 20px", background: "rgba(255,215,22,0.06)", border: "1px solid rgba(255,215,22,0.15)", borderRadius: 10 }}>
            <strong style={{ color: "#FFD716" }}>Last Updated:</strong> January 1, 2026. This Privacy Policy applies to SK Financial Services and governs the collection, use, and protection of your personal information.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {SECTIONS.map((section) => (
              <div key={section.title} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 32 }}>
                <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 24, fontWeight: 700, color: "#FFD716", marginBottom: 12 }}>
                  {section.title}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
