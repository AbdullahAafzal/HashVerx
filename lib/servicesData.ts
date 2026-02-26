export type ServiceSection =
  | { id: string; title: string; type: "overview"; content: string }
  | { id: string; title: string; type: "list"; items: string[] }
  | { id: string; title: string; type: "paragraph"; content: string };

export interface ServiceDetail {
  title: string;
  subtitle: string;
  slug: string;
  intro: string;
  sections: ServiceSection[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "custom-software-development": {
    title: "Custom Software Development",
    subtitle: "Bespoke solutions tailored to your unique business needs.",
    slug: "custom-software-development",
    intro: `We help enterprises overcome key business challenges and unlock growth opportunities with custom software tailored to unique operational, governance, and scalability needs. Our AI-first mindset, strategy-led modernization, and end-to-end engineering capabilities allow us to support enterprises at various levels of infrastructure and AI maturity. With over two decades of experience across regulated and complex environments, we deliver software development services that balance stability, resilience, and innovation at enterprise scale.`,
    sections: [
      {
        id: "overview",
        title: "Overview",
        type: "overview",
        content: `We help enterprises overcome key business challenges and unlock growth opportunities with custom software tailored to unique operational, governance, and scalability needs. Our AI-first mindset, strategy-led modernization, and end-to-end engineering capabilities allow us to support enterprises at various levels of infrastructure and AI maturity. With over two decades of experience across regulated and complex environments, we deliver software development services that balance stability, resilience, and innovation at enterprise scale.`
      },
      {
        id: "what-we-build",
        title: "Our core strengths:",
        type: "list",
        items: [
          "Built for Flexibility and Growth",
          "Cross-Industry Customization",
          "Seamless Integration and Modernization"
        ]
      },
      {
        id: "tech-stack",
        title: "Tech Stack",
        type: "list",
        items: [
          "React",
          "Django",
          "Bootstrap",
          "APIs & Integrations",
          "AI-Enabled Systems"
        ]
      },
      {
        id: "why-us",
        title: "Why Us",
        type: "paragraph",
        content:
          "Custom digital product development with performance, scalability, and security built in. We follow an agile, collaborative approach to deliver solutions that match your vision."
      },
      {
        id: "contact",
        title: "Contact",
        type: "paragraph",
        content:
          "Ready to build your custom software? Get in touch for a consultation and let's turn your ideas into reality."
      }
    ]
  },
  "mobile-application-development": {
    title: "Mobile Application Development",
    subtitle: "Mobile-first solutions for any market.",
    slug: "mobile-application-development",
    intro:
      "Create engaging mobile experiences with native and cross-platform applications. We develop high-performance mobile apps that users love and businesses rely on.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        type: "overview",
        content:
          "Create engaging mobile experiences with native and cross-platform applications. We develop high-performance mobile apps that users love and businesses rely on."
      },
      {
        id: "app-types",
        title: "App Types",
        type: "list",
        items: ["Business Apps", "Marketplace Apps", "ERP-Integrated Apps"]
      },
      {
        id: "platforms",
        title: "Platforms",
        type: "list",
        items: ["React Native", "iOS"]
      },
      {
        id: "process",
        title: "Process",
        type: "paragraph",
        content:
          "From discovery and design to development, testing, and launch—we follow a proven process to deliver quality mobile applications on time."
      },
      {
        id: "get-demo",
        title: "Get Demo",
        type: "paragraph",
        content:
          "See our work in action. Request a demo of our mobile solutions or discuss your app idea with our team."
      }
    ]
  },
  "odoo-erp-services": {
    title: "Odoo ERP Services",
    subtitle: "Odoo Implementation, Done Right.",
    slug: "odoo-erp-services",
    intro:
      "Hashverx is a proud Odoo partner. Our certified Odoo experts handle everything from installation and configuration to migration, customization, and beyond. We don't hard code the system, giving you a flexible solution that perfectly synchronizes all your verticals (and improves your bottom line).",
    sections: [
      {
        id: "overview",
        title: "Overview",
        type: "overview",
        content:
          "Hashverx is a proud Odoo partner. Our certified Odoo experts handle everything from installation and configuration to migration, customization, and beyond. We don't hard code the system, giving you a flexible solution that perfectly synchronizes all your verticals (and improves your bottom line)."
      },
      {
        id: "odoo-services",
        title: "Odoo Services",
        type: "list",
        items: [
          "Implementation & Customization",
          "Custom Modules",
          "Integrations",
          "Upgrades & AMC"
        ]
      },
      {
        id: "industry-solutions",
        title: "Industry Solutions",
        type: "paragraph",
        content:
          "We deliver Odoo solutions tailored to your industry—from manufacturing and retail to services and distribution."
      },
      {
        id: "support-migration",
        title: "Support & Migration",
        type: "paragraph",
        content:
          "Ongoing support, maintenance, and migration from legacy ERP to Odoo. We ensure a smooth transition and continued reliability."
      },
      {
        id: "book-consultation",
        title: "Book Consultation",
        type: "paragraph",
        content:
          "Schedule a free consultation to discuss your Odoo requirements and get a tailored implementation plan."
      }
    ]
  },
  "ai-seo-automation": {
    title: "AI, SEO & Automation Services",
    subtitle: "Unlock business intelligence and automation with AI and SEO.",
    slug: "ai-seo-automation",
    intro:
      "Accelerate business transformation with intelligent automation, predictive analytics, and machine learning. Hashverx helps you use AI to solve real business problems, optimize processes, and gain actionable insights that drive results.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        type: "overview",
        content:
          "Accelerate business transformation with intelligent automation, predictive analytics, and machine learning. Hashverx helps you use AI to solve real business problems, optimize processes, and gain actionable insights that drive results."
      },
      {
        id: "what-we-automate",
        title: "What We Automate",
        type: "list",
        items: ["Business Workflows", "Sales & CRM"]
      },
      {
        id: "ai-seo-capabilities",
        title: "AI & SEO Capabilities",
        type: "list",
        items: [
          "AI Chatbots",
          "AI Content & SEO",
          "Technical SEO",
          "Analytics & Reporting",
          "Data & Documents",
          "Customer Support"
        ]
      },
      {
        id: "business-benefits",
        title: "Business Benefits",
        type: "paragraph",
        content:
          "Reduce manual work, improve accuracy, and scale operations. Our AI and automation solutions deliver measurable ROI across industries."
      },
      {
        id: "start-automation",
        title: "Start Automation",
        type: "paragraph",
        content:
          "Tell us your goals and we'll design an automation and AI strategy that fits your business."
      }
    ]
  },
  "data-scraping-web-crawling": {
    title: "Data Scraping & Web Crawling",
    subtitle: "Clean, structured data from the web—delivered your way.",
    slug: "data-scraping-web-crawling",
    intro:
      "Working with HashVerx, you ensure predictably successful results each time. Our streamlined and thorough processes keep us competitive. HashVerx strives to optimize the web scraping and data analyzing process to make sure your time and investment are utilized most efficiently. By simplifying our strategies, we make outsourcing data scraping the best experience for you and your customers.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        type: "overview",
        content:
          "Working with HashVerx, you ensure predictably successful results each time. Our streamlined and thorough processes keep us competitive. HashVerx strives to optimize the web scraping and data analyzing process to make sure your time and investment are utilized most efficiently. By simplifying our strategies, we make outsourcing data scraping the best experience for you and your customers."
      },
      {
        id: "data-sources",
        title: "Data Sources",
        type: "list",
        items: ["Websites", "Marketplaces", "Public Platforms"]
      },
      {
        id: "deliverables",
        title: "Deliverables",
        type: "list",
        items: ["Clean Structured Data", "CSV, JSON, API Access"]
      },
      {
        id: "automation",
        title: "Automation",
        type: "paragraph",
        content:
          "Scheduled crawls and automated pipelines so your data stays up to date without manual effort."
      },
      {
        id: "request-sample",
        title: "Request Sample",
        type: "paragraph",
        content:
          "Not sure what's possible? Request a sample dataset for your use case and we'll show you the quality and format we deliver."
      }
    ]
  },
  "website-design-development": {
    title: "Website Design & Development",
    subtitle: "Modern, fast, and SEO-ready websites.",
    slug: "website-design-development",
    intro:
      "We're constantly testing, updating, and refining our web development processes to ensure we meet all quality standards and deliver the very best. Our developers stay on top of the latest innovations, making sure your project benefits from the newest technologies.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        type: "overview",
        content:
          "We're constantly testing, updating, and refining our web development processes to ensure we meet all quality standards and deliver the very best. Our developers stay on top of the latest innovations, making sure your project benefits from the newest technologies."
      },
      {
        id: "web-dev-features",
        title: "Your web development solutions will feature:",
        type: "list",
        items: [
          "Custom Features|Designed to meet your specific needs and requirements.",
          "Intuitive UI/UX Design|Visually appealing, accessible, and inclusive. Ensuring easy navigation and high customer satisfaction.",
          "Scalability and Security|Built-in scalability and industry-standard security from the start.",
          "Responsive Design|Your website will adjust flawlessly to any screen size, any device.",
          "Professional Imagery|High-quality, engaging visuals that capture your brand's essence.",
          "Ongoing Maintenance and Support|Continuous support and updates to keep your solution running smoothly."
        ]
      },
      {
        id: "website-types",
        title: "Website Types",
        type: "list",
        items: [
          "Corporate Websites",
          "Product / SaaS Websites",
          "Landing Pages",
          "CMS Websites"
        ]
      },
      {
        id: "tech-stack",
        title: "Tech Stack",
        type: "list",
        items: ["React", "WordPress"]
      },
      {
        id: "seo-ready",
        title: "SEO Ready",
        type: "paragraph",
        content:
          "All our websites are built with SEO best practices—speed, structure, and metadata—so you rank and attract the right traffic."
      },
      {
        id: "view-work",
        title: "View Work",
        type: "paragraph",
        content:
          "Explore our portfolio of website projects and see the quality and variety we deliver."
      }
    ]
  }
  // "ui-ux-graphic-video-design": {
  //   title: "UI/UX, Graphic & Video Design",
  //   subtitle: "Design and video that engage and convert.",
  //   slug: "ui-ux-graphic-video-design",
  //   intro:
  //     "From UI/UX and branding to marketing creatives and video, we deliver design that aligns with your brand and drives results.",
  //   sections: [
  //     {
  //       id: "overview",
  //       title: "Overview",
  //       type: "overview",
  //       content:
  //         "From UI/UX and branding to marketing creatives and video, we deliver design that aligns with your brand and drives results."
  //     },
  //     {
  //       id: "design-services",
  //       title: "Design Services",
  //       type: "list",
  //       items: ["UI/UX Design", "Branding", "Marketing Creatives"]
  //     },
  //     {
  //       id: "video-services",
  //       title: "Video Services",
  //       type: "list",
  //       items: ["Explainer Videos", "Promo & Motion Graphics"]
  //     },
  //     {
  //       id: "portfolio",
  //       title: "Portfolio",
  //       type: "paragraph",
  //       content:
  //         "Browse our design and video work to see the quality and range we bring to every project."
  //     },
  //     {
  //       id: "contact",
  //       title: "Contact",
  //       type: "paragraph",
  //       content:
  //         "Have a project in mind? Get in touch to discuss your design and video needs."
  //     }
  //   ]
  // }
};

export const servicesList = Object.values(servicesData).map((s) => ({
  name: s.title,
  slug: s.slug
}));
