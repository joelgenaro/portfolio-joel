import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Flightradar",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/img_20241204.png",
      DARK: "/images/projects/img_20241204.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Json tree",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/joelgenaro/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Many Games",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/joelgenaro/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "Dormeo",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/shopify.jpg"],
    description:
      "I developed a headless e-commerce website using Shopify with GraphQL APIs, leveraging Next.js, I converted Figma designs into reusable React components, ensuring pixel-perfect implementation while integrating Sanity CMS.",
    sourceCodeHref: "https://github.com/joelgenaro/dormeo",
    liveWebsiteHref: "https://www.dormeo.co.uk/",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/img_20241202.png",
      "/images/projects/img_20241202(4).png",
      "/images/projects/img_20241202(3).png",
      "/images/projects/img_20241202(1).png",
    ],
    description:
      "In this stock market platform, I utilized MERN Stack, Chart.js, and Recharts to display stock data, trends, and analytics",
    sourceCodeHref: "https://github.com/joelgenaro/Stock-Market-Predictor",
    liveWebsiteHref: "https://trendlyne.com/",
  },
  {
    name: "Flightradar",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/img_20241204.png"],
    description:
      "I utilized React/Node, and for the mapping component, I integrated web map libraries such as Leaflet and OpenLayers, enabling the display of detailed, interactive maps that seamlessly showcase flight paths and aircraft positions.",
    sourceCodeHref: "https://github.com/joelgenaro/FlightTradar",
    liveWebsiteHref: "https://www.flightradar24.com",
  },
  {
    name: "Pandanese",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: ["/images/projects/ruby.png"],
    description:
      "Implemented Ruby on Rails and Docker, using PostgreSQL as the database. For the user interface, I utilized React and Bootstrap.",
    sourceCodeHref: "https://github.com/joelgenaro/CovidTracker",
    liveWebsiteHref: "https://www.pandanese.com/",
  },
  {
    name: "FitBark GPS for Dogs & Cats",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/dog.jpg"],
    description:
      "I created a GPS/Health mobile application with React Native that allowed users to track dog activities, manage profiles, and connect with local pet services. The backend was built with Ruby on Rails, and AWS.",
    sourceCodeHref: "https://github.com/joelgenaro/fitbark",
    liveWebsiteHref:
      "https://play.google.com/store/apps/details?id=fitbark.com.android",
  },
  {
    name: "ManikirShop",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/reactnative.jpg"],
    description:
      "I developed an e-commerce app using Ionic/Angular for the mobile interface, and I leveraged Firestore, and Firebase Authentication.",
    sourceCodeHref: "https://github.com/joelgenaro/ManikirShop",
    liveWebsiteHref:
      "https://play.google.com/store/apps/details?id=com.manikirshop",
  },
];
