import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import RubySvg from "@/public/icons/ruby.svg";
import RailsSvg from "@/public/icons/rails.svg";

// Libraries
import AngularSvg from "@/public/icons/angular.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import SolidjsSvg from "@/public/icons/solidjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";
import IonicSvg from "@/public/icons/ionic.svg";
import ReactnativeSvg from "@/public/icons/reactjs.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import NestjsSvg from "@/public/icons/nestjs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import MySQLSvg from "@/public/icons/mysql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import AzureSvg from "@/public/icons/azure.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Ruby",
        icon: RubySvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Solidjs",
        icon: SolidjsSvg,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
      },
      {
        name: "Ionic",
        icon: IonicSvg,
      },
      {
        name: "React Native",
        icon: ReactnativeSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Nestjs",
        icon: NestjsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Rails",
        icon: RailsSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MySQL",
        icon: MySQLSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "AZURE",
        icon: AzureSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
