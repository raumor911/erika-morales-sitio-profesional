import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { trackPageView } from '../lib/telemetry';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string, hash?: string) => void;
  isHowICanHelpPage: boolean;
  isPerspectivePage: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function normalizePath(pathname: string): string {
  if (pathname === '' || pathname === '/') return '/';
  // Strip trailing slash for comparison, but maintain canonical paths
  const trimmed = pathname.replace(/\/+$/, '');
  if (trimmed === '/como-puedo-ayudarte') return '/como-puedo-ayudarte/';
  if (trimmed === '/perspectiva') return '/perspectiva/';
  return trimmed || '/';
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const updateMetadata = useCallback((path: string) => {
    if (typeof document === 'undefined') return;

    if (path === '/perspectiva/') {
      document.title = 'Perspectiva | Erika Morales — Criterio de Producto, IA y Transformación';
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Conoce la perspectiva profesional de Erika Morales: cómo aborda problemas ambiguos, articulación interdisciplinaria, adopción tecnológica, IA Generativa y el futuro de la banca hacia 2030.'
        );
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://erikamorales.rauviaweb.mx/perspectiva/');
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Perspectiva | Erika Morales — Criterio de Producto, IA y Transformación');

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Conoce la perspectiva profesional de Erika Morales: cómo aborda problemas ambiguos, articulación interdisciplinaria, adopción tecnológica, IA Generativa y el futuro de la banca hacia 2030.'
        );
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', 'https://erikamorales.rauviaweb.mx/perspectiva/');

      // Add or update Page-level JSON-LD for Perspective Page
      let jsonLd = document.getElementById('jsonld-perspective');
      if (!jsonLd) {
        jsonLd = document.createElement('script');
        jsonLd.id = 'jsonld-perspective';
        jsonLd.setAttribute('type', 'application/ld+json');
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://erikamorales.rauviaweb.mx/perspectiva/#webpage',
        'url': 'https://erikamorales.rauviaweb.mx/perspectiva/',
        'name': 'Perspectiva | Erika Morales — Criterio de Producto, IA y Transformación',
        'description': 'Perspectiva profesional de Erika Morales: resolución de problemas ambiguos, articulación interdisciplinaria, criterio en IA Generativa, innovación en entornos regulados y el futuro de la banca hacia 2030.',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://erikamorales.rauviaweb.mx/#website',
          'name': 'Erika Morales'
        },
        'about': {
          '@id': 'https://erikamorales.rauviaweb.mx/#person'
        },
        'inLanguage': 'es-MX'
      });

      // Cleanup other page schemas if present
      const helpJsonLd = document.getElementById('jsonld-how-i-can-help');
      if (helpJsonLd) helpJsonLd.remove();

    } else if (path === '/como-puedo-ayudarte/') {
      document.title = 'Cómo puedo ayudarte | Erika Morales — Producto, IA Generativa y Transformación';
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Conoce en qué proyectos puede aportar Erika Morales: Product Discovery, IA Generativa, implementación, stakeholder management, adopción, transformación de negocio y go-to-market.'
        );
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://erikamorales.rauviaweb.mx/como-puedo-ayudarte/');
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Cómo puedo ayudarte | Erika Morales — Producto, IA Generativa y Transformación');

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Conoce en qué proyectos puede aportar Erika Morales: Product Discovery, IA Generativa, implementación, stakeholder management, adopción, transformación de negocio y go-to-market.'
        );
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', 'https://erikamorales.rauviaweb.mx/como-puedo-ayudarte/');

      // Add or update Page-level JSON-LD for LLM / SEO
      let jsonLd = document.getElementById('jsonld-how-i-can-help');
      if (!jsonLd) {
        jsonLd = document.createElement('script');
        jsonLd.id = 'jsonld-how-i-can-help';
        jsonLd.setAttribute('type', 'application/ld+json');
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://erikamorales.rauviaweb.mx/como-puedo-ayudarte/#webpage',
        'url': 'https://erikamorales.rauviaweb.mx/como-puedo-ayudarte/',
        'name': 'Cómo puedo ayudarte | Erika Morales — Producto, IA Generativa y Transformación',
        'description': 'Mapa de relevancia profesional de Erika Morales: escenarios de colaboración en Product Discovery, IA Generativa, implementación, stakeholder management, adopción y transformación.',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://erikamorales.rauviaweb.mx/#website',
          'name': 'Erika Morales'
        },
        'about': {
          '@id': 'https://erikamorales.rauviaweb.mx/#person'
        },
        'inLanguage': 'es-MX'
      });

      // Cleanup perspective schema if present
      const perspJsonLd = document.getElementById('jsonld-perspective');
      if (perspJsonLd) perspJsonLd.remove();

    } else {
      document.title = 'Erika Morales | Product Owner & Especialista en IA Generativa y Transformación de Negocio';
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Perfil profesional de Erika Paola Morales Domínguez. Product Owner especializada en IA Generativa, transformación digital y banca patrimonial en HSBC México. Experta en adopción de tecnología y gestión de producto.'
        );
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://erikamorales.rauviaweb.mx/');
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Erika Morales | Product Owner & IA Generativa');

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Product Owner impulsando soluciones con Inteligencia Artificial Generativa y transformación de negocio en el sector financiero.'
        );
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', 'https://erikamorales.rauviaweb.mx/');

      const jsonLdHelp = document.getElementById('jsonld-how-i-can-help');
      if (jsonLdHelp) jsonLdHelp.remove();

      const jsonLdPersp = document.getElementById('jsonld-perspective');
      if (jsonLdPersp) jsonLdPersp.remove();
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const normalized = normalizePath(window.location.pathname);
      setCurrentPath(normalized);
      updateMetadata(normalized);
      trackPageView(normalized);
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    updateMetadata(currentPath);
    trackPageView(currentPath);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPath, updateMetadata]);

  const navigate = useCallback((targetPath: string, hash?: string) => {
    const normalized = normalizePath(targetPath);
    const fullUrl = hash ? `${normalized}#${hash.replace(/^#/, '')}` : normalized;

    if (normalized !== currentPath) {
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(normalized);
      updateMetadata(normalized);
      trackPageView(normalized);
      if (hash) {
        setTimeout(() => {
          const id = hash.replace(/^#/, '');
          const elem = document.getElementById(id);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      // Same path, handle hash scroll or top scroll
      if (hash) {
        window.history.pushState({}, '', fullUrl);
        const id = hash.replace(/^#/, '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [currentPath, updateMetadata]);

  const isHowICanHelpPage = currentPath === '/como-puedo-ayudarte/';
  const isPerspectivePage = currentPath === '/perspectiva/';

  return (
    <NavigationContext.Provider value={{ currentPath, navigate, isHowICanHelpPage, isPerspectivePage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
