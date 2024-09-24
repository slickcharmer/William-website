import {
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiZig,
  SiJavascript,
  SiAmazonaws,
  SiNodedotjs,
  SiWordpress,
  SiMysql,
  SiBootstrap,
  SiVuedotjs,
  SiNuxtdotjs,
  SiThreedotjs,
  SiAngular,
  SiAngularjs,
  SiTensorflow,
  SiSelenium,
  SiPython,
  SiAndroid,
  SiOpenai,
  SiIos,
  SiMlflow,
  SiDjango,
  SiDocker,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  //   github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 1,
    name: "Barbak",
    description:
      "BarBak Hospitality, established in 2019 in Charlotte, NC, has its roots firmly planted in wholesale third-party delivery. We've always collaborated with top-tier wholesale providers to supply your business with the necessary products for success, all while keeping your costs at a minimum.",
    technologies: [SiReact, SiNextdotjs, SiNodedotjs],
    techNames: ["React", "Next.js", "Node.js"],
    techLinks: [
      "https://react.dev/",
      "https://nextjs.org/",
      "https://www.android.com",
      "https://www.ios.com",
      "https://www.ios.com",
    ],
    // github: "https://github.com/nuIIpointerexception/codewars",
    demo: "https://bar-bak-mine.vercel.app/",
    image: "/projects/barbak.png",
    available: true,
  },
  {
    id: 2,
    name: "Vocaloid",
    description:
      "Vocaloid is a singing voice-changing plugin created using AI; I was responsible for backend API implementation. I improved the quality of cloned-voice. We became familiar with signal processing, ML and Voice synthesis. Prototyped the ML models in a interactive way ",
    technologies: [SiReact, SiNextdotjs, SiNodedotjs],
    techNames: ["React", "Next.js", "Node.js"],
    techLinks: [
      "https://react.dev/",
      "https://nextjs.org/",
      "https://www.android.com",
      "https://www.ios.com",
      "https://www.ios.com",
    ],
    // github: "https://github.com/nuIIpointerexception/codewars",
    demo: "https://www.vocaloid.com/en/",
    image: "/projects/vocaloid.jpg",
    available: true,
  },
  {
    id: 3,
    name: "Crypto Trading",
    description:
      "Orion aggregates liquidity from the largest CEXs and DEXs to ensure the best possible asset prices and trade routes for your favorite tokens.",
    technologies: [SiReact, SiNextdotjs, SiNodedotjs],
    techNames: ["React", "Next.js", "Node.js"],
    techLinks: [
      "https://react.dev/",
      "https://nextjs.org/",
      "https://nodejs.org/en",
    ],
    demo: "https://trade.orion.xyz/trade/ORN-USDT",
    image: "/projects/crypto_trading.png",
    available: true,
  },
  {
    id: 5,
    name: "FoodPanda",
    description:
      "Food & grocery delivery near you from top restaurants and shops across Hong Kong ✓ Large variety of dishes and shopping items ✓ Safe & easy payment ...",
    technologies: [SiAndroid, SiNodedotjs],
    techNames: ["Android", "Node.js"],
    techLinks: ["https://www.android.com", "https://nodejs.org/en"],
    demo: "https://apps.apple.com/hk/app/foodpanda-%E7%BE%8E%E9%A3%9F%E5%92%8C%E7%94%9F%E9%AE%AE%E9%9B%9C%E8%B2%A8%E5%A4%96%E9%80%81/id758103884?ppid=b158a9db-0d47-49a8-8cd4-bd3d18a51800",
    image: "/projects/foodpanda.png",
    available: true,
  },
  {
    id: 9,
    name: "Sport Betting Site Scraping",
    description:
      "Scraped the detailed info about the games. https://www.loom.com/share/fbcfacfc518e4f41ab3eefdea0873f87.\n Output data field: Player, Prop, Hash, Over Odds, Under Odds, Away Team, Home Team, and Game Time in UTC.\n Output format: Json file",
    technologies: [SiSelenium, SiPython],
    techNames: ["Selenium", "Python"],
    techLinks: ["https://www.selenium.dev/", "https://www.python.org/"],
    demo: "https://ny.wynnbet.com",
    image: "/projects/wynnbet.png",
    available: true,
  },
  {
    id: 14,
    name: "Web Scraping",
    description:
      "This is the video that scrap the information of member in Skool",
    technologies: [SiSelenium, SiPython],
    techNames: ["Selenium", "Python"],
    techLinks: ["https://www.selenium.dev/", "https://www.python.org/"],
    demo: "https://drive.google.com/file/d/1AZZbeDP6wMcboc8HIBGgWYjXxesTi08I/view?usp=drive_link",
    image: "/projects/skool_scraping.png",
    available: true,
  },
  {
    id: 15,
    name: "SangiShop",
    description:
      "芸能人は歯が命のアパガード公式通販サイト。通販専用の最上位品アパガードロイヤルをはじめ、薬用ハイドロキシアパタイト配合歯磨き、歯ブラシなどオーラルケア商品を ...",
    technologies: [SiReact],
    techNames: ["React"],
    techLinks: ["https://reactjs.org/"],
    demo: "https://www.sangishop.jp/",
    image: "/projects/sangishop.png",
    available: true,
  },
  {
    id: 17,
    name: "Mela Envy",
    description:
      "There apple envy is born from the wish, that Of Pleasure to who near Of give Everything is fine moment special, transforming the ordinary in extraordinary.",
    technologies: [SiReact, SiNextdotjs, SiThreedotjs],
    techNames: ["React", "Next.js", "Three.js"],
    techLinks: [
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://threejs.org",
    ],
    demo: "https://www.melaenvy.it/",
    image: "/projects/apple.png",
    available: true,
  },
  {
    id: 18,
    name: "AI Trading Bot",
    description:
      "Trading strategies for Swing and Day Traders: Swing Traders trade stocks within a few days. Day Traders trade stocks multiple times per day.",
    technologies: [SiAngularjs, SiBootstrap, SiTensorflow],
    techNames: ["Angular", "Bootstrap", "Tensoflow"],
    techLinks: [
      "https://angularjs.org",
      "https://getbootstrap.com/",
      "https://www.tensorflow.org/",
    ],
    demo: "https://tickeron.com/bot-trading/",
    image: "/projects/tradingbot.png",
    available: true,
  },
];
