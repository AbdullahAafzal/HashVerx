import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import WhoWeAre from '@/components/about/WhoWeAre';
import MissionVision from '@/components/about/MissionVision';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurValues from '@/components/about/OurValues';
import AwardsRecognition from '@/components/about/AwardsRecognition';
import OurJourney from '@/components/about/OurJourney';
import CTASection from '@/components/about/CTASection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhyChooseUs />
      <OurValues />
      <AwardsRecognition />
      <OurJourney />
      <CTASection />
      <Footer />
    </main>
  );
}


