"use client";

import { useState, useCallback, useRef, useMemo } from "react";
import Link from "next/link";
import { words, type Word } from "@/data/words";

type Level = Word["level"];

const ALL_LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const levelColors: Record<Level, { bg: string; text: string; gradient: string }> = {
  A1: { bg: "bg-green-100", text: "text-green-700", gradient: "from-green-400 to-emerald-500" },
  A2: { bg: "bg-teal-100", text: "text-teal-700", gradient: "from-teal-400 to-cyan-500" },
  B1: { bg: "bg-blue-100", text: "text-blue-700", gradient: "from-blue-400 to-indigo-500" },
  B2: { bg: "bg-violet-100", text: "text-violet-700", gradient: "from-violet-400 to-purple-500" },
  C1: { bg: "bg-orange-100", text: "text-orange-700", gradient: "from-orange-400 to-red-500" },
  C2: { bg: "bg-red-100", text: "text-red-700", gradient: "from-red-500 to-rose-600" },
};

function scrambleWord(word: string): string {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const result = arr.join("");
  return result === word ? scrambleWord(word) : result;
}

export default function KelimeOyunu() {
  const [selectedLevels, setSelectedLevels] = useState<Set<Level>>(new Set(ALL_LEVELS));
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredIndices = useMemo(
    () => words.map((w, i) => ({ w, i })).filter(({ w }) => selectedLevels.has(w.level)).map(({ i }) => i),
    [selectedLevels]
  );

  const getRandomIndex = useCallback(
    (exclude: Set<number>) => {
      const available = filteredIndices.filter((i) => !exclude.has(i));
      if (available.length === 0) return filteredIndices[Math.floor(Math.random() * filteredIndices.length)];
      return available[Math.floor(Math.random() * available.length)];
    },
    [filteredIndices]
  );

  const [wordIndex, setWordIndex] = useState(() => {
    const idx = filteredIndices[Math.floor(Math.random() * filteredIndices.length)];
    return idx ?? 0;
  });
  const [scrambled, setScrambled] = useState(() => scrambleWord(words[wordIndex].english));

  const currentWord = words[wordIndex];
  const colors = levelColors[currentWord.level];

  const nextWord = useCallback(() => {
    const newUsed = new Set(usedIndices).add(wordIndex);
    if (filteredIndices.every((i) => newUsed.has(i))) newUsed.clear();
    setUsedIndices(newUsed);

    const newIndex = getRandomIndex(newUsed);
    setWordIndex(newIndex);
    setScrambled(scrambleWord(words[newIndex].english));
    setInput("");
    setShowHint(false);
    setResult(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [wordIndex, usedIndices, filteredIndices, getRandomIndex]);

  const checkAnswer = useCallback(() => {
    if (!input.trim()) return;
    if (input.trim().toUpperCase() === currentWord.english) {
      setResult("correct");
      const levelBonus: Record<Level, number> = { A1: 5, A2: 8, B1: 10, B2: 15, C1: 20, C2: 25 };
      setScore((s) => s + (showHint ? Math.floor(levelBonus[currentWord.level] / 2) : levelBonus[currentWord.level]));
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

  const toggleLevel = (level: Level) => {
    setSelectedLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) {
        if (next.size === 1) return prev;
        next.delete(level);
      } else {
        next.add(level);
      }
      return next;
    });
  };

  // Seviye değişince yeni kelime
  const resetWithLevels = useCallback(() => {
    setUsedIndices(new Set());
    const newIndex = filteredIndices[Math.floor(Math.random() * filteredIndices.length)] ?? 0;
    setWordIndex(newIndex);
    setScrambled(scrambleWord(words[newIndex].english));
    setInput("");
    setShowHint(false);
    setResult(null);
  }, [filteredIndices]);

  return (
    <main className="min-h-dvh flex flex-col px-5 py-6">
      <Link
        href="/"
        className="text-primary-dark font-semibold text-sm mb-4 inline-flex items-center gap-1"
      >
        ← Geri
      </Link>

      <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-1">Kelime Oyunu</h1>
      <p className="text-sm text-gray-500 text-center mb-4">
        Karışık harflerden İngilizce kelimeyi bul!
      </p>

      {/* Seviye Filtresi */}
      <div className="flex justify-center gap-1.5 mb-6 flex-wrap">
        {ALL_LEVELS.map((level) => (
          <button
            key={level}
            onClick={() => {
              toggleLevel(level);
              setTimeout(resetWithLevels, 0);
            }}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all
              ${
                selectedLevels.has(level)
                  ? `${levelColors[level].bg} ${levelColors[level].text}`
                  : "bg-gray-100 text-gray-400"
              }`}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Skor + Seviye */}
        <div className="flex items-center gap-3 mb-6 text-sm flex-wrap justify-center">
          <span className="bg-emerald-100 text-emerald-700 font-bold px-4 py-1.5 rounded-full">
            Skor: {score}
          </span>
          <span className={`${colors.bg} ${colors.text} font-bold px-4 py-1.5 rounded-full`}>
            {currentWord.level}
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
                className={`w-9 h-11 sm:w-10 sm:h-12 bg-gradient-to-b ${colors.gradient} text-white rounded-xl
                  flex items-center justify-center text-base sm:text-lg font-extrabold shadow-md
                  animate-scale-in`}
                style={{ animationDelay: `${i * 0.04}s`, opacity: 0 }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* İpucu */}
          {showHint && (
            <div className="animate-fade-in-up text-sm text-gray-500 mb-2">
              <span className={`font-semibold ${colors.text}`}>İpucu:</span> {currentWord.hint}
              <br />
              <span className={`font-semibold ${colors.text}`}>Türkçesi:</span> {currentWord.turkish}
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
              className={`flex-1 bg-gradient-to-r ${colors.gradient} text-white font-bold py-3 rounded-full
                active:scale-95 transition-transform shadow-lg`}
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
