import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Résidence Rincón d'Alicia",
  description: "Contactez-nous pour toute information ou pour effectuer une réservation.",
};

export default function Contact() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contactez-nous</h1>
        <div className={styles.divider}></div>
        <p className={styles.subtitle}>
          Notre équipe est à votre disposition pour répondre à toutes vos questions.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <MapPin size={24} />
            </div>
            <div>
              <h3>Nos Adresses</h3>
              <p><strong>Résidence 1:</strong> Liberté 6, Dakar</p>
              <p><strong>Résidence 2:</strong> Almadies 2 (ZAC de Kounoune)</p>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <Phone size={24} />
            </div>
            <div>
              <h3>Téléphone & WhatsApp</h3>
              <p><strong>Liberté 6:</strong> +221 78 407 82 82</p>
              <p><strong>Almadies 2:</strong> +221 78 455 05 55</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <Mail size={24} />
            </div>
            <div>
              <h3>Email</h3>
              <p>contact@residencerincon.com</p>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <Clock size={24} />
            </div>
            <div>
              <h3>Heures d'ouverture</h3>
              <p>Réception ouverte 24h/24 et 7j/7</p>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Envoyez-nous un message</h2>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" required className={styles.input} />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="telephone">Téléphone</label>
                <input type="tel" id="telephone" name="telephone" required className={styles.input} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="residence">Résidence concernée</label>
              <select id="residence" name="residence" className={styles.select}>
                <option value="">Sélectionnez une résidence...</option>
                <option value="residence-1">Résidence 1 (Liberté 6)</option>
                <option value="residence-2">Résidence 2 (Almadies 2)</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required className={styles.textarea}></textarea>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
      
      <div className={styles.mapSection}>
        <h2 className={styles.mapTitle}>Nous trouver</h2>
        <div className={styles.mapContainer}>
          {/* Placeholder for Google Maps */}
          <div className={styles.mapPlaceholder}>
            <MapPin size={48} color="var(--color-primary)" />
            <p>Carte Google Maps à intégrer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
