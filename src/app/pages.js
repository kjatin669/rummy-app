// pages/index.js
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Game Launch</title>
        <meta
          name="description"
          content="Experience the ultimate gaming adventure — play now!"
        />
        <meta name="keywords" content="game, play, adventure, action, launch" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Game Launch" />
        <meta
          property="og:description"
          content="Experience the ultimate gaming adventure — play now!"
        />
        <meta property="og:image" content="/screenshot1.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section
        className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-red-500 drop-shadow-lg">
            My Awesome Game
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-md">
            Get ready for the adventure of a lifetime.
          </p>
          <button className="mt-8 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105">
            ▶ Play Now
          </button>
        </div>
      </section>


      {/* --- Info Section --- */}
      <section className="bg-black text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-6">
          About the Game
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Dive into a thrilling journey where every choice matters. Fight
          enemies, solve puzzles, and explore stunning worlds. Designed for
          gamers who crave excitement and challenge.
        </p>
      </section>

      {/* --- Screenshots Section --- */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 text-center mb-10">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["screenshot1.png", "screenshot2.png", "screenshot3.png"].map(
            (img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg border-4 border-black"
              >
                <Image
                  src={`/${img}`}
                  alt={`Game screenshot ${i + 1}`}
                  width={800}
                  height={500}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black text-gray-400 text-center py-6 border-t border-red-500">
        © {new Date().getFullYear()} My Game. All Rights Reserved.
      </footer>
    </>
  );
}
