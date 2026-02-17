import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileAppHero from '@/components/services/MobileAppHero';
import MobileAppOverview from '@/components/services/MobileAppOverview';
import MobileAppTypes from '@/components/services/MobileAppTypes';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceOverview from '@/components/services/ServiceOverview';
import ServiceSections from '@/components/services/ServiceSections';
import ServiceFAQs from '@/components/services/ServiceFAQs';
import { serviceLayouts } from '@/components/services/layouts';
import { servicesData, servicesList } from '@/lib/servicesData';
import type { ServiceSection } from '@/lib/servicesData';

const customSoftwareFAQs = [
  {
    question: 'Why pick custom software development instead of ready-made solutions?',
    answer: 'Custom software offers many benefits over pre-packaged options such as:\n• Fits your specific requirements\n• Boosts productivity\n• Gives you an edge over competitors\n• Grows with your business\n• Pays off in the long run',
  },
  {
    question: 'How long does it take to develop custom software?',
    answer: 'The development timeline for custom software can vary depending on the complexity of the project, the scope of features, and the availability of resources. We provide you with a detailed project timeline at the beginning of the development process to give you a clear understanding of the expected timeframe.',
  },
  {
    question: 'How much does custom software development cost?',
    answer: 'The cost of custom software development depends on several factors, including the project\'s complexity, the required features, the development team\'s expertise, and the chosen technology stack. We provide you with a detailed cost estimate based on your specific requirements.',
  },
  {
    question: 'Can I make changes to my custom software after it\'s developed?',
    answer: 'Yes, you can change your custom software after we develop it. Our team can handle tweaks, updates, and improvements to make sure your software keeps up with your changing needs.',
  },
  {
    question: 'Will I have any control of the project?',
    answer: 'You will be in full control of the project since the team will be following your lead and will create software that will cater to your requirements fully.',
  },
  {
    question: 'How can we stay up to date on developments?',
    answer: 'We use Agile scrum development methodology. From the beginning of sprint preparation until the last review before the release date, you will play a crucial role.',
  },
];

const mobileAppFAQs = [
  {
    question: 'How much does it cost to build a mobile app?',
    answer: 'Mobile app development services costs depend on multiple factors, including project scope and technical requirements. App complexity, desired features, design requirements, and the platform you intend to target all influence development costs. As a custom software development company, HashVerx offers tailored solutions that meet your specific needs and budget. For a more specific estimate, feel free to reach out to our team to discuss your project requirements.',
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'Similar to cost, the development timeline for a mobile app is based on the complexity, features, and number of platforms involved. While simple applications can take a few months, the time required for more complex solutions may be longer. Our mobile application development teams leverage agile methodologies to make sure development runs efficiently and you meet your target deadline.',
  },
  {
    question: 'How do you ensure privacy and security in mobile apps?',
    answer: 'Ensuring data security and protecting the privacy of your users is a top priority throughout the mobile app development process. We implement industry-leading best practices, robust encryption protocols, and secure coding standards to ensure sensitive information is protected. Our approach involves regular vulnerability assessments and rigorous penetration testing at every stage of development. By proactively integrating security into every stage of mobile app development, we assure your digital assets are well-protected against potential cyber threats.',
  },
  {
    question: 'What platforms does HashVerx develop mobile apps for?',
    answer: 'We develop mobile applications for iOS and Android. Our expertise ranges from native app development, which utilizes the full capability and unique features of each platform, to cross-platform solutions which enable seamless and consistent user experiences across devices. Whether your goal is to maximize performance with native apps or broaden your reach with cross-platform solutions, we customize our strategy to align with your business goals and the unique needs of your users.',
  },
  {
    question: 'What are the steps involved in mobile app development?',
    answer: 'As an end-to-end mobile app development partner, we support the entire development lifecycle. This includes:\n• Strategy and ideation: We work with you to understand your product vision while defining the scope of work, project parameters, tech stacks, and desired outcomes.\n• User experience and design: Our UI/UX experts create refined wireframes that resonate with your target audience and offer an intuitive and seamless user experience that drives engagement.\n• Development and testing: Our industry-leading mobile app developers get to work on building your mobile application, following best practices for coding and leveraging vast industry expertise to ensure flawless functionality, usability, design, and security.\n• Launch and support: We offer comprehensive support through the launch process to guarantee you cross the finish line successfully. Post-launch, we offer technical support and maintenance to ensure your app maintains optimal performance.',
  },
];

