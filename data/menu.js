export const menuItems = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 8,
    label: "Ventures",
    subItems: [
      {
        href: "/features",
        label: "Darkbase",
      },
      {
        href: "/features",
        label: "Astro360",
      },
      {
        href: "/features",
        label: "Dominus",
      },
      {
        href: "/features",
        label: "AI Tools",
      },
    ],
  },
  {
    id: 9,
    label: "Company",
    subItems: [
       { href: "/about", label: "About Us" },
      { href: "/meet-the-ceo", label: "Meet The CEO" },
      { href: "/awards", label: "Awards" },
      { href: "/investors", label: "Investors" },
      { href: "/collaborate", label: "Collab With US" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/press-media", label: "Press And Media" },
    ],
  },
  {
    id: 10,
    label: "Resources",
    subItems: [
      { href: "/resources", label: "Company Resources" },
      { href: "/blogs", label: "Blogs" },
      { href: "/tools", label: "Tools" },
      { href: "/verify-doc", label: "Verify Document" },
    ],
  },
  
  {
    id: 5,
    href: "/career",
    label: "Career",
  },

  {
    id: 6,
    href: "/contact",
    label: "Contact Us",
  },
];

export const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Ventures",
    href: "/features",
    children: [
      { href: "/features", label: "Darkbase" },
      { href: "/features", label: "Astro360" },
      { href: "/features", label: "Dominus" },
      { href: "/features", label: "AI Tools" },
    ],
  },
  {
    label: "Company",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/meet-the-ceo", label: "Meet The CEO" },
      { href: "/achievements", label: "Awards" },
      { href: "/investors", label: "Investors" },
      { href: "/collaborate", label: "Collab With US" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/press-media", label: "Press And Media" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: "/resources", label: "Company Resources" },
      { href: "/blogs", label: "Blogs" },
      { href: "/tools", label: "Tools" },
      { href: "/verify-doc", label: "Verify Document" },
    ],
  },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
];




export const icons = [
  { href: "#", iconClass: "unicon-logo-medium icon-2" },
  { href: "#", iconClass: "unicon-logo-x-filled icon-2" },
  { href: "#", iconClass: "unicon-logo-instagram icon-2" },
  { href: "#", iconClass: "unicon-logo-pinterest icon-2" },
];
export const features = [
  {
    id: 1,
    iconClass: "unicon-email",
    title: "Email Template Builder",
    description: "Design personalized emails that convert",
  },
  {
    id: 2,
    iconClass: "unicon-blog",
    title: "Landing Page Builder",
    description: "Deliver the right message to the right user",
  },
  {
    id: 3,
    iconClass: "unicon-increase-level",
    title: "Reporting & analytics",
    description: "Track sales & campaign performance",
  },
  {
    id: 4,
    iconClass: "unicon-magic-wand-filled",
    title: "AI-Powered Tools",
    description: "Say hello to your AI growth assistant",
  },
  {
    id: 5,
    iconClass: "unicon-store",
    title: "E-commerce and retail",
    description: "Amplify the conversation across multiple channels",
  },
  {
    id: 6,
    iconClass: "unicon-shopping-catalog",
    title: "See all products",
    description: "See all our product and services offerings",
  },
];
export const homeLinks = [
  {
    id: 1,
    href: "/",
    imgAlt: "Home - 01",
    imgSrc: "/assets/images/demos/screenshots/index.jpg",
    label: "SaaS",
  },
  {
    id: 2,
    href: "/home-2",
    imgAlt: "Home - 02",
    imgSrc: "/assets/images/demos/screenshots/index-2.jpg",
    label: "Startup",
  },
  {
    id: 3,
    href: "/home-3",
    imgAlt: "Home - 03",
    imgSrc: "/assets/images/demos/screenshots/index-3.jpg",
    label: "Software",
  },
  {
    id: 4,
    href: "/home-4",
    imgAlt: "Home - 04",
    imgSrc: "/assets/images/demos/screenshots/index-4.jpg",
    label: "Mobile Apps",
  },
  {
    id: 5,
    href: "/home-5",
    imgAlt: "Home - 05",
    imgSrc: "/assets/images/demos/screenshots/index-5.jpg",
    label: "Digital Agency",
  },
];
export const links = [
  {
    id: 1,
    href: "/page-career",
    label: "Hire an Expert",
    isInternal: true,
  },
  {
    id: 2,
    href: "#",
    label: "Customer stories",
    isInternal: false,
  },
  {
    id: 3,
    href: "#",
    label: "Ressources",
    isInternal: false,
  },
  {
    id: 4,
    href: "/blog",
    label: "Blog",
    isInternal: true,
  },
  {
    id: 5,
    href: "/page-career",
    label: "Career",
    isInternal: true,
  },
  {
    id: 6,
    href: "/page-team",
    label: "Team",
    isInternal: true,
  },
  {
    id: 7,
    href: "/page-contact",
    label: "Get in touch",
    isInternal: true,
  },
];

