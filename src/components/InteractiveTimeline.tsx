import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Check
} from 'lucide-react';
import { timelineStages } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const InteractiveTimeline: React.FC = () => {
  // State for which stages have their operational responsibilities expanded
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({
    [timelineStages[0].id]: true,
    [timelineStages[1].id]: false,
    [timelineStages[2].id]: false,
    [timelineStages[3].id]: false,
    [timelineStages[4].id]: false,
  });

  const toggleDetails = (id: string) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  return (
    <section
      id="trayectoria"
      className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[rgba(7,17,38,0.08)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* ======================================================== */}
        {/* HEADER EDITORIAL DE LA TRAYECTORIA */}
        {/* ======================================================== */}
        <ScrollReveal delayMs={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-10 sm:pb-14 border-b border-[rgba(7,17,38,0.08)] mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-2 sm:mb-3">
                <span>03 / Trayectoria Profesional & Rotaciones</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-[#071126] font-normal leading-[1.14] tracking-tight text-balance">
                Línea de Tiempo de Carrera
              </h2>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#5A6478] mt-3 font-sans">
                <span className="font-semibold text-[#071126]">HSBC México</span>
                <span className="text-[#071126]/30" aria-hidden="true">·</span>
                <span>Global Graduate, International Wealth & Premier Banking</span>
                <span className="text-[#071126]/30" aria-hidden="true">·</span>
                <span className="font-mono text-[#A66A18] font-semibold">2024 – 2026</span>
              </div>
            </div>


          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* ÍNDICE DE ROTACIONES (ESTILO SUMARIO EJECUTIVO) */}
        {/* ======================================================== */}
        <ScrollReveal delayMs={60}>
          <div className="mb-12 sm:mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5A6478] block mb-3">
              Rotaciones del Programa Global Graduate
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(7,17,38,0.08)] border-y border-[rgba(7,17,38,0.08)] py-2 sm:py-0">
              {timelineStages.map((stage) => (
                <a
                  key={stage.id}
                  href={`#${stage.id}`}
                  className="p-3 sm:p-4 hover:bg-[#F8F7F4] transition-colors duration-200 block text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#173B85]"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-[11px] font-semibold text-[#A66A18]">
                      0{stage.orderNumber}
                    </span>
                    <span className="font-mono text-[10px] text-[#5A6478]">
                      {stage.period.split('–')[0].trim()}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#071126] group-hover:text-[#173B85] transition-colors duration-200 line-clamp-1">
                    {stage.department}
                  </p>
                  <p className="text-[11px] text-[#5A6478] line-clamp-1 mt-0.5">
                    {stage.area}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* LÍNEA DE TIEMPO EDITORIAL (CONTINUA & PROGRESIVA) */}
        {/* ======================================================== */}
        <div className="relative border-l border-[rgba(7,17,38,0.14)] ml-3 sm:ml-6 md:ml-40 space-y-12 sm:space-y-20">
          {timelineStages.map((stage, idx) => {
            const isExpanded = expandedDetails[stage.id] ?? false;

            return (
              <ScrollReveal key={stage.id} delayMs={idx * 60}>
                <article
                  id={stage.id}
                  className="relative pl-5 sm:pl-8 group"
                >
                  {/* Nodo Discreto de la Línea Editorial con Microinteracción */}
                  <div
                    className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#FFFFFF] border-2 border-[#071126] group-hover:border-[#A66A18] transition-colors duration-200"
                    aria-hidden="true"
                  />

                  {/* Columna Izquierda en Pantallas Grandes (Fechas y División) */}
                  <div className="hidden md:block absolute -left-44 top-1.5 text-right w-36 pr-4">
                    <span className="font-mono text-xs font-semibold text-[#A66A18] block tracking-wide">
                      {stage.period}
                    </span>
                    <span className="text-[11px] text-[#5A6478] font-medium block mt-0.5">
                      Etapa 0{stage.orderNumber}
                    </span>
                    <span className="text-[10px] text-[#5A6478]/80 block mt-0.5">
                      {stage.organization}
                    </span>
                  </div>

                  {/* Contenido Principal de la Rotación */}
                  <div>
                    
                    {/* Encabezado Móvil de Fecha */}
                    <div className="md:hidden flex items-center gap-2 mb-1.5 text-xs font-mono font-semibold text-[#A66A18]">
                      <span>Etapa 0{stage.orderNumber}</span>
                      <span className="text-[#071126]/20" aria-hidden="true">·</span>
                      <span>{stage.period}</span>
                    </div>

                    {/* Título de la Posición / Rol */}
                    <h3 className="font-editorial text-xl sm:text-3xl text-[#071126] font-medium leading-tight mb-2">
                      {stage.role}
                    </h3>

                    {/* Subtítulo Organizacional */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#5A6478] mb-3 sm:mb-4">
                      <span className="font-semibold text-[#173B85]">{stage.department}</span>
                      <span className="text-[#071126]/20" aria-hidden="true">/</span>
                      <span>{stage.area}</span>
                      <span className="text-[#071126]/20" aria-hidden="true">/</span>
                      <span>{stage.organization}</span>
                    </div>

                    {/* Propósito / Resumen de Enfoque */}
                    <p className="text-xs sm:text-base text-[#071126] leading-relaxed mb-3 sm:mb-4 font-normal">
                      {stage.focusSummary}
                    </p>

                    <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed mb-5 font-normal">
                      {stage.description}
                    </p>

                    {/* Logros Cuantificables de la Etapa (Tratamiento Editorial) */}
                    <div className="border-l-2 border-[#A66A18] pl-3.5 sm:pl-5 py-2 my-5 bg-[#F8F7F4]/60">
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#A66A18] block mb-2">
                        Logros Cuantificables & Impacto
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#071126]">
                        {stage.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#A66A18] font-bold" aria-hidden="true">—</span>
                            <span className="font-medium">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Toggle para Desglose Operativo con Microinteracción */}
                    <div className="pt-1">
                      <button
                        onClick={() => toggleDetails(stage.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173B85] hover:text-[#071126] transition-colors duration-200 cursor-pointer py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs min-h-[38px]"
                        aria-expanded={isExpanded}
                        aria-controls={`details-${stage.id}`}
                      >
                        <span>{isExpanded ? 'Ocultar responsabilidades operativas' : 'Ver responsabilidades y ejecución'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                        )}
                      </button>
                    </div>

                    {/* Responsabilidades Expandibles */}
                    {isExpanded && (
                      <div
                        id={`details-${stage.id}`}
                        className="mt-3 pt-3 border-t border-[rgba(7,17,38,0.08)] space-y-3"
                      >
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#071126] block mb-2">
                            Responsabilidades de Ejecución:
                          </span>
                          <ul className="space-y-2 text-xs sm:text-sm text-[#5A6478]">
                            {stage.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                                <Check className="w-3.5 h-3.5 text-[#173B85] shrink-0 mt-0.5" />
                                <span className="text-[#071126]">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Metadatos Tipográficos de Competencias y Stakeholders (Zero-Pills) */}
                    <div className="mt-5 pt-3 sm:pt-4 border-t border-[rgba(7,17,38,0.08)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 text-[11px] text-[#5A6478]">
                      <div>
                        <span className="font-semibold text-[#071126]">Competencias clave: </span>
                        <span>{stage.skillsUsed.join(' · ')}</span>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="font-semibold text-[#071126]">Interlocución: </span>
                        <span>{stage.keyStakeholders.join(' · ')}</span>
                      </div>
                    </div>

                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
