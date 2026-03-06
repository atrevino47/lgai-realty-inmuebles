import { properties } from '@/data/properties';
import PropertyPageContent from './PropertyPageContent';

export function generateMetadata({ params }) {
  const property = properties.find(p => p.slug === params.slug);
  if (!property) {
    return {
      title: 'Propiedad no encontrada — LGAI Realty Inmuebles',
    };
  }
  const typeLabel = property.type === 'rent' ? 'Renta' : 'Venta';
  return {
    title: `${property.title} en ${typeLabel} — LGAI Realty Inmuebles`,
    description: `${property.title} en ${property.location}. ${property.bedrooms} recámaras, ${property.bathrooms} baños, ${property.area} m². ${property.priceFormatted}. Asesoría inmobiliaria en Monterrey.`,
    openGraph: {
      title: `${property.title} — ${property.priceFormatted}`,
      description: `${typeLabel} en ${property.location}. ${property.bedrooms} recámaras, ${property.bathrooms} baños, ${property.area} m².`,
      images: [property.images[0]],
    },
  };
}

export default function PropertyPage({ params }) {
  return <PropertyPageContent slug={params.slug} />;
}
