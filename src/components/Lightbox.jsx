"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Lightbox.module.css";

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Fermer">
        <X size={28} />
      </button>

      {images.length > 1 && (
        <button 
          className={`${styles.navBtn} ${styles.prevBtn}`} 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Photo précédente"
        >
          <ChevronLeft size={36} />
        </button>
      )}

      <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
        <Image
          key={currentIndex} // forces re-render/animation on index change
          src={currentImage}
          alt={`Photo ${currentIndex + 1}`}
          fill
          className={styles.image}
          unoptimized // Better for local images with spaces in development
        />
      </div>

      {images.length > 1 && (
        <button 
          className={`${styles.navBtn} ${styles.nextBtn}`} 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Photo suivante"
        >
          <ChevronRight size={36} />
        </button>
      )}

      <div className={styles.counter}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
