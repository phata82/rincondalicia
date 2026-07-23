import Image from "next/image";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { Wifi, Tv, Bath, Coffee, Shield, Zap, Droplets, CheckCircle } from "lucide-react";
import styles from "./page.module.css";

// Mock data for featured properties
const featuredProperties = [
  {
    id: "r1-chambre-1",
    name: "Chambre 1",
    residence: "Résidence Rincón d'Alicia 1 (Liberté 6)",
    price: 20000,
    type: "Chambre",
    capacity: "2 personnes",
    image: "/images/residence-1/chambre%201/WhatsApp%20Image%202026-07-10%20at%2022.34.28.jpeg",
    wifi: true,
    tv: true,
    bathroom: true,
  },
  {
    id: "residence-2-studio-3",
    name: "Studio 3",
    residence: "Résidence Rincón d'Alicia 2 (Almadies 2)",
    price: 30000,
    type: "Studio",
    capacity: "2 personnes",
    image: "/images/residence-2/studio%203/WhatsApp%20Image%202026-07-10%20at%2018.17.47%20(1).jpeg",
    wifi: true,
    tv: true,
    kitchenette: true,
    bathroom: true,
  },
  {
    id: "r1-studio-1",
    name: "Studio 1",
    residence: "Résidence Rincón d'Alicia 1 (Liberté 6)",
    price: 22500,
    type: "Studio",
    capacity: "2 personnes",
    image: "/images/residence-1/studio%201/WhatsApp%20Image%202026-07-10%20at%2022.30.11.jpeg",
    wifi: true,
    tv: true,
    kitchenette: true,
    bathroom: true,
  }
];

const advantages = [
  { icon: <Wifi size={32} />, title: "Wi-Fi Haut Débit" },
  { icon: <Zap size={32} />, title: "Climatisation" },
  { icon: <Coffee size={32} />, title: "Cuisine Équipée" },
  { icon: <Tv size={32} />, title: "Télévision" },
  { icon: <Droplets size={32} />, title: "Eau & Électricité" },
  { icon: <CheckCircle size={32} />, title: "Ménage" },
  { icon: <Shield size={32} />, title: "Sécurité" },
  { icon: <CheckCircle size={32} />, title: "Réservation Rapide" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/images/residence-2/studio%203/WhatsApp%20Image%202026-07-10%20at%2018.17.47%20(1).jpeg"
          alt="Studio 3"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={`container ${styles.heroContent} animate-fade-in`}>
          <h1 className={styles.heroTitle}>Bienvenue aux Résidences Rincón d'Alicia</h1>
          <p className={styles.heroSubtitle}>
            Des appartements, studios et chambres meublés alliant confort, élégance et tranquillité pour vos courts et longs séjours.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/logements" className="btn btn-primary">
              Découvrir nos logements
            </Link>
            <Link href="/reserver" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              Réserver maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className={`section ${styles.advantagesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
            <div className={styles.divider}></div>
            <p className={styles.sectionSubtitle}>
              Profitez d'un séjour inoubliable avec des équipements haut de gamme.
            </p>
          </div>
          
          <div className={styles.advantagesGrid}>
            {advantages.map((adv, index) => (
              <div key={index} className={styles.advantageCard}>
                <div className={styles.advantageIcon}>{adv.icon}</div>
                <h3 className={styles.advantageTitle}>{adv.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nos Logements Recommandés</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.propertiesGrid}>
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className={styles.viewAllBtn}>
            <Link href="/logements" className="btn btn-primary">
              Voir tous nos logements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
