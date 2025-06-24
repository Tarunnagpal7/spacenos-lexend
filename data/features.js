
import { BadgeCheck, Shield, DollarSign, Zap, Code, Globe } from "lucide-react";
export const panelData = [
  {
    id: 1,
    lightIcon: "/assets/images/template/icon-diamond.svg",
    darkIcon: "/assets/images/template/icon-diamond-dark.svg",
    altText: "impact-icon",
    title: "You deserve flexible work hours",
    description:"Spacenos values you deserve flexible work hours. Enjoy flexible schedules that fit your needs, focusing on impactful output. We trust our developers to manage their workload efficiently.",
  },
  {
    id: 2,
    lightIcon: "/assets/images/template/icon-trophy.svg",
    darkIcon: "/assets/images/template/icon-trophy-dark.svg",
    altText: "crown-icon",
    title: "You have complete ownership",
    description:
      "At Spacenos, we believe in smart work over hard work. Manage your schedule to fit your needs, focusing on impactful output. We trust our developers to be efficient.Your autonomy drives our shared success.",
  },
  {
    id: 3,
    lightIcon: "/assets/images/template/icon-globe.svg",
    darkIcon: "/assets/images/template/icon-globe-dark.svg",
    altText: "empathy-icon",
    title: "You are smartly rewarded",
    description:
      "You are smartly rewarded with monthly bonuses and incentives. Boost your future prospects while learning and adding value. We reward extra effort to motivate your continuous growth.",
  },
  {
    id: 4,
    lightIcon: "/assets/images/template/icon-crown.svg",
    darkIcon: "/assets/images/template/icon-crown-dark.svg",
    altText: "empathy-icon",
    title: "You continuously level up",
    description:
      "Refine skills through our training and scholarship programs. Reach milestones in your software engineering path, get certified by experts, and propagate your skills globally.",
  },
];
import { 
  Image, 
  FileArchive, 
  Monitor, 
  UserCircle, 
  BookOpen 
} from 'lucide-react';

export const features20 = [
  {
    icon: <Image className="w-16 h-16" />,
    title: "Press Media Kit",
    description: "Download high-resolution assets for print and digital use.",
    backgroundColor: "bg-blue-100 dark:bg-blue-900"
  },
  {
    icon: <FileArchive className="w-16 h-16" />,
    title: "Company Logos",
    description: "ZIP file with color and monochrome versions.",
    backgroundColor: "bg-green-100 dark:bg-green-900"
  },
  {
    icon: <Monitor className="w-16 h-16" />,
    title: "Product Screenshots",
    description: "Latest UI/UX previews in PNG and SVG.",
    backgroundColor: "bg-purple-100 dark:bg-purple-900"
  },
  {
    icon: <UserCircle className="w-16 h-16" />,
    title: "Executive Headshots",
    description: "High-resolution photos of our leadership team.",
    backgroundColor: "bg-yellow-100 dark:bg-yellow-900"
  },
  {
    icon: <BookOpen className="w-16 h-16" />,
    title: "Brand Guidelines",
    description: "PDF outlining logo usage, color palette, and typography.",
    backgroundColor: "bg-red-100 dark:bg-red-900"
  }
];
export const features = [
  {
    id: 4,
    imgSrc: "/assets/images/template/feature-01.svg",
    imgAlt: "Share tools quickly and confidently in minutes",
    title: "Share tools quickly and confidently in minutes",
    description:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
  },
  {
    id: 5,
    imgSrc: "/assets/images/template/feature-02.svg",
    imgAlt: "Connect every part of your entire business",
    title: "Connect every part of your entire business",
    description:
      "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
    linkText: "See all integrations",
    linkHref: "#",
  },
  {
    id: 6,
    imgSrc: "/assets/images/template/feature-03.svg",
    imgAlt: "Maintain compliance and control your apps",
    title: "Maintain compliance and control your apps",
    description:
      "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.",
  },
];

