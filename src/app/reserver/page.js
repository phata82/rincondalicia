import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "Réservation | Résidence Rincón d'Alicia",
  description: "Contactez-nous directement par téléphone ou WhatsApp pour réserver votre séjour.",
};

export default function ReserverPage() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Réservez votre séjour</h1>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Choisissez la résidence souhaitée et contactez directement notre équipe pour une réservation rapide.
          </p>
          <div className={styles.hours}>
            <Clock size={20} />
            <span>Notre équipe est disponible 24h/24 et 7j/7</span>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {/* Résidence 2 */}
          <div className={styles.residenceCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/residence-2/residence2.jpeg"
                alt="Résidence Rincón d'Alicia 2"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.residenceName}>Résidence Rincón d'Alicia 2</h2>
              <p className={styles.location}>
                <MapPin size={18} /> Almadies 2 (ZAC de Kounoune), Dakar
              </p>
              
              <div className={styles.logementsTypes}>
                <span className={styles.badge}>Chambres</span>
                <span className={styles.badge}>Studios</span>
                <span className={styles.badge}>Appartement F3</span>
              </div>
              
              <div className={styles.contactActions}>
                <a href="tel:+221784550555" className={`btn btn-primary ${styles.actionBtn}`}>
                  <Phone size={20} /> Appeler
                </a>
                <a href="https://wa.me/221784550555" target="_blank" rel="noopener noreferrer" className={`btn ${styles.whatsappBtn}`}>
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
              <p className={styles.contactInfo}>+221 78 455 05 55</p>
            </div>
          </div>

          {/* Résidence 1 */}
          <div className={styles.residenceCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/residence-1/chambre%201/WhatsApp%20Image%202026-07-10%20at%2022.34.28(2).jpeg"
                alt="Résidence Rincón d'Alicia 1"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.residenceName}>Résidence Rincón d'Alicia 1</h2>
              <p className={styles.location}>
                <MapPin size={18} /> Liberté 6, Dakar
              </p>
              
              <div className={styles.logementsTypes}>
                <span className={styles.badge}>Chambres</span>
                <span className={styles.badge}>Studios</span>
              </div>
              
              <div className={styles.contactActions}>
                <a href="tel:+221784078282" className={`btn btn-primary ${styles.actionBtn}`}>
                  <Phone size={20} /> Appeler
                </a>
                <a href="https://wa.me/221784078282" target="_blank" rel="noopener noreferrer" className={`btn ${styles.whatsappBtn}`}>
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
              <p className={styles.contactInfo}>+221 78 407 82 82</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
