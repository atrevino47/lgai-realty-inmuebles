import Link from 'next/link';
import Image from 'next/image';
import PropertyCard from '@/components/PropertyCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQ from '@/components/FAQ';
import { properties, testimonials, faqItems, ugcImages } from '@/data/properties';

export default function Home() {
  const featured = properties.filter(p => p.featured);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
            alt="Casa moderna con jardín"
            width={1920}
            height={1080}
            priority
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="hero__overlay" />
        <div className="hero__grain" />
        <div className="ambient-shapes">
          <div className="ambient-shape ambient-shape--1" />
          <div className="ambient-shape ambient-shape--2" />
          <div className="ambient-shape ambient-shape--3" />
        </div>

        <div className="hero__content">
          <span className="hero__label" data-animate="">LGAI Realty Inmuebles</span>
          <h1 className="hero__title" data-animate="">Tu Asesor Inmobiliario en Monterrey</h1>
          <p className="hero__description" data-animate="">
            Asesoría inmobiliaria integral en Monterrey y Nuevo León.
            Venta, renta, asesoría legal y gestión notarial con atención personalizada.
          </p>
          <div className="hero__actions" data-animate="">
            <WhatsAppButton className="btn--lg" />
            <Link href="/propiedades" className="btn btn--outline btn--lg">
              Explorar Propiedades
            </Link>
          </div>
        </div>

        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" fill="#F8F9FC"/>
          </svg>
        </div>
      </section>

      {/* ─── Value Props ─── */}
      <section className="section-spacing" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-heading" data-animate="">
            <span className="section-heading__label">¿Por qué elegirnos?</span>
            <h2 className="section-heading__title">Asesoría inmobiliaria integral</h2>
          </div>

          <div className="grid grid--4" data-animate-stagger="">
            {[
              { icon: 'shield', title: 'Asesoría Legal', text: 'Dictaminación de documentos, asesoría legal y protección en cada transacción.' },
              { icon: 'check', title: 'Propiedades Verificadas', text: 'Cada propiedad es dictaminada y verificada antes de presentarla.' },
              { icon: 'phone', title: 'Atención Personalizada', text: 'Respuesta inmediata por WhatsApp. Te acompañamos en todo el proceso.' },
              { icon: 'star', title: 'Gestión Notarial', text: 'Servicios profesionales de gestoría notarial y tramitación de permisos.' },
            ].map((prop) => (
              <div key={prop.title} className="value-prop">
                <div className="value-prop__icon">
                  <ValuePropIcon name={prop.icon} />
                </div>
                <h3 className="value-prop__title">{prop.title}</h3>
                <p className="value-prop__text">{prop.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Collection Slider ─── */}
      <section className="section-spacing" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-heading" data-animate="">
            <span className="section-heading__label">Propiedades Destacadas</span>
            <h2 className="section-heading__title">Descubre nuestras propiedades</h2>
            <p className="section-heading__description">
              Selección curada de las mejores propiedades disponibles en Monterrey y Nuevo León.
            </p>
          </div>

          <div className="collection-slider__track" data-animate="">
            {featured.map((property) => (
              <div key={property.slug} className="collection-slider__item">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link href="/propiedades" className="btn btn--primary">
              Ver todas las propiedades
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Best Sellers Grid ─── */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-heading" data-animate="">
            <span className="section-heading__label">Más Populares</span>
            <h2 className="section-heading__title">Las propiedades más buscadas</h2>
          </div>

          <div className="collection__grid" data-animate-stagger="">
            {properties.slice(0, 6).map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-spacing" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-heading" data-animate="">
            <span className="section-heading__label">Testimonios</span>
            <h2 className="section-heading__title">Lo que dicen nuestros clientes</h2>
          </div>

          <div className="grid grid--3" data-animate-stagger="">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__quote">&ldquo;</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <Image className="testimonial-card__avatar" src={t.avatar} alt={t.name} width={48} height={48} />
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-spacing">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-heading" data-animate="">
            <span className="section-heading__label">FAQ</span>
            <h2 className="section-heading__title">Preguntas Frecuentes</h2>
          </div>
          <div data-animate="">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* ─── UGC Grid ─── */}
      <section className="section-spacing" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="section-heading" data-animate="">
            <span className="section-heading__label">Síguenos</span>
            <h2 className="section-heading__title">Nuestras propiedades en fotos</h2>
          </div>
        </div>
        <div className="ugc-grid" data-animate="">
          {ugcImages.map((img, i) => (
            <div key={i} className="ugc-grid__item">
              <Image src={img.src} alt={img.alt} width={400} height={400} sizes="(max-width: 768px) 50vw, 16vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ValuePropIcon({ name }) {
  switch (name) {
    case 'shield':
      return <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'check':
      return <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
    case 'phone':
      return <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case 'star':
      return <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    default:
      return null;
  }
}
