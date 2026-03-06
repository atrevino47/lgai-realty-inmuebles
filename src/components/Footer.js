'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" style={{ color: 'white', fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700 }}>
              LGAI Realty
            </Link>
            <p className="footer__brand-description">
              Tu aliado inmobiliario de confianza en Monterrey. Asesoría integral en bienes raíces: venta, renta, asesoría legal y gestión notarial.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginTop: 'var(--space-md)', lineHeight: 1.7 }}>
              Gijón 201, Bosques de las Cumbres<br />
              Monterrey, N.L. C.P. 64619<br />
              lgairealtyinmuebles@gmail.com
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.instagram.com/lgairealty/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.31 0 .61.04.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.33-6.33V9.18a8.16 8.16 0 0 0 4.89 1.62v-3.4c-.36-.04-.7-.12-1-.71z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer__heading">Propiedades</h3>
            <Link href="/propiedades" className="footer__link">Todas</Link>
            <Link href="/propiedades?filter=venta" className="footer__link">En Venta</Link>
            <Link href="/propiedades?filter=renta" className="footer__link">En Renta</Link>
            <Link href="/propiedades?filter=casa" className="footer__link">Casas</Link>
            <Link href="/propiedades?filter=departamento" className="footer__link">Departamentos</Link>
          </div>

          <div>
            <h3 className="footer__heading">Servicios</h3>
            <Link href="/nosotros" className="footer__link">Nosotros</Link>
            <Link href="/preguntas-frecuentes" className="footer__link">Preguntas Frecuentes</Link>
            <Link href="/buscar" className="footer__link">Buscar</Link>
          </div>

          <div>
            <h3 className="footer__heading">Newsletter</h3>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-md)' }}>
              Recibe las nuevas propiedades directo en tu correo.
            </p>
            <form className="footer__newsletter" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="footer__newsletter-input"
                placeholder="Tu correo electrónico"
                aria-label="Tu correo electrónico"
              />
              <button type="submit" className="footer__newsletter-btn">
                Suscribir
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} LGAI Realty Inmuebles. Todos los derechos reservados.</span>
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
