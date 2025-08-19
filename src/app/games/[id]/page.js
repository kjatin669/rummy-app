import Image from "next/image";
import Link from "next/link";
import games from "../../../data/games";

export default function GamePage({ params }) {
  const game = games.find((g) => g.id === params.id);
  if (!game) return <p className="text-center mt-20">Game not found.</p>;

  return (
    <main className="bg-black min-h-screen text-white">
      
      {/* Hero Section */}
      <section
        className="relative min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url('${game.cover}')`, // dynamic bg
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-red-500 drop-shadow-lg">
            {game.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-md max-w-2xl mx-auto">
            {game.shortDesc}
          </p>
          <Link href={`${game.navLink}`} className="mt-8 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105">
            Play Now
          </Link>
        </div>
      </section>

      {/* Game Details */}
      <div className="px-6 md:px-20 py-12">
        <Link href="/" className="text-red-500 underline mb-6 inline-block">
          ← Back to Store
        </Link>
        <p className="mt-4 max-w-3xl text-gray-300">{game.longDesc}</p>
        <h2 className="text-2xl mt-8 mb-4 text-red-400">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {game.screenshots.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${game.title} screenshot ${i + 1}`}
              width={800}
              height={500}
              className="rounded-lg border border-red-500 hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
