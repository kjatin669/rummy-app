// data/games.js
const games = [
  {
    id: "rummy-circle",
    title: "Rummy Circle",
    shortDesc: "10M+ Downloads",
    longDesc:
      "Rummy Circle is one of the most popular rummy platforms in India offering safe gameplay, quick cashouts, and 24/7 tournaments.",
    cover: "/covers/rummycircle.jpg",
    screenshots: ["/screenshots/rummycircle1.jpg", "/screenshots/rummycircle2.jpg"],
    navLink: "https://rummycircle.com",
    ranking: 1,
  },
  {
    id: "junglee-rummy",
    title: "Junglee Rummy",
    shortDesc: "8M+ Players",
    longDesc:
      "Junglee Rummy brings you thrilling rummy tournaments with secure transactions and huge cash prizes.",
    cover: "/covers/jungleerummy.jpg",
    screenshots: ["/screenshots/jungleerummy1.jpg", "/screenshots/jungleerummy2.jpg"],
    navLink: "https://junglee.games",
    ranking: 2,
  },
  {
    id: "adda52-rummy",
    title: "Adda52 Rummy",
    shortDesc: "Trusted by 5M+ Users",
    longDesc:
      "Adda52 Rummy offers exciting gameplay, exclusive rewards, and 24x7 support for its loyal players.",
    cover: "/covers/adda52.jpg",
    screenshots: ["/screenshots/adda52-1.jpg", "/screenshots/adda52-2.jpg"],
    navLink: "https://adda52rummy.com",
    ranking: 3,
  },
  {
    id: "ace2three",
    title: "Ace2Three Rummy",
    shortDesc: "7M+ Downloads",
    longDesc:
      "Ace2Three is a leading rummy app offering smooth gameplay and great referral bonuses.",
    cover: "/covers/ace2three.jpg",
    screenshots: ["/screenshots/ace2three1.jpg", "/screenshots/ace2three2.jpg"],
    navLink: "https://ace2three.com",
    ranking: false,
  },
  {
    id: "rummy-culture",
    title: "Rummy Culture",
    shortDesc: "2M+ Users",
    longDesc:
      "Rummy Culture is known for its simple interface and rewarding referral program.",
    cover: "/covers/rummyculture.jpg",
    screenshots: ["/screenshots/rummyculture1.jpg", "/screenshots/rummyculture2.jpg"],
    navLink: "https://rummyculture.com",
    ranking: false,
  },
  {
    id: "classic-rummy",
    title: "Classic Rummy",
    shortDesc: "1M+ Players",
    longDesc:
      "Classic Rummy provides a variety of rummy formats with real-time cash games.",
    cover: "/covers/classicrummy.jpg",
    screenshots: ["/screenshots/classicrummy1.jpg", "/screenshots/classicrummy2.jpg"],
    navLink: "https://classicrummy.com",
    ranking: false,
  },
  {
    id: "rummy-passion",
    title: "Rummy Passion",
    shortDesc: "3M+ Downloads",
    longDesc:
      "Rummy Passion lets you enjoy Indian rummy with exciting daily rewards and bonuses.",
    cover: "/covers/rummypassion.jpg",
    screenshots: ["/screenshots/rummypassion1.jpg", "/screenshots/rummypassion2.jpg"],
    navLink: "https://rummypassion.com",
    ranking: false,
  },
  {
    id: "taj-rummy",
    title: "Taj Rummy",
    shortDesc: "500K+ Players",
    longDesc:
      "Taj Rummy combines luxury design with safe and secure online rummy gameplay.",
    cover: "/covers/tajrummy.jpg",
    screenshots: ["/screenshots/tajrummy1.jpg", "/screenshots/tajrummy2.jpg"],
    navLink: "https://tajrummy.com",
    ranking: false,
  },
  {
    id: "a23-rummy",
    title: "A23 Rummy",
    shortDesc: "4M+ Users",
    longDesc:
      "A23 Rummy by Head Digital Works offers top-tier rummy tournaments with amazing cash prizes.",
    cover: "/covers/a23.jpg",
    screenshots: ["/screenshots/a23-1.jpg", "/screenshots/a23-2.jpg"],
    navLink: "https://a23.com",
    ranking: false,
  },
  {
    id: "octro-rummy",
    title: "Octro Rummy",
    shortDesc: "2M+ Downloads",
    longDesc:
      "Octro Rummy is a fun-filled platform with live tables and multiplayer action.",
    cover: "/covers/octro.jpg",
    screenshots: ["/screenshots/octro1.jpg", "/screenshots/octro2.jpg"],
    navLink: "https://octro.com",
    ranking: false,
  },
  {
    id: "silk-rummy",
    title: "Silk Rummy",
    shortDesc: "500K+ Users",
    longDesc:
      "Silk Rummy is known for its user-friendly design and secure cash games.",
    cover: "/covers/silkrummy.jpg",
    screenshots: ["/screenshots/silkrummy1.jpg", "/screenshots/silkrummy2.jpg"],
    navLink: "https://silkrummy.com",
    ranking: false,
  },
  {
    id: "gin-rummy-plus",
    title: "Gin Rummy Plus",
    shortDesc: "1M+ Players",
    longDesc:
      "Gin Rummy Plus provides a modern take on classic rummy with multiplayer modes.",
    cover: "/covers/ginrummy.jpg",
    screenshots: ["/screenshots/ginrummy1.jpg", "/screenshots/ginrummy2.jpg"],
    navLink: "https://ginrummyplus.com",
    ranking: false,
  },
  {
    id: "play-rummy",
    title: "Play Rummy",
    shortDesc: "700K+ Downloads",
    longDesc:
      "Play Rummy is a trusted app with exclusive rewards and frequent tournaments.",
    cover: "/covers/playrummy.jpg",
    screenshots: ["/screenshots/playrummy1.jpg", "/screenshots/playrummy2.jpg"],
    navLink: "https://playrummy.com",
    ranking: false,
  },
  {
    id: "rummy-guru",
    title: "Rummy Guru",
    shortDesc: "250K+ Players",
    longDesc:
      "Rummy Guru offers exciting variants of rummy with referral benefits.",
    cover: "/covers/rummyguru.jpg",
    screenshots: ["/screenshots/rummyguru1.jpg", "/screenshots/rummyguru2.jpg"],
    navLink: "https://rummyguru.com",
    ranking: false,
  },
  {
    id: "indian-rummy",
    title: "Indian Rummy",
    shortDesc: "1M+ Downloads",
    longDesc:
      "Indian Rummy app brings you traditional rummy with a modern twist.",
    cover: "/covers/indianrummy.jpg",
    screenshots: ["/screenshots/indianrummy1.jpg", "/screenshots/indianrummy2.jpg"],
    navLink: "https://indianrummy.com",
    ranking: false,
  },
  {
    id: "gold-rummy",
    title: "Gold Rummy",
    shortDesc: "600K+ Users",
    longDesc:
      "Gold Rummy ensures a premium rummy experience with fast cashouts.",
    cover: "/covers/goldrummy.jpg",
    screenshots: ["/screenshots/goldrummy1.jpg", "/screenshots/goldrummy2.jpg"],
    navLink: "https://goldrummy.com",
    ranking: false,
  },
  {
    id: "royal-rummy",
    title: "Royal Rummy",
    shortDesc: "300K+ Players",
    longDesc:
      "Royal Rummy brings royal style gameplay with unique tournament formats.",
    cover: "/covers/royalrummy.jpg",
    screenshots: ["/screenshots/royalrummy1.jpg", "/screenshots/royalrummy2.jpg"],
    navLink: "https://royalrummy.com",
    ranking: false,
  },
  {
    id: "sky-rummy",
    title: "Sky Rummy",
    shortDesc: "200K+ Downloads",
    longDesc:
      "Sky Rummy offers engaging cash games and a sleek mobile experience.",
    cover: "/covers/skyrummy.jpg",
    screenshots: ["/screenshots/skyrummy1.jpg", "/screenshots/skyrummy2.jpg"],
    navLink: "https://skyrummy.com",
    ranking: false,
  },
  {
    id: "ludo-rummy",
    title: "Ludo Rummy",
    shortDesc: "150K+ Users",
    longDesc:
      "Ludo Rummy combines two favorites – Ludo & Rummy – into one exciting app.",
    cover: "/covers/ludorummy.jpg",
    screenshots: ["/screenshots/ludorummy1.jpg", "/screenshots/ludorummy2.jpg"],
    navLink: "https://ludorummy.com",
    ranking: false,
  },
  {
    id: "fun-rummy",
    title: "Fun Rummy",
    shortDesc: "500K+ Downloads",
    longDesc:
      "Fun Rummy ensures a lighthearted and rewarding online rummy experience.",
    cover: "/covers/funrummy.jpg",
    screenshots: ["/screenshots/funrummy1.jpg", "/screenshots/funrummy2.jpg"],
    navLink: "https://funrummy.com",
    ranking: false,
  },
];

export default games;
