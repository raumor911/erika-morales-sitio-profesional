import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useNavigation } from '../context/NavigationContext';

interface FrameworkStep {
  number: string;
  title: string;
  domain: string;
  description: string;
  deliverables: string[];
}

export const ValueProposition: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [expandedDeliverables, setExpandedDeliverables] = useState<boolean>(true);
  const { navigate } = useNavigation();

  const steps: FrameworkStep[] = [
    {
      number: '01',
      title: 'Discovery & Business Case',
      domain: 'Investigación & Factibilidad Financiera',
      description:
        'Identificación rigurosa de cuellos de botella operativos en canales comerciales, contact centers y áreas de inversiones. Evaluación cuantitativa de factibilidad tecnológica, cálculo de ROI estimado y mapeo de recorridos críticos (Customer & Employee Journey) antes de comprometer recursos de desarrollo.',
      deliverables: [
        'Modelado de casos de negocio con cálculo de ROI y costo de implementación',
        'Mapeo de Customer & Employee Journeys identificando puntos de fricción',
        'Matriz de priorización de iniciativas por impacto comercial vs. complejidad regulatoria',
      ],
    },
    {
      number: '02',
      title: 'Prompt Engineering & Guardrails',
      domain: 'Diseño Funcional de IA & Confiabilidad',
      description:
        'Estructuración, parametrización y refinamiento de directivas y prompts funcionales para modelos generativos adaptados al contexto financiero mexicano. Implementación sistemática de salvaguardas (guardrails) e instrucciones de sistema para mitigar alucinaciones y omisiones de datos normativos.',
      deliverables: [
        'Catálogo de prompts funcionales parametrizados para la fuerza de ventas',
        'Protocolos de guardrails para mitigación de alucinaciones y verificación factual',
        'Especificaciones de integración con fuentes oficiales de producto bancario',
      ],
    },
    {
      number: '03',
      title: 'Pruebas UAT & Gobernanza Regulatoria',
      domain: 'Alineación Multicomité & Validación en Campo',
      description:
        'Coordinación de pruebas de aceptación de usuario (UAT) con red de Champion Testers en condiciones reales de operación comercial. Defensa técnica y articulación de aprobaciones formales en comités multidisciplinarios: Compliance, Legal, Seguridad de la Información, Fraude y Riesgos Operativos.',
      deliverables: [
        'Matrices de prueba UAT con casos de uso límite y criterios de salida',
        'Dossier regulatorio integral y actas de no objeción en comités institucionales',
        'Manuales funcionales de operación y trazabilidad para auditorías bancarias',
      ],
    },
    {
      number: '04',
      title: 'Go-To-Market & Adopción en Campo',
      domain: 'Gestión del Cambio & Métricas de Negocio',
      description:
        'Despliegue progresivo desde grupos piloto hasta producción a escala nacional. Programas de habilitación comercial, sensibilización cultural, medición continua de KPIs de adopción y retroalimentación iterativa para asegurar que la tecnología se traduzca en productividad y colocación real.',
      deliverables: [
        'Plan de rollout y go-to-market progresivo para redes comerciales',
        'Programas de capacitación y red de embajadores para acelerar la adopción',
        'Tablero de control de KPIs de uso, satisfacción y retorno de valor',
      ],
    },
  ];

  return (
    <section
      id="propuesta"
      className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[rgba(7,17,38,0.08)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* ======================================================== */}
        {/* PARTE 1: PROPUESTA DE VALOR (PRESENTACIÓN EJECUTIVA) */}
        {/* ======================================================== */}
        <div className="pb-14 sm:pb-20 border-b border-[rgba(7,17,38,0.08)]">
          
          {/* Eyebrow Editorial */}
          <ScrollReveal delayMs={0}>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-3 sm:mb-4">
              <span>01 / Tesis & Propuesta de Valor</span>
            </div>
          </ScrollReveal>

          {/* Gran Título Editorial */}
          <ScrollReveal delayMs={60}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-10 sm:mb-16">
              <div className="lg:col-span-8">
                <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-[#071126] font-normal leading-[1.14] tracking-tight text-balance">
                  Articulación entre visión estratégica de negocio, rigor regulatorio e IA Generativa.
                </h2>
              </div>
              <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-[rgba(7,17,38,0.08)]">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.16em] font-semibold text-[#5A6478] mb-1.5">
                  Mandato Profesional
                </p>
                <p className="text-xs text-[#5A6478] leading-relaxed">
                  Transformar necesidades operativas complejas en productos digitales de impacto medible y regulatoriamente aprobados en banca patrimonial.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Declaración de Postura Ejecutiva (Whitespace & Escala) */}
          <ScrollReveal delayMs={120}>
            <div className="max-w-4xl mb-12 sm:mb-16">
              <p className="text-base sm:text-xl lg:text-2xl font-editorial text-[#071126] leading-relaxed italic">
                &ldquo;Profesional especializada en <strong className="font-normal not-italic text-[#173B85]">gestión de producto, transformación de negocio</strong> e implementación de soluciones de <strong className="font-normal not-italic text-[#071126]">Inteligencia Artificial Generativa</strong>. Mi experiencia se centra en identificar oportunidades de alto valor, estructurar iniciativas estratégicas y coordinar equipos multidisciplinarios para convertir necesidades operativas complejas en productos digitales de impacto tangible, medible y regulatoriamente sólido.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Pilares Profesionales (Composición Editorial en 3 Columnas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 sm:pt-10 border-t border-[rgba(7,17,38,0.08)]">
            
            {/* Pilar 1: IA Generativa Aplicada */}
            <ScrollReveal delayMs={160}>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#A66A18] font-semibold tracking-wider block mb-2 sm:mb-3">
                    Pilar 01
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#071126] font-medium leading-tight mb-2 sm:mb-3">
                    IA Generativa Aplicada
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#5A6478] mb-3">
                    Diseño Funcional & Guardrails
                  </p>
                  <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed">
                    Diseño de casos de uso funcionales, estructuración y refinamiento de prompts para fuerzas de ventas comerciales y mitigación sistemática de alucinaciones u omisiones en datos financieros sensibles.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pilar 2: Articulación 360° */}
            <ScrollReveal delayMs={220}>
              <div className="flex flex-col justify-between md:border-l md:border-[rgba(7,17,38,0.08)] md:pl-8 lg:pl-10">
                <div>
                  <span className="font-mono text-xs text-[#173B85] font-semibold tracking-wider block mb-2 sm:mb-3">
                    Pilar 02
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#071126] font-medium leading-tight mb-2 sm:mb-3">
                    Articulación 360°
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#5A6478] mb-3">
                    Gobernanza Multidisciplinaria
                  </p>
                  <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed">
                    Conexión integral entre usuarios finales, líderes de negocio, ingeniería tecnológica y comités de Compliance, Legal, Seguridad de la Información y Gestión de Riesgos Operativos.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pilar 3: Orientación a Resultados */}
            <ScrollReveal delayMs={280}>
              <div className="flex flex-col justify-between md:border-l md:border-[rgba(7,17,38,0.08)] md:pl-8 lg:pl-10">
                <div>
                  <span className="font-mono text-xs text-[#071126] font-semibold tracking-wider block mb-2 sm:mb-3">
                    Pilar 03
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#071126] font-medium leading-tight mb-2 sm:mb-3">
                    Orientación a Resultados
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#5A6478] mb-3">
                    Criterio Directivo & Adopción
                  </p>
                  <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed">
                    Pensamiento analítico estructurado, gobierno de producto ante Senior Management y validación continua mediante KPIs de negocio, retención y eficiencia operativa.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Enlace Contextual a Mapa de Relevancia Profesional */}
          <ScrollReveal delayMs={200}>
            <div className="mt-10 pt-6 border-t border-[rgba(7,17,38,0.06)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-[#5A6478]">
                ¿Tienes una iniciativa en fase de definición, implementación o adopción?
              </span>
              <a
                href="/como-puedo-ayudarte/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/como-puedo-ayudarte/');
                }}
                className="inline-flex items-center gap-1.5 font-semibold text-[#173B85] hover:text-[#071126] transition-colors group cursor-pointer"
              >
                <span>Conoce en qué escenarios puedo aportar</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#173B85] group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>

        </div>

        {/* ======================================================== */}
        {/* PARTE 2: FRAMEWORK DE TRABAJO (PROCESO / MÉTODO PROFESIONAL) */}
        {/* ======================================================== */}
        <div className="pt-14 sm:pt-20">
          
          {/* Header del Método */}
          <ScrollReveal delayMs={60}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
              <div>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-2 sm:mb-3">
                  <span>Metodología de Trabajo</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#071126] font-normal tracking-tight">
                  Cómo abordo la gestión de productos de IA
                </h3>
              </div>
              <p className="text-xs text-[#5A6478] max-w-md md:text-right leading-relaxed font-sans">
                Un proceso de cuatro etapas secuenciales diseñado para gobernar el ciclo de vida de soluciones generativas en banca regulada.
              </p>
            </div>
          </ScrollReveal>

          {/* Secuencia Visual de 4 Etapas (Lógica Horizontal en Desktop, Vertical en Móvil) */}
          <ScrollReveal delayMs={120}>
            <div
              role="tablist"
              aria-label="Fases del framework de trabajo de IA"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(7,17,38,0.08)] border-y border-[rgba(7,17,38,0.08)]"
            >
              {steps.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    role="tab"
                    id={`step-tab-${step.number}`}
                    aria-selected={isSelected}
                    aria-controls={`step-panel-${step.number}`}
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-5 sm:p-6 lg:p-7 transition-colors duration-200 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#173B85] min-h-[48px] ${
                      isSelected
                        ? 'bg-[#F8F7F4] relative'
                        : 'hover:bg-[#F8F7F4]/60'
                    }`}
                  >
                    {/* Indicador de Selección Activa */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#173B85]" aria-hidden="true" />
                    )}

                    <div className="flex items-baseline justify-between mb-3 sm:mb-4">
                      <span className={`font-mono text-base sm:text-lg font-medium ${
                        isSelected ? 'text-[#173B85]' : 'text-[#A66A18]'
                      }`}>
                        {step.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#5A6478]">
                        Fase 0{idx + 1}
                      </span>
                    </div>

                    <h4 className={`text-sm sm:text-base font-semibold leading-snug mb-1.5 transition-colors duration-200 ${
                      isSelected ? 'text-[#071126]' : 'text-[#071126] group-hover:text-[#173B85]'
                    }`}>
                      {step.title}
                    </h4>

                    <p className="text-xs text-[#5A6478] line-clamp-2 leading-relaxed">
                      {step.domain}
                    </p>

                    <div className="mt-4 sm:mt-6 flex items-center gap-1.5 text-[11px] font-semibold text-[#173B85]">
                      <span className={isSelected ? 'underline' : 'group-hover:underline'}>
                        {isSelected ? 'Etapa activa' : 'Ver alcance'}
                      </span>
                      <ArrowRight className={`w-3 h-3 transition-transform duration-200 ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Dossier de la Fase Seleccionada (Lectura Editorial con Transición) */}
          <div
            id={`step-panel-${steps[activeStep].number}`}
            role="tabpanel"
            aria-labelledby={`step-tab-${steps[activeStep].number}`}
            className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-b border-[rgba(7,17,38,0.08)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              
              {/* Columna Izquierda: Alcance & Fundamento (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="font-mono text-xs font-semibold text-[#A66A18]">
                    Fase {steps[activeStep].number}
                  </span>
                  <span className="text-[#071126]/20" aria-hidden="true">/</span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#5A6478]">
                    {steps[activeStep].domain}
                  </span>
                </div>

                <h4 className="font-editorial text-2xl sm:text-3xl text-[#071126] font-medium leading-tight mb-3 sm:mb-4">
                  {steps[activeStep].title}
                </h4>

                <p className="text-xs sm:text-base text-[#071126] leading-relaxed mb-6 font-normal">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Columna Derecha: Entregables Clave de Gobernanza (5 cols) */}
              <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-[rgba(7,17,38,0.08)]">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold text-[#071126]">
                    Entregables de la Fase
                  </span>
                  <button
                    onClick={() => setExpandedDeliverables(!expandedDeliverables)}
                    className="text-[11px] text-[#5A6478] hover:text-[#071126] inline-flex items-center gap-1 cursor-pointer sm:hidden py-1 min-h-[36px]"
                    aria-expanded={expandedDeliverables}
                  >
                    <span>{expandedDeliverables ? 'Ocultar' : 'Mostrar'}</span>
                    {expandedDeliverables ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {expandedDeliverables && (
                  <ul className="space-y-3 text-xs text-[#5A6478]">
                    {steps[activeStep].deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-[#A66A18] shrink-0 mt-0.5" />
                        <span className="text-[#071126]">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
