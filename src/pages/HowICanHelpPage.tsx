import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Users2,
  TrendingUp,
  Compass,
  ArrowRightLeft,
  Mail,
  Phone
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { useNavigation } from '../context/NavigationContext';
import { profileData } from '../data/portfolioData';
import { trackCtaClick } from '../lib/telemetry';

export const HowICanHelpPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#F8F7F4] text-[#071126] font-sans">
      
      {/* ======================================================== */}
      {/* HERO: CÓMO PUEDO APORTAR */}
      {/* ======================================================== */}
      <section
        id="hero-ayuda"
        className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-[rgba(7,17,38,0.08)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          {/* Eyebrow */}
          <ScrollReveal delayMs={0}>
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#A66A18] mb-5 sm:mb-7">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              <span>CÓMO PUEDO APORTAR</span>
              <span className="text-[#071126]/20" aria-hidden="true">/</span>
              <span className="text-[#5A6478]">Mapa de Relevancia Profesional</span>
            </div>
          </ScrollReveal>

          {/* Gran Título Editorial */}
          <ScrollReveal delayMs={60}>
            <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight text-[#071126] leading-[1.08] mb-7 sm:mb-9 max-w-5xl text-balance">
              Cómo puedo ayudarte a convertir una necesidad de negocio en una iniciativa que pueda avanzar
            </h1>
          </ScrollReveal>

          {/* Narrativa de Posicionamiento */}
          <ScrollReveal delayMs={120}>
            <div className="max-w-3xl space-y-4 mb-8 sm:mb-10 text-base sm:text-lg text-[#071126]/90 font-normal leading-relaxed">
              <p className="font-editorial text-lg sm:text-2xl text-[#071126] leading-snug text-balance">
                Mi experiencia se ha desarrollado en proyectos donde es necesario conectar necesidades de negocio, producto, tecnología y áreas de gobierno para convertir una oportunidad en una iniciativa estructurada, implementable y medible.
              </p>
              <p className="text-sm sm:text-base text-[#5A6478] leading-relaxed">
                Puedo aportar especialmente cuando existe un problema u oportunidad clara, pero todavía es necesario definir el caso de uso, articular stakeholders, construir el roadmap, preparar la implementación o conseguir que la solución sea adoptada.
              </p>
            </div>
          </ScrollReveal>

          {/* Acciones Principales */}
          <ScrollReveal delayMs={180}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => {
                  trackCtaClick('contact_click', 'how_i_can_help_hero');
                  navigate('/', '#contacto');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#071126] hover:bg-[#173B85] transition-all duration-200 rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#071126] group min-h-[46px] cursor-pointer"
              >
                <span>Iniciar una conversación</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F8F7F4]/80 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigate('/', '#trayectoria')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#071126] bg-white border border-[rgba(7,17,38,0.14)] hover:border-[#071126] hover:bg-[#F8F7F4] transition-all duration-200 rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071126] min-h-[46px] cursor-pointer"
              >
                <span>Conocer mi trayectoria</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Índice Rápido Editorial de Escenarios */}
          <ScrollReveal delayMs={240}>
            <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-[rgba(7,17,38,0.08)]">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A6478] font-semibold block mb-4">
                Escenarios de Colaboración & Retos de Negocio
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 text-xs">
                {[
                  { n: '01', label: 'Oportunidad de IA no definida', target: '#escenario-01' },
                  { n: '02', label: 'Solución hacia implementación', target: '#escenario-02' },
                  { n: '03', label: 'Alineación de gobierno y tecnología', target: '#escenario-03' },
                  { n: '04', label: 'Adopción real por usuarios', target: '#escenario-04' },
                  { n: '05', label: 'Lanzamiento y go-to-market', target: '#escenario-05' },
                ].map((item) => (
                  <a
                    key={item.n}
                    href={item.target}
                    className="p-3.5 rounded-xs bg-white border border-[rgba(7,17,38,0.08)] hover:border-[#173B85] hover:shadow-2xs transition-all duration-200 block text-left group"
                  >
                    <span className="font-mono text-[11px] font-semibold text-[#A66A18] block mb-1">
                      {item.n}
                    </span>
                    <span className="font-medium text-[#071126] group-hover:text-[#173B85] transition-colors leading-snug block">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ======================================================== */}
      {/* ESCENARIO 01 */}
      {/* ======================================================== */}
      <section
        id="escenario-01"
        data-telemetry-section="ai_discovery"
        className="py-16 sm:py-24 bg-white border-b border-[rgba(7,17,38,0.08)] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Columna Izquierda: Identificador & Problema (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal delayMs={0}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#A66A18]">
                    01
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A6478] font-bold">
                    Escenario de Oportunidad
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-[#071126] leading-tight mb-5">
                  Tenemos una oportunidad de IA, pero todavía no está bien definida
                </h2>
                
                {/* Diagnóstico del Problema */}
                <div className="p-4 sm:p-5 rounded-xs bg-[#F8F7F4] border-l-2 border-[#A66A18] text-xs sm:text-sm text-[#071126] leading-relaxed">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A66A18] block mb-1 font-mono">
                    El Problema Habitual
                  </span>
                  <p>
                    Existe una idea de Inteligencia Artificial o una necesidad operativa, pero todavía no está claro cuál es el caso de uso, dónde está el valor, qué usuarios deben involucrarse o cómo justificar la iniciativa.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Columna Derecha: Cómo Aportar, Capacidades & Experiencia (7 cols) */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-8 lg:pl-6 lg:border-l lg:border-[rgba(7,17,38,0.08)]">
              
              {/* Cómo puedo aportar */}
              <ScrollReveal delayMs={60}>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#173B85] font-mono">
                    Cómo puedo aportar
                  </h3>
                  <p className="text-sm sm:text-base text-[#071126] leading-relaxed">
                    Puedo ayudar a estructurar la oportunidad desde la perspectiva de negocio y producto: entender el problema, investigar las necesidades de los usuarios, delimitar el caso de uso, identificar beneficios esperados y convertirlo en un business case que pueda discutirse con las áreas involucradas.
                  </p>
                </div>
              </ScrollReveal>

              {/* Capacidades Relacionadas (Zero-Pill Editorial) */}
              <ScrollReveal delayMs={120}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)]">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5A6478] block mb-2 font-mono">
                    Capacidades Aplicables
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#071126] leading-relaxed font-sans">
                    Product Discovery <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    Business Analysis <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    Business Case Development <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    User Research <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    KPIs <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    Customer Experience
                  </p>
                </div>
              </ScrollReveal>

              {/* Experiencia Relacionada */}
              <ScrollReveal delayMs={180}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)] space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#071126] font-mono">
                    Experiencia relacionada
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed">
                    He participado en la estructuración de business cases de Inteligencia Artificial Generativa para Contact Center, Inversiones y Seguros, así como en investigación de necesidades de usuarios y procesos para identificar oportunidades de eficiencia operativa y mejora en experiencia del cliente.
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ESCENARIO 02 */}
      {/* ======================================================== */}
      <section
        id="escenario-02"
        data-telemetry-section="ai_implementation"
        className="py-16 sm:py-24 bg-[#F8F7F4] border-b border-[rgba(7,17,38,0.08)] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Columna Izquierda: Identificador & Problema (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal delayMs={0}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#A66A18]">
                    02
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A6478] font-bold">
                    Escenario de Implementación
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-[#071126] leading-tight mb-5">
                  Tenemos una solución de IA y necesitamos llevarla hacia implementación
                </h2>
                
                {/* Diagnóstico del Problema */}
                <div className="p-4 sm:p-5 rounded-xs bg-white border-l-2 border-[#173B85] text-xs sm:text-sm text-[#071126] leading-relaxed shadow-2xs">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#173B85] block mb-1 font-mono">
                    El Problema Habitual
                  </span>
                  <p>
                    La solución ya existe o ha sido definida, pero falta convertirla en un proyecto implementable: adaptar el producto, ordenar dependencias, ejecutar pruebas, satisfacer requerimientos de gobierno y preparar un piloto.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Columna Derecha: Cómo Aportar, Diagrama Sobrio & Experiencia (7 cols) */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-8 lg:pl-6 lg:border-l lg:border-[rgba(7,17,38,0.08)]">
              
              {/* Cómo puedo aportar */}
              <ScrollReveal delayMs={60}>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#173B85] font-mono">
                    Cómo puedo aportar
                  </h3>
                  <p className="text-sm sm:text-base text-[#071126] leading-relaxed">
                    Mi experiencia incluye avanzar iniciativas de IA Generativa desde la definición funcional hacia implementación, coordinando roadmap, pruebas UAT, refinamiento funcional de prompts, áreas de control, documentación y estrategia de adopción.
                  </p>
                </div>
              </ScrollReveal>

              {/* Representación Visual Sobria del Proceso */}
              <ScrollReveal delayMs={120}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)]">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5A6478] block mb-3 font-mono">
                    Secuencia Operativa de Implementación
                  </span>
                  
                  {/* Flujo Editorial Sobrio */}
                  <div className="p-4 rounded-xs bg-white border border-[rgba(7,17,38,0.08)]">
                    <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-medium text-[#071126]">
                      <span className="px-2.5 py-1 bg-[#F8F7F4] border border-[rgba(7,17,38,0.08)] rounded-xs">
                        Caso de uso
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A66A18] mx-1.5 shrink-0" aria-hidden="true" />
                      <span className="px-2.5 py-1 bg-[#F8F7F4] border border-[rgba(7,17,38,0.08)] rounded-xs">
                        Roadmap
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A66A18] mx-1.5 shrink-0" aria-hidden="true" />
                      <span className="px-2.5 py-1 bg-[#F8F7F4] border border-[rgba(7,17,38,0.08)] rounded-xs">
                        UAT
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A66A18] mx-1.5 shrink-0" aria-hidden="true" />
                      <span className="px-2.5 py-1 bg-[#F8F7F4] border border-[rgba(7,17,38,0.08)] rounded-xs">
                        Gobierno
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A66A18] mx-1.5 shrink-0" aria-hidden="true" />
                      <span className="px-2.5 py-1 bg-[#F8F7F4] border border-[rgba(7,17,38,0.08)] rounded-xs">
                        Piloto
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A66A18] mx-1.5 shrink-0" aria-hidden="true" />
                      <span className="px-2.5 py-1 bg-[#071126] text-white rounded-xs font-semibold">
                        Adopción
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Experiencia Relacionada */}
              <ScrollReveal delayMs={180}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)] space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#071126] font-mono">
                    Experiencia relacionada
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed">
                    En ComAmplifier participé en la adaptación al mercado mexicano de una solución global de IA Generativa para fuerza comercial, trabajando en roadmap, coordinación multidisciplinaria, prompts, UAT, documentación regulatoria, estrategia de adopción y métricas del piloto para aproximadamente 90 usuarios.
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ESCENARIO 03 */}
      {/* ======================================================== */}
      <section
        id="escenario-03"
        data-telemetry-section="stakeholder_alignment"
        className="py-16 sm:py-24 bg-white border-b border-[rgba(7,17,38,0.08)] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Columna Izquierda: Identificador & Problema (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal delayMs={0}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#A66A18]">
                    03
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A6478] font-bold">
                    Escenario de Articulación 360°
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-[#071126] leading-tight mb-5">
                  El proyecto necesita conectar negocio, tecnología y áreas de gobierno
                </h2>
                
                {/* Diagnóstico del Problema */}
                <div className="p-4 sm:p-5 rounded-xs bg-[#F8F7F4] border-l-2 border-[#A66A18] text-xs sm:text-sm text-[#071126] leading-relaxed">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A66A18] block mb-1 font-mono">
                    El Problema Habitual
                  </span>
                  <p>
                    Muchos proyectos no se detienen por falta de tecnología, sino porque negocio, tecnología y áreas de control necesitan avanzar bajo objetivos, restricciones y lenguajes diferentes.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Columna Derecha: Cómo Aportar, Articulación & Experiencia (7 cols) */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-8 lg:pl-6 lg:border-l lg:border-[rgba(7,17,38,0.08)]">
              
              {/* Cómo puedo aportar */}
              <ScrollReveal delayMs={60}>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#173B85] font-mono">
                    Cómo puedo aportar
                  </h3>
                  <p className="text-sm sm:text-base text-[#071126] leading-relaxed">
                    Puedo funcionar como punto de articulación entre stakeholders, ayudando a traducir necesidades, dependencias y restricciones para mantener una iniciativa alineada y avanzar hacia decisiones concretas.
                  </p>
                </div>
              </ScrollReveal>

              {/* Representación Discreta de Conexión */}
              <ScrollReveal delayMs={120}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)]">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5A6478] block mb-3 font-mono">
                    Matriz de Articulación Multidisciplinaria
                  </span>
                  
                  <div className="p-4 rounded-xs bg-[#F8F7F4] border border-[rgba(7,17,38,0.08)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#071126]">
                      <div className="py-1 px-2.5 bg-white border border-[rgba(7,17,38,0.08)] rounded-xs">
                        Negocio
                      </div>
                      <ArrowRightLeft className="w-3.5 h-3.5 text-[#173B85]" aria-hidden="true" />
                      <div className="py-1 px-2.5 bg-white border border-[rgba(7,17,38,0.08)] rounded-xs">
                        Producto
                      </div>
                      <ArrowRightLeft className="w-3.5 h-3.5 text-[#173B85]" aria-hidden="true" />
                      <div className="py-1 px-2.5 bg-white border border-[rgba(7,17,38,0.08)] rounded-xs">
                        Tecnología
                      </div>
                      <ArrowRightLeft className="w-3.5 h-3.5 text-[#173B85]" aria-hidden="true" />
                      <div className="py-1 px-2.5 bg-white border border-[rgba(7,17,38,0.08)] rounded-xs text-[#A66A18]">
                        Compliance / Riesgos
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Experiencia Relacionada */}
              <ScrollReveal delayMs={180}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)] space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#071126] font-mono">
                    Experiencia relacionada
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed">
                    En proyectos de IA y transformación he coordinado equipos y stakeholders de Innovación, Tecnología, Capacitación, Producto, Compliance, Riesgos, Fraude, Resiliencia, Marketing, Legal y equipos globales.
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ESCENARIO 04 */}
      {/* ======================================================== */}
      <section
        id="escenario-04"
        data-telemetry-section="adoption"
        className="py-16 sm:py-24 bg-[#F8F7F4] border-b border-[rgba(7,17,38,0.08)] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Columna Izquierda: Identificador & Problema (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal delayMs={0}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#A66A18]">
                    04
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A6478] font-bold">
                    Escenario de Gestión del Cambio
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-[#071126] leading-tight mb-5">
                  Tenemos una buena solución, pero necesitamos que las personas la adopten
                </h2>
                
                {/* Diagnóstico del Problema */}
                <div className="p-4 sm:p-5 rounded-xs bg-white border-l-2 border-[#173B85] text-xs sm:text-sm text-[#071126] leading-relaxed shadow-2xs">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#173B85] block mb-1 font-mono">
                    El Problema Habitual
                  </span>
                  <p>
                    Una implementación puede ser técnicamente correcta y aun así generar poco valor si usuarios y stakeholders no entienden cómo incorporarla a su operación.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Columna Derecha: Cómo Aportar, Capacidades & Experiencia (7 cols) */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-8 lg:pl-6 lg:border-l lg:border-[rgba(7,17,38,0.08)]">
              
              {/* Cómo puedo aportar */}
              <ScrollReveal delayMs={60}>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#173B85] font-mono">
                    Cómo puedo aportar
                  </h3>
                  <p className="text-sm sm:text-base text-[#071126] leading-relaxed">
                    Puedo contribuir en la preparación de pilotos, comunicación, entrenamiento, gestión del cambio y construcción de mecanismos de adopción para reducir la distancia entre la solución diseñada y su utilización real.
                  </p>
                </div>
              </ScrollReveal>

              {/* Capacidades Relacionadas */}
              <ScrollReveal delayMs={120}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)]">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5A6478] block mb-2 font-mono">
                    Capacidades de Adopción
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#071126] leading-relaxed font-sans">
                    Champion Testers <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    Training <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    Change Management <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    Comunicación <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    Métricas de adopción <span className="text-[#A66A18] mx-1.5" aria-hidden="true">·</span>
                    Go-to-Market
                  </p>
                </div>
              </ScrollReveal>

              {/* Experiencia Relacionada */}
              <ScrollReveal delayMs={180}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)] space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#071126] font-mono">
                    Experiencia relacionada
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed">
                    En ComAmplifier participé en la definición de Champion Testers, materiales de entrenamiento, comunicaciones de piloto y métricas de adopción. También he trabajado en iniciativas de gestión del cambio y comunicación ejecutiva dentro de proyectos de transformación bancaria.
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ESCENARIO 05 */}
      {/* ======================================================== */}
      <section
        id="escenario-05"
        data-telemetry-section="go_to_market"
        className="py-16 sm:py-24 bg-white border-b border-[rgba(7,17,38,0.08)] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Columna Izquierda: Identificador & Problema (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal delayMs={0}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#A66A18]">
                    05
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A6478] font-bold">
                    Escenario de Tracción de Negocio
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-[#071126] leading-tight mb-5">
                  Necesitamos lanzar o transformar una propuesta de negocio
                </h2>
                
                {/* Diagnóstico del Problema */}
                <div className="p-4 sm:p-5 rounded-xs bg-[#F8F7F4] border-l-2 border-[#A66A18] text-xs sm:text-sm text-[#071126] leading-relaxed">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A66A18] block mb-1 font-mono">
                    El Problema Habitual
                  </span>
                  <p>
                    El producto puede estar definido, pero todavía es necesario construir posicionamiento, narrativa comercial, materiales, alineación de stakeholders y una estrategia de lanzamiento consistente.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Columna Derecha: Cómo Aportar & Experiencia (7 cols) */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-8 lg:pl-6 lg:border-l lg:border-[rgba(7,17,38,0.08)]">
              
              {/* Cómo puedo aportar */}
              <ScrollReveal delayMs={60}>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#173B85] font-mono">
                    Cómo puedo aportar
                  </h3>
                  <p className="text-sm sm:text-base text-[#071126] leading-relaxed">
                    Mi experiencia incluye proyectos de go-to-market, transformación de marca, desarrollo de propuestas comerciales y coordinación entre producto, marketing, fuerzas comerciales y áreas de control.
                  </p>
                </div>
              </ScrollReveal>

              {/* Experiencia Relacionada */}
              <ScrollReveal delayMs={120}>
                <div className="pt-5 border-t border-[rgba(7,17,38,0.08)] space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#071126] font-mono">
                    Experiencia relacionada
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6478] leading-relaxed">
                    He participado en el rebranding de HSBC Seguros hacia HSBC Life en México y en el lanzamiento de beneficios y cobertura de Vida y Ahorro Dotal HSBC, iniciativa que contribuyó a la colocación de 200 pólizas durante el primer mes.
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CIERRE / CONVERSEMOS */}
      {/* ======================================================== */}
      <section
        id="cierre"
        className="py-20 sm:py-28 bg-[#F8F7F4] border-b border-[rgba(7,17,38,0.08)]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          
          <ScrollReveal delayMs={0}>
            <span className="text-[11px] uppercase font-mono tracking-[0.2em] font-semibold text-[#A66A18] block mb-3">
              CONVERSEMOS
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#071126] font-medium tracking-tight mb-5 text-balance">
              ¿Tu proyecto se parece a alguno de estos escenarios?
            </h2>
            <p className="text-base sm:text-lg text-[#5A6478] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 text-balance">
              Si estás construyendo un producto, evaluando una iniciativa de IA, coordinando una transformación o necesitas conectar negocio y tecnología, podemos conversar sobre el reto y explorar cómo mi experiencia puede aportar.
            </p>
          </ScrollReveal>

          {/* Acciones de Contacto */}
          <ScrollReveal delayMs={60}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => {
                  trackCtaClick('contact_click', 'how_i_can_help_colophon');
                  navigate('/', '#contacto');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#071126] hover:bg-[#173B85] transition-all duration-200 rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#071126] group min-h-[46px] cursor-pointer"
              >
                <span>Iniciar una conversación</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F8F7F4]/80 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigate('/', '#trayectoria')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#071126] bg-white border border-[rgba(7,17,38,0.14)] hover:border-[#071126] hover:bg-[#F8F7F4] transition-all duration-200 rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071126] min-h-[46px] cursor-pointer"
              >
                <span>Conocer mi trayectoria</span>
              </button>
            </div>

            {/* Accesos Rápidos de Correspondencia Directa */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#5A6478] font-medium pt-4">
              <a
                href={profileData.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick('whatsapp_click', 'how_i_can_help_colophon')}
                className="inline-flex items-center gap-1.5 text-[#173B85] hover:text-[#071126] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>WhatsApp Directo</span>
              </a>
              <span className="text-[#071126]/20" aria-hidden="true">·</span>
              <a
                href={`mailto:${profileData.email}`}
                onClick={() => trackCtaClick('email_click', 'how_i_can_help_colophon')}
                className="inline-flex items-center gap-1.5 text-[#173B85] hover:text-[#071126] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{profileData.email}</span>
              </a>
              <span className="text-[#071126]/20" aria-hidden="true">·</span>
              <a
                href={profileData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#173B85] hover:text-[#071126] hover:underline"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
};
