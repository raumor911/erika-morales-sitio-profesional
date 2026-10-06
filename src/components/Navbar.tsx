import React, { useState, useEffect } from 'react';
import { Mail, Download } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';
import { useNavigation } from '../context/NavigationContext';
import { trackCtaClick } from '../lib/telemetry';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { navigate, isHowICanHelpPage, isPerspectivePage } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[rgba(7,17,38,0.08)] shadow-[0_2px_16px_rgba(7,17,38,0.03)] py-2 sm:py-2.5'
          : 'bg-[#F8F7F4]/90 backdrop-blur-xs border-b border-[rgba(7,17,38,0.06)] py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3.5 sm:px-8 flex items-center justify-between gap-4">
        {/* Identidad Gráfica Oficial: Logo Lockup de Erika Morales */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/', (isHowICanHelpPage || isPerspectivePage) ? undefined : '#hero');
          }}
          className="inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] focus-visible:ring-offset-2 rounded-xs transition-opacity duration-200 hover:opacity-90 active:translate-y-px"
          aria-label="Erika Morales — Inicio"
        >
          <img
            src="/media/logo/logo_erika_morales.png"
            alt="Erika Morales"
            width={2172}
            height={724}
            fetchPriority="high"
            decoding="async"
            className="w-[155px] xs:w-[170px] sm:w-[200px] md:w-[225px] lg:w-[250px] xl:w-[265px] h-auto object-contain block"
          />
        </a>

        {/* Acciones de Navegación Editorial: Cómo puedo ayudarte, Perspectiva, vCard y Contactar */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <a
            href="/como-puedo-ayudarte/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/como-puedo-ayudarte/');
            }}
            className={`hidden sm:inline-flex items-center text-xs font-semibold uppercase tracking-wider px-2 sm:px-2.5 py-1.5 rounded-xs transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] ${
              isHowICanHelpPage
                ? 'text-[#071126] bg-black/[0.04] font-bold'
                : 'text-[#5A6478] hover:text-[#071126] hover:bg-black/[0.03]'
            }`}
            title="Mapa de relevancia profesional y escenarios de colaboración"
          >
            Cómo puedo ayudarte
          </a>

          <a
            href="/perspectiva/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/perspectiva/');
            }}
            className={`hidden md:inline-flex items-center text-xs font-semibold uppercase tracking-wider px-2 sm:px-2.5 py-1.5 rounded-xs transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] ${
              isPerspectivePage
                ? 'text-[#071126] bg-black/[0.04] font-bold'
                : 'text-[#5A6478] hover:text-[#071126] hover:bg-black/[0.03]'
            }`}
            title="Criterio profesional y filosofía de trabajo"
          >
            Perspectiva
          </a>

          <button
            onClick={() => {
              trackCtaClick('vcard_download', 'navbar');
              downloadVCard();
            }}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-wider text-[#5A6478] hover:text-[#071126] hover:bg-black/[0.03] rounded-xs transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] min-h-[38px] sm:min-h-[40px]"
            title="Descargar ficha vCard de contacto"
            aria-label="Descargar tarjeta digital vCard"
          >
            <Download className="w-3.5 h-3.5 text-[#A66A18]" aria-hidden="true" />
            <span className="hidden lg:inline">Descargar</span>
            <span>vCard</span>
          </button>

          <button
            onClick={() => {
              trackCtaClick('contact_click', 'navbar');
              navigate('/', '#contacto');
            }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#071126] hover:bg-[#173B85] rounded-xs transition-all duration-200 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#071126] active:translate-y-px min-h-[38px] sm:min-h-[40px]"
          >
            <Mail className="w-3.5 h-3.5 text-[#F8F7F4]/80" aria-hidden="true" />
            <span>Contactar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
