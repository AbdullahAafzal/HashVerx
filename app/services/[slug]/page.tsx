import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceSections from '@/components/services/ServiceSections';
import MobileAppHero from '@/components/services/MobileAppHero';
import MobileAppOverview from '@/components/services/MobileAppOverview';
import MobileAppTypes from '@/components/services/MobileAppTypes';
import ServiceFAQs from '@/components/services/ServiceFAQs';
import { servicesData } from '@/lib/servicesData';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service =
    servicesData[params.slug] ||
    servicesData['custom-software-development'];

  const isMobileApp = params.slug === 'mobile-application-development';

  return (
    <main className="min-h-screen bg-white">
      <Header />
      {isMobileApp ? (
        <>
          <MobileAppHero />
          <MobileAppOverview />
          <MobileAppTypes />
        </>
      ) : (
        <>
          <ServiceHero title={service.title} subtitle={service.subtitle} />
          <ServiceSections sections={service.sections} />
        </>
      )}
      <ServiceFAQs />
      <Footer />
    </main>
  );
}
