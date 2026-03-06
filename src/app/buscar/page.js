'use client';

import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);

  const search = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const q = query.toLowerCase();
    const found = properties.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q)) ||
      p.features.some(f => f.toLowerCase().includes(q))
    );
    setResults(found);
  };

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="collection__header" data-animate="">
          <h1>Buscar Propiedades</h1>
        </div>

        <form onSubmit={search} className="search__form" data-animate="">
          <input
            type="search"
            className="search__input"
            placeholder="Buscar por ubicación, tipo o características..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar propiedades"
          />
          <button type="submit" className="search__submit" aria-label="Buscar">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </form>

        {results !== null && (
          <>
            {results.length > 0 ? (
              <>
                <p className="text-center text-light" style={{ marginBottom: 'var(--space-2xl)' }}>
                  {results.length} resultado{results.length !== 1 ? 's' : ''} para &ldquo;{query}&rdquo;
                </p>
                <div className="collection__grid" data-animate-stagger="">
                  {results.map((property) => (
                    <PropertyCard key={property.slug} property={property} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center" style={{ padding: 'var(--space-3xl) 0' }}>
                <p className="text-light">No se encontraron resultados para &ldquo;{query}&rdquo;</p>
                <p className="text-light" style={{ marginTop: 'var(--space-sm)', fontSize: '0.875rem' }}>
                  Intenta con: San Pedro, Cumbres, casa, departamento, renta...
                </p>
              </div>
            )}
          </>
        )}

        {results === null && (
          <div className="text-center" style={{ padding: 'var(--space-2xl) 0' }}>
            <p className="text-light">
              Escribe una ubicación, tipo de propiedad o característica para buscar.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
