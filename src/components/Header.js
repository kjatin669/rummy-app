"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Apply dark mode to body
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

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

  return (
    <header className="flex justify-between items-center px-6 py-4 
      bg-gray-200 dark:bg-gray-900 shadow-md fixed top-0 z-50 w-screen transition-colors duration-300">
      {/* Logo */}
      <h1 className="text-xl font-bold text-red-500">Rummy World</h1>

      {/* Navigation */}
      <nav className="flex gap-6">
        <Link href="#" className="hover:text-red-400">{content[lang].home}</Link>
        <Link href="#" className="hover:text-red-400">{content[lang].rummy}</Link>
        <Link href="#" className="hover:text-red-400">{content[lang].t3}</Link>
        <Link href="#" className="hover:text-red-400">{content[lang].blog}</Link>
      </nav>

      {/* Buttons */}
      <div className="flex gap-3">
        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
          className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
        >
          {lang === "en" ? "हिन्दी" : "English"}
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded-lg bg-gray-700 text-white hover:bg-gray-800"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
