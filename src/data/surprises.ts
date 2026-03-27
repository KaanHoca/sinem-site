export interface Surprise {
  icon: string;
  category: string;
  text: string;
}

// ======================================
// ŞANS KUTUSU İÇERİKLERİ
// ======================================
// Buradan istediğin gibi ekle, çıkar, değiştir.
// Her sürprizin 3 alanı var:
//   icon     → Emoji (kutu açılınca görünür)
//   category → Kategori etiketi (Motivasyon, İltifat, Aktivite, vb.)
//   text     → Mesaj içeriği
//
// Yeni bir tane eklemek için en alta kopyala yapıştır:
//   { icon: "🎉", category: "Kategori", text: "Mesajın buraya" },

export const surprises = [
  {
    icon: "💪",
    category: "Motivasyon",
    text: "Senin isteyip de başaramayacağın hiçbir şey yok. Senin inanılmaz bir gücün ve SEVGİN DE VAR!",
  },
  {
    icon: "🌟",
    category: "İltifat",
    text: "Dünyanın en güzel, en akıllı, en azimli, en tatlı, en seksi, en mükemmel, en harika, en mükemmel (bunu söylemiştim sanırım) insanıyla nişanlı olduğum için kendimi çok şanslı hissediyorum.",
  },
  {
    icon: "😄",
    category: "Bilgi",
    text: "İngilizce'de en uzun kelime 'smiles' diye bir şey duydum, çünkü iki S arasında bir mil var!",
  },
  {
    icon: "🧘",
    category: "Aktivite",
    text: "Ayağa kalk, 30 saniye geril. Omuzlarını 5 kez döndür. Ha bir de su iç :)",
  },
  {
    icon: "🎵",
    category: "Öneri",
    text: "Aç şöyle bir manifest şarkısı biraz dinlen rahatla şekerim",
  },
  {
    icon: "💜",
    category: "Mesaj",
    text: "Özledimmmmmmmmmm (sen de özledin dimiii)",
  },
  {
    icon: "🍫",
    category: "Öneri",
    text: "En kötü sıcak çukulata bile en kötü kahveden iyi gibi...",
  },
  {
    icon: "📸",
    category: "Aktivite",
    text: "2 dk dışarı bakar mısın? Bence iyi gelecek.",
  },
  {
    icon: "🤗",
    category: "Mesaj",
    text: "Keşke şu an yanında olsam da sana sarılabilsem.",
  },
  {
    icon: "🎯",
    category: "Motivasyon",
    text: "İşaretlediğin her sorudan sonra beni ne kadar sevdiğini düşünnnn",
  },
  {
    icon: "🌈",
    category: "Bilgi",
    text: "Gökkuşağının İngilizce renklerini hatırlıyor musun? ROY G. BIV: Red, Orange, Yellow, Green, Blue, Indigo, Violet! (bu cümleyi ai yazmadı yemin ederim)",
  },
  {
    icon: "✈️",
    category: "Hayal",
    text: "Sınav bitince birlikte nereye gitmek istersin? Gözlerini kapa ve 10 saniye hayal et bebeğimmm",
  },
  {
    icon: "🐱",
    category: "Aktivite",
    text: "Telefonundaki en komik fotoğrafımızı bul ve biraz gül :D (istersen bana atabilirsin şekerim)",
  },
  {
    icon: "💐",
    category: "İltifat",
    text: "En sonki çözdüğün soru acayip iyiydi şekerim",
  },
  {
    icon: "🧊",
    category: "Öneri",
    text: "Su iç.. Lütfennnnnn",
  },
  {
    icon: "📝",
    category: "Motivasyon",
    text: "Bence o sınavın içinden geçeceksinnnnn",
  },
];
