import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import WhyChooseService from '@/components/services/WhyChooseService';
import ServiceCapabilities from '@/components/services/ServiceCapabilities';
import ServiceProcess from '@/components/services/ServiceProcess';
import MaintenanceSupport from '@/components/services/MaintenanceSupport';
import ServiceFAQs from '@/components/services/ServiceFAQs';

const serviceData: Record<string, any> = {
  'custom-software-development': {
    title: 'Custom Software Development',
    subtitle: 'Bespoke solutions tailored to your unique business needs.',
    intro: 'We create custom software solutions that perfectly align with your business objectives. Our team of expert developers builds scalable, maintainable applications that drive growth and efficiency.',
    whyChoose: [
      'Custom Digital Product Development',
      'Performance and Scalability',
      'Security Built-in',
      'Agile, Collaborative Approach',
    ],
    capabilities: [
      'Enterprise application development',
      'Custom workflow automation',
      'Legacy system modernization',
      'Cross-platform solutions',
      'API development and integration',
    ],
  },
  'ai-machine-learning-development': {
    title: 'AI & Machine Learning Development',
    subtitle: 'Unlock business intelligence and automation with cutting-edge AI.',
    intro: 'Transform your business with intelligent solutions powered by artificial intelligence and machine learning. We build AI systems that learn, adapt, and deliver actionable insights.',
    whyChoose: [
      'Advanced AI Solutions',
      'Machine Learning Models',
      'Data Analytics & Insights',
      'Automated Decision Making',
    ],
    capabilities: [
      'Machine learning model development',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'AI-powered automation',
    ],
  },
  'blockchain-development': {
    title: 'Blockchain Development',
    subtitle: 'Secure, scalable decentralized apps and platforms.',
    intro: 'Leverage blockchain technology to build transparent, secure, and decentralized applications. We develop smart contracts, DApps, and blockchain infrastructure for various industries.',
    whyChoose: [
      'Smart Contract Development',
      'Decentralized Applications',
      'Blockchain Integration',
      'Security & Compliance',
    ],
    capabilities: [
      'Smart contract development',
      'DApp creation',
      'Blockchain consulting',
      'Token development',
      'DeFi solutions',
    ],
  },
  'front-backend-development': {
    title: 'Front & Backend Development',
    subtitle: 'Create robust, scalable web solutions for your business.',
    intro: 'We build powerful web applications with modern frontend frameworks and robust backend architectures. Our full-stack expertise ensures seamless user experiences and reliable performance.',
    whyChoose: [
      'Custom Digital Product Development',
      'Performance and Scalability',
      'Security Built-in',
      'Agile, Collaborative Approach',
    ],
    capabilities: [
      'Responsive web app development',
      'Custom API design and integration',
      'Complex database architecture',
      'System modernization and migration',
      'Performance optimization',
    ],
  },
  'android-ios-app-development': {
    title: 'Android & iOS App Development',
    subtitle: 'Mobile-first solutions for any market.',
    intro: 'Create engaging mobile experiences with native and cross-platform applications. We develop high-performance mobile apps that users love and businesses rely on.',
    whyChoose: [
      'Native & Cross-Platform',
      'User-Centric Design',
      'App Store Optimization',
      'Ongoing Support & Updates',
    ],
    capabilities: [
      'Native iOS development',
      'Native Android development',
      'Cross-platform solutions',
      'App UI/UX design',
      'App testing and deployment',
    ],
  },
  'devops-cloud-services': {
    title: 'DevOps & Cloud Services',
    subtitle: 'Faster releases, stable infrastructure, lower costs.',
    intro: 'Streamline your development workflow and infrastructure with our DevOps expertise. We help you deploy faster, scale efficiently, and maintain reliable cloud environments.',
    whyChoose: [
      'CI/CD Pipeline Setup',
      'Cloud Infrastructure',
      'Monitoring & Automation',
      'Cost Optimization',
    ],
    capabilities: [
      'CI/CD implementation',
      'Cloud migration',
      'Container orchestration',
      'Infrastructure as code',
      'Performance monitoring',
    ],
  },
  'software-testing': {
    title: 'Software Testing',
    subtitle: 'QA that ensures speed, quality, and reliability.',
    intro: 'Comprehensive testing services that guarantee your software meets the highest quality standards. We ensure your applications are bug-free, performant, and user-ready.',
    whyChoose: [
      'Comprehensive Test Coverage',
      'Automated Testing',
      'Performance Testing',
      'Quality Assurance',
    ],
    capabilities: [
      'Automated test development',
      'Manual testing services',
      'Performance testing',
      'Security testing',
      'Test strategy consulting',
    ],
  },
  'system-integration': {
    title: 'System Integration',
    subtitle: 'Connect your tools, data, and workflows seamlessly.',
    intro: 'Integrate your existing systems and third-party services to create a unified, efficient ecosystem. We connect your tools and data for seamless operations.',
    whyChoose: [
      'Seamless Integration',
      'API Development',
      'Data Synchronization',
      'Workflow Automation',
    ],
    capabilities: [
      'Third-party integrations',
      'API development',
      'Data migration',
      'System connectivity',
      'Workflow automation',
    ],
  },
  'mvp-development': {
    title: 'MVP Development',
    subtitle: 'Validate ideas and launch quicker, smarter.',
    intro: 'Bring your product idea to market faster with our MVP development services. We help you validate concepts, test assumptions, and launch with confidence.',
    whyChoose: [
      'Rapid Development',
      'Cost-Effective Solutions',
      'Market Validation',
      'Scalable Foundation',
    ],
    capabilities: [
      'MVP planning and strategy',
      'Rapid prototyping',
      'Core feature development',
      'Market validation support',
      'Scalable architecture',
    ],
  },
  'enterprise-software-development': {
    title: 'Enterprise Software Development',
    subtitle: 'Big solutions for big businesses.',
    intro: 'Enterprise-grade software solutions designed for scale, security, and performance. We build robust systems that support your organization\'s growth and operations.',
    whyChoose: [
      'Enterprise Architecture',
      'Scalability & Performance',
      'Security & Compliance',
      '24/7 Support',
    ],
    capabilities: [
      'Enterprise application development',
      'System architecture design',
      'Security implementation',
      'Compliance and governance',
      'Enterprise integration',
    ],
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug] || serviceData['front-backend-development'];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServiceHero title={service.title} subtitle={service.subtitle} />
      <ServiceIntro content={service.intro} />
      <WhyChooseService items={service.whyChoose} />
      <ServiceCapabilities items={service.capabilities} />
      <ServiceProcess />
      <MaintenanceSupport />
      <ServiceFAQs />
      <Footer />
    </main>
  );
}


