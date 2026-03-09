import PageNavigation from "@/components/shared/PageNavigation";
import PageHero from "@/components/shared/PageHero";
import PageFooter from "@/components/shared/PageFooter";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using the SK Financial Services website and services, you agree to be bound by these Terms and Conditions. If you do not accept these terms, please discontinue use of our services immediately.",
  },
  {
    title: "2. Services Description",
    content: "SK Financial Services provides personalised financial advisory services including mutual fund guidance, insurance planning, retirement planning, and NRI financial services. Our advisors are AMFI registered and IRDAI certified. All advice is tailored to individual circumstances.",
  },
  {
    title: "3. Investment Disclaimer",
    content: "Mutual fund investments are subject to market risks. Past performance is not indicative of future returns. Please read all scheme-related documents carefully before investing. Insurance products are subject to terms and conditions of the respective insurance companies.",
  },
  {
    title: "4. Client Responsibilities",
    content: "Clients are responsible for providing accurate and complete information to receive appropriate financial advice. Any changes in financial circumstances, risk appetite, or goals should be communicated promptly to your assigned advisor.",
  },
  {
    title: "5. Confidentiality",
    content: "All client information shared with SK Financial Services is treated as strictly confidential and used solely for providing financial advisory services. We comply with all applicable data protection and financial services regulations.",
  },
  {
    title: "6. Limitation of Liability",
    content: "SK Financial Services shall not be liable for any investment losses arising from market fluctuations, economic changes, or global events. Our advisors provide guidance based on available information and regulatory frameworks at the time of advice.",
  },
  {
    title: "7. Regulatory Compliance",
    content: "SK Financial Services operates under AMFI registration and IRDAI certification. We comply with SEBI regulations, applicable tax laws, FEMA guidelines for NRI services, and all other relevant financial regulations in India.",
  },
  {
    title: "8. Modifications to Terms",
    content: "We reserve the right to update these Terms and Conditions at any time. Continued use of our services following any changes constitutes acceptance of the revised terms. We recommend reviewing this page periodically.",
  },
  {
    title: "9. Contact & Grievance Redressal",
    content: "For any queries, disputes, or grievances related to our services, please contact us at info@skfinancialservices.com or +91 98765 43210. We aim to resolve all concerns within 7 business days.",
  },
];

export default function TermsConditionsPage() {
  return (
    <main style={{ background: "#001F3E" }}>
      <PageNavigation />
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms & Conditions", href: "/TermsConditions" }]}
      />

      <section style={{ background: "#001F3E", padding: "80px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 40, padding: "16px 20px", background: "rgba(255,215,22,0.06)", border: "1px solid rgba(255,215,22,0.15)", borderRadius: 10 }}>
            <strong style={{ color: "#FFD716" }}>Last Updated:</strong> January 1, 2026. These Terms and Conditions govern your use of SK Financial Services. By using our services, you acknowledge having read and agreed to these terms.
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
