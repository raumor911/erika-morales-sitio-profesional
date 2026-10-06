import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface DomainSkill {
  name: string;
  description: string;
  isKey?: boolean;
}

interface CompetencyDomain {
  id: string;
  number: string;
  title: string;
  spanishSubtitle: string;
  professionalCapability: string;
  skills: DomainSkill[];
}

export const SkillsMatrix: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    description: string;
    domain: string;
  } | null>(null);

  const domains: CompetencyDomain[] = [
    {
      id: 'product-agile',
      number: '01',
      title: 'Product & Agile',
      spanishSubtitle: 'Gestión de Producto & Metodologías Ágiles',
      professionalCapability:
        'Definición de visión estratégica de producto, descubrimiento continuo, refinamiento de backlogs y entrega iterativa orientada a valor medible en entornos bancarios regulados.',
      skills: [
        { name: 'Product Management', description: 'Visión estratégica, ciclo de vida de producto y priorización orientada a valor comercial.', isKey: true },
        { name: 'Product Discovery', description: 'Investigación cualitativa y cuantitativa para identificar necesidades reales de usuarios y negocio.', isKey: true },
        { name: 'Roadmap & Backlogs', description: 'Definición y refinamiento de epics, historias de usuario y criterios de aceptación funcionales.' },
        { name: 'Pruebas UAT', description: 'Diseño de escenarios de prueba, coordinación con Champion Testers y criterios de salida.', isKey: true },
        { name: 'Scrum / Agile', description: 'Ceremonias ágiles, sprints, retrospectivas y sincronización de dependencias técnicas.', isKey: true },
        { name: 'Go-To-Market', description: 'Estrategia de lanzamiento, habilitación comercial y narrativa de valor para fuerzas de ventas.' },
      ],
    },
    {
      id: 'business-strategy',
      number: '02',
      title: 'Business Analysis & Strategy',
      spanishSubtitle: 'Análisis de Negocio & Estrategia Financiera',
      professionalCapability:
        'Estructuración analítica rigurosa, modelado de procesos operativos, formulación de business cases con cálculo de ROI y diseño de métricas de desempeño y retención.',
      skills: [
        { name: 'Business Analysis', description: 'Modelado de procesos operativos, flujos de valor y detección de ineficiencias.', isKey: true },
        { name: 'Business Case Dev', description: 'Evaluación cuantitativa de ROI, costos de implementación y justificación ante comités.', isKey: true },
        { name: 'Diseño de KPIs', description: 'Métricas de adopción, retención, eficiencia operativa y valor económico generado.' },
        { name: 'Benchmark Competitivo', description: 'Análisis comparativo del mercado bancario y mejores prácticas internacionales.' },
        { name: 'Customer Experience (CX)', description: 'Mapeo de journeys, puntos de contacto y reducción sistemática de fricciones.' },
        { name: 'Mejora Continua', description: 'Optimización y estandarización de procesos bajo metodologías estructuradas.' },
      ],
    },
    {
      id: 'leadership-governance',
      number: '03',
      title: 'Leadership & Governance',
      spanishSubtitle: 'Liderazgo, Gestión & Gobierno Corporativo',
      professionalCapability:
        'Articulación de consensos entre líderes comerciales, ingeniería de sistemas y comités de Compliance, Legal, Seguridad de la Información y Gestión de Riesgos.',
      skills: [
        { name: 'Stakeholder Management', description: 'Negociación efectiva y alineación con dirección local, regional y global de HSBC.', isKey: true },
        { name: 'Gestión del Cambio', description: 'Acompañamiento a colaboradores y redes comerciales para adopción de nuevas herramientas.', isKey: true },
        { name: 'Comunicación Ejecutiva', description: 'Síntesis clara para comités directivos, Senior Management y audiencias no técnicas.' },
        { name: 'Equipos Multidisciplinarios', description: 'Sincronización entre producto, ingeniería, legal, riesgos operativos y ventas.' },
        { name: 'Project Management', description: 'Planificación de hitos, mitigación de riesgos de implementación y seguimiento riguroso.' },
        { name: 'Champion Programs', description: 'Red de usuarios embajadores para acelerar la adopción en campo y captar retroalimentación.' },
      ],
    },
    {
      id: 'applied-ai',
      number: '04',
      title: 'Applied AI & Technology',
      spanishSubtitle: 'IA Generativa Aplicada & Tecnología',
      professionalCapability:
        'Aterrizaje pragmático de modelos de lenguaje en flujos bancarios reales, diseño de directivas funcionales con guardrails estrictos y mitigación sistemática de alucinaciones.',
      skills: [
        { name: 'IA Generativa Aplicada', description: 'Casos de uso comercial, contact center y productividad bancaria.', isKey: true },
        { name: 'Prompt Engineering Funcional', description: 'Diseño de directivas, system instructions y estructuración de respuestas parametrizadas.', isKey: true },
        { name: 'Mitigación de Alucinaciones', description: 'Guardrails estrictos, verificación factual y reglas de confiabilidad regulatoria.', isKey: true },
        { name: 'Transformación Digital', description: 'Digitalización de flujos y migración hacia autoservicio inteligente.' },
        { name: 'Microsoft 365 Copilot', description: 'Dominio de suites colaborativas y productividad avanzada en entornos corporativos.' },
        { name: 'Google Workspace', description: 'Gestión de proyectos, documentación y análisis colaborativo.' },
      ],
    },
  ];

  return (
    <section
      id="habilidades"
      className="py-16 sm:py-24 bg-[#F8F7F4] border-b border-[rgba(7,17,38,0.08)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* ======================================================== */}
        {/* HEADER EDITORIAL */}
        {/* ======================================================== */}
        <ScrollReveal delayMs={0}>
          <div className="max-w-3xl mb-10 sm:mb-16">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-2 sm:mb-3">
              <span>04 / Competencias Profesionales</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-[#071126] font-normal leading-[1.14] tracking-tight text-balance mb-3 sm:mb-4">
              Matriz de Competencias & Criterio de Ejecución
            </h2>
            <p className="text-xs sm:text-base text-[#5A6478] leading-relaxed">
              Estructuración de capacidades organizadas en cuatro grandes dominios profesionales. Cada área explica la capacidad que aporta a la organización y desglosa sus términos operativos asociados.
            </p>
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* CUATRO GRANDES COMPETENCIAS (EDITORIAL SIN PILLS) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4">
          {domains.map((dom, dIdx) => (
            <ScrollReveal key={dom.id} delayMs={dIdx * 60}>
              <div className="bg-white border border-[rgba(7,17,38,0.08)] p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full shadow-[0_2px_12px_rgba(7,17,38,0.02)]">
                <div>
                  {/* Cabecera del Dominio */}
                  <div className="flex items-baseline justify-between mb-2.5 pb-2.5 border-b border-[rgba(7,17,38,0.08)]">
                    <span className="font-mono text-xs font-semibold text-[#A66A18]">
                      Dominio {dom.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#5A6478]">
                      Competencia Directiva
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl text-[#071126] font-medium leading-tight mb-0.5">
                    {dom.title}
                  </h3>
                  <p className="text-xs text-[#5A6478] mb-4 font-medium">
                    {dom.spanishSubtitle}
                  </p>

                  {/* Explicación de la Capacidad Profesional (Lectura Humana Prioritaria) */}
                  <div className="p-3.5 sm:p-4 bg-[#F8F7F4] border-l-2 border-[#173B85] mb-5">
                    <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#173B85] block mb-1">
                      Capacidad Profesional
                    </span>
                    <p className="text-xs sm:text-sm text-[#071126] leading-relaxed">
                      {dom.professionalCapability}
                    </p>
                  </div>

                  {/* Términos y Conceptos Asociados (Lista Limpia sin Saturación de Chips) */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#5A6478] block mb-2.5">
                      Términos & Especialidades Asociadas:
                    </span>
                    
                    <div className="space-y-1.5">
                      {dom.skills.map((skill) => {
                        const isSelected = activeSkill?.name === skill.name;
                        return (
                          <button
                            key={skill.name}
                            onClick={() =>
                              setActiveSkill(
                                isSelected
                                  ? null
                                  : { name: skill.name, description: skill.description, domain: dom.title }
                              )
                            }
                            className={`w-full text-left py-2 px-2.5 rounded-xs transition-colors duration-200 flex items-center justify-between text-xs cursor-pointer group min-h-[38px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] ${
                              isSelected
                                ? 'bg-[#071126] text-white font-medium'
                                : 'text-[#071126] hover:bg-[#F8F7F4]'
                            }`}
                            aria-expanded={isSelected}
                            aria-label={`Ver descripción de la habilidad ${skill.name}`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={isSelected ? 'text-[#A66A18]' : 'text-[#A66A18]'} aria-hidden="true">•</span>
                              <span className="group-hover:text-[#173B85] transition-colors duration-200">
                                {skill.name}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              {skill.isKey && (
                                <span className={`text-[10px] font-mono ${
                                  isSelected ? 'text-[#A66A18]' : 'text-[#A66A18] font-semibold'
                                }`}>
                                  Clave
                                </span>
                              )}
                              <Info className={`w-3 h-3 ${isSelected ? 'text-white/60' : 'text-[#5A6478]/50 group-hover:text-[#071126]'}`} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ======================================================== */}
        {/* INSPECTOR DE HABILIDAD ACTIVA (SUBTLY EMBEDDED) */}
        {/* ======================================================== */}
        {activeSkill && (
          <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-white border border-[#173B85]/20 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-200">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-[#A66A18] font-semibold mt-0.5" aria-hidden="true">•</span>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#173B85] font-semibold">
                    {activeSkill.domain}
                  </span>
                  <span className="text-[#071126]/20" aria-hidden="true">/</span>
                  <span className="text-xs font-semibold text-[#071126]">
                    {activeSkill.name}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#5A6478]">
                  {activeSkill.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveSkill(null)}
              className="self-end sm:self-center text-xs text-[#5A6478] hover:text-[#071126] font-semibold underline underline-offset-4 cursor-pointer shrink-0 min-h-[36px] px-2 flex items-center"
              aria-label="Cerrar panel de detalle de habilidad"
            >
              <span>Cerrar</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
