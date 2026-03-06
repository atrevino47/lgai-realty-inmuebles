import { COMPANY } from '@/lib/constants';

export const metadata = {
  title: 'Términos y Condiciones — LGAI Realty Inmuebles',
  description: 'Términos y condiciones de uso del sitio web de LGAI Realty Inmuebles.',
};

export default function TerminosPage() {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="page-content" data-animate="">
          <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>Términos y Condiciones</h1>

          <p><strong>Última actualización:</strong> Marzo 2026</p>

          <h2>Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar el sitio web de <strong>{COMPANY.name}</strong> usted acepta los presentes
            términos y condiciones. Si no está de acuerdo con alguno de ellos, le pedimos no utilizar este sitio.
          </p>

          <h2>Servicios</h2>
          <p>
            {COMPANY.name} ofrece servicios de asesoría inmobiliaria, incluyendo compra-venta, renta,
            asesoría legal, gestión notarial y asesoría financiera e hipotecaria en Monterrey y el área
            metropolitana de Nuevo León.
          </p>

          <h2>Información de propiedades</h2>
          <p>
            La información publicada sobre propiedades (precios, características, ubicaciones e imágenes) se
            proporciona de buena fe y está sujeta a cambios sin previo aviso. {COMPANY.name} no garantiza la
            exactitud total de la información publicada y recomienda verificar los detalles directamente con
            nuestros asesores antes de tomar decisiones.
          </p>

          <h2>Propiedad intelectual</h2>
          <p>
            Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos, diseños y código,
            es propiedad de {COMPANY.name} o de sus respectivos propietarios. Queda prohibida su reproducción,
            distribución o uso comercial sin autorización previa por escrito.
          </p>

          <h2>Uso del sitio</h2>
          <p>El usuario se compromete a:</p>
          <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Utilizar el sitio únicamente con fines legítimos</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>No intentar acceder a áreas restringidas del sitio</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>No copiar ni redistribuir el contenido sin autorización</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Proporcionar información veraz al contactarnos</li>
          </ul>

          <h2>Limitación de responsabilidad</h2>
          <p>
            {COMPANY.name} no será responsable por daños directos o indirectos derivados del uso de este
            sitio web, incluyendo interrupciones del servicio, errores técnicos o pérdida de datos. Las
            transacciones inmobiliarias se formalizan mediante contratos independientes revisados por las
            partes involucradas.
          </p>

          <h2>Enlaces externos</h2>
          <p>
            Este sitio puede contener enlaces a sitios web de terceros. {COMPANY.name} no se
            responsabiliza por el contenido ni las políticas de privacidad de dichos sitios.
          </p>

          <h2>Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.
            Los cambios entrarán en vigor al ser publicados en esta página.
          </p>

          <h2>Legislación aplicable</h2>
          <p>
            Estos términos y condiciones se rigen por las leyes aplicables en los Estados Unidos Mexicanos.
            Cualquier controversia será sometida a los tribunales competentes de Monterrey, Nuevo León.
          </p>

          <h2>Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos, comuníquese con nosotros en <strong>{COMPANY.email}</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
