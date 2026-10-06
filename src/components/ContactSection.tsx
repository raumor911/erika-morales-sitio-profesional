import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Download,
  ArrowUpRight
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';
import { ScrollReveal } from './ScrollReveal';
import { trackCtaClick, trackFormStart, trackFormSubmit } from '../lib/telemetry';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Executive correspondence form state
  const [senderName, setSenderName] = useState('');
  const [inquiryType, setInquiryType] = useState('Oportunidad de Liderazgo / Product Owner');
  const [messageText, setMessageText] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit('contact-form-email');
    const subject = encodeURIComponent(`[Contacto Ejecutivo] ${inquiryType} - ${senderName || 'Contacto'}`);
    const body = encodeURIComponent(
      `Estimada Erika Morales,\n\nMi nombre / organización es: ${senderName || 'Interesado'}\nMotivo: ${inquiryType}\n\nMensaje:\n${messageText || 'Me gustaría conversar contigo sobre oportunidades profesionales y de consultoría.'}\n\nSaludos cordiales.`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  const handleSendWhatsApp = () => {
    trackFormSubmit('contact-form-whatsapp');
    const text = encodeURIComponent(
      `Hola Erika Morales, te contacto a través de tu sitio web profesional.\nMi nombre es: ${senderName || 'Contacto'}.\nMotivo: ${inquiryType}.\n${messageText ? `Mensaje: ${messageText}` : ''}`
    );
    window.open(`${profileData.whatsAppUrl}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contacto"
      className="py-16 sm:py-24 bg-[#F8F7F4] border-b border-[rgba(7,17,38,0.08)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* ======================================================== */}
        {/* HEADER EDITORIAL DE CONTACTO */}
        {/* ======================================================== */}
        <ScrollReveal delayMs={0}>
          <div className="max-w-3xl mb-10 sm:mb-16">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-2 sm:mb-3">
              <span>06 / Contacto & Correspondencia</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-[#071126] font-normal leading-[1.14] tracking-tight text-balance mb-3 sm:mb-4">
              Inicie una Conversación Profesional
            </h2>
            <p className="text-xs sm:text-base text-[#5A6478] leading-relaxed">
              Abierta a dialogar sobre roles de Product Ownership, iniciativas de transformación bancaria y proyectos de Inteligencia Artificial Generativa.
            </p>
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* GRID: TARJETA INSTITUCIONAL (IZQ) & CORRESPONDENCIA (DER) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* COLUMNA IZQUIERDA: Tarjeta Ejecutiva & Canales Directos (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal delayMs={60}>
              <div className="bg-white border border-[rgba(7,17,38,0.08)] p-5 sm:p-7 shadow-[0_4px_24px_rgba(7,17,38,0.02)]">
                
                {/* Cabecera de la Tarjeta */}
                <div className="pb-5 border-b border-[rgba(7,17,38,0.08)] mb-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] block mb-1.5">
                    Tarjeta de Presentación
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#071126] font-medium leading-tight">
                    {profileData.fullName}
                  </h3>
                  <p className="text-xs text-[#5A6478] font-medium mt-1">
                    {profileData.currentPosition}
                  </p>
                  <p className="text-xs text-[#071126] font-semibold mt-0.5">
                    {profileData.organization}
                  </p>
                </div>

                {/* Canales Directos */}
                <div className="space-y-4 text-xs">
                  
                  {/* Correo Electrónico */}
                  <div>
                    <div className="flex items-center justify-between text-[#5A6478] mb-1">
                      <span className="uppercase tracking-wider text-[10px] font-semibold text-[#071126]">
                        Correo Electrónico
                      </span>
                      <button
                        onClick={() => copyToClipboard(profileData.email, 'email')}
                        className="inline-flex items-center gap-1 text-[11px] text-[#173B85] hover:text-[#071126] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] py-0.5 px-1 rounded-xs"
                        title="Copiar correo"
                        aria-label="Copiar correo electrónico de Erika Morales"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3 text-[#173B85]" aria-hidden="true" />
                            <span className="font-semibold">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" aria-hidden="true" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href={`mailto:${profileData.email}`}
                      onClick={() => trackCtaClick('email_click', 'contact_card')}
                      className="text-xs sm:text-sm font-semibold text-[#071126] hover:text-[#173B85] transition-colors duration-200 block break-all font-mono py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs"
                    >
                      {profileData.email}
                    </a>
                    {copiedEmail && (
                      <span className="sr-only" aria-live="polite">Correo copiado al portapapeles</span>
                    )}
                  </div>

                  {/* Teléfono / WhatsApp */}
                  <div className="pt-3.5 border-t border-[rgba(7,17,38,0.06)]">
                    <div className="flex items-center justify-between text-[#5A6478] mb-1">
                      <span className="uppercase tracking-wider text-[10px] font-semibold text-[#071126]">
                        Teléfono & WhatsApp
                      </span>
                      <button
                        onClick={() => copyToClipboard(profileData.phone, 'phone')}
                        className="inline-flex items-center gap-1 text-[11px] text-[#173B85] hover:text-[#071126] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] py-0.5 px-1 rounded-xs"
                        title="Copiar teléfono"
                        aria-label="Copiar teléfono de Erika Morales"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="w-3 h-3 text-[#173B85]" aria-hidden="true" />
                            <span className="font-semibold">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" aria-hidden="true" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href={profileData.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCtaClick('whatsapp_click', 'contact_card')}
                      className="text-xs sm:text-sm font-semibold text-[#071126] hover:text-[#173B85] transition-colors duration-200 inline-flex items-center gap-1.5 font-mono py-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs"
                      aria-label="Abrir conversación de WhatsApp con Erika Morales"
                    >
                      <span>{profileData.phone}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#5A6478] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="pt-3.5 border-t border-[rgba(7,17,38,0.06)]">
                    <span className="uppercase tracking-wider text-[10px] font-semibold text-[#071126] block mb-1">
                      Presencia Profesional
                    </span>
                    <a
                      href={profileData.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCtaClick('linkedin_click', 'contact_card')}
                      className="text-xs sm:text-sm font-semibold text-[#173B85] hover:text-[#071126] transition-colors duration-200 inline-flex items-center gap-1.5 py-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs"
                    >
                      <span>linkedin.com/in/erika-morales-012b142a4</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#5A6478] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Ubicación y Modalidad */}
                  <div className="pt-3.5 border-t border-[rgba(7,17,38,0.06)]">
                    <span className="uppercase tracking-wider text-[10px] font-semibold text-[#071126] block mb-1">
                      Ubicación & Modalidad
                    </span>
                    <p className="text-xs text-[#071126] font-medium">
                      Naucalpan de Juárez, Estado de México / CDMX
                    </p>
                    <p className="text-[11px] text-[#5A6478] mt-0.5">
                      Modalidad Híbrida / Presencial / Remota
                    </p>
                  </div>

                </div>

                {/* Descargar Ficha vCard */}
                <div className="mt-6 pt-5 border-t border-[rgba(7,17,38,0.08)]">
                  <button
                    onClick={() => {
                      trackCtaClick('vcard_download', 'contact_card');
                      downloadVCard();
                    }}
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#071126] bg-[#F8F7F4] hover:bg-[#071126] hover:text-white border border-[rgba(7,17,38,0.12)] rounded-xs transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85]"
                  >
                    <Download className="w-3.5 h-3.5 text-[#A66A18]" aria-hidden="true" />
                    <span>Descargar Tarjeta vCard (.vcf)</span>
                  </button>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* COLUMNA DERECHA: Correspondencia Ejecutiva (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delayMs={120}>
              <div className="bg-white border border-[rgba(7,17,38,0.08)] p-5 sm:p-7 lg:p-8 shadow-[0_4px_24px_rgba(7,17,38,0.02)]">
                
                <div className="pb-5 border-b border-[rgba(7,17,38,0.08)] mb-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#173B85] block mb-1">
                    Formulario de Enlace
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#071126] font-medium leading-tight">
                    Envío de Correspondencia Directa
                  </h3>
                  <p className="text-xs text-[#5A6478] mt-1">
                    Complete los campos para preparar un mensaje estructurado vía cliente de correo o WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-4 text-xs">
                  
                  <div>
                    <label htmlFor="contact-reason" className="uppercase tracking-wider text-[10px] font-semibold text-[#071126] block mb-1.5">
                      Motivo de la Comunicación
                    </label>
                    <select
                      id="contact-reason"
                      value={inquiryType}
                      onFocus={() => trackFormStart('contact-form')}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xs bg-[#F8F7F4] border border-[rgba(7,17,38,0.14)] text-xs text-[#071126] focus:bg-white focus:outline-none focus:border-[#071126] transition-colors duration-200 min-h-[44px]"
                    >
                      <option value="Oportunidad de Liderazgo / Product Owner">
                        Oportunidad Laboral: Product Owner / Manager
                      </option>
                      <option value="Iniciativa de IA Generativa & Consultoría">
                        Proyecto de IA Generativa o Consultoría Estratégica
                      </option>
                      <option value="Colaboración Profesional / Networking">
                        Networking & Diálogo Profesional
                      </option>
                      <option value="Consulta sobre Trayectoria en HSBC">
                        Consulta sobre Experiencia en HSBC México
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="uppercase tracking-wider text-[10px] font-semibold text-[#071126] block mb-1.5">
                      Su Nombre o Empresa / Entidad
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={senderName}
                      onFocus={() => trackFormStart('contact-form')}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Ej. Dirección de Talento / Institución Financiera"
                      className="w-full px-3 py-2.5 rounded-xs bg-[#F8F7F4] border border-[rgba(7,17,38,0.14)] text-xs text-[#071126] placeholder-[#5A6478]/60 focus:bg-white focus:outline-none focus:border-[#071126] transition-colors duration-200 min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="uppercase tracking-wider text-[10px] font-semibold text-[#071126] block mb-1.5">
                      Mensaje o Planteamiento
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={messageText}
                      onFocus={() => trackFormStart('contact-form')}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Estimada Erika, revisamos tu experiencia en ComAmplifier, HSBC Life y gobierno de IA..."
                      className="w-full px-3 py-2.5 rounded-xs bg-[#F8F7F4] border border-[rgba(7,17,38,0.14)] text-xs text-[#071126] placeholder-[#5A6478]/60 focus:bg-white focus:outline-none focus:border-[#071126] transition-colors duration-200 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Botones de Despacho */}
                  <div className="pt-3 border-t border-[rgba(7,17,38,0.08)] flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="submit"
                      className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-widest text-white bg-[#071126] hover:bg-[#173B85] rounded-xs transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#071126]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F8F7F4]/80" aria-hidden="true" />
                      <span>Enviar por Correo</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-widest text-[#071126] bg-white border border-[rgba(7,17,38,0.16)] hover:border-[#071126] hover:bg-[#F8F7F4] rounded-xs transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071126]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#A66A18]" aria-hidden="true" />
                      <span>Abrir en WhatsApp</span>
                    </button>
                  </div>

                </form>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