export const features2 = [
  {
    icon: "unicon-document",
    title: "Proposals",
    description:
      "Share Tools in minutes with pre-built, customizable templates.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
  {
    icon: "unicon-model",
    title: "Quotes",
    description:
      "Find out in real time when they’re opened, viewed and signed.",
    backgroundColor: "bg-primary text-white",
  },
  {
    icon: "unicon-task-approved",
    title: "Contracts",
    description:
      "Use our native CRM integrations to pull customer data into your Tools fast.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
  {
    icon: "unicon-touch-interaction",
    title: "eSignatures",
    description:
      "Keep your data secure with our legally-binding e-Signature software.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
];

export const features3 = [
  {
    id: 1,
    imgSrc: "/assets/images/template/feature-01.svg",
    altText: "Share tools quickly and confidently in minutes",
    step: "01.",
    title: "Share tools quickly and confidently in minutes",
    description: `This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.`,
    testimonial: {
      quote: `“Most of our time used to be taken up by administrative work whereas now we can focus on building out programs to help our employees.”`,
      imgSrc: "/assets/images/avatars/01.png",
      name: "Mark Zellers",
      role: "Director of Human Resources.",
    },
  },
  {
    id: 2,
    imgSrc: "/assets/images/template/feature-02.svg",
    altText: "Connect every part of your entire business",
    step: "02.",
    title: "Connect every part of your entire business",
    description: `Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.`,
    link: {
      href: "#",
      text: "See all integrations",
    },
    testimonial: {
      quote: `“I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”`,
      imgSrc: "/assets/images/avatars/02.png",
      name: "Matt Henderson",
      role: "Client Success Manager",
    },
  },
  {
    id: 3,
    imgSrc: "/assets/images/template/feature-03.svg",
    altText: "Maintain compliance and control your apps",
    step: "03.",
    title: "Maintain compliance and control your apps",
    description: `Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.`,
    testimonial: {
      quote: `“This powerful tool eliminates the need to leave Salesforce to get things done.”`,
      imgSrc: "/assets/images/avatars/04.png",
      name: "Natalia Larsson",
      role: "Director of Sales Operations",
    },
  },
  {
    id: 4,
    imgSrc: "/assets/images/template/feature-04.svg",
    altText: "Review quickly and confidently",
    step: "04.",
    title: "Review quickly and confidently",
    description: `Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.`,
    testimonial: {
      quote: `“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation.”`,
      imgSrc: "/assets/images/avatars/03.png",
      name: "Sarah Edrissi",
      role: "Lead Marketing",
    },
  },
];

export const features4 = [
  {
    icon: "unicon-document",
    title: "Proposals",
    description:
      "Share Tools in minutes with pre-built, customizable templates.",
  },
  {
    icon: "unicon-model",
    title: "Quotes",
    description:
      "Find out in real time when they’re opened, viewed and signed.",
  },
  {
    icon: "unicon-task-approved",
    title: "Contracts",
    description:
      "Use our native CRM integrations to pull customer data into your Tools fast.",
  },
  {
    icon: "unicon-touch-interaction",
    title: "eSignatures",
    description:
      "Keep your data secure with our legally-binding e-Signature software.",
  },
  {
    icon: "unicon-sub-volume",
    title: "Forms",
    description:
      "Share via direct link or by embedding them on your website, no coding necessary.",
  },
  {
    icon: "unicon-currency",
    title: "Payments",
    description:
      "Collect them instantly right from your contract, while increasing your close rate by 36%.",
  },
];

 export const pricingFeatures = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden costs with clear monthly developer rates",
      highlight: false
    },
    {
      icon: Zap,
      title: "Flexible Scaling",
      description: "Easily adjust team size with 30-day notice",
      highlight: true
    },
    {
      icon: Code,
      title: "Senior Talent",
      description: "5+ years average experience per developer",
      highlight: false
    }
  ];

  export const qualityFeatures = [
    {
      icon: Shield,
      title: "Dedicated QA",
      description: "Separate quality assurance engineers on every project",
      highlight: false
    },
    {
      icon: BadgeCheck,
      title: "Code Reviews",
      description: "Mandatory peer reviews before deployment",
      highlight: true
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "ISO-certified development processes",
      highlight: false
    }
  ];

export const foreignPodItems = [
  {
    imageSrc: "/assets/images/template/home-four-feature-01.png",
    altText: "Global Remote Development",
    title: "Foreign Pod",
    subtitle: "Your Global Development Pod",
    description: "Welcome to Spacenos Hire – Where our Software Developers Code the Future. We are a team of tech-minded, fast-paced, and experienced software developers, operating from India, ready and open for challenges and work. Our client base is vast, spanning from Australia to the UK and USA.",
    tagline: "For international clients hiring India-based pods.",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-01.png",
    altText: "Why Hire a Spacenos Foreign Pod",
    title: "Why You Should Hire Our Remote Developers",
    benefits: [
      {
        title: "Cost-Efficiency",
        description: "With the cost of software development rocketing, a remote team of developers comes in handy and is cost-efficient in nature. A high-quality development project costs hundreds of thousands of dollars. But at Spacenos, our certified professionals aspire to do the same for you at a much lower cost."
      },
      {
        title: "Reduced Burden for Client",
        description: "It is our developers' job to turn your needs and imagination into the technology you expect to build without having to manage any legalities, train interns, and hustle for probation periods. You are required merely to hire our team and it will take the burden off your shoulders so you can focus on your business while your software is being built by our experienced professionals."
      }
    ],
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-01.png",
    altText: "How a Spacenos Foreign Pod Works",
    title: "How Your Foreign Pod Works",
    subtitle: "Our Seamless Engagement Model",
    processSteps: [
      {
        title: "Idea & Requirements Briefing",
        description: "You brief us about your idea and requirement along with your budget."
      },
      {
        title: "Expert Pod Formation & Costing",
        description: "Our team of experts will come up with the developers needed for the job and the amount you require to pay."
      },
      {
        title: "Dedicated International Management",
        description: "The third step is to assign a manager in the USA, the UK, or Australia who will do the conversion of your requirements to tech requirements and get the work done from an elite team of programmers in India."
      },
      {
        title: "Cost Structure Clarity",
        description: "Own our team for your project for unlimited iteration at the cost of the developers' salaries and our administration fee only."
      }
    ],
    reverseOrder: false,
  }
];


export const featureItems = [
  {
    imageSrc: "/assets/images/template/home-four-feature-01.png",
    altText: "Ensuring timely delivery and maximum efficiency",
    title: "Ensuring timely delivery and maximum efficiency",
    description:
      "We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation",
    linkText: "Let's find out",
    icon: "unicon-cloud-download",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-02.png",
    altText: "No more digging endless reports and spreadsheets",
    title: "No more digging endless reports and spreadsheets",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    linkText: "See all spreadsheets",
    icon: "unicon-course",
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-03.png",
    altText: "Share files, and communicate with your team in real-time",
    title: "Share files, and communicate with your team in real-time",
    description:
      "You can easily assign tasks, share files, and communicate with your team in real-time, no matter where they are located.",
    linkText: "See apps & integrations",
    icon: "unicon-volume-block-storage",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-04.png",
    altText: "Collaboration is made seamless with Lexend",
    title: "Collaboration is made seamless with Lexend",
    description:
      "Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
    linkText: "Let's find out",
    icon: "unicon-model",
    reverseOrder: true,
  },
];

export const featureItems2 = [
  {
    order: "order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Fast and Reliable",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-0",
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "Discover Data Everywhere",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-bottom-end-0 lg:rounded-bottom-0",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Enrich Data with Context",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Risk Management",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-start-0 lg:rounded-top-end-0 lg:rounded-start-1-5",
  },
  {
    order: "order-3 lg:order-0",
    iconSrc: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "Privacy Compliance",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-2 lg:order-0",
    iconSrc: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Third-Party Management",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
  },
];

export const features5 = [
  {
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Drag-and-Drop Interface",
  },
  {
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "Pre-Designed Templates",
  },
  {
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Fully Responsive Design",
  },
  {
    iconSrc: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Website Customization",
  },
  {
    iconSrc: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "UI Elements Library",
  },
  {
    iconSrc: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Global & Local Styles",
  },
  {
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Third-Party Integrations",
  },
];

export const features6 = [
  {
    id: 1,
    imgSrc: "/assets/images/apps/darkbase.png",
    imgAlt: "India-based tech pods for global clients",
    heading:"Darkbase",
    title: "India-based tech pods for global clients",
    description:
      "Learn about our pricing, client testimonials, and more.",
    link: {text: "Learn More",href:"/darkbase"},
  },
  {
    id: 2,
    imgSrc: "/assets/images/apps/astro.png",
    imgAlt: "Spiritual x startup transformation",
    heading : "Astro360",
    title: "Spiritual x startup transformation",
    description:
      "Discover eBooks, take a quiz, and access consultation pathways.",
    link: { text: "Learn More", href: "/astro360" },
  },
  {
    id: 3,
    imgSrc: "/assets/images/apps/dominus.png",
    imgAlt: "Fertility healthcare brand",
    heading: "Dominus",
    title: "Fertility healthcare brand",
    description : "Discover fertility healthcare products, groundbreaking research, and inspiring testimonials.",
    link: {text: "Learn More", href: "/dominus"},
  },
  {
    id: 4,
    imgSrc: "/assets/images/apps/aitools.png",
    imgAlt: "Experimental AI tools with limited access",
    heading: "AI Tools",
    title: "Experimental AI tools with limited access",
    description:
      "Explore our groundbreaking experimental AI tools and learn how to secure your limited access.",
    link: { text: "Learn More", href: "/ai-tools" },
  },
];

export const features1 = [
  {
    id: 1,
    imgSrc: "/assets/images/apps/aboutus-growingempire.png",
    imgAlt: "Growing our empire",
    heading: "Empire Growth",
    title: "Growing our empire",
    description:
      "We're strategically expanding our global footprint through innovative ventures and strategic partnerships that create lasting impact across industries.",
    link: { text: "Explore Expansion", href: "/empire-growth" },
  },
  {
    id: 2,
    imgSrc: "/assets/images/apps/aboutus-empoweringbusiness.png",
    imgAlt: "Empowering more businesses",
    heading: "Business Boost",
    title: "Empowering more businesses",
    description:
      "Our tailored solutions and ecosystem support help entrepreneurs and enterprises scale faster, smarter, and more sustainably in the digital age.",
    link: { text: "See Success Stories", href: "/business-empowerment" },
  },
  {
    id: 3,
    imgSrc: "/assets/images/apps/aboutus-future labs.png",
    imgAlt: "Invent new tech for the future",
    heading: "Future Labs",
    title: "Invent new tech for the future",
    description:
      "Pushing boundaries with cutting-edge R&D, we're developing tomorrow's technologies today through our dedicated innovation labs and think tanks.",
    link: { text: "View Innovations", href: "/future-tech" },
  },
  {
    id: 4,
    imgSrc: "/assets/images/apps/aboutus-visionary.png",
    imgAlt: "Network of visionary builders",
    heading: "Visionary Network",
    title: "Cultivating a network of visionary builders",
    description:
      "Connecting brilliant minds across disciplines to collaborate, create, and accelerate world-changing ideas through our exclusive global community.",
    link: { text: "Join the Network", href: "/visionary-builders" },
  },
];

export const integrations = [
  {
    title: "Mailchimp",
    description: "Share your ideas with Mailchimp email newsletters.",
    imgSrc: "/assets/images/integrations/mailchimp.png",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
  {
    title: "Asana",
    description:
      "Leading work management from daily tasks to strategic initiatives.",
    imgSrc: "/assets/images/integrations/asana.png",
    categories: ["Marketing Automation", "Scheduling", "Project Management"],
  },
  {
    title: "Zapier",
    description: "Send and receive email via a custom Zapier.",
    imgSrc: "/assets/images/integrations/zapier.png",
    categories: ["Marketing Automation", "Scheduling", "Spreadsheets"],
  },
  {
    title: "Bitbucket",
    description: "File sync app that lets you store all of your files online.",
    imgSrc: "/assets/images/integrations/bitbucket.png",
    categories: ["Marketing Automation", "Scheduling", "Project Management"],
  },
  {
    title: "Stripe",
    description:
      "Developer-friendly way to accept payments online and in mobile apps.",
    imgSrc: "/assets/images/integrations/stripe.png",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
  {
    title: "Google Drive",
    description: "File sync app that lets you store all of your files online.",
    imgSrc: "/assets/images/integrations/drive.png",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
];

export const features7 = [
  {
    order: "order-1 lg:order-0",
    icon: "/assets/images/custom-icons/icon-01.svg",
    title: "Fast and Reliable",
  },
  {
    order: "order-0",
    icon: "/assets/images/custom-icons/icon-02.svg",
    title: "Discover Data Everywhere",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    icon: "/assets/images/custom-icons/icon-03.svg",
    title: "Enrich Data with Context",
  },
  {
    order: "order-1 lg:order-0",
    icon: "/assets/images/custom-icons/icon-07.svg",
    title: "Risk Management",
  },
  {
    order: "order-3 lg:order-0",
    icon: "/assets/images/custom-icons/icon-05.svg",
    title: "Privacy Compliance",
  },
  {
    order: "order-2 lg:order-0",
    icon: "/assets/images/custom-icons/icon-06.svg",
    title: "Third-Party Management",
  },
];

export const features8 = [
  {
    imgSrc: "/assets/images/features/home-8-feature-01.png",
    title: "Seamless integrations with your existing tools",
  },
  {
    imgSrc: "/assets/images/features/home-8-feature-05.png",
    title: "Intuitive dashboard for at-a-glance insights",
  },
  {
    imgSrc: "/assets/images/features/home-8-feature-06.png",
    title: "Automated data analysis and reporting",
  },
];

export const features9 = [
  {
    order: "order-1 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-01.svg",
    title: "Fast and Reliable",
  },
  {
    order: "order-0",
    icon: "/assets/images/custom-icons/home-8-icon-02.svg",
    title: "Discover Data Everywhere",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-03.svg",
    title: "Enrich Data with Context",
  },
  {
    order: "order-1 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-07.svg",
    title: "Risk Management",
  },
  {
    order: "order-3 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-05.svg",
    title: "Privacy Compliance",
  },
  {
    order: "order-2 lg:order-0",
    icon: "/assets/images/custom-icons/home-8-icon-06.svg",
    title: "Third-Party Management",
  },
];

export const features10 = [
  {
    src: "/assets/images/features/home-8-feature-01.png",
    alt: "",
    title: "Seamless integrations with your app tools",
  },
  {
    src: "/assets/images/features/home-8-feature-02.png",
    alt: "",
    title: "Intuitive dashboard for at-a-glance insights",
  },
  {
    src: "/assets/images/features/home-8-feature-03.png",
    alt: "",
    title: "Get more value from your tools",
  },
  {
    src: "/assets/images/features/home-8-feature-04.png",
    alt: "",
    title: "Enrich Data with Risk Management",
  },
  {
    src: "/assets/images/features/home-8-feature-05.png",
    alt: "",
    title: "Scalable plans to fit any business size",
  },
  {
    src: "/assets/images/features/home-8-feature-06.png",
    alt: "",
    title: "Automated data analysis and reporting",
  },
];

export const features11 = [
  {
    order: "order-1 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-01.svg",
    alt: "feature-icon",
    title: "Fast and Reliable",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-0",
    src: "/assets/images/custom-icons/home-8-icon-02.svg",
    alt: "feature-icon",
    title: "Discover Data Everywhere",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-03.svg",
    alt: "feature-icon",
    title: "Enrich Data with Context",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-1 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-07.svg",
    alt: "feature-icon",
    title: "Risk Management",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-3 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-05.svg",
    alt: "feature-icon",
    title: "Privacy Compliance",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    order: "order-2 lg:order-0",
    src: "/assets/images/custom-icons/home-8-icon-06.svg",
    alt: "feature-icon",
    title: "Third-Party Management",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
];

export const features12 = [
  {
    src: "/assets/images/custom-icons/icon-02.svg",
    alt: "icon",
    text: "No Credit Card Required",
    className: "", // No additional class for this item
  },
  {
    src: "/assets/images/custom-icons/icon-07.svg",
    alt: "icon",
    text: "End-to-End Encryption",
    className: "", // No additional class for this item
  },
  {
    src: "/assets/images/custom-icons/icon-02.svg",
    alt: "icon",
    text: "Cutting-edge AI features",
    className: "d-none lg:d-block", // Additional class for this item
  },
];

export const features13 = [
  {
    src: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Fast Messaging",
  },
  {
    src: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "AI-Powered Translation",
  },
  {
    src: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "Smart File Sharing",
  },
  {
    src: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Collaboration Tools",
  },
  {
    src: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Customizable Privacy",
  },
];


export const features14 = [
  {
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Darkbase",
    slug: "#"
  },
  {
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "Astro360",
    slug: "#"
  },
  {
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Dominus",
    slug: "#"
  },
  {
    iconSrc: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "AI Tools",
    slug: "#"
  },
 
];
export const features15 = [
  {
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Want to Build an Empire?",
    slug: "/page-features"
  },
  {
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: " Have Great Contacts? Want to Monetize Them?",
    slug: "/page-contact"
  },
  {
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "No Capital, Just Hustle?",
    slug: "/page-collaborate"
  }, 
];