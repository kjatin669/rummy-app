"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slides from "@/data/slides";

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col justify-center text-white"
          style={{
            backgroundImage: `url(${slides[current].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/50 p-6 rounded-xl max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{slides[current].title}</h2>
            <p className="text-lg md:text-xl">{slides[current].desc}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots navigation */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-red-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
