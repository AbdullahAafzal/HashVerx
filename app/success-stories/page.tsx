import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SuccessStoriesHero from '@/components/success-stories/SuccessStoriesHero';
import TrustedBy from '@/components/success-stories/TrustedBy';
import IndustrySuccessStories from '@/components/success-stories/IndustrySuccessStories';
import OurAchievements from '@/components/success-stories/OurAchievements';
import WhyClientsSucceed from '@/components/success-stories/WhyClientsSucceed';
import SuccessStoriesCTA from '@/components/success-stories/SuccessStoriesCTA';

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SuccessStoriesHero />
      <TrustedBy />
      <IndustrySuccessStories />
      <OurAchievements />
      <WhyClientsSucceed />
      <SuccessStoriesCTA />
      <Footer />
    </main>
  );
}


