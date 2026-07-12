import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "À Propos | Résidence Rincón d'Alicia",
  description: "Découvrez notre histoire et notre engagement à vous offrir le meilleur de l'hébergement meublé à Dakar.",
};

export default function About() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>À Propos de Nous</h1>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            L'excellence de l'hébergement meublé au cœur de Dakar.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/residence-2/studio%203/WhatsApp%20Image%202026-07-10%20at%2018.17.47%20(1).jpeg"
                alt="Intérieur Résidence Rincón d'Alicia"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.experienceBadge}>
              <span className={styles.badgeNumber}>100%</span>
              <span className={styles.badgeText}>Satisfaction Client</span>
            </div>
          </div>

          <div className={styles.textSection}>
            <h2 className={styles.sectionTitle}>Notre Histoire</h2>
            <p className={styles.paragraph}>
              Bienvenue à la <strong>Résidence Rincón d'Alicia</strong>, votre partenaire privilégié pour un séjour inoubliable à Dakar. Née de la volonté d'offrir un cadre de vie exceptionnel alliant le confort d'un foyer aux standards de l'hôtellerie moderne, notre résidence est devenue une référence dans la location meublée de haut standing.
            </p>
            <p className={styles.paragraph}>
              Que vous voyagiez pour affaires, pour des vacances en famille, ou pour une escapade romantique, nous avons conçu chaque appartement, studio et chambre avec un souci du détail obsessionnel pour répondre à vos exigences les plus élevées.
            </p>

            <h3 className={styles.listTitle}>Pourquoi nous choisir ?</h3>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <CheckCircle className={styles.checkIcon} size={24} />
                <div>
                  <strong>Confort Premium</strong>
                  <p>Des espaces décorés avec goût et équipés des dernières technologies.</p>
                </div>
              </li>
              <li className={styles.benefitItem}>
                <CheckCircle className={styles.checkIcon} size={24} />
                <div>
                  <strong>Emplacements Stratégiques</strong>
                  <p>Situés à Liberté 6 et Almadies 2, proches des centres névralgiques de Dakar.</p>
                </div>
              </li>
              <li className={styles.benefitItem}>
                <CheckCircle className={styles.checkIcon} size={24} />
                <div>
                  <strong>Service sur mesure</strong>
                  <p>Une équipe dévouée, discrète et disponible 24h/24 pour répondre à vos besoins.</p>
                </div>
              </li>
            </ul>

            <div className={styles.actionContainer}>
              <Link href="/logements" className="btn btn-primary">
                Découvrir nos logements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
