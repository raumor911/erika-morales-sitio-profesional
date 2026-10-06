import React from 'react';
import { certifications, profileData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const EducationCertifications: React.FC = () => {
  return (
    <section
      id="formacion"
      className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[rgba(7,17,38,0.08)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* ======================================================== */}
        {/* HEADER EDITORIAL */}
        {/* ======================================================== */}
        <ScrollReveal delayMs={0}>
          <div className="max-w-3xl mb-10 sm:mb-16">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-2 sm:mb-3">
              <span>05 / Credenciales Institucionales & Registro Académico</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-[#071126] font-normal leading-[1.14] tracking-tight text-balance mb-3 sm:mb-4">
              Educación, Certificaciones & Reconocimientos
            </h2>
            <p className="text-xs sm:text-base text-[#5A6478] leading-relaxed">
              Registro formal de titulación universitaria, acreditaciones internacionales en marcos ágiles y gestión de IA, distinciones institucionales globales y competencia lingüística profesional.
            </p>
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* REGISTRO INSTITUCIONAL EN DOS GRANDES BLOQUES */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* COLUMNA IZQUIERDA: Formación Universitaria, Reconocimientos e Idiomas (5 cols) */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            
            {/* Bloque 1: Grado Universitario */}
            <ScrollReveal delayMs={60}>
              <div className="pb-8 border-b border-[rgba(7,17,38,0.08)]">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] block mb-2">
                  Titulación Universitaria
                </span>
                
                <h3 className="font-editorial text-xl sm:text-2xl text-[#071126] font-medium leading-tight mb-1">
                  Licenciatura en Comunicación
                </h3>
                
                <div className="space-y-0.5 text-xs text-[#5A6478] my-2.5">
                  <p className="font-medium text-[#071126]">
                    Facultad de Estudios Superiores Acatlán, UNAM
                  </p>
                  <p className="font-mono text-[#A66A18]">
                    2019 – 2023 · Naucalpan, Estado de México
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed mt-3">
                  Formación universitaria orientada a comunicación estratégica, análisis de audiencias, investigación cualitativa y cuantitativa, semiótica organizacional y gestión del cambio en estructuras complejas.
                </p>
              </div>
            </ScrollReveal>

            {/* Bloque 2: Distinciones Globales Institucionales */}
            <ScrollReveal delayMs={120}>
              <div className="pb-8 border-b border-[rgba(7,17,38,0.08)]">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#173B85] block mb-2">
                  Reconocimientos Institucionales
                </span>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#071126]">
                        1er Lugar Nacional — HSBC Sustainability Hackathon
                      </h4>
                      <span className="font-mono text-xs text-[#A66A18] font-semibold">2025</span>
                    </div>
                    <p className="text-xs text-[#5A6478] mt-1 leading-relaxed">
                      Desarrollo de plataforma basada en Inteligencia Artificial para integrar compras corporativas y proveedores sostenibles con criterios Net Zero.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#071126]">
                        Delegada Institucional HSBC — One Young World
                      </h4>
                      <span className="font-mono text-xs text-[#A66A18] font-semibold">2025</span>
                    </div>
                    <p className="text-xs text-[#5A6478] mt-1 leading-relaxed">
                      Designada por la alta dirección de HSBC para representar al banco en la cumbre internacional de liderazgo y sostenibilidad.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Bloque 3: Perfil Lingüístico */}
            <ScrollReveal delayMs={180}>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#071126] block mb-2">
                  Competencia Lingüística
                </span>

                <div className="space-y-2.5">
                  {profileData.languages.map((lang) => (
                    <div
                      key={lang.language}
                      className="flex items-baseline justify-between py-2 border-b border-[rgba(7,17,38,0.06)] text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#071126] block">{lang.language}</span>
                        <span className="text-[11px] text-[#5A6478]">{lang.detail}</span>
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-[#173B85]">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* COLUMNA DERECHA: Certificaciones Profesionales (7 cols) */}
          <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[rgba(7,17,38,0.08)]">
            
            <ScrollReveal delayMs={80}>
              <div className="flex items-baseline justify-between mb-6 pb-2.5 border-b border-[rgba(7,17,38,0.08)]">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#A66A18]">
                  Certificaciones & Acreditaciones
                </span>
                <span className="text-xs text-[#5A6478] font-mono">
                  {certifications.length} Credenciales Registradas
                </span>
              </div>
            </ScrollReveal>

            {/* Lista Institucional de Certificaciones */}
            <div className="divide-y divide-[rgba(7,17,38,0.08)]">
              {certifications.map((cert, cIdx) => (
                <ScrollReveal key={cert.name} delayMs={cIdx * 50}>
                  <div className="py-4 sm:py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 group">
                    <div className="max-w-md">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#A66A18] block mb-0.5">
                        {cert.badge}
                      </span>
                      <h4 className="text-sm sm:text-base font-semibold text-[#071126] group-hover:text-[#173B85] transition-colors duration-200">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-[#5A6478] mt-0.5">
                        {cert.institution}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                      <span className="font-mono text-xs font-semibold text-[#071126]">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Nota de Actualización y Gobernanza Continua */}
            <ScrollReveal delayMs={300}>
              <div className="mt-8 pt-5 border-t border-[rgba(7,17,38,0.08)] text-xs text-[#5A6478] flex items-baseline gap-2">
                <span className="text-[#A66A18] font-mono" aria-hidden="true">•</span>
                <p>
                  Acreditaciones alineadas a estándares internacionales de la industria financiera: International Institute of Business Analysis (IIBA), Project Management Institute (PMI) y HSBC Global University.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
