import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import LatestProjects from '@/components/LatestProjects';
import IndustryExpertise from '@/components/IndustryExpertise';
// import WorkWithUs from '@/components/WorkWithUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TechStack />
      <Services />
      <LatestProjects />
      <IndustryExpertise />
      {/* <WorkWithUs /> */}
      <ContactForm />
      <Footer />
    </main>
  );
}

