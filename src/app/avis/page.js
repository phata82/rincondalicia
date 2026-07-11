"use client";

import { useState } from "react";
import { Star, Quote, User } from "lucide-react";
import styles from "./page.module.css";

// Mock data for initial reviews
const initialReviews = [
  {
    id: 1,
    author: "Marie Dupont",
    date: "12 Octobre 2025",
    rating: 5,
    text: "Un séjour exceptionnel à la Résidence Rincón d'Alicia. L'appartement était d'une propreté impeccable, très bien équipé, et l'accueil a été chaleureux. Je recommande vivement !",
    type: "Appartement F3"
  },
  {
    id: 2,
    author: "Jean-Pierre Ndiaye",
    date: "28 Novembre 2025",
    rating: 5,
    text: "Parfait pour mon voyage d'affaires. Le Wi-Fi est très rapide, et le quartier est calme tout en étant proche des commodités. Le service de nettoyage régulier est un vrai plus.",
    type: "Studio 2"
  },
  {
    id: 3,
    author: "Sophie Laurent",
    date: "15 Janvier 2026",
    rating: 5,
    text: "Une très belle découverte ! La chambre était joliment décorée et très confortable. On se sent vraiment en sécurité dans la résidence. Le rapport qualité/prix est excellent.",
    type: "Chambre 1"
  }
];

export default function Avis() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ author: "", text: "", type: "", rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    const addedReview = {
      id: reviews.length + 1,
      author: newReview.author,
      date: date,
      rating: newReview.rating,
      text: newReview.text,
      type: newReview.type
    };
    
    setReviews([addedReview, ...reviews]);
    setShowForm(false);
    setNewReview({ author: "", text: "", type: "", rating: 5 });
    
    // In a real app, this would be an API call to save the review
    alert("Merci ! Votre avis a été soumis avec succès.");
  };

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Avis de nos clients</h1>
        <div className={styles.divider}></div>
        <div className={styles.averageRating}>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(star => <Star key={star} size={28} fill="#f59e0b" color="#f59e0b" />)}
          </div>
          <span className={styles.ratingScore}>5.0/5</span>
          <p className={styles.ratingCount}>Basé sur l'expérience de nos voyageurs</p>
        </div>
      </div>

      <div className={styles.actionSection}>
        <button 
          className="btn btn-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Annuler" : "Laisser un avis"}
        </button>
      </div>

      {showForm && (
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Partagez votre expérience</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="author">Votre nom</label>
                <input 
                  type="text" 
                  id="author" 
                  required 
                  className={styles.input}
                  value={newReview.author}
                  onChange={(e) => setNewReview({...newReview, author: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="type">Logement occupé</label>
                <select 
                  id="type" 
                  required 
                  className={styles.select}
                  value={newReview.type}
                  onChange={(e) => setNewReview({...newReview, type: e.target.value})}
                >
                  <option value="">Sélectionnez un logement</option>
                  <option value="Chambre">Chambre</option>
                  <option value="Studio">Studio</option>
                  <option value="Appartement F3">Appartement F3</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>Votre note</label>
              <div className={styles.ratingInput}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star 
                    key={star} 
                    size={32} 
                    fill={star <= newReview.rating ? "#f59e0b" : "transparent"} 
                    color={star <= newReview.rating ? "#f59e0b" : "#d1d5db"}
                    className={styles.starSelectable}
                    onClick={() => setNewReview({...newReview, rating: star})}
                  />
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="text">Votre commentaire</label>
              <textarea 
                id="text" 
                rows={5} 
                required 
                className={styles.textarea}
                value={newReview.text}
                onChange={(e) => setNewReview({...newReview, text: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Publier l'avis
            </button>
          </form>
        </div>
      )}

      <div className={styles.reviewsGrid}>
        {reviews.map(review => (
          <div key={review.id} className={styles.reviewCard}>
            <Quote size={40} className={styles.quoteIcon} />
            <div className={styles.starsSmall}>
              {[1, 2, 3, 4, 5].map(star => (
                <Star 
                  key={star} 
                  size={16} 
                  fill={star <= review.rating ? "#f59e0b" : "transparent"} 
                  color={star <= review.rating ? "#f59e0b" : "#d1d5db"} 
                />
              ))}
            </div>
            <p className={styles.reviewText}>"{review.text}"</p>
            <div className={styles.reviewAuthor}>
              <div className={styles.authorAvatar}>
                <User size={20} />
              </div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{review.author}</span>
                <span className={styles.reviewMeta}>{review.type} • {review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
