"use client";

import { useState } from "react";
import Link from "next/link";
import { messages } from "@/data/messages";

export default function MesajKutusu() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isOpening, setIsOpening] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const openMessage = () => {
    setIsOpening(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
      setAnimKey((k) => k + 1);
      setIsOpening(false);
    }, 400);
  };

  return (
    <main className="min-h-dvh flex flex-col px-5 py-6">
      <Link
        href="/"
        className="text-primary-dark font-semibold text-sm mb-6 inline-flex items-center gap-1"
      >
        ← Geri
      </Link>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Mesaj Kutusu</h1>
        <p className="text-sm text-gray-500 mb-10">Her biri senin için yazıldı 💜</p>

        {currentIndex === -1 ? (
          /* Zarf */
          <button
            onClick={openMessage}
            className={`relative transition-transform duration-300 ${
              isOpening ? "scale-110" : "active:scale-95 hover:scale-105"
            }`}
          >
            <div className="w-48 h-32 relative">
              {/* Zarf gövdesi */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-200 rounded-xl shadow-lg" />
              {/* Zarf kapağı */}
              <div
                className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-amber-200 to-amber-300 rounded-t-xl transition-transform duration-300 origin-top ${
                  isOpening ? "scale-y-0" : ""
                }`}
                style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
              />
              {/* Kalp */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl animate-heartbeat">💌</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Zarfa dokun</p>
          </button>
        ) : (
          /* Mesaj kartı */
          <div className="w-full max-w-sm">
            <div
              key={animKey}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg animate-fade-in-up"
            >
              <span className="text-4xl block mb-5">💜</span>
              <p className="font-hand text-xl leading-relaxed text-gray-700">
                {messages[currentIndex]}
              </p>
              <div className="mt-5 flex items-center justify-center gap-1 text-xs text-gray-400">
                <span>
                  {currentIndex + 1} / {messages.length}
                </span>
              </div>
            </div>

            <button
              onClick={openMessage}
              disabled={isOpening}
              className="mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold py-3 px-8 rounded-full
                active:scale-95 transition-transform shadow-lg disabled:opacity-50"
            >
              Sonraki Mesaj
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
