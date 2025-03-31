import HeroSection from './components/sections/HeroSection';
import ValuePropositionSection from './components/sections/ValuePropositionSection';
import ArchitectureSection from './components/sections/ArchitectureSection';
import ServiceCasesSection from './components/sections/ServiceCasesSection';
import CustomerSegmentsSection from './components/sections/CustomerSegmentsSection';
import AgenticAISection from './components/sections/AgenticAISection';
import ImplementationProcessSection from './components/sections/ImplementationProcessSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import { CookieConsent } from './components/ui/CookieConsent';
import { Layout } from './components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <ArchitectureSection />
        <ServiceCasesSection />
        <CustomerSegmentsSection />
        <AgenticAISection />
        <ImplementationProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <CookieConsent />
    </Layout>
  );
}
