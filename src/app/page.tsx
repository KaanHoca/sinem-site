import Link from "next/link";

const activities = [
  {
    href: "/sans-kutusu",
    icon: "🎁",
    title: "Şans Kutusu",
    desc: "Rastgele bir sürpriz aç",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
  },
  {
    href: "/hafiza-oyunu",
    icon: "🧠",
    title: "Hafıza Oyunu",
    desc: "Kartları eşleştir",
    color: "from-violet-400 to-purple-500",
    bg: "bg-violet-50",
  },
  {
    href: "/mesaj-kutusu",
    icon: "💌",
    title: "Mesaj Kutusu",
    desc: "Sana özel notlar",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    href: "/kelime-oyunu",
    icon: "🔤",
    title: "Kelime Oyunu",
    desc: "İngilizce pratik yap",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col">
      {/* Yeni mektup bildirimi */}
      <div className="px-5 pt-5">
        <Link
          href="/mektup"
          className="group block max-w-md mx-auto bg-gradient-to-r from-rose-100 via-pink-100 to-violet-100
            rounded-2xl p-4 shadow-md animate-pulse-glow active:scale-[0.98] transition-transform
            border border-white/60 relative overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <span className="text-3xl inline-block animate-heartbeat">💌</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-primary-dark font-semibold uppercase tracking-wide">
                Yeni bildirim
              </p>
              <p className="text-sm font-bold text-gray-800 truncate">
                Yeni bir mektubunuz var
              </p>
            </div>
            <span className="text-primary-dark text-lg shrink-0 group-active:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-10 pb-12 text-center overflow-hidden">
        {/* Floating emojis */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {["☕", "📚", "💜", "🌸", "✨"].map((emoji, i) => (
            <span
              key={i}
              className="absolute text-2xl sm:text-3xl opacity-40 animate-float"
              style={{
                left: `${[10, 80, 30, 65, 50][i]}%`,
                top: `${[15, 25, 60, 45, 75][i]}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        <p className="text-sm text-primary-dark font-semibold tracking-wide uppercase mb-2 animate-fade-in-up">
          Mola zamanı geldi mi?
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in-up stagger-1">
          Hoş geldin{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Sinem
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-xs animate-fade-in-up stagger-2">
          Biraz kafa dağıt, gülümse, sonra yine fethedersin o sınavı.
        </p>
      </section>

      {/* Menü */}
      <section className="flex-1 px-5 pb-10">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {activities.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${item.bg} rounded-3xl p-5 flex flex-col items-center text-center
                active:scale-95 transition-transform duration-150
                shadow-sm hover:shadow-md
                animate-scale-in`}
              style={{ animationDelay: `${0.3 + i * 0.1}s`, opacity: 0 }}
            >
              <span className="text-4xl mb-3">{item.icon}</span>
              <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-400">
        <p className="font-hand text-lg text-primary">seni seviyorum 💜</p>
      </footer>
    </main>
  );
}
