import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';
import { useNavigation } from '../context/NavigationContext';
import { trackCtaClick } from '../lib/telemetry';

export const Footer: React.FC = () => {
  const { navigate, isHowICanHelpPage, isPerspectivePage } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 pb-28 sm:pb-12 bg-[#F8F7F4] border-t border-[rgba(7,17,38,0.08)] text-[#5A6478] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Fila Superior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-[rgba(7,17,38,0.08)]">
          
          {/* Identidad Institucional */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-editorial text-lg text-[#071126] font-medium tracking-tight">
              Erika Paola Morales Domínguez
            </span>
            <p className="text-xs text-[#5A6478] mt-1 font-sans">
              Product Owner · Transformación de Negocio · Inteligencia Artificial Generativa
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#5A6478] mt-1.5 font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#A66A18]" aria-hidden="true" />
              <span>Naucalpan de Juárez, Edo. Méx. / CDMX</span>
            </div>
          </div>

          {/* Acciones y Retorno */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            <a
              href="/como-puedo-ayudarte/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/como-puedo-ayudarte/');
              }}
              className={`transition-colors duration-200 py-1 font-medium text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs ${
                isHowICanHelpPage
                  ? 'text-[#071126] font-bold'
                  : 'text-[#5A6478] hover:text-[#071126]'
              }`}
            >
              Cómo puedo ayudarte
            </a>
            <span className="text-[#071126]/20" aria-hidden="true">·</span>
            <a
              href="/perspectiva/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/perspectiva/');
              }}
              className={`transition-colors duration-200 py-1 font-medium text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs ${
                isPerspectivePage
                  ? 'text-[#071126] font-bold'
                  : 'text-[#5A6478] hover:text-[#071126]'
              }`}
            >
              Perspectiva
            </a>
            <span className="text-[#071126]/20" aria-hidden="true">·</span>
            <a
              href={profileData.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('linkedin_click', 'footer')}
              className="text-[#5A6478] hover:text-[#071126] transition-colors duration-200 py-1 font-medium text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs"
            >
              LinkedIn
            </a>
            <span className="text-[#071126]/20" aria-hidden="true">·</span>
            <button
              onClick={() => {
                trackCtaClick('vcard_download', 'footer');
                downloadVCard();
              }}
              className="text-[#5A6478] hover:text-[#071126] transition-colors duration-200 py-1 font-medium text-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs"
            >
              vCard
            </button>
            <span className="text-[#071126]/20" aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xs bg-white border border-[rgba(7,17,38,0.12)] text-[#5A6478] hover:text-[#071126] hover:border-[#071126] transition-colors duration-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85]"
              title="Volver a la cabecera"
              aria-label="Volver arriba al inicio de la página"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Fila Inferior: Firma Centrada */}
        <div className="pt-6 text-center text-[11px] text-[#5A6478]">
          <p>
            Experiencia digital desarrollada por{' '}
            <a
              href="https://rauvia.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#173B85] hover:text-[#071126] hover:underline font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs"
            >
              RAUVIA Consulting
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
