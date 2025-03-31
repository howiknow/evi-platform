import HeroSection from './components/sections/HeroSection';
import ValuePropositionSection from './components/sections/ValuePropositionSection';
import CustomerSegmentsSection from './components/sections/CustomerSegmentsSection';
import ArchitectureSection from './components/sections/ArchitectureSection';
import AgenticAISection from './components/sections/AgenticAISection';
import ImplementationProcessSection from './components/sections/ImplementationProcessSection';
import ServiceCasesSection from './components/sections/ServiceCasesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuePropositionSection />
      <CustomerSegmentsSection />
      <ArchitectureSection />
      <AgenticAISection />
      <ImplementationProcessSection />
      <ServiceCasesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
} 