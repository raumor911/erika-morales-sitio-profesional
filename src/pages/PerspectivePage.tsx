import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { useNavigation } from '../context/NavigationContext';
import { trackCtaClick } from '../lib/telemetry';

interface EditorialSection {
  number: string;
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  quote?: string;
}

const editorialSections: EditorialSection[] = [
  {
    number: '01',
    id: 'problemas-ambiguos',
    title: 'La ambigüedad no se resuelve construyendo más rápido; se resuelve formulando mejores preguntas.',
    subtitle: 'Cómo abordo problemas ambiguos y defino el punto de partida.',
    paragraphs: [
      'Cuando un proyecto arranca con una directiva del tipo «necesitamos implementar IA para optimizar la operación» o «debemos digitalizar este canal comercial», el mayor riesgo rara vez es técnico. El error más costoso es resolver con brillantez de ingeniería un problema que no existía o que estaba mal diagnosticado.',
      'Mi primer reflejo ante la ambigüedad es frenar la inercia de producir soluciones inmediatas. Antes de redactar historias de usuario o comprometer capacidad de desarrollo, necesito sumergirme en la operación diaria: observar dónde se detiene el flujo de trabajo, escuchar las frustraciones de quienes están en la primera línea y separar el síntoma visible de la causa estructural.',
      'Un síntoma común es que un asesor pasa demasiado tiempo preparando una propuesta patrimonial; la causa raíz puede ser que los datos del cliente están fragmentados en cuatro sistemas heredados sin jerarquía comercial. Distinguir el síntoma de la causa raíz ahorra meses de desarrollo estéril y enfoca la inversión donde genera verdadero retorno.',
    ],
    quote: 'La claridad no es un insumo que el negocio te entrega listo en un documento: es el primer entregable que debemos construir juntos.',
  },
  {
    number: '02',
    id: 'articulacion-interdisciplinaria',
    title: 'Articulación interdisciplinaria: traducir incentivos opuestos hacia un objetivo común.',
    subtitle: 'Cómo trabajo y alineo disciplinas con prioridades distintas.',
    paragraphs: [
      'En organizaciones complejas y reguladas, el éxito de un producto nunca depende únicamente del talento aislado de un equipo. Depende de la capacidad para sincronizar áreas que manejan vocabularios distintos y responden a métricas antagónicas.',
      'Negocio busca velocidad de colocación y crecimiento de cartera. Tecnología vela por la estabilidad de la arquitectura, la escalabilidad y la contención de deuda técnica. Compliance, Legal, Seguridad y Riesgos tienen el mandato de salvaguardar el cumplimiento normativo y proteger a la institución. Y los usuarios finales simplemente desean que la herramienta no vuelva su jornada más lenta ni más compleja.',
      'Mi papel como Product Owner no consiste en tomar notas y pasar recados entre áreas. Mi responsabilidad es ejercer una traducción rigurosa: a Legal no se le presentan promesas tecnológicas abstractas, sino matrices de riesgo, flujos de datos auditables y salvaguardas claras; a los equipos de ingeniería no se les transmiten deseos comerciales etéreos, sino criterios de aceptación precisos con el contexto de negocio que les da sentido. Cuando cada disciplina comprende el porqué de una decisión y cómo protege sus propios objetivos, la resistencia se transforma en corresponsabilidad.',
    ],
    quote: 'El verdadero consenso no surge de negociar concesiones que diluyan la calidad, sino de traducir las prioridades de cada área en valor tangible para el usuario final.',
  },
  {
    number: '03',
    id: 'criterio-de-producto',
    title: 'Producto como generador de impacto medible, no como una fábrica de funcionalidades.',
    subtitle: 'Cómo entiendo la disciplina de Producto y la priorización estratégica.',
    paragraphs: [
      'Existe una inercia común en la gestión tecnológica que confunde actividad con progreso: medir el avance por el volumen de entregables liberados en un sprint o por el tamaño del backlog, en lugar de evaluar el cambio en los comportamientos y resultados de las personas.',
      'Concibo Producto como la intersección constante y disciplinada entre tres fuerzas: la deseabilidad humana (¿resuelve un dolor o necesidad genuina de quien lo usa?), la viabilidad de negocio (¿justifica la inversión y produce un beneficio financiero o estratégico claro?) y la factibilidad operativa (¿puede mantenerse, escalarse y gobernarse de forma sostenible dentro de la institución?).',
      'Saber decir «no» a una funcionalidad atractiva que complica la interfaz o diluye el foco del equipo es una de las decisiones más valientes y rentables que puede tomar un líder de producto. La solidez de un producto se mide por su capacidad de hacer extraordinariamente bien lo esencial, eliminando la complejidad innecesaria.',
    ],
    quote: 'Un roadmap no es un catálogo de promesas técnicas; es una hipótesis estratégica sobre cómo vamos a generar valor medible paso a paso.',
  },
  {
    number: '04',
    id: 'adopcion-tecnologica',
    title: 'La adopción no ocurre el día del lanzamiento; ocurre en la rutina diaria de las personas.',
    subtitle: 'Cómo entiendo el factor humano y la gestión del cambio en campo.',
    paragraphs: [
      'He visto plataformas con tecnología impecable convertirse en soluciones abandonadas en pocas semanas porque nadie diseñó la curva de adopción de quienes debían utilizarlas bajo presión operativa.',
      'La tecnología no se adopta por decreto gerencial ni por memorándums institucionales. Se adopta cuando un asesor o ejecutivo comprueba, en su primer contacto real, que la herramienta le devuelve tiempo valioso, reduce sus fricciones operativas y le ayuda a servir mejor a sus clientes con menor esfuerzo.',
      'Por ello considero indispensable el trabajo de campo: construir una red sólida de Champion Testers desde las fases tempranas de diseño, involucrar a los usuarios en las pruebas UAT para que se sientan coautores de la solución y calibrar los flujos a partir de su retroalimentación directa. Cuando un usuario de sucursal o de canal comercial siente que sus observaciones moldearon la herramienta, se convierte en el mejor embajador orgánico frente a sus compañeros.',
    ],
    quote: 'Si una solución requiere manuales interminables para utilizarse en el día a día, el problema no está en la capacitación de las personas: está en el diseño del producto.',
  },
  {
    number: '05',
    id: 'criterio-ia-generativa',
    title: 'IA Generativa con rigor: amplificar el criterio humano sin maquillar la improvisación.',
    subtitle: 'Mi criterio profesional sobre modelos de lenguaje y gobernanza de IA.',
    paragraphs: [
      'La Inteligencia Artificial Generativa no es una varita mágica para cualquier ineficiencia ni un sustituto de la responsabilidad profesional. Es una capacidad cognitiva de amplificación que exige un nivel de disciplina y criterio especialmente elevado, sobre todo en sectores de alta sensibilidad como la banca y los seguros.',
      'En mi experiencia liderando pilotos comerciales de GenAI como ComAmplifier en HSBC Life, comprobé que el desafío decisivo nunca es conectar un modelo de lenguaje, sino gobernar su comportamiento en el mundo real. En servicios financieros y de protección patrimonial, una alucinación o una omisión de datos no es una curiosidad técnica: es un riesgo legal, regulatorio y reputacional inaceptable.',
      'Mi criterio frente a la IA se rige por tres pilares fundamentales: primero, el modelo debe concebirse como un copiloto que amplía la capacidad del especialista humano, preservando siempre la supervisión y el juicio ético de las personas; segundo, el diseño debe incorporar guardrails funcionales estrictos, fuentes de información verificadas y pruebas sistemáticas de mitigación de alucinaciones; y tercero, toda iniciativa debe sustentarse en un caso de negocio con retorno de inversión medible donde el valor aportado supere con claridad los costos computacionales y de gobernanza.',
    ],
    quote: 'El valor de la IA no reside en la espectacularidad de sus respuestas, sino en la certeza de que sus salidas son confiables, auditables y seguras en cada interacción.',
  },
  {
    number: '06',
    id: 'entornos-regulados',
    title: 'Innovar en banca regulada: las normas como parámetro de diseño desde el día cero.',
    subtitle: 'Cómo concibo la innovación dentro de marcos regulatorios estrictos.',
    paragraphs: [
      'Existe el mito de que los marcos regulatorios y los comités de control institucional son obstáculos para la innovación y la agilidad. En mi trayectoria en HSBC he aprendido exactamente lo contrario: cuando las restricciones normativas se entienden a fondo, se convierten en los mejores parámetros de diseño para construir soluciones duraderas.',
      'Si invitas a Compliance, Legal, Seguridad y Fraude a la mesa de descubrimiento desde las primeras etapas —en lugar de buscar su firma de aprobación a días de la fecha de salida—, el proceso deja de ser un cuello de botella. Las directrices normativas se integran en la arquitectura funcional desde el inicio, evitando rediseños de emergencia y blindando el proyecto ante auditorías futuras.',
      'La innovación bancaria de alto impacto no consiste en forzar los límites normativos para salir rápido al mercado, sino en diseñar productos que honren el deber fiduciario de la institución mientras ofrecen una experiencia ágil, moderna y transparente para los usuarios.',
    ],
    quote: 'En servicios financieros, la confianza es el activo primario. Ninguna innovación tecnológica que comprometa la confianza institucional es viable en el largo plazo.',
  },
  {
    number: '07',
    id: 'vision-2030',
    title: 'Hacia 2030: banca contextual, agentes asistidos y el valor irreemplazable de la confianza humana.',
    subtitle: 'Perspectiva sobre la evolución de la industria financiera y la tecnología.',
    paragraphs: [
      'Hacia 2030, la relación entre las personas y los servicios financieros vivirá una mutación de fondo. El modelo bancario tradicional —donde el cliente navega aplicaciones estáticas para consultar saldos, solicitar productos o llenar formularios— evolucionará hacia un ecosistema financiero proactivo, contextual y anticipatorio.',
      'Los agentes de inteligencia artificial asumirán la fricción analítica y operativa: procesar expedientes, cruzar variables de riesgo en segundos, preparar escenarios de inversión personalizados y detectar anomalías en tiempo real. Sin embargo, este avance no volverá obsoleta la intervención humana; por el contrario, hará que el criterio, la ética y la empatía de los profesionales sean más determinantes que nunca.',
      'Cuando el procesamiento de datos y la automatización se vuelvan un estándar accesible para cualquier competidor, la ventaja competitiva de una institución financiera no residirá en sus algoritmos, sino en la calidad de las relaciones que construya con sus clientes. La tecnología debe resolver la complejidad operativa para que las personas puedan concentrarse en lo irremplazable: acompañar a otras personas en los momentos financieros decisivos de su vida.',
    ],
    quote: 'Hacia 2030, las instituciones ganadoras no serán las que desplieguen más tecnología, sino las que utilicen la tecnología para ser más humanas, éticas y dignas de confianza.',
  },
];

