import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CareSection } from '@/components/CareSection';
import { PractitionerSection } from '@/components/PractitionerSection';
import { PracticalInfo } from '@/components/PracticalInfo';
import { ClosingCTA } from '@/components/ClosingCTA';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';
import { SEOHead } from '@/components/SEOHead';

function App() {
  return (
    <div className="site-shell min-h-[100dvh]" data-testid="page-practice">
      <SEOHead />
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <Navbar />

      <main id="contenu">
        <Hero />
        <CareSection />
        <PractitionerSection />
        <PracticalInfo />
        <ClosingCTA />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}

export default App;
