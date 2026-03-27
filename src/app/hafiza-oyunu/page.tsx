"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

const EMOJI_PAIRS = ["☕", "🌸", "💜", "✨", "🎵", "📚", "🦋", "🌙"];

interface Card {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createCards(): Card[] {
  const doubled = [...EMOJI_PAIRS, ...EMOJI_PAIRS];
  const shuffled = shuffleArray(doubled);
  return shuffled.map((emoji, i) => ({
    id: i,
    emoji,
    flipped: false,
    matched: false,
  }));
}

function emptyCards(): Card[] {
  return Array.from({ length: 16 }, (_, i) => ({ id: i, emoji: "", flipped: false, matched: false }));
}

export default function HafizaOyunu() {
  const [cards, setCards] = useState<Card[]>(emptyCards);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCards(createCards());
    setReady(true);
  }, []);
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [won, setWon] = useState(false);
  const [locked, setLocked] = useState(false);

  const handleCardClick = useCallback(
    (id: number) => {
      if (locked) return;
      const card = cards[id];
      if (card.flipped || card.matched) return;
      if (selected.length === 1 && selected[0] === id) return;

      const newCards = cards.map((c) => (c.id === id ? { ...c, flipped: true } : c));
      setCards(newCards);

      if (selected.length === 0) {
        setSelected([id]);
      } else {
        setLocked(true);
        setMoves((m) => m + 1);
        const firstCard = cards[selected[0]];
        const secondCard = cards[id];

        if (firstCard.emoji === secondCard.emoji) {
          setTimeout(() => {
            setCards((prev) =>
              prev.map((c) =>
                c.id === selected[0] || c.id === id ? { ...c, matched: true } : c
              )
            );
            setMatches((m) => {
              const newM = m + 1;
              if (newM === EMOJI_PAIRS.length) setWon(true);
              return newM;
            });
            setSelected([]);
            setLocked(false);
          }, 400);
        } else {
          setTimeout(() => {
            setCards((prev) =>
              prev.map((c) =>
                c.id === selected[0] || c.id === id ? { ...c, flipped: false } : c
              )
            );
            setSelected([]);
            setLocked(false);
          }, 800);
        }
      }
    },
    [cards, selected, locked]
  );

  const resetGame = () => {
    setCards(createCards());
    setSelected([]);
    setMoves(0);
    setMatches(0);
    setWon(false);
    setLocked(false);
  };

  return (
    <main className="min-h-dvh flex flex-col px-5 py-6">
      <Link
        href="/"
        className="text-primary-dark font-semibold text-sm mb-4 inline-flex items-center gap-1"
      >
        ← Geri
      </Link>

      <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-2">Hafıza Oyunu</h1>

      {/* İstatistikler */}
      <div className="flex justify-center gap-6 text-sm text-gray-600 mb-5">
        <span>
          Hamle: <strong className="text-gray-800">{moves}</strong>
        </span>
        <span>
          Eşleşme:{" "}
          <strong className="text-gray-800">
            {matches}/{EMOJI_PAIRS.length}
          </strong>
        </span>
      </div>

      {/* Oyun Alanı */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 gap-2.5 w-full max-w-xs mx-auto">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="card-flip aspect-square"
              aria-label={card.flipped || card.matched ? card.emoji : "Kapalı kart"}
            >
              <div
                className={`card-flip-inner relative w-full h-full ${
                  card.flipped || card.matched ? "flipped" : ""
                }`}
              >
                {/* Arka yüz (kapalı) */}
                <div className="card-face absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-md active:scale-95 transition-transform">
                  <span className="text-white text-2xl">?</span>
                </div>
                {/* Ön yüz (açık) */}
                <div
                  className={`card-face card-back absolute inset-0 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ${
                    card.matched
                      ? "bg-green-100 scale-95"
                      : "bg-white"
                  }`}
                >
                  <span className="text-3xl">{card.emoji}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Kazandı */}
        {won && (
          <div className="mt-8 text-center animate-scale-in">
            <p className="text-4xl mb-2 animate-heartbeat">🎉</p>
            <p className="text-lg font-bold text-gray-800 mb-1">Tebrikler!</p>
            <p className="text-sm text-gray-500 mb-4">{moves} hamlede tamamladın!</p>
          </div>
        )}

        <button
          onClick={resetGame}
          className="mt-6 bg-gradient-to-r from-violet-400 to-purple-500 text-white font-bold py-3 px-8 rounded-full
            active:scale-95 transition-transform shadow-lg"
        >
          {won ? "Tekrar Oyna" : "Yeniden Başla"}
        </button>
      </div>
    </main>
  );
}
