import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { AnimatedMetric } from './AnimatedMetric';
import { ScrollReveal } from './ScrollReveal';

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  tag: string;
  metric: string;
  metricLabel: string;
  timeframe: string;
  organization: string;
  context: string;
  intervention: string;
  result: string;
  evidencePoints: string[];
}

export const ImpactHighlights: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);

  const caseStudies: CaseStudy[] = [
    {
      id: 'com-amplifier',
      number: '01',
      title: 'ComAmplifier: Despliegue de IA Generativa para la Red Comercial de Seguros',
      tag: 'IA Generativa · Gestión de Producto',
      metric: '~90',
      metricLabel: 'Asesores comerciales y especialistas en seguros habilitados en piloto',
      timeframe: '2024 – 2025',
      organization: 'HSBC Life / Seguros',
      context:
        'La fuerza de ventas comercial (Mobile Insurance Specialists y BDMs) requería reducir drásticamente el tiempo dedicado al análisis manual de pólizas y preparación de citas comerciales con clientes de banca patrimonial, manteniendo estricto apego regulatorio.',
      intervention:
        'Liderazgo de punta a punta en la adaptación local de una herramienta global de IA Generativa. Definición del roadmap funcional, priorización de backlogs y construcción de prompts funcionales con guardrails estrictos para mitigar alucinaciones y omisiones de datos financieros. Coordinación de pruebas UAT con red de Champion Testers y defensa técnica ante comités de Compliance, Legal, Fraude y Riesgos Operativos.',
      result:
        'Piloto preparado y estructurado para ~90 usuarios comerciales, aprobación regulatoria multicomité sin observaciones bloqueantes y reducción sustancial del tiempo requerido por asesores para analizar perfiles de clientes y preparar propuestas de valor.',
      evidencePoints: [
        'Preparación integral del piloto para ~90 usuarios comerciales (Mobile Insurance Specialists y BDMs).',
        'Roadmap funcional y técnico con priorización de backlogs y mitigación proactiva de riesgos de adopción.',
        'Refinamiento de prompts funcionales con guardrails para mitigar alucinaciones en datos normativos.',
        'Aprobación regulatoria multicomité: Compliance, Legal, Seguridad, Fraude y Riesgos.',
      ],
    },
    {
      id: 'rebranding-hsbc-life',
      number: '02',
      title: 'Rebranding Integral y Go-To-Market Nacional de HSBC Life',
      tag: 'Transformación de Marca · Go-To-Market',
      metric: '+2.7M',
      metricLabel: 'Clientes asegurados en México con experiencia unificada de marca',
      timeframe: '2024',
      organization: 'Estrategia de Marca & Seguros',
      context:
        'Transición estratégica de la división de seguros de HSBC México hacia el ecosistema global de marca HSBC Life, demandando sincronización omnicanal sin interrumpir la operación comercial ni la atención al cliente.',
      intervention:
        'Liderazgo del go-to-market y despliegue nacional de la transición de marca en canales físicos, red de sucursales bancarias y activos digitales. Alineación interdepartamental con áreas comerciales, normativas, agencias externas y directrices globales del Grupo HSBC.',
      result:
        'Despliegue integral con impacto en una base de más de 2.7 millones de asegurados en México, garantizando consistencia institucional y adopción en todos los puntos de contacto con clientes.',
      evidencePoints: [
        'Despliegue integral de la marca HSBC Life en canales físicos, red de sucursales y activos digitales.',
        'Impacto directo en más de 2.7 millones de clientes asegurados en el país.',
        'Alineación interdepartamental con directrices del Grupo HSBC, agencias y red comercial.',
      ],
    },
    {
      id: 'vida-ahorro-dotal',
      number: '03',
      title: 'Vida y Ahorro Dotal: Tracción Comercial y Semana de la Protección',
      tag: 'Crecimiento Comercial · Portfolio Launch',
      metric: '200',
      metricLabel: 'Pólizas de seguro colocadas durante el primer mes de salida al mercado',
      timeframe: '2024',
      organization: 'Lanzamiento Comercial & Sucursales',
      context:
        'Necesidad de dinamizar la colocación del producto estrella de ahorro y protección patrimonial en la red de sucursales mediante nuevas coberturas y una narrativa de venta consultiva para los ejecutivos bancarios.',
      intervention:
        'Estrategia de lanzamiento y go-to-market de nuevas coberturas y beneficios. Optimización de la narrativa comercial, diseño de guías de venta para sucursales y coordinación integral de la "Semana de la Protección 2024" con webinars formativos y dinámicas de asesoría.',
      result:
        'Colocación de 200 pólizas en el primer mes de salida al mercado y realización de la Semana de la Protección 2024 con más de 500 participantes y 10 cierres de venta directos adicionales.',
      evidencePoints: [
        '200 pólizas de Vida y Ahorro Dotal colocadas en el primer mes de lanzamiento comercial.',
        'Optimización del argumentario de venta y material de soporte para ejecutivos en sucursal.',
        'Semana de la Protección 2024 coordinada con +500 participantes y 10 cierres directos registrados.',
      ],
    },
    {
      id: 'hackathon-award',
      number: '04',
      title: 'Plataforma de Sostenibilidad con IA & Delegada One Young World',
      tag: 'Distinción Global · Innovación Verde',
      metric: '1er Lugar',
      metricLabel: 'Nacional en HSBC Sustainability Hackathon 2025 y designación internacional',
      timeframe: '2025',
      organization: 'HSBC Global / Sostenibilidad',
      context:
        'Desafío del Grupo HSBC para articular a la institución financiera con proveedores sostenibles y acelerar la transición hacia metas Net Zero en la cadena de compras corporativas.',
      intervention:
        'Concepción, diseño funcional y formulación de una plataforma basada en Inteligencia Artificial capaz de auditar, conectar y priorizar la proveeduría del banco con empresas sustentables certificadas.',
      result:
        'Reconocida con el 1er Lugar a nivel nacional en el HSBC Sustainability Hackathon 2025 y designada por el banco como Delegada oficial de HSBC para la cumbre internacional One Young World.',
      evidencePoints: [
        'Ganadora nacional de HSBC Sustainability Hackathon 2025 con plataforma basada en IA.',
        'Seleccionada como Delegada de HSBC para representar al banco en la cumbre internacional One Young World.',
        'Reconocimiento institucional por visión estratégica, innovación tecnológica y sostenibilidad.',
      ],
    },
    {
      id: 'genai-business-cases',
      number: '05',
      title: 'Business Cases de IA Generativa en Contact Center e Inversiones',
      tag: 'Innovación & Estrategia · Cultura Digital',
      metric: '+1,300',
      metricLabel: 'Colaboradores alcanzados en cultura de innovación y casos de negocio',
      timeframe: '2024 – 2025',
      organization: 'Innovation & Growth',
      context:
        'Demanda por evaluar de forma metódica en qué canales operativos (contact centers, mesa de inversiones y seguros) la IA Generativa genera un retorno real sin comprometer la seguridad ni la satisfacción del cliente.',
      intervention:
        'Modelado analítico de business cases evaluando viabilidad tecnológica, costo-beneficio y recorridos del cliente. Definición de KPIs de adopción, eficiencia operativa y diseño de la estrategia de comunicación y cultura digital para el área de innovación.',
      result:
        'Priorización de iniciativas con alto potencial de ROI y menor fricción regulatoria, con una estrategia de cultura digital que involucró a más de 1,300 colaboradores en la adopción de herramientas digitales internas.',
      evidencePoints: [
        'Evaluación de factibilidad y modelado de casos de ROI en contact center y asesoría patrimonial.',
        'Diseño de KPIs de adopción, eficiencia y satisfacción del cliente (NPS / CSAT).',
        'Estrategia de comunicación y cambio cultural con alcance a más de 1,300 colaboradores.',
      ],
    },
  ];

  const currentCase = caseStudies[activeCaseIndex];

  return (
    <section
      id="impacto"
      className="py-16 sm:py-24 bg-[#F8F7F4] border-b border-[rgba(7,17,38,0.08)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* ======================================================== */}
        {/* HEADER DE LA SECCIÓN DE EVIDENCIA */}
        {/* ======================================================== */}
        <ScrollReveal delayMs={0}>
          <div className="max-w-3xl mb-10 sm:mb-16">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-2 sm:mb-3">
              <span>02 / Evidencia Cuantitativa & Casos de Intervención</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-[#071126] font-normal leading-[1.14] tracking-tight text-balance mb-4">
              Resultados comprobados en escala masiva, gobernanza y adopción.
            </h2>
            <p className="text-xs sm:text-base text-[#5A6478] leading-relaxed">
              Cada cifra refleja una intervención directa como Product Owner dentro de HSBC México: articulando fuerzas comerciales, aprobando guardrails ante comités de regulación y traduciendo la IA Generativa en valor de negocio medible.
            </p>
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* PROTAGONISMO EDITORIAL DE LAS 5 GRANDES CIFRAS (COUNT-UP) */}
        {/* ======================================================== */}
        <div className="mb-14 sm:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(7,17,38,0.09)] border-y border-[rgba(7,17,38,0.09)] py-3 lg:py-0">
            
            {/* Cifra 1: +2.7M */}
            <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#071126] tracking-tight block leading-none mb-2">
                  <AnimatedMetric value="+2.7M" />
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#173B85] block mb-1">
                  Clientes
                </span>
                <p className="text-xs text-[#5A6478] leading-snug">
                  Asegurados impactados en el rebranding nacional a HSBC Life.
                </p>
              </div>
            </div>

            {/* Cifra 2: ~90 */}
            <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#071126] tracking-tight block leading-none mb-2">
                  <AnimatedMetric value="~90" />
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#A66A18] block mb-1">
                  Asesores
                </span>
                <p className="text-xs text-[#5A6478] leading-snug">
                  Especialistas en seguros habilitados en piloto de GenAI ComAmplifier.
                </p>
              </div>
            </div>

            {/* Cifra 3: 200 */}
            <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#071126] tracking-tight block leading-none mb-2">
                  <AnimatedMetric value="200" />
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#071126] block mb-1">
                  Pólizas
                </span>
                <p className="text-xs text-[#5A6478] leading-snug">
                  Colocadas en el primer mes de salida al mercado de Vida y Ahorro Dotal.
                </p>
              </div>
            </div>

            {/* Cifra 4: 1er Lugar */}
            <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#A66A18] tracking-tight block leading-none mb-2">
                  1<sup className="text-lg lg:text-xl font-normal">er</sup> Lugar
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#A66A18] block mb-1">
                  Distinción Global
                </span>
                <p className="text-xs text-[#5A6478] leading-snug">
                  HSBC Sustainability Hackathon y designación One Young World.
                </p>
              </div>
            </div>

            {/* Cifra 5: +1,300 */}
            <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between col-span-2 lg:col-span-1 border-t lg:border-t-0">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#071126] tracking-tight block leading-none mb-2">
                  <AnimatedMetric value="+1,300" />
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#173B85] block mb-1">
                  Colaboradores
                </span>
                <p className="text-xs text-[#5A6478] leading-snug">
                  Alcanzados en iniciativas de cultura de innovación y business cases de IA.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* CASOS DE ESTUDIO EDITORIALES (CONTEXTO / INTERVENCIÓN / RESULTADO) */}
        {/* ======================================================== */}
        <div>
          
          {/* Índice Editorial de Casos */}
          <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-[rgba(7,17,38,0.08)]">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#071126]">
              Registro de Casos de Estudio
            </span>
            <span className="text-xs text-[#5A6478] font-mono">
              Caso {currentCase.number} de 05
            </span>
          </div>

          {/* Navegación por Casos (Estilo Editorial Sobrio, Con Microinteracciones) */}
          <div
            role="tablist"
            aria-label="Casos de estudio de impacto"
            className="flex flex-wrap gap-2 mb-8 sm:mb-10"
          >
            {caseStudies.map((cs, idx) => {
              const isSelected = activeCaseIndex === idx;
              return (
                <button
                  key={cs.id}
                  role="tab"
                  id={`case-tab-${cs.number}`}
                  aria-selected={isSelected}
                  aria-controls={`case-panel-${cs.number}`}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`text-left px-3 sm:px-3.5 py-2 text-xs font-semibold rounded-xs transition-colors duration-200 cursor-pointer border min-h-[42px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] ${
                    isSelected
                      ? 'bg-[#071126] text-white border-[#071126]'
                      : 'bg-white text-[#5A6478] border-[rgba(7,17,38,0.12)] hover:border-[#071126] hover:text-[#071126]'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-75 mr-1.5">{cs.number}.</span>
                  <span>{cs.title.split(':')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Dossier del Caso Activo */}
          <div
            id={`case-panel-${currentCase.number}`}
            role="tabpanel"
            aria-labelledby={`case-tab-${currentCase.number}`}
            className="bg-white border border-[rgba(7,17,38,0.08)] p-5 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(7,17,38,0.02)] transition-opacity duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              
              {/* Columna Izquierda: Cifra y Ficha Institucional (4 cols) */}
              <div className="lg:col-span-4 lg:pr-6 lg:border-r lg:border-[rgba(7,17,38,0.08)]">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A66A18] font-bold block mb-4">
                  Caso {currentCase.number} · {currentCase.tag}
                </span>

                <div className="space-y-3 text-xs text-[#5A6478] pb-5 border-b border-[rgba(7,17,38,0.08)]">
                  <div>
                    <span className="uppercase tracking-wider text-[10px] font-semibold text-[#071126] block">
                      Entorno & División
                    </span>
                    <span className="text-[#071126] font-medium">{currentCase.organization}</span>
                  </div>
                  <div>
                    <span className="uppercase tracking-wider text-[10px] font-semibold text-[#071126] block">
                      Periodo de Ejecución
                    </span>
                    <span className="font-mono text-[#5A6478]">{currentCase.timeframe}</span>
                  </div>
                </div>

                {/* Lista de Evidencias */}
                <div className="mt-6 pt-5 border-t border-[rgba(7,17,38,0.08)]">
                  <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#071126] block mb-2.5">
                    Puntos de Verificación
                  </span>
                  <ul className="space-y-2 text-xs text-[#5A6478]">
                    {currentCase.evidencePoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#173B85] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Columna Derecha: Narrativa Tripartita (Contexto / Intervención / Resultado) (8 cols) */}
              <div className="lg:col-span-8 space-y-6 sm:space-y-7">
                
                {/* Título del Caso */}
                <div>
                  <h3 className="font-editorial text-xl sm:text-3xl text-[#071126] font-medium leading-tight">
                    {currentCase.title}
                  </h3>
                </div>

                {/* Bloque 1: CONTEXTO */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A66A18] block">
                    01. Contexto de Negocio
                  </span>
                  <p className="text-xs sm:text-base text-[#071126] leading-relaxed font-normal">
                    {currentCase.context}
                  </p>
                </div>

                {/* Bloque 2: INTERVENCIÓN */}
                <div className="space-y-1.5 pt-4 sm:pt-5 border-t border-[rgba(7,17,38,0.08)]">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#173B85] block">
                    02. Intervención como Product Owner
                  </span>
                  <p className="text-xs sm:text-base text-[#071126] leading-relaxed font-normal">
                    {currentCase.intervention}
                  </p>
                </div>

                {/* Bloque 3: RESULTADO */}
                <div className="space-y-1.5 pt-4 sm:pt-5 border-t border-[rgba(7,17,38,0.08)] bg-[#F8F7F4]/60 p-4 sm:p-5 rounded-xs border-l-2 border-l-[#A66A18]">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#071126] block">
                    03. Resultado Cuantificable
                  </span>
                  <p className="text-xs sm:text-base text-[#071126] font-medium leading-relaxed">
                    {currentCase.result}
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
