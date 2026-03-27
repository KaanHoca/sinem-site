"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { surprises, type Surprise } from "@/data/surprises";

export default function SansKutusu() {
  const [opened, setOpened] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [current, setCurrent] = useState<Surprise | null>(null);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());

  const openBox = useCallback(() => {
    if (opened) return;

    setShaking(true);
    setTimeout(() => {
      setShaking(false);

      let available = Array.from({ length: surprises.length }, (_, i) => i).filter(
        (i) => !usedIndices.has(i)
      );

      if (available.length === 0) {
        setUsedIndices(new Set());
        available = Array.from({ length: surprises.length }, (_, i) => i);
      }

      const randomIdx = available[Math.floor(Math.random() * available.length)];
      setCurrent(surprises[randomIdx]);
      setUsedIndices((prev) => new Set(prev).add(randomIdx));
      setOpened(true);
    }, 600);
  }, [opened, usedIndices]);

  const reset = () => {
    setOpened(false);
    setCurrent(null);
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
        <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Şans Kutusu</h1>
        <p className="text-sm text-gray-500 mb-10">Kutuya dokun, sürprizini gör!</p>

        {!opened ? (
          <button
            onClick={openBox}
            className={`text-8xl transition-transform duration-300 ${
              shaking ? "animate-shake" : "hover:scale-110 active:scale-95"
            }`}
            aria-label="Sürpriz kutusunu aç"
          >
            🎁
          </button>
        ) : (
          current && (
            <div className="animate-scale-in w-full max-w-sm">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
                <span className="text-5xl block mb-4">{current.icon}</span>
                <span className="inline-block bg-primary/10 text-primary-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {current.category}
                </span>
                <p className="text-gray-700 text-base leading-relaxed font-hand text-xl">
                  {current.text}
                </p>
              </div>

              <button
                onClick={reset}
                className="mt-6 bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-8 rounded-full
                  active:scale-95 transition-transform shadow-lg"
              >
                Bir Tane Daha!
              </button>
            </div>
          )
        )}
      </div>
    </main>
  );
}
