"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string; external?: boolean }[];
}

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/AboutPage" },
  {
    label: "Services",
    dropdown: [
      { label: "Investment Portfolio", href: "/investment-portfolio" },
      { label: "Insurance Policies", href: "/insurance-planning" },
      { label: "Wealth Basket", href: "/wealth-management-0" },
      { label: "Targeted Investment", href: "/targeted-investment" },
      { label: "Tax Optimization", href: "/tax-planning" },
    ],
  },
  {
    label: "Products",
    dropdown: [
      { label: "Mutual Funds", href: "/mutual-fund" },
      { label: "Insurance", href: "/general-insurance" },
      { label: "PMS / AIF", href: "/pms" },
      { label: "Direct Equity", href: "/unlisted-equity" },
      { label: "Fixed Deposit", href: "/fixed-deposit" },
      { label: "Bonds", href: "/bonds" },
      { label: "Smallcase", href: "/smallcase" },
      { label: "LiquiLoans", href: "/liquiloans" },
    ],
  },
  { label: "Calculators", href: "/calculator" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Downloads",
    dropdown: [
      { label: "Common Application Form", href: "https://www.prudentcorporate.com/applicationform", external: true },
      { label: "FMP Application Form", href: "https://www.prudentcorporate.com/fmpapplicationform", external: true },
      { label: "NFO Application Form", href: "https://www.prudentcorporate.com/nfoapplicationform", external: true },
      { label: "FD Application Form", href: "https://www.prudentcorporate.com/fdapplicationform", external: true },
      { label: "KYC Form", href: "https://www.prudentcorporate.com/kycform", external: true },
      { label: "Income Tax Forms", href: "https://www.prudentcorporate.com/incometaxforms", external: true },
      { label: "FATCA & Other Forms", href: "https://www.prudentcorporate.com/fatcaandotherform", external: true },
      { label: "Transaction Slip", href: "https://www.prudentcorporate.com/transactionslips", external: true },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export default function PageNavigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});
  const [mobileDropdown, setMobileDropdown] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdown = (label: string, open: boolean) => {
    setDropdownOpen((prev) => ({ ...prev, [label]: open }));
  };

  const handleMobileDropdown = (label: string) => {
    setMobileDropdown((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${progress}%`,
          height: 2,
          zIndex: 999,
          background: "linear-gradient(90deg,#FFD716,#E6C200,#FFD716)",
          transition: "width 0.15s linear",
          pointerEvents: "none",
        }}
      />

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          background: scrolled ? "rgba(0,31,62,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,215,22,0.15)" : "none",
          height: scrolled ? 68 : 84,
          transition: "all 0.35s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        {/* Logo */}
        <Link href="/home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 9,
              background: "linear-gradient(135deg,#FFD716,#B8960C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 700,
              fontSize: 18,
              color: "#001F3E",
              flexShrink: 0,
            }}
          >
            SK
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 700, fontSize: 20, color: "#FFFFFF", lineHeight: 1.2 }}>
              SK <span style={{ color: "#FFD716" }}>Financial</span>
            </span>
            <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 9, letterSpacing: "0.3em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>
              SERVICES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="sk-desktop-nav" style={{ display: "none", gap: 2, alignItems: "center" }}>
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => handleDropdown(link.label, true)}
                  onMouseLeave={() => handleDropdown(link.label, false)}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "rgba(255,255,255,0.85)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13,
                      padding: "7px 12px",
                      borderRadius: 6,
                      cursor: "pointer",
                      background: dropdownOpen[link.label] ? "rgba(255,215,22,0.08)" : "transparent",
                      transition: "background 0.2s, color 0.2s",
                      userSelect: "none",
                    }}
                  >
                    {link.label}
                    <ChevronDown size={13} style={{ color: "#FFD716" }} />
                  </span>
                  {dropdownOpen[link.label] && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: "#001F3E",
                        border: "1px solid rgba(255,215,22,0.2)",
                        borderRadius: 12,
                        padding: 8,
                        minWidth: 220,
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                        zIndex: 200,
                      }}
                    >
                      {link.dropdown.map((item) =>
                        item.external ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "rgba(255,255,255,0.85)",
                              fontSize: 13,
                              padding: "9px 14px",
                              borderRadius: 8,
                              display: "block",
                              textDecoration: "none",
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.color = "#FFD716";
                              e.currentTarget.style.background = "rgba(255,215,22,0.08)";
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            style={{
                              color: pathname === item.href ? "#FFD716" : "rgba(255,255,255,0.85)",
                              fontSize: 13,
                              padding: "9px 14px",
                              borderRadius: 8,
                              display: "block",
                              textDecoration: "none",
                              background: pathname === item.href ? "rgba(255,215,22,0.06)" : "transparent",
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.color = "#FFD716";
                              e.currentTarget.style.background = "rgba(255,215,22,0.08)";
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.color = pathname === item.href ? "#FFD716" : "rgba(255,255,255,0.85)";
                              e.currentTarget.style.background = pathname === item.href ? "rgba(255,215,22,0.06)" : "transparent";
                            }}
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href!}
                style={{
                  color: pathname === link.href ? "#FFD716" : "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  padding: "7px 12px",
                  borderRadius: 6,
                  textDecoration: "none",
                  background: pathname === link.href ? "rgba(255,215,22,0.06)" : "transparent",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#FFD716";
                  e.currentTarget.style.background = "rgba(255,215,22,0.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = pathname === link.href ? "#FFD716" : "rgba(255,255,255,0.85)";
                  e.currentTarget.style.background = pathname === link.href ? "rgba(255,215,22,0.06)" : "transparent";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: phone + login + CTA (desktop), hamburger (mobile) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="tel:+917506715835"
            className="sk-desktop-nav"
            style={{ display: "none", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }}
          >
            <Phone size={15} style={{ color: "#FFD716" }} />
            +91 7506715835
          </a>
          <Link
            href="/LoginPage"
            className="sk-desktop-nav"
            style={{
              display: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#FFFFFF",
              padding: "7px 15px",
              borderRadius: 7,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              background: "transparent",
              transition: "border 0.2s, color 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(255,215,22,0.4)";
              e.currentTarget.style.color = "#FFD716";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            Login
          </Link>
          <Link
            href="/contact-us"
            className="sk-desktop-nav"
            style={{
              display: "none",
              background: "linear-gradient(135deg,#FFD716,#E6C200)",
              color: "#001F3E",
              fontWeight: 700,
              fontSize: 13,
              padding: "10px 20px",
              borderRadius: 8,
              boxShadow: "0 4px 20px rgba(255,215,22,0.3)",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,215,22,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,215,22,0.3)";
            }}
          >
            Book Free Call
          </Link>
          {/* Mobile hamburger */}
          <button
            className="sk-mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "#FFD716",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: scrolled ? 68 : 84,
            left: 0,
            width: "100%",
            background: "#001F3E",
            borderTop: "1px solid rgba(255,215,22,0.15)",
            padding: "16px 24px 28px",
            zIndex: 98,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            maxHeight: "calc(100vh - 84px)",
            overflowY: "auto",
          }}
        >
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} style={{ marginBottom: 4 }}>
                  <button
                    onClick={() => handleMobileDropdown(link.label)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "#FFD716",
                      fontWeight: 600,
                      fontSize: 15,
                      padding: "13px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      style={{
                        color: "#FFD716",
                        transform: mobileDropdown[link.label] ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>
                  {mobileDropdown[link.label] && (
                    <div style={{ paddingLeft: 12 }}>
                      {link.dropdown.map((item) =>
                        item.external ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "rgba(255,255,255,0.75)",
                              fontSize: 14,
                              padding: "10px 0",
                              borderBottom: "1px solid rgba(255,255,255,0.04)",
                              display: "block",
                              textDecoration: "none",
                            }}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              color: pathname === item.href ? "#FFD716" : "rgba(255,255,255,0.75)",
                              fontSize: 14,
                              padding: "10px 0",
                              borderBottom: "1px solid rgba(255,255,255,0.04)",
                              display: "block",
                              textDecoration: "none",
                            }}
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href!}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: pathname === link.href ? "#FFD716" : "rgba(255,255,255,0.85)",
                  fontSize: 15,
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: 20,
              background: "linear-gradient(135deg,#FFD716,#E6C200)",
              color: "#001F3E",
              fontWeight: 700,
              fontSize: 15,
              padding: "16px 0",
              borderRadius: 10,
              textAlign: "center",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(255,215,22,0.35)",
            }}
          >
            Book Free Consultation
          </Link>
        </div>
      )}

      <style suppressHydrationWarning>{`
        @media (min-width: 1024px) {
          .sk-desktop-nav { display: flex !important; }
          .sk-mobile-nav { display: none !important; }
        }
        @media (max-width: 1023px) {
          .sk-desktop-nav { display: none !important; }
          .sk-mobile-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}
