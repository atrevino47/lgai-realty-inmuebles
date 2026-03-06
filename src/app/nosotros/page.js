import { testimonials } from '@/data/properties';

export const metadata = {
  title: 'Nosotros — LGAI Realty Inmuebles',
  description: 'Conoce a LGAI Realty Inmuebles, tu aliado inmobiliario de confianza en Monterrey, Nuevo León.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          <div className="page-content" data-animate="">
            <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>Nosotros</h1>

            <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              <strong>LGAI Realty Inmuebles</strong> nació con la misión de ofrecer asesoría inmobiliaria integral en Monterrey
              y el área metropolitana de Nuevo León. Creemos que comprar, vender o rentar una propiedad debe ser un proceso
              seguro, transparente y respaldado por profesionales.
            </p>

            <h2>Nuestra Misión</h2>
            <p>
              Brindar asesoría inmobiliaria de excelencia, conectando personas con la propiedad ideal a través de un
              servicio personalizado que integra gestión legal, notarial y financiera. Cada propiedad que presentamos
              ha sido dictaminada y verificada para garantizar la mejor experiencia.
            </p>

            <h2>Nuestros Servicios</h2>
            <p>
              Con años de experiencia en gestión de propiedades, ofrecemos una gama completa de servicios
              inmobiliarios en Monterrey:
            </p>
            <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>
                <strong>Venta y renta de propiedades</strong> — Casas, departamentos, terrenos y locales comerciales en las mejores zonas de Monterrey.
              </li>
              <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>
                <strong>Asesoría legal inmobiliaria</strong> — Dictaminación de documentos, revisión de contratos y protección jurídica en cada transacción.
              </li>
              <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>
                <strong>Gestión notarial</strong> — Servicios profesionales de gestoría notarial y tramitación de permisos.
              </li>
              <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>
                <strong>Pólizas de protección</strong> — Pólizas de protección para arrendamientos que respaldan a propietarios e inquilinos.
              </li>
              <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>
                <strong>Estimaciones hipotecarias</strong> — Asesoría para encontrar el mejor crédito hipotecario según tu perfil.
              </li>
            </ul>

            <h2>¿Qué nos hace diferentes?</h2>
            <p>
              En LGAI Realty Inmuebles nos distinguimos por tres pilares fundamentales:
            </p>
            <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>
                <strong>Asesoría integral</strong> — No solo te ayudamos a encontrar la propiedad, te acompañamos en todo el proceso legal, notarial y financiero.
              </li>
              <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>
                <strong>Conocimiento local</strong> — Somos especialistas en el mercado inmobiliario de Monterrey y Nuevo León. Conocemos cada zona a fondo.
              </li>
              <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>
                <strong>Atención personalizada</strong> — Cada cliente es una prioridad. Te atendemos personalmente y te damos opciones convenientes para tu presupuesto.
              </li>
            </ul>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)', padding: 'var(--space-2xl)', background: 'var(--color-bg-alt)', borderRadius: 'var(--card-radius)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
                Asesoría inmobiliaria de confianza en Monterrey
              </p>
              <p className="text-light">
                Nuestra reputación ha crecido gracias a la satisfacción de cada cliente.
                Visítanos en Gijón 201, Bosques de las Cumbres, Monterrey, N.L. o escríbenos a lgairealtyinmuebles@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="testimonial-card__avatar" src={t.avatar} alt={t.name} width="48" height="48" loading="lazy" />
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
    </>
  );
}
