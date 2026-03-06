import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FavoritesDrawer from '@/components/FavoritesDrawer';
import AnimationObserver from '@/components/AnimationObserver';

export const metadata = {
  title: 'LGAI Realty Inmuebles — Asesoría Inmobiliaria en Monterrey',
  description: 'Asesoría inmobiliaria integral en Monterrey. Venta y renta de propiedades, asesoría legal, gestión notarial y más. Tu aliado inmobiliario de confianza en Nuevo León.',
  keywords: 'inmobiliaria Monterrey, asesoría inmobiliaria, venta propiedades Monterrey, renta Monterrey, bienes raíces Nuevo León, LGAI Realty',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Ir al contenido
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FavoritesDrawer />
        <WhatsAppFloat />
        <AnimationObserver />
      </body>
    </html>
  );
}
