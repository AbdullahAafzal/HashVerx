import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareersHero from '@/components/careers/CareersHero';
import FeaturedJobs from '@/components/careers/FeaturedJobs';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CareersHero />
      <FeaturedJobs />
      <Footer />
    </main>
  );
}


