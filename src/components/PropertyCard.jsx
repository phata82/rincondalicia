import Image from "next/image";
import Link from "next/link";
import { Users, Wifi, Tv, Bath, Coffee } from "lucide-react";
import styles from "./PropertyCard.module.css";

export default function PropertyCard({ property }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={property.image}
          alt={property.name}
          fill
          className={styles.image}
        />
        <div className={styles.priceTag}>
          {property.price.toLocaleString("fr-FR")} FCFA <span className={styles.perNight}>/ nuit</span>
        </div>
        <div className={styles.badge}>{property.type}</div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{property.name}</h3>
        <p className={styles.location}>{property.residence}</p>
        
        <div className={styles.amenities}>
          <div className={styles.amenity} title="Capacité">
            <Users size={16} /> <span>{property.capacity}</span>
          </div>
          {property.wifi && (
            <div className={styles.amenity} title="Wi-Fi">
              <Wifi size={16} />
            </div>
          )}
          {property.tv && (
            <div className={styles.amenity} title="Télévision">
              <Tv size={16} />
            </div>
          )}
          {property.kitchenette && (
            <div className={styles.amenity} title="Kitchenette">
              <Coffee size={16} />
            </div>
          )}
          {property.bathroom && (
            <div className={styles.amenity} title="Salle de bain privée">
              <Bath size={16} />
            </div>
          )}
        </div>
        
        <div className={styles.actions}>
          <Link href={`/logements/${property.id}`} className="btn btn-outline">
            Voir les détails
          </Link>
          <Link href={`/reserver?logement=${property.id}`} className="btn btn-primary">
            Réserver
          </Link>
        </div>
      </div>
    </div>
  );
}