export const featurePageLinks = [
  {
    title: "Products",
    icon: "unicon-cube",
    items: [
      {
        icon: "icon-01.svg",
        title: "Email Template Builder",
        description: "Design personalized emails that convert",
      },
      {
        icon: "icon-02.svg",
        title: "Landing Page Builder",
        description: "Deliver the right message to the right user",
      },
      {
        icon: "icon-03.svg",
        title: "Reporting & analytics",
        description: "Track sales & campaign performance",
      },
      {
        icon: "icon-07.svg",
        title: "Chatbots, Free forever",
        description: "Track sales & campaign performance",
      },
    ],
    viewAllText: "View all products",
  },
  {
    title: "Professional Solutions",
    icon: "unicon-gamification",
    items: [
      {
        icon: "icon-04.svg",
        title: "AI-Powered Tools",
        description: "Say hello to your AI growth assistant",
      },
      {
        icon: "icon-05.svg",
        title: "E-commerce and retail",
        description: "Amplify the conversation across channels",
      },
      {
        icon: "icon-06.svg",
        title: "Large Community",
        description: "Our services offerings",
      },
      {
        icon: "icon-08.svg",
        title: "AI-Powered Automation",
        description: "Our services offerings",
      },
    ],
    viewAllText: "View all solutions",
  },
];
export const sections = [
  {
    title: "Get started is Easy!",
    links: [
      { href: "/page-contact", text: "Hire an Expert" },
      { href: "#", text: "Customer stories" },
      { href: "#", text: "Resources" },
      { href: "/blog-sidebar", text: "Blog" },
      { href: "/page-career", text: "Career" },
      { href: "/page-contact", text: "Help Center" },
    ],
  },
  {
    title: "Terms and privacy",
    links: [
      { href: "/page-terms", text: "Terms of service" },
      { href: "/page-privacy", text: "Privacy Policy" },
    ],
  },
];
export const sections2 = [
  {
    title: "Automation",
    icon: "unicon-glyph-square-fill",
    items: [
      {
        icon: "unicon-checkmark",
        text: "To-Do List",
        description:
          "Managing multiple software and tools for different tasks.",
      },
      {
        icon: "unicon-chart-pie",
        text: "Reports",
        description: "The latest industry reports, updates and info.",
      },
      {
        icon: "unicon-increase-level",
        text: "Spreadsheets",
        description: "Suite of tools that cover all aspects of your business.",
      },
    ],
  },
  {
    title: "Teaming",
    icon: "unicon-glyph-circle-fill",
    items: [
      {
        icon: "unicon-chart-venn-diagram",
        text: "Collaboration",
        description:
          "Assign tasks, share files, and communicate with your team.",
      },
      {
        icon: "unicon-chat",
        text: "Chatbots",
        description:
          "Assign tasks, share files, and communicate with your team.",
      },
      {
        icon: "unicon-checkmark",
        text: "To-Do List",
        description:
          "Managing multiple software and tools for different tasks.",
      },
    ],
  },
  {
    title: "Use Case",
    icon: "unicon-glyph-caution",
    items: [
      {
        icon: "unicon-chart-pie",
        text: "Reports",
        description: "The latest industry reports, updates and info.",
      },
      {
        icon: "unicon-increase-level",
        text: "Spreadsheets",
        description: "Suite of tools that cover all aspects of your business.",
      },
      {
        icon: "unicon-chart-venn-diagram",
        text: "Collaboration",
        description:
          "Assign tasks, share files, and communicate with your team.",
      },
    ],
  },
];

