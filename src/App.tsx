import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ImpactHighlights } from './components/ImpactHighlights';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { HowICanHelpPage } from './pages/HowICanHelpPage';
import { PerspectivePage } from './pages/PerspectivePage';
import { usePageSectionsObserver } from './hooks/useSectionObserver';

function AppContent() {
  const { currentPath, isHowICanHelpPage, isPerspectivePage } = useNavigation();

  // Attach non-intrusive section view observer for the active page
  usePageSectionsObserver(currentPath);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#071126] flex flex-col selection:bg-[#F2E7D3] selection:text-[#5A3A0A] font-sans">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content: Render PerspectivePage, HowICanHelpPage or Canonical Home */}
      <main className="flex-1">
        {isPerspectivePage ? (
          <PerspectivePage />
        ) : isHowICanHelpPage ? (
          <HowICanHelpPage />
        ) : (
          <>
            {/* Hero Section */}
            <div data-telemetry-section="hero">
              <Hero />
            </div>

            {/* Propuesta de Valor & Framework */}
            <ValueProposition />

            {/* Impacto Destacado (Métricas & Casos) */}
            <div data-telemetry-section="impact">
              <ImpactHighlights />
            </div>

            {/* Línea de Tiempo de Carrera (Rotaciones HSBC México) */}
            <div data-telemetry-section="career">
              <InteractiveTimeline />
            </div>

            {/* Habilidades Clave & Matriz */}
            <div data-telemetry-section="skills">
              <SkillsMatrix />
            </div>

            {/* Educación, Certificaciones & Idiomas */}
            <div data-telemetry-section="education">
              <EducationCertifications />
            </div>

            {/* Contacto Directo */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer Compartido */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <MobileQuickBar />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
