import { COMPANY } from '@/lib/constants';

export const metadata = {
  title: 'Aviso de Privacidad — LGAI Realty Inmuebles',
  description: 'Aviso de privacidad de LGAI Realty Inmuebles. Conoce cómo protegemos tus datos personales.',
};

export default function PrivacidadPage() {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="page-content" data-animate="">
          <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>Aviso de Privacidad</h1>

          <p><strong>Última actualización:</strong> Marzo 2026</p>

          <h2>Responsable del tratamiento</h2>
          <p>
            <strong>{COMPANY.name}</strong>, con domicilio en {COMPANY.address}, {COMPANY.city} {COMPANY.postalCode},
            es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>

          <h2>Datos personales que recabamos</h2>
          <p>Para brindarle nuestros servicios inmobiliarios, podemos recabar los siguientes datos personales:</p>
          <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Nombre completo</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Correo electrónico</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Número telefónico</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Datos de identificación (INE, pasaporte)</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Información financiera para trámites hipotecarios</li>
          </ul>

          <h2>Finalidades del tratamiento</h2>
          <p>Sus datos personales serán utilizados para:</p>
          <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Brindar asesoría inmobiliaria personalizada</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Gestionar la compra, venta o renta de propiedades</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Tramitar créditos hipotecarios ante instituciones financieras</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Enviar información sobre propiedades y servicios (newsletter)</li>
            <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Cumplir con obligaciones legales y contractuales</li>
          </ul>

          <h2>Transferencia de datos</h2>
          <p>
            Sus datos personales podrán ser compartidos con notarías, instituciones financieras y autoridades
            competentes únicamente cuando sea necesario para completar las transacciones inmobiliarias que usted
            solicite, o cuando así lo requiera la ley.
          </p>

          <h2>Derechos ARCO</h2>
          <p>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales
            (derechos ARCO). Para ejercer estos derechos, envíe su solicitud a <strong>{COMPANY.email}</strong>.
          </p>

          <h2>Uso de cookies</h2>
          <p>
            Este sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de
            navegación. Estas tecnologías no recaban datos personales sensibles.
          </p>

          <h2>Cambios al aviso de privacidad</h2>
          <p>
            Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio será publicado
            en esta página. Le recomendamos revisarla periódicamente.
          </p>

          <h2>Contacto</h2>
          <p>
            Para cualquier duda o solicitud relacionada con sus datos personales, comuníquese con nosotros
            en <strong>{COMPANY.email}</strong> o visite nuestra oficina en {COMPANY.address}, {COMPANY.city}.
          </p>
        </div>
      </div>
    </section>
  );
}
