"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Nos Résidences", path: "/residences" },
  { name: "Nos Logements", path: "/logements" },
  { 
    name: "Informations", 
    submenu: [
      { name: "Services", path: "/services" },
      { name: "Avis Clients", path: "/avis" },
      { name: "À propos", path: "/a-propos" },
    ]
  },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const shouldApplyScrolledStyle = isScrolled || !isHomePage || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${shouldApplyScrolledStyle ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/logo-trans.png"
            alt="Résidence Rincón d'Alicia Logo"
            width={240}
            height={80}
            className={styles.logo}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={link.submenu ? styles.dropdownItem : ""}>
                {link.submenu ? (
                  <>
                    <div className={styles.navLink}>
                      {link.name} <ChevronDown size={14} className={styles.chevron} />
                    </div>
                    <ul className={styles.dropdownMenu}>
                      {link.submenu.map((sublink) => (
                        <li key={sublink.path}>
                          <Link href={sublink.path} className={styles.dropdownLink}>
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={link.path} className={styles.navLink}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link href="/reserver" className={`btn btn-primary ${styles.bookBtn}`}>
            Réserver
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={styles.mobileNavWrapper}>
            <nav className={styles.mobileNav}>
              <ul className={styles.mobileNavList}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.submenu ? (
                      <>
                        <span className={styles.mobileNavGroupTitle}>{link.name}</span>
                        <ul className={styles.mobileSubNavList}>
                          {link.submenu.map((sublink) => (
                            <li key={sublink.path}>
                              <Link
                                href={sublink.path}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={link.path}
                        className={styles.mobileNavLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/reserver"
                className={`btn btn-primary ${styles.mobileBookBtn}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Réserver
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
