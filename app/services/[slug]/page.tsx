import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileAppHero from '@/components/services/MobileAppHero';
import MobileAppOverview from '@/components/services/MobileAppOverview';
import MobileAppTypes from '@/components/services/MobileAppTypes';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceOverview from '@/components/services/ServiceOverview';
import ServiceSections from '@/components/services/ServiceSections';
import ServiceFAQs from '@/components/services/ServiceFAQs';
import { servicesData, servicesList } from '@/lib/servicesData';
import type { ServiceSection } from '@/lib/servicesData';

const CustomSoftwareLayout = dynamic(() => import('@/components/services/layouts/CustomSoftwareLayout'), { ssr: true });
const OdooLayout = dynamic(() => import('@/components/services/layouts/OdooLayout'), { ssr: true });
const AIAutomationLayout = dynamic(() => import('@/components/services/layouts/AIAutomationLayout'), { ssr: true });
const DataScrapingLayout = dynamic(() => import('@/components/services/layouts/DataScrapingLayout'), { ssr: true });
const WebsiteDesignLayout = dynamic(() => import('@/components/services/layouts/WebsiteDesignLayout'), { ssr: true });
const UIUXDesignLayout = dynamic(() => import('@/components/services/layouts/UIUXDesignLayout'), { ssr: true });

const serviceLayouts: Record<string, ComponentType> = {
  'custom-software-development': CustomSoftwareLayout,
  'odoo-erp-services': OdooLayout,
  'ai-seo-automation': AIAutomationLayout,
  'data-scraping-web-crawling': DataScrapingLayout,
  'website-design-development': WebsiteDesignLayout,
  'ui-ux-graphic-video-design': UIUXDesignLayout,
};

function getOverviewAndRestSections(sections: ServiceSection[]) {
  const firstOverview = sections.find((s) => s.type === 'overview');
  const firstList = sections.find((s) => s.type === 'list');
  const restSections = sections.filter(
    (s) => s.id !== firstOverview?.id && s.id !== firstList?.id
  );
  const capabilities = firstList?.type === 'list' ? firstList.items : [];
  const capabilitiesHeading = firstList?.title ?? 'What we offer';
  return { capabilities, capabilitiesHeading, restSections };
}

export function generateStaticParams() {
  return servicesList.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const service = servicesData[slug] || servicesData['custom-software-development'];
  const UniqueLayout = serviceLayouts[slug];
  const isMobileApp = slug === 'mobile-application-development';
  const { capabilities, capabilitiesHeading, restSections } =
    getOverviewAndRestSections(service.sections);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      {isMobileApp ? (
        <>
          <MobileAppHero />
          <MobileAppOverview />
          <MobileAppTypes />
        </>
      ) : UniqueLayout ? (
        <UniqueLayout />
      ) : (
        <>
          <ServiceHero
            title={service.title}
            subtitle={service.subtitle}
            ctaText="Book a consultation"
          />
          <ServiceOverview
            intro={service.intro}
            label="Overview"
            capabilities={capabilities}
            capabilitiesHeading={capabilitiesHeading}
          />
          <ServiceSections sections={restSections} />
        </>
      )}
      <ServiceFAQs />
      <Footer />
    </main>
  );
}
