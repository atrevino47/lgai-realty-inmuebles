'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Propiedades', href: '/propiedades' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'FAQ', href: '/preguntas-frecuentes' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset;
      setIsScrolled(current > 10);
      setIsHidden(current > 80 && current > lastScrollRef.current);
      lastScrollRef.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openFavorites = () => {
    document.querySelector('.favorites-drawer')?.classList.add('is-open');
    document.querySelector('.fav-overlay')?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <div className="announcement-bar">
        <div className="container">
          Asesoría inmobiliaria integral en Monterrey — <Link href="/propiedades">Ver propiedades</Link>
        </div>
      </div>

      <header className={`header${isScrolled ? ' is-scrolled' : ''}${isHidden ? ' is-hidden' : ''}`}>
        <div className="header__inner">
          <Link href="/" className="header__logo">
            LGAI Realty
          </Link>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="header__nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <Link href="/buscar" className="header__action-btn" aria-label="Buscar">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </Link>

            <button className="header__action-btn" onClick={openFavorites} aria-label="Favoritos">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <span className="header__favorites-count" id="fav-count" style={{ display: 'none' }}>0</span>
            </button>

            <button
              className="header__menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div
        className={`mobile-nav__overlay${mobileOpen ? ' is-open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <nav className={`mobile-nav${mobileOpen ? ' is-open' : ''}`}>
        <button className="mobile-nav__close" onClick={() => setMobileOpen(false)} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav__link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
