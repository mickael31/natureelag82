import { PhoneCall } from "lucide-react";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AreaSection } from "./components/sections/AreaSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TrustSection } from "./components/sections/TrustSection";
import { WhyChooseUsSection } from "./components/sections/WhyChooseUsSection";
import { SeoHead } from "./components/seo/SeoHead";
import { company } from "./data/company";

export default function App(): JSX.Element {
  return (
    <div className="relative overflow-x-clip text-sand-100">
      <SeoHead />

      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <Header />

      <main id="main-content" role="main">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <AreaSection />
        <TrustSection />
        <ContactSection />
      </main>

      <Footer />

      <a
        className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-full bg-pine-500 px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-charcoal-900 shadow-xl transition hover:bg-pine-400 lg:hidden"
        href={`tel:${company.phoneRaw}`}
      >
        <PhoneCall className="h-4 w-4" aria-hidden="true" />
        Appeler
      </a>
    </div>
  );
}
