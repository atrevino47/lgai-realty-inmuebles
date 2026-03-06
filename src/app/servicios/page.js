import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Servicios — LGAI Realty Inmuebles',
  description: 'Servicios inmobiliarios integrales en Monterrey: compra-venta, renta, asesoría legal, gestión notarial, asesoría financiera e hipotecaria.',
};

const services = [
  {
    title: 'Compra y Venta de Propiedades',
    description: 'Te acompañamos en todo el proceso de compra o venta de tu propiedad. Desde la valuación inicial hasta la firma ante notario, garantizamos una transacción segura y transparente.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: 'Renta y Administración',
    description: 'Gestionamos la renta de tu propiedad con contratos sólidos, filtro de inquilinos y administración mensual. Maximiza tu inversión sin preocupaciones.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path d="M12 12v2" />
      </svg>
    ),
  },
  {
    title: 'Asesoría Legal Inmobiliaria',
    description: 'Dictaminación de documentos, revisión de contratos, verificación de gravámenes y protección jurídica completa en cada transacción inmobiliaria.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15h6" />
        <path d="M9 11h6" />
      </svg>
    ),
  },
  {
    title: 'Gestión Notarial',
    description: 'Servicios profesionales de gestoría notarial: escrituración, protocolización de actas, tramitación de permisos y coordinación con notarías de confianza.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Asesoría Financiera e Hipotecaria',
    description: 'Te ayudamos a encontrar el mejor crédito hipotecario según tu perfil. Comparamos opciones de bancos, Infonavit, Fovissste y cofinavit para que tomes la mejor decisión.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: 'Pólizas de Protección',
    description: 'Pólizas de protección para arrendamientos que respaldan a propietarios e inquilinos. Incluyen cobertura legal, investigación de inquilinos y garantía de pago.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          <div className="section-heading" data-animate="">
            <span className="section-heading__label">Servicios</span>
            <h1 className="section-heading__title">Asesoría Inmobiliaria Integral</h1>
            <p className="section-heading__description">
              En LGAI Realty Inmuebles ofrecemos una gama completa de servicios para que tu experiencia inmobiliaria sea segura, transparente y exitosa.
            </p>
          </div>

          <div className="services-grid" data-animate-stagger="">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-card__icon">
                  {service.icon}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Services Detail */}
      <section className="section-spacing" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="services-detail" data-animate="">
            <div className="services-detail__content">
              <span className="section-heading__label">Asesoría Financiera</span>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Encuentra el Mejor Crédito Hipotecario</h2>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
                Sabemos que adquirir una propiedad es una de las decisiones financieras más importantes.
                Por eso, nuestro equipo de asesores financieros te guía paso a paso para encontrar el crédito
                hipotecario que mejor se adapte a tu situación.
              </p>
              <ul className="services-detail__list">
                <li>Comparativa de créditos hipotecarios bancarios</li>
                <li>Asesoría en créditos Infonavit, Fovissste y Cofinavit</li>
                <li>Simulación de pagos y análisis de capacidad de endeudamiento</li>
                <li>Apoyo en la integración de expediente para pre-aprobación</li>
                <li>Seguimiento hasta la firma de escrituras</li>
              </ul>
            </div>
            <div className="services-detail__stats">
              <div className="services-detail__stat">
                <span className="services-detail__stat-number">500+</span>
                <span className="services-detail__stat-label">Clientes Asesorados</span>
              </div>
              <div className="services-detail__stat">
                <span className="services-detail__stat-number">98%</span>
                <span className="services-detail__stat-label">Satisfacción</span>
              </div>
              <div className="services-detail__stat">
                <span className="services-detail__stat-number">10+</span>
                <span className="services-detail__stat-label">Años de Experiencia</span>
              </div>
              <div className="services-detail__stat">
                <span className="services-detail__stat-number">50+</span>
                <span className="services-detail__stat-label">Zonas en Monterrey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing" style={{ background: 'var(--color-primary)', textAlign: 'center' }}>
        <div className="container" data-animate="">
          <h2 style={{ color: 'var(--color-white)', marginBottom: 'var(--space-md)' }}>
            ¿Listo para dar el siguiente paso?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
            Contáctanos hoy mismo y recibe asesoría personalizada sin costo ni compromiso.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <WhatsAppButton label="Escríbenos por WhatsApp" />
            <Link href="/contacto" className="btn btn--outline">
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
