export type Lang = 'da' | 'en';

export interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  tags: string[];
  quote: string;
  quoteAuthor: string;
}

export interface Translations {
  seo: {
    homeTitle: string;
    homeDescription: string;
    blogTitle: string;
    blogDescription: string;
  };
  nav: {
    home: string;
    blog: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };
  competencies: {
    heading: string;
    subheading: string;
    items: { title: string; description: string }[];
  };
  caseStudies: {
    heading: string;
    subheading: string;
    challengeLabel: string;
    solutionLabel: string;
    readMore: string;
    readLess: string;
    items: CaseStudy[];
  };
  about: {
    heading: string;
    name: string;
    role: string;
    text: string[];
    statYears: string;
    statCompanies: string;
    statSince: string;
  };
  contact: {
    heading: string;
    subheading: string;
    orForm: string;
    email: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
  };
  footer: {
    terms: string;
    rights: string;
  };
  blog: {
    heading: string;
    empty: string;
    notFound: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  da: {
    seo: {
      homeTitle: 'Concensur | Full-stack .NET-udvikler',
      homeDescription:
        'Softwareudvikler med speciale i full-stack .NET-udvikling i skalerede arkitekturer. Tager freelanceprojekter inden for webudvikling, e-commerce og automatisering.',
      blogTitle: 'Blog | Concensur',
      blogDescription: 'Artikler om automatisering, .NET-udvikling og webshop-optimering fra Jonathan Clausen.',
    },
    nav: {
      home: 'Forside',
      blog: 'Blog',
    },
    hero: {
      eyebrow: 'Full-stack .NET-udvikler',
      title: 'Jeg bygger software, der driver din forretning fremad',
      subtitle: '.NET · Full Stack · Skaleret arkitektur',
      description:
        'Jeg er softwareudvikler med speciale i full-stack .NET-udvikling i skalerede, shardede arkitekturer. Ved siden af mit daglige arbejde tager jeg freelanceprojekter inden for webudvikling, e-commerce og automatisering, hvor jeg hjælper virksomheder med at optimere deres processer og skabe robuste, skræddersyede løsninger.',
      cta: 'Kontakt mig',
      ctaSecondary: 'Se mine kompetencer',
    },
    competencies: {
      heading: 'Kompetencer',
      subheading: 'Hvad jeg kan hjælpe dig med',
      items: [
        {
          title: '.NET Udvikling',
          description:
            'Solid erfaring med at udvikle effektive, skalerbare løsninger på .NET-platformen til enterprise-miljøer. Jeg bruger C#, ASP.NET, Entity Framework og MSSQL Server til at skrive robust og vedligeholdelsesvenlig kode, der er bygget til at holde i store, kritiske systemer.',
        },
        {
          title: 'Full-Stack udvikling',
          description:
            'Som full stack-udvikler bygger jeg komplette applikationer, der dækker både frontend og backend. Jeg bruger Angular og React til dynamiske, responsive brugergrænseflader, og implementerer backend-løsninger med RPC og REST for effektiv systemkommunikation.',
        },
        {
          title: 'Skaleret & distribueret arkitektur',
          description:
            'Erfaring med at designe og videreudvikle software i skalerede, shardede arkitekturer, hvor performance, datakonsistens og driftsstabilitet er afgørende i takt med at systemet og brugerbasen vokser.',
        },
        {
          title: 'Rapportering',
          description:
            'Jeg udvikler og implementerer rapporteringsværktøjer, der giver realtidsindsigt i virksomhedens processer og performance. Ved at kombinere automatisering og datadrevet rapportering hjælper jeg organisationer med at træffe informerede beslutninger.',
        },
        {
          title: 'Optimering af processer',
          description:
            'Jeg optimerer og automatiserer arbejdsprocesser for at forbedre effektiviteten og reducere manuelle opgaver, med scripts til datahåndtering, systemintegrationer og opgaveautomatisering.',
        },
        {
          title: 'E-commerce & WordPress (freelance)',
          description:
            'Ved siden af mit faste arbejde har jeg stor erfaring med at udvikle og vedligeholde e-commerce-løsninger som freelancer, hvor WooCommerce og WordPress er mine primære værktøjer — fra temacustomisering og betalingsintegration til SEO og performance.',
        },
      ],
    },
    caseStudies: {
      heading: 'Tidligere freelancearbejde',
      subheading: 'Udvalgte projekter fra min freelancekarriere',
      challengeLabel: 'Udfordring',
      solutionLabel: 'Løsning',
      readMore: 'Læs mere',
      readLess: 'Vis mindre',
      items: [
        {
          company: 'Luxury by Ho',
          industry: 'E-commerce · Luksus second-hand tasker',
          challenge:
            'Et ekspanderende marked for second-hand tasker krævede en webshop, der hurtigt kunne følge med nye idéer og features.',
          solution:
            'Løbende WooCommerce-udvikling med nye features, SEO og e-mailmarkedsføring — bygget til hurtige iterationer fra idé til lancering.',
          tags: ['WooCommerce', 'SEO', 'Email marketing'],
          quote: 'Fra vi får en idé, til den er implementeret, går der ikke lang tid.',
          quoteAuthor: 'Christian Ho, stifter',
        },
        {
          company: 'DRT Architects',
          industry: 'Arkitektfirma · Boston, USA',
          challenge:
            'Et arkitektfirma manglede en professionel hjemmeside til at fremvise deres portfolio — og et team, der selv kunne vedligeholde den.',
          solution:
            'Et skræddersyet WordPress-tema med et rent, enkelt design og SEO-optimering, bygget så DRT selv kan opdatere indholdet.',
          tags: ['WordPress', 'SEO', 'Custom tema'],
          quote: '',
          quoteAuthor: '',
        },
        {
          company: 'Auto-Mow',
          industry: 'B2B e-commerce · EU-handel',
          challenge:
            'Handel med virksomheder i hele Europa betød, at behovene voksede ud af en almindelig dansk webshop.',
          solution:
            'En B2B WooCommerce-webshop med brugerdefinerede funktioner, ERP/CRM-integrationer og målrettede e-mailkampagner klar til EU-marked.',
          tags: ['WooCommerce', 'ERP-integration', 'CRM'],
          quote:
            'Da vi handler med virksomheder i hele Europa, havde vi nogle større behov end en dansk webshop.',
          quoteAuthor: 'Auto-Mow',
        },
        {
          company: 'Den Kvække Gartner',
          industry: 'Havedesign & anlægsgartner',
          challenge:
            'Hjemmesiden, som firmaet brugte til at fremvise idéer til kunder i gallerier, havde ikke været opdateret i 10 år.',
          solution:
            'Et gennemgribende redesign med galleri-fokuseret layout og SEO-optimering, tilpasset moderne designtrends.',
          tags: ['WordPress', 'SEO', 'Redesign'],
          quote:
            'Vi er godt tilfredse med vores nye hjemmeside — hurtig og billig i forhold til andre webbureauer.',
          quoteAuthor: 'Ejer, Den Kvække Gartner',
        },
        {
          company: 'Hornbæk Vin',
          industry: 'Vinhandel',
          challenge:
            'Emil manglede et sted at præsentere sine fine vine med den respekt, de fortjener.',
          solution:
            'Et WordPress-redesign med skræddersyet billedredigering og SEO, der viser vinene frem på en ordentlig måde.',
          tags: ['WordPress', 'SEO', 'Billedredigering'],
          quote:
            'Leverede en flot hjemmeside med professionelt design og god service, til en virkelig fair pris.',
          quoteAuthor: 'Emil Jacobsen, ejer',
        },
        {
          company: 'Kronborg Knights',
          industry: 'Sportsklub · American football',
          challenge:
            'Helsingørs american football-klub havde brug for ét sted at informere medlemmer om arrangementer og modtage nye tilmeldinger.',
          solution:
            'En WordPress-hjemmeside bygget til begivenhedsinfo og medlemstilmelding — stadig klubbens digitale hjem i dag.',
          tags: ['WordPress', 'Medlemshåndtering'],
          quote: '',
          quoteAuthor: '',
        },
      ],
    },
    about: {
      heading: 'Om mig',
      name: 'Jonathan Clausen',
      role: 'Softwareudvikler',
      text: [
        'Jeg er datalog uddannet fra Københavns Universitet med en passion for softwareudvikling og digital innovation. I dag arbejder jeg som full-stack .NET-udvikler hos Dalux, hvor jeg er med til at bygge software i en skaleret, shardet arkitektur. Tidligere har jeg arbejdet som softwareudvikler hos cBrain.',
        'Siden 2019 har jeg desuden taget freelanceprojekter ved siden af mit faste arbejde, hvor jeg har haft mulighed for at bidrage til en bred vifte af projekter — fra skalerbare webapplikationer til procesautomatisering.',
        'Med en solid teknisk baggrund og erfaring fra både store virksomheder og mindre, fleksible projekter, er jeg i stand til at håndtere både komplekse tekniske udfordringer og udviklingsprojekter med fokus på resultater.',
      ],
      statYears: 'års erfaring',
      statCompanies: 'virksomheder',
      statSince: 'freelance siden',
    },
    contact: {
      heading: 'Har du lyst til en samtale?',
      subheading: 'Kontakt mig på jc@concensur.dk',
      orForm: 'Eller via formularen.',
      email: 'Email',
      formName: 'Navn',
      formEmail: 'E-mailadresse',
      formMessage: 'Besked',
      formMessagePlaceholder: 'Fortæl mig om dit projekt...',
      formSubmit: 'Send',
      formSubmitting: 'Sender...',
      formSuccess: 'Tak for din besked! Jeg vender tilbage hurtigst muligt.',
      formError: 'Der gik noget galt. Prøv igen, eller skriv direkte til jc@concensur.dk.',
    },
    footer: {
      terms: 'Forretningsbetingelser',
      rights: 'Alle rettigheder forbeholdes',
    },
    blog: {
      heading: 'Blogindlæg',
      empty: 'Der er ingen blogindlæg endnu — kom snart tilbage.',
      notFound: 'Vi kunne ikke finde det blogindlæg.',
    },
  },
  en: {
    seo: {
      homeTitle: 'Concensur | Full-stack .NET Developer',
      homeDescription:
        'Software developer specializing in full-stack .NET development within scaled architectures. Available for freelance projects in web development, e-commerce, and automation.',
      blogTitle: 'Blog | Concensur',
      blogDescription: 'Articles on automation, .NET development, and webshop optimization from Jonathan Clausen.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
    },
    hero: {
      eyebrow: 'Full-stack .NET Developer',
      title: 'I build software that moves your business forward',
      subtitle: '.NET · Full Stack · Scalable Architecture',
      description:
        "I'm a software developer specializing in full-stack .NET development within scaled, sharded architectures. Alongside my day-to-day work, I take on freelance projects in web development, e-commerce, and automation, helping businesses optimize their processes and build robust, tailored solutions.",
      cta: 'Contact me',
      ctaSecondary: 'See my skills',
    },
    competencies: {
      heading: 'Competencies',
      subheading: 'What I can help you with',
      items: [
        {
          title: '.NET Development',
          description:
            "Solid experience developing efficient, scalable solutions on the .NET platform for enterprise environments. I use C#, ASP.NET, Entity Framework, and MSSQL Server to write robust, maintainable code built to hold up in large, critical systems.",
        },
        {
          title: 'Full-Stack Development',
          description:
            'As a full-stack developer, I build complete applications covering both frontend and backend. I use Angular and React for dynamic, responsive interfaces, and implement backend solutions with RPC and REST for efficient system communication.',
        },
        {
          title: 'Scalable & Distributed Architecture',
          description:
            "Experience designing and evolving software in scaled, sharded architectures, where performance, data consistency, and operational stability matter as the system and user base grow.",
        },
        {
          title: 'Reporting',
          description:
            'I develop and implement reporting tools that give real-time insight into business processes and performance. By combining automation with data-driven reporting, I help organizations make informed decisions.',
        },
        {
          title: 'Process Optimization',
          description:
            'I optimize and automate workflows to improve efficiency and reduce manual tasks, with scripts for data handling, system integrations, and task automation.',
        },
        {
          title: 'E-commerce & WordPress (freelance)',
          description:
            "Alongside my full-time role, I have extensive freelance experience building and maintaining e-commerce solutions, with WooCommerce and WordPress as my primary tools — from theme customization and payment integration to SEO and performance.",
        },
      ],
    },
    caseStudies: {
      heading: 'Earlier freelance work',
      subheading: 'Selected projects from my freelance career',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      readMore: 'Read more',
      readLess: 'Show less',
      items: [
        {
          company: 'Luxury by Ho',
          industry: 'E-commerce · Luxury pre-owned handbags',
          challenge:
            'An expanding market for second-hand bags demanded a webshop that could keep pace with new features and ideas.',
          solution:
            'Ongoing WooCommerce development — new features, SEO, and email marketing — built for fast iteration from idea to launch.',
          tags: ['WooCommerce', 'SEO', 'Email marketing'],
          quote: "From the moment we have an idea to it being implemented doesn't take long.",
          quoteAuthor: 'Christian Ho, Founder',
        },
        {
          company: 'DRT Architects',
          industry: 'Architecture firm · Boston, USA',
          challenge:
            'An architecture firm needed a professional website to showcase their portfolio — and a team that could maintain it themselves.',
          solution:
            'A custom WordPress theme with a clean, simple design and SEO optimization, built so the DRT team can update it going forward.',
          tags: ['WordPress', 'SEO', 'Custom theme'],
          quote: '',
          quoteAuthor: '',
        },
        {
          company: 'Auto-Mow',
          industry: 'B2B e-commerce · EU trade',
          challenge:
            'Trading with businesses across Europe meant their needs had outgrown a standard Danish webshop.',
          solution:
            'A B2B WooCommerce webshop with custom features, ERP/CRM integrations, and targeted email campaigns, ready for the EU market.',
          tags: ['WooCommerce', 'ERP integration', 'CRM'],
          quote:
            "Since we trade with companies across Europe, we had bigger needs than a Danish webshop.",
          quoteAuthor: 'Auto-Mow',
        },
        {
          company: 'Den Kvække Gartner',
          industry: 'Garden design & landscaping',
          challenge:
            "The website the firm used to showcase ideas to customers through galleries hadn't been updated in 10 years.",
          solution:
            'A full redesign with a gallery-focused layout and SEO optimization, aligned with modern design trends.',
          tags: ['WordPress', 'SEO', 'Redesign'],
          quote:
            "We're very happy with our new website — fast and affordable compared to other web agencies.",
          quoteAuthor: 'Owner, Den Kvække Gartner',
        },
        {
          company: 'Hornbæk Vin',
          industry: 'Wine retailer',
          challenge:
            'Emil lacked a place to showcase his fine wines with the respect they deserve.',
          solution:
            'A WordPress redesign with custom image editing and SEO, presenting the wines properly.',
          tags: ['WordPress', 'SEO', 'Image editing'],
          quote:
            'Delivered a beautiful website with professional design and good service, at a really fair price.',
          quoteAuthor: 'Emil Jacobsen, Owner',
        },
        {
          company: 'Kronborg Knights',
          industry: 'Sports club · American football',
          challenge:
            "Helsingør's American football club needed one place to inform members about events and handle new sign-ups.",
          solution:
            "A WordPress website built for event info and member registration — still the club's digital home today.",
          tags: ['WordPress', 'Membership'],
          quote: '',
          quoteAuthor: '',
        },
      ],
    },
    about: {
      heading: 'About me',
      name: 'Jonathan Clausen',
      role: 'Software Developer',
      text: [
        "I hold a computer science degree from the University of Copenhagen, with a passion for software development and digital innovation. I currently work as a full-stack .NET developer at Dalux, building software within a scaled, sharded architecture. I previously worked as a software developer at cBrain.",
        "Since 2019, I've also taken on freelance projects alongside my full-time role, contributing to a wide range of work — from scalable web applications to process automation.",
        "With a solid technical background and experience from both large companies and smaller, flexible projects, I'm equipped to handle complex technical challenges as well as results-focused development work.",
      ],
      statYears: 'years experience',
      statCompanies: 'companies',
      statSince: 'freelance since',
    },
    contact: {
      heading: 'Fancy a chat?',
      subheading: 'Contact me at jc@concensur.dk',
      orForm: 'Or via the form.',
      email: 'Email',
      formName: 'Name',
      formEmail: 'Email address',
      formMessage: 'Message',
      formMessagePlaceholder: 'Tell me about your project...',
      formSubmit: 'Send',
      formSubmitting: 'Sending...',
      formSuccess: "Thanks for your message! I'll get back to you soon.",
      formError: 'Something went wrong. Please try again, or email jc@concensur.dk directly.',
    },
    footer: {
      terms: 'Business terms',
      rights: 'All rights reserved',
    },
    blog: {
      heading: 'Blog posts',
      empty: 'No blog posts yet — check back soon.',
      notFound: "We couldn't find that blog post.",
    },
  },
};
