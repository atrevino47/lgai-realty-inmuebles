'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const WA_NUMBER = '5218111707394';

export default function FavoritesDrawer() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const load = () => {
      try {
        setFavorites(JSON.parse(localStorage.getItem('lgai_favorites')) || []);
      } catch { setFavorites([]); }
    };
    load();
    window.addEventListener('favoritesUpdated', load);
    return () => window.removeEventListener('favoritesUpdated', load);
  }, []);

  const close = () => {
    document.querySelector('.favorites-drawer')?.classList.remove('is-open');
    document.querySelector('.fav-overlay')?.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  const remove = (slug) => {
    const updated = favorites.filter(f => f.slug !== slug);
    localStorage.setItem('lgai_favorites', JSON.stringify(updated));
    setFavorites(updated);
    const countEl = document.getElementById('fav-count');
    if (countEl) {
      countEl.textContent = updated.length;
      countEl.style.display = updated.length > 0 ? 'flex' : 'none';
    }
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  return (
    <>
      <div className="mobile-nav__overlay fav-overlay" onClick={close} />
      <aside className="favorites-drawer" aria-label="Propiedades guardadas">
        <div className="favorites-drawer__header">
          <h2 className="favorites-drawer__title">Mis Propiedades Guardadas</h2>
          <button className="favorites-drawer__close" onClick={close} aria-label="Cerrar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="favorites-drawer__items">
          {favorites.length === 0 ? (
            <div className="favorites-drawer__empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-light)" strokeWidth="1" style={{ margin: '0 auto var(--space-md)' }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <p>Aún no has guardado propiedades. Explora nuestro catálogo y guarda las que te interesen.</p>
            </div>
          ) : (
            favorites.map((item) => (
              <div key={item.slug} className="favorites-drawer__item">
                <Link href={`/propiedad/${item.slug}`} className="favorites-drawer__item-image" onClick={close}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} width="80" height="60" />
                </Link>
                <div className="favorites-drawer__item-info">
                  <Link href={`/propiedad/${item.slug}`} className="favorites-drawer__item-title" onClick={close}>
                    {item.title}
                  </Link>
                  <div className="favorites-drawer__item-price">{item.price}</div>
                </div>
                <button
                  className="favorites-drawer__item-remove"
                  onClick={() => remove(item.slug)}
                  aria-label={`Quitar ${item.title}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {favorites.length > 0 && (
          <div className="favorites-drawer__footer">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                `Hola, me interesan las siguientes propiedades:\n\n${favorites
                  .map((f, i) => `${i + 1}. ${f.title}\n   Precio: ${f.price}\n   Ubicación: ${f.location}`)
                  .join('\n\n')}\n\n¿Podrían darme más información?`
              )}`}
              className="btn btn--whatsapp btn--full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.336 0-4.512-.767-6.262-2.064l-.437-.337-3.043 1.02 1.02-3.043-.337-.437A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Enviar lista por WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