const odooFAQs = [
  {
    question: 'What is the difference between Odoo Community and Odoo Enterprise?',
    answer: 'Odoo Community is the free and open-source version of Odoo. It offers a range of basic features that are suitable for small companies. Odoo Enterprise, on the other hand, is a licensed version with all the latest apps and features.',
  },
  {
    question: 'How long does it take to implement Odoo ERP?',
    answer: 'According to Odoo.com, the implementation time varies from 1 to 24 months. That said, a basic project would be completed within a few weeks. While a complex project with advanced customizations and integrations may take several months.',
  },
  {
    question: 'What is the cost of customizing Odoo ERP?',
    answer: 'The cost of customizing Odoo varies depending on your specific requirements, the total number of features you need, and how complex the changes are. At HashVerx, we offer transparent pricing. Our team can work with you to provide a solution that matches your budget constraints.',
  },
  {
    question: 'Is Odoo suitable for my industry?',
    answer: 'The Odoo platform is incredibly flexible and suitable for nearly every industry, from manufacturing to retail to healthcare. If you want to build any specific features unique to your business, HashVerx is here to help you customize the software.',
  },
  {
    question: 'How secure is Odoo software?',
    answer: 'Odoo places a strong emphasis on security. It offers robust encryption and ensures compliance with standard security protocols in the market. Their dedicated support team ensures your system is regularly maintained and protected from potential threats.',
  },
  {
    question: 'Does Odoo offer double-entry inventory management?',
    answer: 'Yes, Odoo provides double-entry inventory management. This helps you properly record and trace every transaction to ensure accuracy and financial integrity.',
  },
  {
    question: 'Does Odoo support multiple languages and currencies?',
    answer: 'Yes, Odoo supports over 80 languages and multiple currencies. This makes it ideal for businesses with global operations.',
  },
  {
    question: 'What are the main modules included in Odoo ERP?',
    answer: 'Odoo offers 50+ modules to cover different aspects of your business, including, accounting, finance, sales, manufacturing, inventory, purchase, project management, CRM, and more.',
  },
  {
    question: 'How does Odoo help businesses scale?',
    answer: 'Odoo has a modular structure that makes it highly scalable for any business. Its modular nature allows you to add or adjust modules as your business grows.',
  },
  {
    question: 'What deployment options are available for Odoo?',
    answer: 'Odoo can be deployed in three main ways: Odoo Online (SaaS), Odoo.sh (PaaS), and On-Premise hosting.',
  },
  {
    question: 'How does Odoo support data analytics and reporting?',
    answer: 'Odoo has built-in tools for generating detailed reports and analytics at the click of a button. Additionally, Odoo allows integration with third-party analytics tools to enhance reporting capabilities.',
  },
  {
    question: 'What is headless e-commerce development in Odoo?',
    answer: 'Headless e-commerce in Odoo refers to a system where the front-end and back-end are decoupled, allowing for more flexibility in user interface design while utilizing Odoo\'s powerful back-end functionalities for e-commerce management.',
  },
  {
    question: 'What training and support resources are available for Odoo users?',
    answer: 'Odoo offers a wealth of online resources, including tutorials, forums, and community-driven support. For those who require more tailored assistance, Odoo also offers paid training and dedicated support services that can be accessed via their official website.',
  },
];

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
    <main className="min-h-screen bg-transparent">
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
      <ServiceFAQs faqs={
        slug === 'custom-software-development' 
          ? customSoftwareFAQs 
          : slug === 'mobile-application-development'
          ? mobileAppFAQs
          : slug === 'odoo-erp-services'
          ? odooFAQs
          : undefined
      } />
      <Footer />
    </main>
  );
}
