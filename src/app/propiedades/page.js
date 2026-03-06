'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

const filters = [
  { label: 'Todas', tag: 'all' },
  { label: 'Venta', tag: 'venta' },
  { label: 'Renta', tag: 'renta' },
  { label: 'Casas', tag: 'casa' },
  { label: 'Departamentos', tag: 'departamento' },
];

function PropiedadesContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(
    filters.some(f => f.tag === initialFilter) ? initialFilter : 'all'
  );

  const filtered = activeFilter === 'all'
    ? properties
    : properties.filter(p => p.tags.includes(activeFilter));

  return (
    <>
      <div className="collection__filters" data-animate="">
        {filters.map((f) => (
          <button
            key={f.tag}
            className={`collection__filter-btn${activeFilter === f.tag ? ' is-active' : ''}`}
            onClick={() => setActiveFilter(f.tag)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="text-light" style={{ fontSize: '0.875rem' }}>
          {filtered.length} propiedades
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="collection__grid" data-animate-stagger="">
          {filtered.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center" style={{ padding: 'var(--space-4xl) 0' }}>
          <p className="text-light">No hay propiedades disponibles con este filtro.</p>
        </div>
      )}
    </>
  );
}

export default function PropiedadesPage() {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="collection__header" data-animate="">
          <h1>Propiedades</h1>
          <p className="text-light" style={{ maxWidth: '600px', margin: 'var(--space-md) auto 0' }}>
            Explora nuestra selección de casas y departamentos en las mejores zonas de Monterrey y Nuevo León.
          </p>
        </div>

        <Suspense>
          <PropiedadesContent />
        </Suspense>
      </div>
    </section>
  );
}
