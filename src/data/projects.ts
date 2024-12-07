import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

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
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
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
    name: "Kanban app",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/kanbanLight.webp",
      "/images/projects/kanbanDark.webp",
      "/images/projects/kanbanCardLight.webp",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/joelgenaro/kanban",
    liveWebsiteHref: "https://kannban-board.vercel.app",
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
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref:
      "https://github.com/Dev0715/Portfolio-Next-Animation-Template",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/joelgenaro/CovidTracker",
    liveWebsiteHref: "https://joelgenaro.github.io/CovidTracker",
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
      "In this stock market platform, I focused heavily on chart development, site performance optimization, and converting Figma designs to pixel-perfect implementations using Tailwind CSS. I utilized libraries such as Chart.js and HighCharts to display stock data, trends, and analytics",
    sourceCodeHref: "https://github.com/joelgenaro/Stock-Market-Predictor",
    liveWebsiteHref: "https://trendlyne.com/",
  },
  {
    name: "Flightradar",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: ["/images/projects/img_20241204.png"],
    description:
      "I utilized React/Node to create a dynamic and responsive user interface. For the mapping component, I integrated web map libraries such as Leaflet and OpenLayers, enabling the display of detailed, interactive maps that seamlessly showcase flight paths and aircraft positions.",
    sourceCodeHref: "https://github.com/joelgenaro/FlightTradar",
    liveWebsiteHref: "https://www.flightradar24.com",
  },
  {
    name: "FitBark GPS for Dogs & Cats",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: ["/images/projects/dog.jpg"],
    description:
      "I created a dynamic mobile application that allowed users to track dog activities, manage profiles, and connect with local pet services. I leveraged Ionic/Firebase, utilizing Angular components, Firestore, and Firebase Authentication.",
    sourceCodeHref: "https://github.com/joelgenaro/fitbark",
    liveWebsiteHref:
      "https://play.google.com/store/apps/details?id=fitbark.com.android",
  },
  {
    name: "ManikirShop",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: ["/images/projects/reactnative.jpg"],
    description:
      "I developed an e-commerce app using React Native for the mobile interface, and the backend was built with Laravel, where I implemented RESTful APIs to manage user authentication, product listings, and order processing.",
    sourceCodeHref: "https://github.com/joelgenaro/ManikirShop",
    liveWebsiteHref:
      "https://play.google.com/store/apps/details?id=com.manikirshop",
  },
];
