import { 
  BedDouble, 
  Home, 
  Building, 
  CalendarDays, 
  CalendarCheck, 
  Wifi, 
  Wind, 
  Utensils, 
  Tv, 
  Droplet, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Car 
} from "lucide-react";
import styles from "./page.module.css";

const servicesList = [
  { icon: <BedDouble size={36} />, title: "Chambres meublées", desc: "Des chambres confortables et prêtes à l'emploi." },
  { icon: <Home size={36} />, title: "Studios meublés", desc: "Votre espace privé avec tout le nécessaire." },
  { icon: <Building size={36} />, title: "Appartements meublés", desc: "Des espaces spacieux pour toute la famille." },
  { icon: <CalendarDays size={36} />, title: "Location courte durée", desc: "Idéal pour les séjours professionnels et touristiques." },
  { icon: <CalendarCheck size={36} />, title: "Location longue durée", desc: "Des tarifs avantageux pour les séjours prolongés." },
  { icon: <Wifi size={36} />, title: "Wi-Fi Haut Débit", desc: "Restez connecté en toute circonstance." },
  { icon: <Wind size={36} />, title: "Climatisation", desc: "Un confort thermique garanti." },
  { icon: <Utensils size={36} />, title: "Cuisine équipée", desc: "Préparez vos repas en toute autonomie." },
  { icon: <Tv size={36} />, title: "Télévision", desc: "Vos chaînes préférées à disposition." },
  { icon: <Droplet size={36} />, title: "Eau 24/7", desc: "Approvisionnement garanti." },
  { icon: <Zap size={36} />, title: "Électricité 24/7", desc: "Énergie continue sans coupures." },
  { icon: <Sparkles size={36} />, title: "Ménage", desc: "Service d'entretien régulier." },
  { icon: <ShieldCheck size={36} />, title: "Sécurité", desc: "Résidences sécurisées avec gardiennage." },
  { icon: <PhoneCall size={36} />, title: "Assistance", desc: "Une équipe à votre écoute en cas de besoin." },
  { icon: <Car size={36} />, title: "Parking", desc: "Stationnement disponible selon les résidences." },
];

export const metadata = {
  title: "Nos Services | Résidence Rincón d'Alicia",
  description: "Découvrez tous les services et équipements inclus dans nos locations meublées à Dakar.",
};

export default function Services() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nos Services & Équipements</h1>
        <div className={styles.divider}></div>
        <p className={styles.subtitle}>
          Tout a été pensé pour vous garantir un séjour exceptionnel, avec un maximum de confort.
        </p>
      </div>

      <div className={styles.grid}>
        {servicesList.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
