'use client';

import { useState } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { COMPANY } from '@/lib/constants';

export default function ContactoPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'El nombre es requerido';
    if (!form.email.trim()) errs.email = 'El correo es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Correo no válido';
    if (!form.message.trim()) errs.message = 'El mensaje es requerido';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  if (submitted) {
    return (
      <section className="section-spacing">
        <div className="container">
          <div className="contact-success" data-animate="">
            <div className="contact-success__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>Mensaje Enviado</h1>
            <p className="text-light" style={{ maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
              Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá a la brevedad
              por correo electrónico o teléfono.
            </p>
            <WhatsAppButton label="También puedes escribirnos por WhatsApp" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="section-heading" data-animate="">
          <span className="section-heading__label">Contacto</span>
          <h1 className="section-heading__title">Contáctanos</h1>
          <p className="section-heading__description">
            Estamos aquí para ayudarte. Llena el formulario o contáctanos directamente.
          </p>
        </div>

        <div className="contact-grid" data-animate="">
          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nombre completo *</label>
              <input
                id="name"
                name="name"
                type="text"
                className={`form-input${errors.name ? ' is-error' : ''}`}
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">Correo electrónico *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-input${errors.email ? ' is-error' : ''}`}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+52 81 1234 5678"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="interest">¿Qué te interesa?</label>
              <select
                id="interest"
                name="interest"
                className="form-input"
                value={form.interest}
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="comprar">Comprar una propiedad</option>
                <option value="vender">Vender mi propiedad</option>
                <option value="rentar">Rentar una propiedad</option>
                <option value="asesoria-legal">Asesoría legal</option>
                <option value="credito-hipotecario">Crédito hipotecario</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                className={`form-input form-textarea${errors.message ? ' is-error' : ''}`}
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows="5"
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn--primary btn--full">
              Enviar Mensaje
            </button>
          </form>

          {/* Sidebar */}
          <div className="contact-sidebar">
            <div className="contact-info-card">
              <h3 style={{ marginBottom: 'var(--space-lg)' }}>Información de Contacto</h3>

              <div className="contact-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong>Oficina</strong>
                  <p>{COMPANY.address}<br />{COMPANY.city} {COMPANY.postalCode}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <div>
                  <strong>Correo</strong>
                  <p>{COMPANY.email}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <strong>Teléfono</strong>
                  <p>{COMPANY.phone}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <strong>Horario</strong>
                  <p>Lunes a Viernes: 9:00 — 18:00<br />Sábado: 10:00 — 14:00</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-lg)' }}>
              <WhatsAppButton label="Escríbenos por WhatsApp" className="btn--full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
