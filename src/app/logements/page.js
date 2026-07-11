"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, CalendarCheck, MapPin, Tag } from "lucide-react";
import styles from "./page.module.css";
import logementsData from "@/data/logements.json";
import Lightbox from "@/components/Lightbox";

export default function Logements() {
  const [activeFilter, setActiveFilter] = useState("Tous les logements");
  const [lightboxData, setLightboxData] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const filters = ["Tous les logements", "Chambres", "Studios", "Appartements"];

  const filteredLogements = logementsData.filter(logement => {
    if (activeFilter === "Tous les logements") return true;
    return logement.type === activeFilter;
  });

  const openLightbox = (images, index = 0) => {
    setLightboxData({ isOpen: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  const handleNextImage = () => {
    setLightboxData(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const handlePrevImage = () => {
    setLightboxData(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nos Logements</h1>
        <div className={styles.divider}></div>
        <p className={styles.subtitle}>
          Choisissez parmi notre sélection de chambres, studios et appartements haut de gamme.
        </p>
      </div>

      <div className={styles.filters}>
        {filters.map(filter => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredLogements.map(logement => (
          <div key={logement.id} className={styles.logementCard}>
            <div 
              className={styles.imageContainer} 
              onClick={() => openLightbox(logement.images, 0)}
              title="Cliquer pour voir la galerie"
            >
              <Image
                src={logement.mainImage}
                alt={logement.name}
                fill
                className={styles.image}
              />
              <div className={styles.photoCountBadge}>
                <Camera size={16} /> {logement.images.length} photos
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h2 className={styles.logementName}>{logement.name}</h2>
                <span className={styles.badge}>{logement.type}</span>
              </div>
              
              <div className={styles.infoList}>
                <p className={styles.infoItem}><MapPin size={16} /> {logement.residence}</p>
                <p className={styles.infoItem}><Tag size={16} /> {logement.price} / nuit</p>
              </div>

              <p className={styles.description}>{logement.description}</p>
              
              <div className={styles.actions}>
                <button 
                  className={`btn btn-outline ${styles.actionBtn}`} 
                  onClick={() => openLightbox(logement.images, 0)}
                >
                  <Camera size={18} /> Voir les photos
                </button>
                <Link href="/reserver" className={`btn btn-primary ${styles.actionBtn}`}>
                  <CalendarCheck size={18} /> Nous contacter pour réserver
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxData.isOpen && (
        <Lightbox 
          images={lightboxData.images} 
          currentIndex={lightboxData.currentIndex} 
          onClose={closeLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
}
