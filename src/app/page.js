// // app/page.js (Next.js 13+ with App Router) OR pages/index.js (for Next.js 12)
"use client";
import { useState } from "react";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import games from "@/data/games";
import Image from "next/image";  // ✅ Correct


export default function Home() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "India's Most Popular Trusted Rummy Platform",
      warning:
        "This game involves financial risk and may be addictive. Please play responsibly at your own risk. Only 18+ allowed.",
      welcome:
        "Welcome to our website! You can earn real money by playing your favorite games. If you are 18+, download the game now!",
      follow: "Follow Us:",
      home: "Home",
      rummy: "Rummy",
      t3: "3 Patti",
      blog: "Blog",
    },
    hi: {
      title: "भारतीय सबसे लोकप्रिय और विश्वसनीय रम्मी प्लेटफार्म",
      warning:
        "इस गेम में वित्तीय जोख़िम शामिल है और यह लत लगा सकता है। कृपया अपने जोखिम पर खेलें। केवल 18+ अनुमति।",
      welcome:
        "हमारी वेबसाइट में आपका स्वागत है! आप अपनी पसंदीदा गेम खेलकर बहुत पैसा कमा सकते हैं। यदि आपकी उम्र 18 साल से अधिक है, तो गेम डाउनलोड करें!",
      follow: "अनुसरण करें:",
      home: "होम",
      rummy: "रम्मी",
      t3: "तीन पत्ती",
      blog: "ब्लॉग",
    },
  };

  const topGames = games.filter((g) => g.ranking).sort((a, b) => a.ranking - b.ranking);
  const allGames = games;

  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}

      <Carousel />

      <div className="py-4 text-yellow-400 bg-gray-900 font-semibold">
        <marquee>This game involves financial risk and may be addictive. Please play responsibly at your own risk. Only 18+ allowed. | इस गेम में विद्या जोकिम सामिल है और गेम का लत लग सकता है कृपया अपने जोखिम पे पैसा लगाएं.</marquee>
      </div>

      {/* Hot Apps */}
      <section id="hot" className="px-6 md:px-20 py-16">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
          🔥 Hot Picks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topGames.map((game, i) => (
            <Link key={game.id} href={`/games/${game.id}`} className={``}>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-red-500 transition group cursor-pointer">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={game.cover}
                    alt={game.title}
                    fill
                    className="object-cover rounded-lg group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {game.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Games */}
      <section id="games" className="px-6 md:px-20 py-16">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
          All Rummy Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allGames.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-red-500 transition cursor-pointer">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={game.cover}
                    alt={game.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{game.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {game.shortDesc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


// import Link from "next/link";
// import Image from "next/image";
// import Head from "next/head";
// import games from "@/data/games";

// export default function Home() {
//   const hotGames = games.slice(0, 3); // Top 3 apps
//   const otherGames = games.slice(3);

//   return (
//     <>
//       {/* SEO */}
//       <Head>
//         <title>The Game Store - Best Rummy Apps with Referral Codes</title>
//         <meta
//           name="description"
//           content="Discover the best Rummy apps with exclusive referral codes. Get started with the most trusted apps in India."
//         />
//         <meta name="keywords" content="Rummy, Rummy Apps, Referral Codes, Online Games" />
//         <meta name="author" content="The Game Store" />
//         <meta property="og:title" content="The Game Store" />
//         <meta
//           property="og:description"
//           content="Explore hot Rummy apps with referral codes and trusted recommendations."
//         />
//         <meta property="og:image" content="/cover.jpg" />
//       </Head>

//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           <h1 className="text-2xl font-bold text-red-500">The Game Store</h1>
//           <nav className="hidden md:flex gap-6 text-white">
//             <Link href="/" className="hover:text-red-500">Home</Link>
//             <Link href="#hot" className="hover:text-red-500">Hot Apps</Link>
//             <Link href="#games" className="hover:text-red-500">All Apps</Link>
//           </nav>
//         </div>
//       </header>

//       <main className="bg-black text-white min-h-screen">
//         {/* Hero Section */}
//         <section
//           className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
//           style={{ backgroundImage: `url('/bg.jpg')` }}
//         >
//           <div className="absolute inset-0 bg-black/60"></div>
//           <div className="relative z-10 text-center px-6">
//             <h1 className="text-5xl md:text-7xl font-extrabold text-red-500 drop-shadow-lg">
//               Discover The Best Rummy Apps
//             </h1>
//             <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
//               Trusted, Verified & Exclusive Referral Codes for You.
//             </p>
//             <a
//               href="#hot"
//               className="mt-8 inline-block px-8 py-4 bg-red-500 hover:bg-red-600 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
//             >
//               Get Started
//             </a>
//           </div>
//         </section>

//         {/* Hot Apps */}
//         <section id="hot" className="px-6 md:px-20 py-16">
//           <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
//             🔥 Hot Picks
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {hotGames.map((game) => (
//               <Link key={game.id} href={`/games/${game.id}`}>
//                 <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-red-500 transition group cursor-pointer">
//                   <div className="relative w-full h-48 mb-4">
//                     <Image
//                       src={game.cover}
//                       alt={game.title}
//                       fill
//                       className="object-cover rounded-lg group-hover:scale-105 transition"
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
//                   <p className="text-gray-300 text-sm line-clamp-2">
//                     {game.shortDesc}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>

//         {/* All Games */}
//         <section id="games" className="px-6 md:px-20 py-16">
//           <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
//             📋 All Rummy Apps
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {otherGames.map((game) => (
//               <Link key={game.id} href={`/games/${game.id}`}>
//                 <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-red-500 transition cursor-pointer">
//                   <div className="relative w-20 h-20 flex-shrink-0">
//                     <Image
//                       src={game.cover}
//                       alt={game.title}
//                       fill
//                       className="object-cover rounded-lg"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold">{game.title}</h3>
//                     <p className="text-gray-400 text-sm line-clamp-2">
//                       {game.shortDesc}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-black border-t border-gray-800 text-center py-6 text-gray-400 text-sm">
//         <p>© {new Date().getFullYear()} The Game Store. All rights reserved.</p>
//         <p className="mt-2">
//           Made with ❤️ | Trusted Rummy App Recommendations
//         </p>
//       </footer>
//     </>
//   );
// }
