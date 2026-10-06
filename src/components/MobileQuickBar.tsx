import React from 'react';
import { Mail, MessageCircle, Download, Linkedin } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';
import { trackCtaClick } from '../lib/telemetry';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside
      aria-label="Barra de acciones rápidas móvil"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F8F7F4]/98 backdrop-blur-xl border-t border-[rgba(7,17,38,0.08)] px-2.5 py-1.5 shadow-[0_-2px_16px_rgba(7,17,38,0.05)] safe-area-pb"
    >
      <div className="flex items-center justify-between gap-1.5 max-w-md mx-auto">
        {/* WhatsApp */}
        <a
          href={profileData.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCtaClick('whatsapp_click', 'mobile_quick_bar')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xs bg-white hover:bg-[#F2EFE9] border border-[rgba(7,17,38,0.1)] text-[#071126] active:scale-95 transition-all duration-200 min-h-[46px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85]"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-[#173B85]" aria-hidden="true" />
          <span className="text-[10px] font-semibold tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${profileData.email}`}
          onClick={() => trackCtaClick('email_click', 'mobile_quick_bar')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xs bg-[#071126] hover:bg-[#173B85] text-white active:scale-95 transition-all duration-200 min-h-[46px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85]"
          aria-label="Enviar Correo Electrónico"
        >
          <Mail className="w-4 h-4 mb-0.5 text-[#A66A18]" aria-hidden="true" />
          <span className="text-[10px] font-semibold tracking-wide uppercase">Correo</span>
        </a>

        {/* vCard */}
        <button
          onClick={() => {
            trackCtaClick('vcard_download', 'mobile_quick_bar');
            downloadVCard();
          }}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xs bg-white hover:bg-[#F2EFE9] border border-[rgba(7,17,38,0.1)] text-[#071126] active:scale-95 transition-all duration-200 min-h-[46px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85]"
          aria-label="Descargar tarjeta de contacto vCard"
        >
          <Download className="w-4 h-4 mb-0.5 text-[#A66A18]" aria-hidden="true" />
          <span className="text-[10px] font-semibold tracking-wide uppercase">vCard</span>
        </button>

        {/* LinkedIn */}
        <a
          href={profileData.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCtaClick('linkedin_click', 'mobile_quick_bar')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xs bg-white hover:bg-[#F2EFE9] border border-[rgba(7,17,38,0.1)] text-[#173B85] active:scale-95 transition-all duration-200 min-h-[46px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85]"
          aria-label="Ver perfil de LinkedIn"
        >
          <Linkedin className="w-4 h-4 mb-0.5 text-[#173B85]" aria-hidden="true" />
          <span className="text-[10px] font-semibold tracking-wide uppercase">LinkedIn</span>
        </a>
      </div>
    </aside>
  );
};
