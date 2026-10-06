import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Languages,
  Linkedin,
  Download,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';
import { AnimatedMetric } from './AnimatedMetric';
import { ScrollReveal } from './ScrollReveal';
import { trackCtaClick } from '../lib/telemetry';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 overflow-hidden bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Editorial Eyebrow / Kicker */}
        <ScrollReveal delayMs={0}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-5 sm:mb-7">
            <span>Dirección de Producto</span>
            <span className="text-[#071126]/20" aria-hidden="true">/</span>
            <span>Banca Patrimonial</span>
            <span className="text-[#071126]/20" aria-hidden="true">/</span>
            <span>IA Generativa Aplicada</span>
          </div>
        </ScrollReveal>

        {/* Hero Main Grid (Asymmetric Executive Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pb-12 sm:pb-16 border-b border-[rgba(7,17,38,0.08)]">
          
          {/* Columna Principal: Identidad, Tesis & Acciones (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Nombre (Máximo Protagonismo Tipográfico, Seguro en Pantallas de 360px) */}
            <ScrollReveal delayMs={60}>
              <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-[#071126] leading-[1.08] mb-6 sm:mb-7 break-words">
                Erika Paola <br className="hidden sm:inline" />
                <span className="italic font-normal">Morales Domínguez</span>
              </h1>
            </ScrollReveal>

            {/* Propuesta Profesional de Autoridad */}
            <ScrollReveal delayMs={120}>
              <p className="text-base sm:text-xl lg:text-[1.3rem] font-editorial text-[#071126] leading-[1.4] mb-5 text-balance">
                Product Owner especializada en la intersección entre <strong className="font-semibold text-[#173B85]">transformación de negocio</strong>, <strong className="font-semibold text-[#071126]">Inteligencia Artificial Generativa</strong> y <strong className="font-semibold text-[#071126]">banca institucional</strong>.
              </p>
              
              <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
                Diseño, valido y despliego soluciones digitales que traducen normativas complejas y modelos generativos en herramientas comerciales adoptadas por fuerzas de ventas y millones de clientes asegurados en HSBC México.
              </p>
            </ScrollReveal>

            {/* Ficha Editorial de Operación */}
            <ScrollReveal delayMs={180}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 sm:py-5 my-6 sm:my-8 border-y border-[rgba(7,17,38,0.08)] text-xs text-[#5A6478]">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-[#071126] uppercase tracking-wider text-[10px]">
                    <Building2 className="w-3.5 h-3.5 text-[#173B85]" />
                    <span>Posición & Entorno</span>
                  </div>
                  <p className="text-[#071126] font-medium leading-snug">
                    {profileData.currentPosition}
                  </p>
                  <p className="text-[#5A6478]">{profileData.organization}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-[#071126] uppercase tracking-wider text-[10px]">
                    <MapPin className="w-3.5 h-3.5 text-[#A66A18]" />
                    <span>Ubicación & Alcance</span>
                  </div>
                  <p className="text-[#071126] font-medium">Naucalpan de Juárez, Edo. Méx. / CDMX</p>
                  <p className="text-[#5A6478] flex items-center gap-1">
                    <Languages className="w-3 h-3 text-[#173B85]" />
                    <span>Español (Nativo) · Inglés (C1) · Francés (B2)</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* CTAs Ejecutivos Sobrios con Microinteracciones */}
            <ScrollReveal delayMs={240}>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                <a
                  href="#contacto"
                  onClick={() => trackCtaClick('contact_click', 'hero')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white bg-[#071126] hover:bg-[#173B85] transition-all duration-200 rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#071126] group min-h-[44px]"
                >
                  <span>Iniciar Conversación</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F8F7F4]/80 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#trayectoria"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#071126] bg-white border border-[rgba(7,17,38,0.14)] hover:border-[#071126] hover:bg-[#F8F7F4] transition-all duration-200 rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071126] min-h-[44px]"
                >
                  <span>Ver Trayectoria HSBC</span>
                </a>

                <a
                  href={profileData.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick('linkedin_click', 'hero')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#173B85] hover:text-[#071126] transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs min-h-[40px]"
                >
                  <Linkedin className="w-4 h-4 text-[#173B85]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5A6478] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <button
                  onClick={() => {
                    trackCtaClick('vcard_download', 'hero');
                    downloadVCard();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#5A6478] hover:text-[#071126] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs min-h-[40px]"
                  title="Descargar tarjeta digital vCard"
                  aria-label="Descargar archivo de contacto vCard"
                >
                  <Download className="w-3.5 h-3.5 text-[#A66A18]" />
                  <span>vCard</span>
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Columna Lateral: Credenciales & Criterio Directivo (5 cols) */}
          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-[rgba(7,17,38,0.08)] flex flex-col justify-between h-full pt-4 lg:pt-2">
            
            {/* Declaración de Enfoque Estratégico */}
            <ScrollReveal delayMs={100}>
              <div className="mb-6 sm:mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5A6478] block mb-2 sm:mb-3">
                  Criterio & Especialización
                </span>
                <blockquote className="font-editorial text-lg sm:text-2xl text-[#071126] italic leading-snug border-l-2 border-[#A66A18] pl-4 sm:pl-5 my-3 sm:my-4">
                  &ldquo;El valor de la Inteligencia Artificial en el sector bancario no reside en la novedad del modelo, sino en su rigor para mitigar alucinaciones, cumplir con la regulación y acelerar la productividad comercial.&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Pilares Clave de Práctica Ejecutiva */}
            <ScrollReveal delayMs={160}>
              <div className="space-y-3.5 sm:space-y-4 pt-5 sm:pt-6 border-t border-[rgba(7,17,38,0.08)]">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#A66A18] font-bold mt-0.5">01</span>
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-[#071126]">
                      Product Ownership de IA Generativa
                    </h2>
                    <p className="text-xs text-[#5A6478] mt-0.5 leading-relaxed">
                      De caso de uso y refinamiento de prompts funcionales a UAT con Champion Testers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#173B85] font-bold mt-0.5">02</span>
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-[#071126]">
                      Gobernanza Institucional
                    </h2>
                    <p className="text-xs text-[#5A6478] mt-0.5 leading-relaxed">
                      Aprobación en comités multidisciplinarios: Compliance, Legal, Fraude y Riesgos Operativos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#071126] font-bold mt-0.5">03</span>
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-[#071126]">
                      Transformación & Adopción
                    </h2>
                    <p className="text-xs text-[#5A6478] mt-0.5 leading-relaxed">
                      Go-to-market masivo, cultura digital para +1,300 colaboradores y métricas de ROI.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Distinción Institucional */}
            <ScrollReveal delayMs={220}>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-[rgba(7,17,38,0.08)] flex items-center gap-3 text-xs text-[#5A6478]">
                <ShieldCheck className="w-4 h-4 text-[#A66A18] shrink-0" />
                <span>
                  Reconocida con el <strong className="text-[#071126] font-semibold">1er Lugar HSBC Sustainability Hackathon</strong> y designada <strong className="text-[#071126] font-semibold">Delegada One Young World</strong>.
                </span>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* ======================================================== */}
        {/* BLOQUE INICIAL DE RESULTADOS / MÉTRICAS (EDITORIAL DE AUTORIDAD) */}
        {/* ======================================================== */}
        <div className="pt-10 sm:pt-16">
          
          {/* Kicker del bloque de cifras */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2 mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5A6478]">
              Resultados Cuantitativos & Escala de Impacto
            </span>
            <span className="text-xs text-[#5A6478] font-editorial italic">
              Trayectoria en banca patrimonial, seguros e innovación digital (HSBC México)
            </span>
          </div>

          {/* Bloque Editorial de Cifras con Animación de Entrada Suave Count-Up */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(7,17,38,0.09)] border-y border-[rgba(7,17,38,0.09)] py-2 sm:py-0">
            
            {/* Métrica 1: +2.7M */}
            <div className="py-5 sm:py-8 sm:px-6 lg:px-7 sm:first:pl-0 flex flex-col justify-between">
              <div>
                <span className="font-editorial text-4xl sm:text-5xl lg:text-[3.75rem] font-light text-[#071126] tracking-tight leading-none block mb-2 sm:mb-3">
                  <AnimatedMetric value="+2.7M" />
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-[#071126] mb-1">
                  Clientes Impactados
                </p>
                <p className="text-xs text-[#5A6478] leading-relaxed">
                  Liderazgo nacional del despliegue y transición de marca hacia HSBC Life en México a través de canales físicos y digitales.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5A6478] tracking-wider uppercase mt-3 sm:mt-4 block">
                Estrategia de Marca
              </span>
            </div>

            {/* Métrica 2: ~90 */}
            <div className="py-5 sm:py-8 sm:px-6 lg:px-7 flex flex-col justify-between">
              <div>
                <span className="font-editorial text-4xl sm:text-5xl lg:text-[3.75rem] font-light text-[#173B85] tracking-tight leading-none block mb-2 sm:mb-3">
                  <AnimatedMetric value="~90" />
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-[#071126] mb-1">
                  Fuerza Comercial en Piloto
                </p>
                <p className="text-xs text-[#5A6478] leading-relaxed">
                  Product Owner de ComAmplifier (IA Generativa), estructurando casos de uso, mitigación de alucinaciones y UAT.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#173B85] tracking-wider uppercase mt-3 sm:mt-4 block">
                IA Generativa Aplicada
              </span>
            </div>

            {/* Métrica 3: 200 */}
            <div className="py-5 sm:py-8 sm:px-6 lg:px-7 flex flex-col justify-between">
              <div>
                <span className="font-editorial text-4xl sm:text-5xl lg:text-[3.75rem] font-light text-[#071126] tracking-tight leading-none block mb-2 sm:mb-3">
                  <AnimatedMetric value="200" />
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-[#071126] mb-1">
                  Pólizas en Primer Mes
                </p>
                <p className="text-xs text-[#5A6478] leading-relaxed">
                  Lanzamiento de coberturas de Vida y Ahorro Dotal y dirección de la Semana de la Protección con +500 participantes.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5A6478] tracking-wider uppercase mt-3 sm:mt-4 block">
                Crecimiento Comercial
              </span>
            </div>

            {/* Métrica 4: 1er Lugar */}
            <div className="py-5 sm:py-8 sm:px-6 lg:px-7 sm:last:pr-0 flex flex-col justify-between">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl lg:text-[3.25rem] font-light text-[#A66A18] tracking-tight leading-none block mb-2 sm:mb-3">
                  1<sup className="text-xl sm:text-2xl font-normal">er</sup> Lugar
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-[#A66A18] mb-1">
                  Hackathon Sostenibilidad
                </p>
                <p className="text-xs text-[#5A6478] leading-relaxed">
                  Solución de IA para compras y proveeduría Net Zero; elegida por HSBC como Delegada en One Young World Summit.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#A66A18] tracking-wider uppercase mt-3 sm:mt-4 block">
                Distinción Global
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
