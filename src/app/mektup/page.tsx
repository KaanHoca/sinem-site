"use client";

import Link from "next/link";
import { useState } from "react";

export default function MektupPage() {
  const [acildi, setAcildi] = useState(false);

  return (
    <main className="min-h-dvh flex flex-col items-center px-5 py-8 relative overflow-hidden">
      {/* Arka plan kalpleri */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {["💜", "💌", "🌸", "✨", "💗"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-2xl sm:text-3xl opacity-30 animate-float"
            style={{
              left: `${[8, 85, 20, 72, 45][i]}%`,
              top: `${[12, 28, 68, 50, 82][i]}%`,
              animationDelay: `${i * 1.1}s`,
              animationDuration: `${3 + i * 0.6}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Üst bar */}
      <div className="w-full max-w-md flex items-center justify-between relative z-10">
        <Link
          href="/"
          className="text-sm text-primary-dark font-semibold flex items-center gap-1 active:scale-95 transition-transform"
        >
          ← Geri
        </Link>
        <span className="text-xs text-gray-400 font-hand text-lg">sana özel</span>
      </div>

      {/* İçerik */}
      <section className="flex-1 w-full max-w-md flex flex-col items-center justify-center py-8 relative z-10">
        {!acildi ? (
          // Kapalı zarf
          <button
            onClick={() => setAcildi(true)}
            className="flex flex-col items-center gap-6 animate-fade-in-up active:scale-95 transition-transform"
            aria-label="Mektubu aç"
          >
            <div className="relative">
              {/* Zarf */}
              <div className="w-64 h-44 sm:w-72 sm:h-48 bg-gradient-to-br from-rose-100 to-pink-200 rounded-lg shadow-xl animate-pulse-glow relative overflow-hidden">
                {/* Zarf kapağı (üçgen) */}
                <div
                  className="absolute inset-x-0 top-0 h-1/2"
                  style={{
                    background: "linear-gradient(135deg, #fecdd3 0%, #fbcfe8 100%)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                />
                {/* Mühür */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg animate-heartbeat">
                  <span className="text-2xl">💜</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="font-hand text-2xl text-primary-dark mb-1">
                Sana bir mektubum var
              </p>
              <p className="text-xs text-gray-500">dokun ve aç ✨</p>
            </div>
          </button>
        ) : (
          // Açık mektup — kağıt
          <article
            className="w-full bg-[#fffdf7] rounded-2xl shadow-2xl p-7 sm:p-9 animate-scale-in relative"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 31px, rgba(232, 121, 160, 0.08) 32px)",
            }}
          >
            {/* Üst süsleme */}
            <div className="text-center mb-5">
              <span className="inline-block text-3xl animate-heartbeat">💌</span>
            </div>

            {/* Selamlama */}
            <p className="font-hand text-3xl text-primary-dark mb-5 animate-fade-in-up">
              Aşkım,
            </p>

            {/* METİN ALANI — buraya kendi metnini yaz */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-base animate-fade-in-up stagger-2">
              <p>
                Her ne yaşadıysan ve benimle bir şekilde paylaşamadıysan bunun için yanında olmadadığım için üzgünüm.
              </p>

              <p>
                Eğer bugün seni kıracak bir şey söylediysem gerçekten çok özür dilerim.
              </p>

              <p>
                Amacım hiçbir zaman seni üzmek değil ve seni çok seviyorum.
                Not: Mektup okunduktan sonra kendini imha etmeyecektir. Henüz böyle bir teknoloji yok :D
              </p>
            </div>

            {/* İmza */}
            <div className="mt-8 text-right animate-fade-in-up stagger-3">
              <p className="font-hand text-2xl text-accent-dark">Seni seviyorum,</p>
              <p className="font-hand text-3xl text-primary-dark mt-1">Kaan 💜</p>
            </div>

            {/* Alt süsleme */}
            <div className="mt-6 flex justify-center gap-2 text-lg opacity-60">
              <span>🌸</span>
              <span>✨</span>
              <span>💜</span>
              <span>✨</span>
              <span>🌸</span>
            </div>
          </article>
        )}
      </section>

      {acildi && (
        <button
          onClick={() => setAcildi(false)}
          className="text-xs text-gray-400 hover:text-primary-dark transition-colors relative z-10 mb-2"
        >
          mektubu kapat
        </button>
      )}
    </main>
  );
}