export const sections3 = [
  {
    title: "Builder Tools",
    icon: "unicon-cube",
    items: [
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-01.svg",
        title: "Email Template Builder",
        description: "Design personalized emails that convert",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-02.svg",
        title: "Landing Page Builder",
        description: "Deliver the right message to the right user",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-03.svg",
        title: "Reporting & analytics",
        description: "Track sales & campaign performance",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-07.svg",
        title: "Chatbots, Free forever",
        description: "Track sales & campaign performance",
      },
    ],
    viewAllText: "View all products",
  },
  {
    title: "AI Solutions",
    icon: "unicon-gamification",
    items: [
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-04.svg",
        title: "AI-Powered Tools",
        description: "Say hello to your AI growth assistant",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-05.svg",
        title: "E-commerce and retail",
        description: "Amplify the conversation across channels",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-06.svg",
        title: "Large Community",
        description: "Our services offerings",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-08.svg",
        title: "AI-Powered Automation",
        description: "Our services offerings",
      },
    ],
    viewAllText: "View all solutions",
  },
  {
    title: "More Products",
    icon: "unicon-cube",
    items: [
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-01.svg",
        title: "Email Template Builder",
        description: "Design personalized emails that convert",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-02.svg",
        title: "Landing Page Builder",
        description: "Deliver the right message to the right user",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-03.svg",
        title: "Reporting & analytics",
        description: "Track sales & campaign performance",
      },
      {
        iconSrc: "/assets/images/custom-icons/home-8-icon-07.svg",
        title: "Chatbots, Free forever",
        description: "Track sales & campaign performance",
      },
    ],
    viewAllText: "View all products",
  },
];

export const sections4 = [
  {
    title: "Automation",
    icon: "unicon-glyph-square-fill",
    items: [
      {
        icon: "unicon-checkmark",
        title: "To-Do List",
        description:
          "Managing multiple software and tools for different tasks.",
      },
      {
        icon: "unicon-chart-pie",
        title: "Reports",
        description: "The latest industry reports, updates and info.",
      },
      {
        icon: "unicon-increase-level",
        title: "Spreadsheets",
        description: "Suite of tools that cover all aspects of your business.",
      },
    ],
  },
  {
    title: "Teaming",
    icon: "unicon-glyph-circle-fill",
    items: [
      {
        icon: "unicon-chart-venn-diagram",
        title: "Collaboration",
        description: "Assign tasks, share files with your team.",
      },
      {
        icon: "unicon-chat",
        title: "Chatbots",
        description: "Assign tasks, share files with your team.",
      },
      {
        icon: "unicon-checkmark",
        title: "To-Do List",
        description:
          "Managing multiple software and tools for different tasks.",
      },
    ],
  },
  {
    title: "Use Case",
    icon: "unicon-glyph-caution",
    items: [
      {
        icon: "unicon-chart-pie",
        title: "Reports",
        description: "The latest industry reports, updates and info.",
      },
      {
        icon: "unicon-increase-level",
        title: "Spreadsheets",
        description: "Suite of tools that cover all aspects of your business.",
      },
      {
        icon: "unicon-chart-venn-diagram",
        title: "Collaboration",
        description: "Assign tasks, share files with your team.",
      },
    ],
  },
];

export const categories = [
  {
    title: "Get started is Easy!",
    links: [
      { text: "Hire an Expert", href: "/page-contact" },
      { text: "Customer stories", href: "#" },
      { text: "Resources", href: "#" },
      { text: "Blog", href: "/blog-sidebar" },
      { text: "Career", href: "/page-career" },
      { text: "Help Center", href: "/page-contact" },
    ],
  },
  {
    title: "Terms and privacy",
    links: [
      { text: "Terms of service", href: "/page-terms" },
      { text: "Privacy Policy", href: "/page-privacy" },
    ],
  },
];
