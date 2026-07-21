import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { MapPin } from "lucide-react";

const residences = [
  {
    id: "residence-2",
    name: "Résidence Rincón d'Alicia 2",
    location: "Almadies 2 (ZAC de Kounoune)",
    description: "Résidence moderne proposant des chambres, studios et un appartement F3.",
    image: "/images/residence-2/residence2.jpeg",
    tarifs: [
      { logement: "Chambre 1 (avec kitchenette)", prix: "25 000 FCFA" },
      { logement: "Chambre 2", prix: "20 000 FCFA" },
      { logement: "Studio 2", prix: "30 000 FCFA" },
      { logement: "Studio 3", prix: "30 000 FCFA" },
      { logement: "Appartement F3", prix: "60 000 FCFA" },
    ]
  },
  {
    id: "residence-1",
    name: "Résidence Rincón d'Alicia 1",
    location: "Liberté 6, Dakar",
    description: "Résidence moderne proposant des chambres et des studios meublés.",
    image: "/images/residence-1/chambre%201/WhatsApp%20Image%202026-07-10%20at%2022.34.28(2).jpeg",
    tarifs: [
      { logement: "Chambre 1", prix: "20 000 FCFA" },
      { logement: "Chambre 2", prix: "20 000 FCFA" },
      { logement: "Chambre 3", prix: "20 000 FCFA" },
      { logement: "Chambre 4", prix: "20 000 FCFA" },
      { logement: "Studio 1", prix: "22 500 FCFA" },
      { logement: "Studio 2", prix: "22 500 FCFA" },
      { logement: "Studio 3", prix: "22 500 FCFA" },
    ]
  }
];

export const metadata = {
  title: "Nos Résidences | Résidence Rincón d'Alicia",
  description: "Découvrez nos résidences à Liberté 6 et Almadies 2.",
};

export default function Residences() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nos Résidences</h1>
        <div className={styles.divider}></div>
        <p className={styles.subtitle}>
          Deux emplacements de choix à Dakar pour répondre à tous vos besoins.
        </p>
      </div>

      <div className={styles.residencesList}>
        {residences.map((residence, index) => (
          <div key={residence.id} className={`${styles.residenceCard} ${index % 2 !== 0 ? styles.reverse : ''}`}>
            <div className={styles.imageContainer}>
              <Image
                src={residence.image}
                alt={residence.name}
                fill
                className={styles.image}
              />
            </div>
            
            <div className={styles.content}>
              <h2 className={styles.residenceName}>{residence.name}</h2>
              <p className={styles.location}>
                <MapPin size={18} /> {residence.location}
              </p>
              <p className={styles.description}>{residence.description}</p>
              
              <div className={styles.tarifsContainer}>
                <h3 className={styles.tarifsTitle}>Tarifs par nuit</h3>
                <table className={styles.tarifsTable}>
                  <thead>
                    <tr>
                      <th>Logement</th>
                      <th>Prix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {residence.tarifs.map((tarif, i) => (
                      <tr key={i}>
                        <td>{tarif.logement}</td>
                        <td>{tarif.prix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className={styles.actions}>
                <Link href={`/logements?residence=${residence.id}`} className="btn btn-primary">
                  Voir les logements
                </Link>
                <Link href="/galerie" className="btn btn-outline">
                  Voir la galerie
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
