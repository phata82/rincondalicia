import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/logo-trans.png"
              alt="Résidence Rincón d'Alicia Logo"
              width={260}
              height={90}
              className={styles.logo}
            />
          </Link>
          <p className={styles.footerAbout}>
            Des appartements, studios et chambres meublés alliant confort, élégance et tranquillité pour vos courts et longs séjours à Dakar.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook" className={styles.socialLink}><FaFacebook size={20} /></a>
            <a href="#" aria-label="Instagram" className={styles.socialLink}><FaInstagram size={20} /></a>
            <a href="#" aria-label="Twitter" className={styles.socialLink}><FaTwitter size={20} /></a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.footerTitle}>Navigation Rapide</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/residences">Nos Résidences</Link></li>
            <li><Link href="/logements">Nos Logements</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/galerie">Galerie</Link></li>
            <li><Link href="/a-propos">À propos</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.footerTitle}>Coordonnées</h4>
          <ul className={styles.contactInfo}>
            <li>
              <MapPin size={18} className={styles.contactIcon} />
              <span>
                <strong>Résidence 1:</strong> Liberté 6, Dakar<br/>
                <strong>Résidence 2:</strong> Almadies 2 (ZAC de Kounoune)
              </span>
            </li>
            <li>
              <Phone size={18} className={styles.contactIcon} />
              <span>+221 XX XXX XX XX</span>
            </li>
            <li>
              <Mail size={18} className={styles.contactIcon} />
              <span>contact@residencerincon.com</span>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.footerTitle}>Mentions Légales</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/politique-de-confidentialite">Politique de confidentialité</Link></li>
            <li><Link href="/conditions-generales">Conditions générales</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <p>Copyright © {currentYear} Résidence Rincón d'Alicia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
