'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-animate], [data-animate-stagger]').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('[data-animate]:not(.is-visible), [data-animate-stagger]:not(.is-visible)').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
