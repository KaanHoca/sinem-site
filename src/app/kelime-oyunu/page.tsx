"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";

interface Word {
  english: string;
  turkish: string;
  hint: string;
}

const words: Word[] = [
  { english: "BUTTERFLY", turkish: "Kelebek", hint: "Uçan renkli böcek" },
  { english: "SUNSHINE", turkish: "Güneş ışığı", hint: "Sabahları seni uyandıran" },
  { english: "COURAGE", turkish: "Cesaret", hint: "KPSS'ye hazırlanırken sende bol olan" },
  { english: "KNOWLEDGE", turkish: "Bilgi", hint: "Ders çalışarak kazandığın" },
  { english: "TEACHER", turkish: "Öğretmen", hint: "Yakında senin mesleğin olacak" },
  { english: "PATIENCE", turkish: "Sabır", hint: "Sınav hazırlığında en çok gereken" },
  { english: "RAINBOW", turkish: "Gökkuşağı", hint: "Yağmurdan sonra çıkan renkli şey" },
  { english: "ADVENTURE", turkish: "Macera", hint: "Hayatı güzel yapan şey" },
  { english: "FREEDOM", turkish: "Özgürlük", hint: "Sınav bitince hissedeceğin" },
  { english: "GRATEFUL", turkish: "Minnettar", hint: "Sana sahip olduğum için benim hissettiğim" },
  { english: "BLOSSOM", turkish: "Çiçek açmak", hint: "İlkbaharda ağaçların yaptığı" },
  { english: "DIAMOND", turkish: "Elmas", hint: "Çok değerli bir taş — tıpkı sen" },
  { english: "WHISPER", turkish: "Fısıltı", hint: "Sessizce konuşmak" },
  { english: "JOURNEY", turkish: "Yolculuk", hint: "Başladığın yer ile varacağın yer arasındaki süreç" },
  { english: "HARMONY", turkish: "Uyum", hint: "Müzikte ve ilişkilerde güzel olan" },
  { english: "TREASURE", turkish: "Hazine", hint: "Korsanların aradığı değerli şey" },
  { english: "PROMISE", turkish: "Söz", hint: "Tutulması gereken şey" },
  { english: "PASSION", turkish: "Tutku", hint: "İşini severek yapmanın sırrı" },
  { english: "DELIGHT", turkish: "Keyif", hint: "Mola verince hissettiğin" },
  { english: "STRENGTH", turkish: "Güç", hint: "Sende fazlasıyla olan" },
];

function scrambleWord(word: string): string {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const result = arr.join("");
  // Eğer aynıysa tekrar karıştır
  return result === word ? scrambleWord(word) : result;
}

function getRandomWordIndex(exclude: Set<number>): number {
  const available = Array.from({ length: words.length }, (_, i) => i).filter(
    (i) => !exclude.has(i)
  );
  if (available.length === 0) return Math.floor(Math.random() * words.length);
  return available[Math.floor(Math.random() * available.length)];
}

export default function KelimeOyunu() {
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  const [wordIndex, setWordIndex] = useState(() => getRandomWordIndex(new Set()));
  const [scrambled, setScrambled] = useState(() => scrambleWord(words[wordIndex].english));
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWord = words[wordIndex];

  const nextWord = useCallback(() => {
    const newUsed = new Set(usedIndices).add(wordIndex);
    if (newUsed.size >= words.length) newUsed.clear();
    setUsedIndices(newUsed);

    const newIndex = getRandomWordIndex(newUsed);
    setWordIndex(newIndex);
    setScrambled(scrambleWord(words[newIndex].english));
    setInput("");
    setShowHint(false);
    setResult(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [wordIndex, usedIndices]);

  const checkAnswer = useCallback(() => {
    if (!input.trim()) return;
    if (input.trim().toUpperCase() === currentWord.english) {
      setResult("correct");
      setScore((s) => s + (showHint ? 5 : 10));
      setStreak((s) => s + 1);
      setTimeout(nextWord, 1200);
    } else {
      setResult("wrong");
      setStreak(0);
      setTimeout(() => setResult(null), 1000);
    }
  }, [input, currentWord, showHint, nextWord]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") checkAnswer();
  };

  const skip = () => {
    setStreak(0);
    nextWord();
  };

  return (
    <main className="min-h-dvh flex flex-col px-5 py-6">
      <Link
        href="/"
        className="text-primary-dark font-semibold text-sm mb-4 inline-flex items-center gap-1"
      >
        ← Geri
      </Link>

      <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-1">Kelime Oyunu</h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        Karışık harflerden İngilizce kelimeyi bul!
      </p>

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Skor */}
        <div className="flex items-center gap-4 mb-8 text-sm">
          <span className="bg-emerald-100 text-emerald-700 font-bold px-4 py-1.5 rounded-full">
            Skor: {score}
          </span>
          {streak >= 2 && (
            <span className="bg-amber-100 text-amber-700 font-bold px-4 py-1.5 rounded-full animate-scale-in">
              {streak} seri! 🔥
            </span>
          )}
        </div>

        {/* Karışık kelime */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg w-full max-w-sm text-center mb-6">
          <div className="flex justify-center gap-1.5 flex-wrap mb-4">
            {scrambled.split("").map((letter, i) => (
              <span
                key={`${scrambled}-${i}`}
                className="w-10 h-12 bg-gradient-to-b from-emerald-400 to-teal-500 text-white rounded-xl
                  flex items-center justify-center text-lg font-extrabold shadow-md
                  animate-scale-in"
                style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* İpucu */}
          {showHint && (
            <div className="animate-fade-in-up text-sm text-gray-500 mb-2">
              <span className="font-semibold text-teal-600">İpucu:</span> {currentWord.hint}
              <br />
              <span className="font-semibold text-teal-600">Türkçesi:</span> {currentWord.turkish}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="w-full max-w-sm">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.toUpperCase())}
            onKeyDown={handleKeyDown}
            placeholder="Cevabını yaz..."
            className={`w-full text-center text-lg font-bold py-3 px-4 rounded-2xl border-2 outline-none transition-colors
              ${
                result === "correct"
                  ? "border-green-400 bg-green-50 text-green-700"
                  : result === "wrong"
                  ? "border-red-400 bg-red-50 text-red-700 animate-shake"
                  : "border-gray-200 bg-white focus:border-teal-400"
              }`}
            autoComplete="off"
            autoCapitalize="characters"
          />

          {/* Sonuç mesajı */}
          <div className="h-8 flex items-center justify-center mt-2">
            {result === "correct" && (
              <span className="text-green-600 font-bold text-sm animate-scale-in">
                Doğru! Harikasın! 🎉
              </span>
            )}
            {result === "wrong" && (
              <span className="text-red-500 font-bold text-sm animate-scale-in">
                Tekrar dene! 💪
              </span>
            )}
          </div>

          {/* Butonlar */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={checkAnswer}
              className="flex-1 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold py-3 rounded-full
                active:scale-95 transition-transform shadow-lg"
            >
              Kontrol Et
            </button>
            <button
              onClick={() => setShowHint(true)}
              disabled={showHint}
              className="bg-amber-100 text-amber-700 font-bold py-3 px-5 rounded-full
                active:scale-95 transition-transform disabled:opacity-40"
            >
              İpucu
            </button>
            <button
              onClick={skip}
              className="bg-gray-100 text-gray-600 font-bold py-3 px-5 rounded-full
                active:scale-95 transition-transform"
            >
              Pas
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
