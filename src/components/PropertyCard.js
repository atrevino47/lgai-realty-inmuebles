import Link from 'next/link';
import Image from 'next/image';
import FavoriteButton from './FavoriteButton';

export default function PropertyCard({ property }) {
  return (
    <article className="card">
      <Link href={`/propiedad/${property.slug}`} className="card__image">
        <Image
          src={property.images[0]}
          alt={property.title}
          width={600}
          height={450}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span className={`card__badge card__badge--${property.type}`}>
          {property.type === 'rent' ? 'Renta' : 'Venta'}
        </span>
      </Link>

      <FavoriteButton property={property} />

      <div className="card__body">
        <div className="card__price">{property.priceFormatted}</div>
        <h3 className="card__title">
          <Link href={`/propiedad/${property.slug}`}>{property.title}</Link>
        </h3>
        <div className="card__location">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="currentColor"/><circle cx="12" cy="10" r="3" fill="white"/></svg>
          {property.location}
        </div>
        <div className="card__meta">
          <span className="card__meta-item">
            <svg viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            {property.bedrooms} Rec
          </span>
          <span className="card__meta-item">
            <svg viewBox="0 0 24 24"><path d="M4 12h16M4 12a2 2 0 01-2-2V6m18 6a2 2 0 002-2V6M4 12v4a2 2 0 002 2h12a2 2 0 002-2v-4"/></svg>
            {property.bathrooms} Baños
          </span>
          <span className="card__meta-item">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>
            {property.area} m²
          </span>
        </div>
      </div>
    </article>
  );
}
