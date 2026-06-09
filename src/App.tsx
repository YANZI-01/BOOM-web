import { StrictMode } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { WearExperience } from './components/WearExperience';
import { PrecisionData } from './components/PrecisionData';
import { RecoveryAlgorithm } from './components/RecoveryAlgorithm';
import { AICoachTimeline } from './components/AICoachTimeline';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-black text-white font-sans selection:bg-boom-green selection:text-black">
          <Navbar />
          <main>
            <Hero />
            <ProductShowcase />
            <WearExperience />
            <PrecisionData />
            <RecoveryAlgorithm />
            <AICoachTimeline />
            <TargetAudience />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}
