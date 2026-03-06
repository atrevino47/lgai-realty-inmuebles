'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { properties } from '@/data/properties';
import WhatsAppButton from '@/components/WhatsAppButton';
import FavoriteButton from '@/components/FavoriteButton';
import PropertyCard from '@/components/PropertyCard';
import FAQ from '@/components/FAQ';
export default function PropertyPage({ params }) {
  const { slug } = params;
  const property = properties.find(p => p.slug === slug);
  const [mainImage, setMainImage] = useState(0);

  if (!property) {
    return (
      <section className="section-spacing">
        <div className="container text-center">
          <h1>Propiedad no encontrada</h1>
          <p className="text-light" style={{ marginTop: 'var(--space-md)' }}>
            La propiedad que buscas no existe o ha sido removida.
          </p>
          <Link href="/propiedades" className="btn btn--primary" style={{ marginTop: 'var(--space-xl)', display: 'inline-flex' }}>
            Ver todas las propiedades
          </Link>
        </div>
      </section>
    );
  }

  const related = properties
    .filter(p => p.slug !== property.slug && (p.type === property.type || p.propertyType === property.propertyType))
    .slice(0, 3);

  const tabs = [
    {
      question: 'Descripción',
      answer: property.description,
    },
    {
      question: 'Características',
      answer: property.features.join(' • '),
    },
    {
      question: 'Ubicación',
      answer: `Esta propiedad se encuentra en ${property.location}, una de las zonas más buscadas por su excelente ubicación, servicios cercanos y conectividad.`,
    },
  ];

  return (
    <>
      <section className="section-spacing">
        <div className="container">
          <div className="product__grid">
            {/* Gallery */}
            <div data-animate="">
              <div className="product__gallery-main">
                <Image
                  src={property.images[mainImage]}
                  alt={property.title}
                  width={900}
                  height={675}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="product__gallery-thumbs">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    className={`product__gallery-thumb${i === mainImage ? ' is-active' : ''}`}
                    onClick={() => setMainImage(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                  >
                    <Image src={img} alt={`${property.title} ${i + 1}`} width={72} height={54} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="product__info" data-animate="">
              <span
                className="product__type-badge"
                style={{ background: property.type === 'rent' ? 'var(--color-rent)' : 'var(--color-sale)' }}
              >
                {property.type === 'rent' ? 'Renta' : 'Venta'}
              </span>

              <h1 style={{ marginBottom: 'var(--space-md)' }}>{property.title}</h1>

              <div className="product__price">
                {property.priceFormatted}
                {property.type === 'rent' && (
                  <span className="product__price-suffix">/mes</span>
                )}
              </div>

              <div className="product__location">
                <svg viewBox="0 0 24 24" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="var(--color-secondary)"/><circle cx="12" cy="10" r="3" fill="white"/></svg>
                {property.location}
              </div>

              {/* Specs */}
              <div className="product__specs">
                <div className="product__spec">
                  <div className="product__spec-value">{property.bedrooms}</div>
                  <div className="product__spec-label">Recámaras</div>
                </div>
                <div className="product__spec">
                  <div className="product__spec-value">{property.bathrooms}</div>
                  <div className="product__spec-label">Baños</div>
                </div>
                <div className="product__spec">
                  <div className="product__spec-value">{property.area}</div>
                  <div className="product__spec-label">m² Área</div>
                </div>
                {property.parking > 0 && (
                  <div className="product__spec">
                    <div className="product__spec-value">{property.parking}</div>
                    <div className="product__spec-label">Estac.</div>
                  </div>
                )}
              </div>

              {/* WhatsApp CTA */}
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <WhatsAppButton property={property} className="btn--lg btn--full" />
              </div>

              {/* Favorite button */}
              <FavoriteButton
                property={property}
                className="btn btn--secondary btn--full product__fav-btn"
                label="Guardar en Favoritos"
              />

              {/* Features */}
              <div className="product__features">
                <h3>Características</h3>
                <div className="product__features-list">
                  {property.features.map((feature) => (
                    <span key={feature} className="product__feature-tag">{feature}</span>
                  ))}
                </div>
              </div>

              {/* Accordion tabs */}
              <FAQ items={tabs} />

              {/* Trust badges */}
              <div className="product__trust">
                <div className="product__trust-item">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Propiedad verificada
                </div>
                <div className="product__trust-item">
                  <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Asesoría gratuita
                </div>
                <div className="product__trust-item">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Respuesta inmediata
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-spacing" style={{ background: 'var(--color-bg-alt)' }}>
          <div className="container">
            <div className="section-heading" data-animate="">
              <span className="section-heading__label">Te puede interesar</span>
              <h2 className="section-heading__title">Propiedades similares</h2>
            </div>
            <div className="grid grid--3" data-animate-stagger="">
              {related.map((p) => (
                <PropertyCard key={p.slug} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
