import FAQ from '@/components/FAQ';
import { faqItems } from '@/data/properties';

export const metadata = {
  title: 'Preguntas Frecuentes — LGAI Realty Inmuebles',
  description: 'Encuentra respuestas a las preguntas más comunes sobre compra, venta y renta de propiedades con LGAI Realty Inmuebles en Monterrey.',
};

export default function FAQPage() {
  return (
    <section className="section-spacing">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-heading" data-animate="">
          <span className="section-heading__label">FAQ</span>
          <h2 className="section-heading__title">Preguntas Frecuentes</h2>
          <p className="section-heading__description">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios inmobiliarios.
          </p>
        </div>
        <div data-animate="">
          <FAQ items={faqItems} />
        </div>
      </div>
    </section>
  );
}
