'use client';

import { useState, useEffect } from 'react';

function getFavorites() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('lgai_favorites')) || [];
  } catch { return []; }
}

function saveFavorites(favs) {
  localStorage.setItem('lgai_favorites', JSON.stringify(favs));
  // Update count badge
  const countEl = document.getElementById('fav-count');
  if (countEl) {
    countEl.textContent = favs.length;
    countEl.style.display = favs.length > 0 ? 'flex' : 'none';
  }
  // Dispatch event for drawer to update
  window.dispatchEvent(new Event('favoritesUpdated'));
}

export default function FavoriteButton({ property, className = 'card__favorite', label }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(getFavorites().some(f => f.slug === property.slug));
  }, [property.slug]);

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const favs = getFavorites();
    if (isFav) {
      const updated = favs.filter(f => f.slug !== property.slug);
      saveFavorites(updated);
      setIsFav(false);
    } else {
      favs.push({
        slug: property.slug,
        title: property.title,
        price: property.priceFormatted,
        image: property.images[0],
        location: property.location,
      });
      saveFavorites(favs);
      setIsFav(true);
    }
  };

  return (
    <button
      className={`${className}${isFav ? ' is-active' : ''}`}
      onClick={toggle}
      aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      <svg viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      {label && <span>{isFav ? 'Guardado en Favoritos' : label}</span>}
    </button>
  );
}