export const PerspectivePage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#F8F7F4] text-[#071126] font-sans selection:bg-[#F2E7D3] selection:text-[#5A3A0A]">
      
      {/* ======================================================== */}
      {/* HERO EDITORIAL SILENCIOSO */}
      {/* ======================================================== */}
      <section
        id="hero-perspectiva"
        className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-[rgba(7,17,38,0.08)] overflow-hidden"
      >
        <div
          className="max-w-[1280px] mx-auto w-full"
          style={{
            paddingLeft: 'clamp(24px, 5vw, 72px)',
            paddingRight: 'clamp(24px, 5vw, 72px)',
          }}
        >
          {/* Eyebrow */}
          <ScrollReveal delayMs={0}>
            <div className="flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#A66A18] mb-6 sm:mb-8">
              <span>PERSPECTIVA</span>
              <span className="text-[#071126]/25" aria-hidden="true">/</span>
              <span className="text-[#5A6478] font-normal tracking-[0.15em]">Criterio Profesional & Filosofía de Trabajo</span>
            </div>
          </ScrollReveal>

          {/* Gran Titular Editorial */}
          <ScrollReveal delayMs={60}>
            <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight text-[#071126] leading-[1.08] mb-8 sm:mb-10 max-w-4xl text-balance">
              Antes de pensar en una solución, necesito entender qué está pasando.
            </h1>
          </ScrollReveal>

          {/* Narrativa de Apertura */}
          <ScrollReveal delayMs={120}>
            <div className="max-w-[68ch] space-y-5 text-base sm:text-lg text-[#071126]/90 font-normal leading-relaxed">
              <p className="font-editorial text-xl sm:text-2xl text-[#071126] leading-snug">
                Gran parte de mi experiencia profesional ha ocurrido en proyectos donde diferentes personas ven el mismo problema desde lugares muy distintos.
              </p>
              <p className="text-[#5A6478] leading-relaxed text-[15px] sm:text-base">
                Negocio quiere avanzar. Tecnología necesita saber qué construir. Las áreas de control necesitan entender los riesgos. Y los usuarios sólo quieren que lo que estamos haciendo realmente les ayude.
              </p>
              <p className="text-[#071126]/85 leading-relaxed text-[15px] sm:text-base">
                Con el tiempo he aprendido que mi lugar suele estar en ese punto de articulación: hacer las preguntas correctas antes de apresurar respuestas, dar contexto a quienes deciden y asegurar que lo que construimos tenga sentido técnico, humano y regulatorio.
              </p>
            </div>
          </ScrollReveal>

          {/* Índice Temático Editorial */}
          <ScrollReveal delayMs={180}>
            <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-[rgba(7,17,38,0.08)]">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A6478] font-semibold block mb-4">
                Índice de Reflexiones & Criterios
              </span>
              <nav aria-label="Índice de temas" className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs">
                {editorialSections.map((sec) => (
                  <a
                    key={sec.number}
                    href={`#${sec.id}`}
                    className="inline-flex items-center gap-1.5 text-[#5A6478] hover:text-[#071126] transition-colors py-1 group"
                  >
                    <span className="font-mono text-[#A66A18] text-[11px]">{sec.number}</span>
                    <span className="group-hover:underline underline-offset-4">{sec.title.split(':')[0].slice(0, 38)}...</span>
                  </a>
                ))}
              </nav>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CAPÍTULOS EDITORIALES (01 A 07) */}
      {/* ======================================================== */}
      <section className="relative divide-y divide-[rgba(7,17,38,0.08)]">
        {editorialSections.map((sec, index) => {
          const telemetrySectionName =
            sec.number === '01'
              ? 'problem_solving'
              : sec.number === '02'
              ? 'cross_functional'
              : sec.number === '03'
              ? 'metrics'
              : sec.number === '04'
              ? 'adoption'
              : sec.number === '05'
              ? 'genai_criterion'
              : sec.number === '06'
              ? 'regulated_banking'
              : 'banking_2030';

          return (
            <div
              key={sec.number}
              id={sec.id}
              data-telemetry-section={telemetrySectionName}
              className={`py-16 sm:py-24 lg:py-28 scroll-mt-20 ${
                index % 2 === 1 ? 'bg-black/[0.015]' : 'bg-transparent'
              }`}
            >
            <div
              className="max-w-[1280px] mx-auto w-full"
              style={{
                paddingLeft: 'clamp(24px, 5vw, 72px)',
                paddingRight: 'clamp(24px, 5vw, 72px)',
              }}
            >
              <ScrollReveal delayMs={index * 30}>
                {/* Composición Asimétrica Editorial: 3 Columnas Desktop */}
                <article className="grid grid-cols-1 lg:grid-cols-[minmax(70px,0.4fr)_minmax(280px,1.15fr)_minmax(320px,1.8fr)] gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
                  
                  {/* Columna 1: Número Editorial */}
                  <div className="pt-1">
                    <span className="font-mono text-sm sm:text-base tracking-[0.25em] text-[#A66A18] font-semibold block">
                      {sec.number}
                    </span>
                    <span className="block w-6 h-px bg-[#A66A18]/40 mt-2" aria-hidden="true" />
                  </div>

                  {/* Columna 2: Heading & Subtítulo */}
                  <div className="space-y-3">
                    <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[2.15rem] font-medium text-[#071126] leading-[1.18] tracking-tight text-balance">
                      {sec.title}
                    </h2>
                    {sec.subtitle && (
                      <p className="text-xs uppercase tracking-wider text-[#5A6478] font-medium font-sans pt-1">
                        {sec.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Columna 3: Narrativa & Frase Destacada */}
                  <div className="space-y-5 text-[15px] sm:text-base text-[#071126]/85 font-normal leading-[1.78] max-w-[65ch]">
                    {sec.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}

                    {sec.quote && (
                      <blockquote className="my-8 sm:my-10 pl-6 sm:pl-8 border-l-2 border-[#A66A18]/60 italic font-editorial text-xl sm:text-2xl text-[#071126] leading-snug">
                        «{sec.quote}»
                      </blockquote>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            </div>
          </div>
        );
      })}
    </section>

      {/* ======================================================== */}
      {/* COLOFÓN EDITORIAL & INVITACIÓN A CONVERSAR */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 lg:py-32 border-t border-[rgba(7,17,38,0.08)] bg-white/50">
        <div
          className="max-w-[1280px] mx-auto w-full"
          style={{
            paddingLeft: 'clamp(24px, 5vw, 72px)',
            paddingRight: 'clamp(24px, 5vw, 72px)',
          }}
        >
          <ScrollReveal>
            <div className="max-w-3xl space-y-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A66A18] block font-mono">
                COLOFÓN
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#071126] leading-[1.15] tracking-tight text-balance">
                Una conversación constructiva siempre comienza con una pregunta honesta.
              </h2>

              <p className="text-base sm:text-lg text-[#5A6478] leading-relaxed max-w-[65ch]">
                La forma en que pensamos determina la forma en que construimos. Si estás explorando una iniciativa que requiere conectar producto, tecnología y gobierno, o si buscas una profesional con este criterio para sumar a tu organización, con gusto abro este canal.
              </p>

              {/* Acciones de Navegación Cruzada */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    trackCtaClick('contact_click', 'perspective_colophon');
                    navigate('/', '#contacto');
                  }}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#071126] hover:bg-[#173B85] transition-all duration-200 rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#071126] group min-h-[46px] cursor-pointer"
                >
                  <span>Iniciar una conversación</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F8F7F4]/80 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <a
                  href="/como-puedo-ayudarte/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/como-puedo-ayudarte/');
                  }}
                  className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#071126] bg-white border border-[rgba(7,17,38,0.14)] hover:border-[#071126] hover:bg-[#F8F7F4] transition-all duration-200 rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071126] min-h-[46px] cursor-pointer"
                >
                  <span>Dónde puedo aportar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A66A18]" />
                </a>

                <a
                  href="/#trayectoria"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/', '#trayectoria');
                  }}
                  className="inline-flex items-center px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#5A6478] hover:text-[#071126] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B85] rounded-xs"
                >
                  <span>Trayectoria</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
