export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'brewmaster - AI Coffee Platform',
    desc: 'BrewMaster is a B2B coffee marketplace. The core architecture integrates three distinct Google Gemini models to automate supply chain trust.',
    subdesc:
      'Built as a unique Software-as-a-Service app with React.js 19, Tailwind CSS, TypeScript,brewmaster is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'product-hunt - modern e-commerce app',
    desc: 'product-hunt is a powerful e-commerce marketplace.  It supports millions of buyers and sellers simultaneously, ensuring that every transaction is processed accurately.',
    subdesc:
      'With product-hunt, users can experience the future of commerce, where multiple buyers share their feedback about a product and sellers get their products listed instantly on the website seamlesly.',
    href: 'https://product-hunt-lyart.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 5.7,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [3, -11, -6],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, 23, 3],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [7, -3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-45, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-19, -15, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'African Leadership University',
    pos: 'Teaching Assistant Of Data Structures And Algorithms',
    duration: 'September 2025 - December 2025',
    title: "Mentored 30+ students in complex topics, including Scalable Microservices and DSA; conducted weekly lab sessions and graded technical assignments.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'The Gym',
    pos: 'Software Developer Intern',
    duration: 'April 2025 - Present',
    title: 'Designed and deployed the PostgreSQL database schema for a car-sharing platform, optimizing relationships for complex booking queries. Implemented RESTful API endpoints in Node.js to handle user authentication and booking logic for a projected base of 500+ users.'
,
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'HeadStarter Fellowship',
    pos: 'AI Developer',
    duration: 'July 2024 - Present',
    title: 'Architected a RAG-based AI customer support agent using Next.js, LangChain, and Pinecone; improved query accuracy by 30% and reduced average resolution time from 5 minutes to 30 seconds.Engineered an AI-powered tutoring backend using TypeScript and OpenAI API, handling 50+ concurrent requests and reducing response time by 15% via Redis caching.'
,
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
