export const siteContent = {
  metadata: {
    title: "Monstarlab",
    description: "We build mobile apps - iOS, Android, Web Apps, and PWA solutions for startups and SMBs in Singapore and Malaysia",
  },
  
  hero: {
    badge: "Trusted by Singapore & Malaysia's Fastest Growing Startups",
    headline: "Ship Your Mobile App Faster",
    subheadline: "From concept to launch, we build iOS, Android, Web Apps, and PWAs that scale with your business.",
    ctaPrimary: "Request a Demo",
    ctaSecondary: "View Our Work",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
    imageAlt: "Mobile app development visualization",
  },

  features: {
    heading: "Full-Stack Mobile Expertise",
    subheading: "Everything you need to build and scale your mobile presence",
    items: [
      {
        icon: "📱",
        title: "Native iOS Development",
        description: "Swift and Objective-C expertise delivering smooth, performant apps for the Apple ecosystem.",
      },
      {
        icon: "🤖",
        title: "Native Android Development",
        description: "Kotlin and Java mastery building robust apps for billions of Android devices worldwide.",
      },
      {
        icon: "🌐",
        title: "Progressive Web Apps",
        description: "Cross-platform PWAs that work offline and deliver app-like experiences through the browser.",
      },
      {
        icon: "⚡",
        title: "Cross-Platform Solutions",
        description: "React Native and Flutter development for faster deployment across iOS and Android.",
      },
      {
        icon: "🔄",
        title: "API & Backend Integration",
        description: "Seamless integration with your existing systems, databases, and third-party services.",
      },
      {
        icon: "🚀",
        title: "DevOps & Deployment",
        description: "CI/CD pipelines, app store submissions, and continuous updates to keep you shipping.",
      },
    ],
  },

  howItWorks: {
    heading: "From Idea to App Store in Weeks",
    subheading: "Our proven process gets your app to market fast",
    steps: [
      {
        number: "01",
        title: "Discovery & Planning",
        description: "We dive deep into your business goals, target users, and technical requirements to craft the perfect roadmap.",
      },
      {
        number: "02",
        title: "Design & Prototype",
        description: "Interactive prototypes and pixel-perfect designs validated with real user feedback before a single line of code.",
      },
      {
        number: "03",
        title: "Agile Development",
        description: "Two-week sprints with regular demos, so you see progress and can adjust course quickly.",
      },
      {
        number: "04",
        title: "Launch & Scale",
        description: "App store optimization, performance monitoring, and ongoing improvements based on real user data.",
      },
    ],
  },

  techStack: {
    heading: "Built With Best-in-Class Technology",
    subheading: "We work with the tools your business already trusts",
    logos: [
      { name: "React", icon: "⚛️" },
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🎯" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
      { name: "Node.js", icon: "🟢" },
      { name: "Firebase", icon: "🔥" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "GraphQL", icon: "◈" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },

  pricing: {
    heading: "Transparent Pricing for Every Stage",
    subheading: "Whether you're validating an MVP or scaling to millions of users",
    tiers: [
      {
        name: "Starter",
        tagline: "Perfect for MVPs",
        price: "Starting at $15K",
        description: "Launch your first version fast",
        features: [
          "Single platform (iOS or Android)",
          "Core feature development",
          "Basic UI/UX design",
          "App store submission",
          "4-6 week delivery",
          "1 month post-launch support",
        ],
        cta: "Get Started",
        highlighted: false,
      },
      {
        name: "Professional",
        tagline: "Most Popular",
        price: "Starting at $35K",
        description: "Full-featured cross-platform apps",
        features: [
          "iOS + Android platforms",
          "Advanced features & integrations",
          "Custom UI/UX design",
          "Backend & API development",
          "8-12 week delivery",
          "3 months post-launch support",
          "Analytics & monitoring",
          "App store optimization",
        ],
        cta: "Schedule Call",
        highlighted: true,
      },
      {
        name: "Enterprise",
        tagline: "For Scale",
        price: "Custom",
        description: "End-to-end product development",
        features: [
          "All platforms (iOS, Android, Web)",
          "Complex integrations & workflows",
          "Full product design system",
          "DevOps & infrastructure",
          "Dedicated team",
          "12+ months partnership",
          "24/7 priority support",
          "Security & compliance",
        ],
        cta: "Contact Sales",
        highlighted: false,
      },
    ],
  },

  demo: {
    heading: "Ready to Build Your App?",
    subheading: "Join Singapore and Malaysia's leading startups and SMBs who trust Monstarlab to deliver.",
    ctaPrimary: "Request a Demo",
    ctaSecondary: "View Case Studies",
  },

  contact: {
    heading: "Let's Build Something Great",
    subheading: "Tell us about your project and we'll get back to you within 24 hours",
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "work@company.com",
      companyPlaceholder: "Company Name",
      messagePlaceholder: "Tell us about your app idea...",
      submitButton: "Send Message",
    },
    info: {
      email: "hello@monstarlab.com",
      locations: ["Singapore", "Malaysia"],
    },
  },

  footer: {
    tagline: "Building mobile apps for Singapore & Malaysia's most ambitious companies.",
    columns: [
      {
        title: "Services",
        links: [
          { text: "iOS Development", href: "#services" },
          { text: "Android Development", href: "#services" },
          { text: "Web Apps", href: "#services" },
          { text: "PWA Development", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About Us", href: "/about" },
          { text: "Case Studies", href: "#work" },
          { text: "Pricing", href: "#pricing" },
          { text: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Locations",
        links: [
          { text: "Singapore", href: "#" },
          { text: "Malaysia", href: "#" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Monstarlab. All rights reserved.`,
  },
} as const;

export type SiteContent = typeof siteContent;
