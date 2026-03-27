// ======================================
// KELİME OYUNU HAVUZU
// ======================================
// level: A1, A2, B1, B2, C1, C2
// Yeni kelime eklemek için en alta kopyala yapıştır:
//   { english: "WORD", turkish: "Anlam", hint: "İpucu", level: "A1" },

export interface Word {
  english: string;
  turkish: string;
  hint: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

export const words: Word[] = [
  // ========================
  // A1 — Başlangıç
  // ========================
  { english: "APPLE", turkish: "Elma", hint: "Kırmızı veya yeşil meyve", level: "A1" },
  { english: "WATER", turkish: "Su", hint: "İç lütfen!", level: "A1" },
  { english: "BREAD", turkish: "Ekmek", hint: "Her sofraya lazım", level: "A1" },
  { english: "HOUSE", turkish: "Ev", hint: "İçinde yaşadığın yer", level: "A1" },
  { english: "HAPPY", turkish: "Mutlu", hint: "Bu siteyi görünce hissettiğin", level: "A1" },
  { english: "FRIEND", turkish: "Arkadaş", hint: "Yanında olan kişi", level: "A1" },
  { english: "FAMILY", turkish: "Aile", hint: "En değerli varlık", level: "A1" },
  { english: "SCHOOL", turkish: "Okul", hint: "Öğretmen olunca her gün gideceğin yer", level: "A1" },
  { english: "MUSIC", turkish: "Müzik", hint: "Manifest dinlerken", level: "A1" },
  { english: "DREAM", turkish: "Rüya / Hayal", hint: "Uyurken veya gözlerin açıkken gördüğün", level: "A1" },
  { english: "CLOUD", turkish: "Bulut", hint: "Gökyüzündeki pamuk gibi şey", level: "A1" },
  { english: "GARDEN", turkish: "Bahçe", hint: "Çiçeklerin olduğu yer", level: "A1" },
  { english: "WINDOW", turkish: "Pencere", hint: "Dışarıya baktığın cam", level: "A1" },
  { english: "MORNING", turkish: "Sabah", hint: "Günün başlangıcı", level: "A1" },
  { english: "SUMMER", turkish: "Yaz", hint: "En sıcak mevsim", level: "A1" },
  { english: "WINTER", turkish: "Kış", hint: "Kar yağan mevsim", level: "A1" },
  { english: "SPRING", turkish: "İlkbahar", hint: "Çiçeklerin açtığı mevsim", level: "A1" },
  { english: "FLOWER", turkish: "Çiçek", hint: "Bahçede yetişen güzel şeyler", level: "A1" },
  { english: "NIGHT", turkish: "Gece", hint: "Yıldızların göründüğü zaman", level: "A1" },
  { english: "SMILE", turkish: "Gülümsemek", hint: "Bu mesajı okurken yaptığın şey", level: "A1" },
  { english: "SUGAR", turkish: "Şeker", hint: "Çayına koyduğun — tıpkı sen", level: "A1" },
  { english: "HEART", turkish: "Kalp", hint: "Seni sevenin organı", level: "A1" },
  { english: "LIGHT", turkish: "Işık", hint: "Karanlığı yenen şey", level: "A1" },
  { english: "GREEN", turkish: "Yeşil", hint: "Yaprakların rengi", level: "A1" },
  { english: "RIVER", turkish: "Nehir", hint: "Akan su kütlesi", level: "A1" },

  // ========================
  // A2 — Temel
  // ========================
  { english: "BUTTERFLY", turkish: "Kelebek", hint: "Uçan renkli böcek", level: "A2" },
  { english: "RAINBOW", turkish: "Gökkuşağı", hint: "Yağmurdan sonra çıkan renkli şey", level: "A2" },
  { english: "SUNSHINE", turkish: "Güneş ışığı", hint: "Sabahları seni uyandıran", level: "A2" },
  { english: "TEACHER", turkish: "Öğretmen", hint: "Yakında senin mesleğin olacak", level: "A2" },
  { english: "MOUNTAIN", turkish: "Dağ", hint: "Yüksek doğa yapısı", level: "A2" },
  { english: "VILLAGE", turkish: "Köy", hint: "Şehirden küçük yerleşim yeri", level: "A2" },
  { english: "CASTLE", turkish: "Kale", hint: "Ortaçağda kralların yaşadığı yer", level: "A2" },
  { english: "ISLAND", turkish: "Ada", hint: "Etrafı sularla çevrili kara parçası", level: "A2" },
  { english: "BRIDGE", turkish: "Köprü", hint: "İki yakayı birleştiren yapı", level: "A2" },
  { english: "FOREST", turkish: "Orman", hint: "Ağaçlarla dolu yer", level: "A2" },
  { english: "OCEAN", turkish: "Okyanus", hint: "Çok büyük su kütlesi", level: "A2" },
  { english: "DESERT", turkish: "Çöl", hint: "Kumlarla dolu sıcak yer", level: "A2" },
  { english: "STORM", turkish: "Fırtına", hint: "Rüzgâr ve yağmurun birleşimi", level: "A2" },
  { english: "LIBRARY", turkish: "Kütüphane", hint: "Kitaplarla dolu sessiz yer", level: "A2" },
  { english: "MUSEUM", turkish: "Müze", hint: "Tarihi eserlerin sergilendiği yer", level: "A2" },
  { english: "RECIPE", turkish: "Tarif", hint: "Yemek yapmak için takip ettiğin", level: "A2" },
  { english: "ABROAD", turkish: "Yurt dışı", hint: "Ülke sınırlarının ötesi", level: "A2" },
  { english: "CANDLE", turkish: "Mum", hint: "Romantik akşamlarda yakılan", level: "A2" },
  { english: "PLANET", turkish: "Gezegen", hint: "Dünya bunlardan biri", level: "A2" },
  { english: "PUZZLE", turkish: "Bulmaca", hint: "Çözmesi eğlenceli olan şey", level: "A2" },
  { english: "SILVER", turkish: "Gümüş", hint: "Altından sonra gelen değerli metal", level: "A2" },
  { english: "GENTLE", turkish: "Nazik / Yumuşak", hint: "Senin karakterinin en güzel yanı", level: "A2" },
  { english: "BLANKET", turkish: "Battaniye", hint: "Soğuk gecelerde seni saran şey", level: "A2" },
  { english: "JOURNEY", turkish: "Yolculuk", hint: "Başladığın yer ile varacağın yer arası", level: "A2" },
  { english: "PROMISE", turkish: "Söz", hint: "Tutulması gereken şey", level: "A2" },
  { english: "PERHAPS", turkish: "Belki", hint: "Kesin olmayan bir olasılık", level: "A2" },

  // ========================
  // B1 — Orta
  // ========================
  { english: "ADVENTURE", turkish: "Macera", hint: "Hayatı güzel yapan şey", level: "B1" },
  { english: "FREEDOM", turkish: "Özgürlük", hint: "Sınav bitince hissedeceğin", level: "B1" },
  { english: "COURAGE", turkish: "Cesaret", hint: "KPSS'ye hazırlanırken sende bol olan", level: "B1" },
  { english: "PATIENCE", turkish: "Sabır", hint: "Sınav hazırlığında en çok gereken", level: "B1" },
  { english: "KNOWLEDGE", turkish: "Bilgi", hint: "Ders çalışarak kazandığın", level: "B1" },
  { english: "TREASURE", turkish: "Hazine", hint: "Korsanların aradığı — tıpkı sen", level: "B1" },
  { english: "DIAMOND", turkish: "Elmas", hint: "Çok değerli bir taş", level: "B1" },
  { english: "WHISPER", turkish: "Fısıltı", hint: "Sessizce konuşmak", level: "B1" },
  { english: "HARMONY", turkish: "Uyum", hint: "Müzikte ve ilişkilerde güzel olan", level: "B1" },
  { english: "PASSION", turkish: "Tutku", hint: "İşini severek yapmanın sırrı", level: "B1" },
  { english: "DELIGHT", turkish: "Keyif / Sevinç", hint: "Mola verince hissettiğin", level: "B1" },
  { english: "STRENGTH", turkish: "Güç / Kuvvet", hint: "Sende fazlasıyla olan", level: "B1" },
  { english: "GRATEFUL", turkish: "Minnettar", hint: "Sana sahip olduğum için hissettiğim", level: "B1" },
  { english: "BLOSSOM", turkish: "Çiçek açmak", hint: "İlkbaharda ağaçların yaptığı", level: "B1" },
  { english: "ACHIEVE", turkish: "Başarmak", hint: "KPSS'de yapacağın şey", level: "B1" },
  { english: "CURIOUS", turkish: "Meraklı", hint: "Yeni şeyler öğrenmek isteyen", level: "B1" },
  { english: "ANCIENT", turkish: "Antik / Çok eski", hint: "Binlerce yıl öncesine ait", level: "B1" },
  { english: "BREATHE", turkish: "Nefes almak", hint: "Stresli anlarda derin derin yap", level: "B1" },
  { english: "MIRACLE", turkish: "Mucize", hint: "Beklenmedik güzel olay", level: "B1" },
  { english: "MYSTERY", turkish: "Gizem", hint: "Çözülmeyi bekleyen sır", level: "B1" },
  { english: "HORIZON", turkish: "Ufuk", hint: "Gökyüzü ile yerin birleştiği çizgi", level: "B1" },
  { english: "COMFORT", turkish: "Konfor / Rahatlık", hint: "Battaniyenin altında hissettiğin", level: "B1" },
  { english: "IMAGINE", turkish: "Hayal etmek", hint: "Gözlerini kapayıp yaptığın", level: "B1" },
  { english: "SHELTER", turkish: "Sığınak / Barınak", hint: "Güvende hissettiren yer", level: "B1" },
  { english: "GENUINE", turkish: "Gerçek / Samimi", hint: "Sahte olmayan, içten", level: "B1" },
  { english: "BENEATH", turkish: "Altında", hint: "Bir şeyin alt kısmında", level: "B1" },
  { english: "WANDER", turkish: "Dolaşmak", hint: "Amaçsızca yürümek", level: "B1" },
  { english: "SPARKLE", turkish: "Parıldamak", hint: "Yıldızların yaptığı gibi", level: "B1" },
  { english: "GLIMPSE", turkish: "Kısa bakış", hint: "Anlık bir görüntü yakalamak", level: "B1" },

  // ========================
  // B2 — Orta Üstü
  // ========================
  { english: "RESILIENCE", turkish: "Dayanıklılık", hint: "Düşüp kalktıktan sonra devam etme gücü", level: "B2" },
  { english: "NOSTALGIA", turkish: "Nostalji", hint: "Geçmişe duyulan tatlı özlem", level: "B2" },
  { english: "SOLITUDE", turkish: "Yalnızlık / Huzurlu yalnızlık", hint: "Kendi başına olmanın güzel hali", level: "B2" },
  { english: "AMBITIOUS", turkish: "Hırslı / Azimli", hint: "Büyük hedefleri olan — tıpkı sen", level: "B2" },
  { english: "VULNERABLE", turkish: "Savunmasız / Kırılgan", hint: "Duygusal olarak açık olmak", level: "B2" },
  { english: "INEVITABLE", turkish: "Kaçınılmaz", hint: "Senin başarın gibi — kesin olacak", level: "B2" },
  { english: "COINCIDENCE", turkish: "Tesadüf", hint: "Planlanmadan olan şey — tanışmamız gibi", level: "B2" },
  { english: "ENTHUSIASM", turkish: "Coşku / Heyecan", hint: "Sevdiğin şeyi yaparken hissettiğin", level: "B2" },
  { english: "PERSPECTIVE", turkish: "Bakış açısı", hint: "Olaylara farklı pencereden bakmak", level: "B2" },
  { english: "MAGNIFICENT", turkish: "Muhteşem", hint: "Hayranlık uyandıran güzellikte", level: "B2" },
  { english: "CONSCIENCE", turkish: "Vicdan", hint: "Doğruyu yanlıştan ayıran iç ses", level: "B2" },
  { english: "ELABORATE", turkish: "Ayrıntılı / Detaylandırmak", hint: "Detaylara inen, kapsamlı", level: "B2" },
  { english: "ABUNDANT", turkish: "Bol / Bereketli", hint: "Çok fazla miktarda olan", level: "B2" },
  { english: "COMPROMISE", turkish: "Uzlaşma", hint: "İki tarafın ortada buluşması", level: "B2" },
  { english: "DILIGENT", turkish: "Çalışkan / Gayretli", hint: "Senin en belirgin özelliğin", level: "B2" },
  { english: "ELOQUENT", turkish: "Belagatli / Güzel konuşan", hint: "Öğretmen olunca olacağın", level: "B2" },
  { english: "EMPATHY", turkish: "Empati", hint: "Başkasının yerine kendini koyabilmek", level: "B2" },
  { english: "CONTEMPLATE", turkish: "Derin düşünmek", hint: "Uzun uzun kafa yormak", level: "B2" },
  { english: "FLOURISH", turkish: "Gelişmek / Serpilmek", hint: "Çiçek gibi açıp büyümek", level: "B2" },
  { english: "GRATITUDE", turkish: "Şükran / Minnettarlık", hint: "Teşekkür duygusunun derin hali", level: "B2" },
  { english: "ILLUMINATE", turkish: "Aydınlatmak", hint: "Karanlığa ışık tutmak", level: "B2" },
  { english: "MELANCHOLY", turkish: "Hüzün / Melankoli", hint: "Tatlı bir üzüntü hali", level: "B2" },
  { english: "PERSISTENT", turkish: "Inatçı / Kararlı", hint: "Vazgeçmeyen — tam senlik kelime", level: "B2" },
  { english: "SPONTANEOUS", turkish: "Kendiliğinden / Anlık", hint: "Plansız, o an karar verilen", level: "B2" },
  { english: "TRANQUIL", turkish: "Huzurlu / Sakin", hint: "Sınavdan sonra olacağın", level: "B2" },
  { english: "WHIMSICAL", turkish: "Kaprisli / Tuhaf ama sevimli", hint: "Eğlenceli ve beklenmedik", level: "B2" },

  // ========================
  // C1 — İleri
  // ========================
  { english: "QUINTESSENTIAL", turkish: "Mükemmel örnek / Özünü yansıtan", hint: "Bir şeyin en saf hali", level: "C1" },
  { english: "UNPRECEDENTED", turkish: "Emsalsiz / Daha önce görülmemiş", hint: "İlk kez olan, benzeri olmayan", level: "C1" },
  { english: "JUXTAPOSITION", turkish: "Yan yana koyma / Karşılaştırma", hint: "İki zıt şeyi yanyana koymak", level: "C1" },
  { english: "AMBIVALENCE", turkish: "İkirciklilik / Kararsızlık", hint: "Aynı anda iki zıt duygu hissetmek", level: "C1" },
  { english: "IDIOSYNCRASY", turkish: "Kendine özgü davranış", hint: "Kişiye has tuhaf alışkanlık", level: "C1" },
  { english: "MAGNANIMOUS", turkish: "Cömert / Yüce gönüllü", hint: "Affedici ve büyük kalpli", level: "C1" },
  { english: "SURREPTITIOUS", turkish: "Gizli / El altından yapılan", hint: "Kimseye fark ettirmeden yapılan", level: "C1" },
  { english: "ACQUIESCE", turkish: "Sessizce kabul etmek", hint: "İtiraz etmeden razı olmak", level: "C1" },
  { english: "UBIQUITOUS", turkish: "Her yerde olan", hint: "Nereye baksan karşına çıkan", level: "C1" },
  { english: "EPHEMERAL", turkish: "Geçici / Kısa ömürlü", hint: "Çok kısa süren güzellik", level: "C1" },
  { english: "SERENDIPITY", turkish: "Şans eseri güzel keşif", hint: "Aramadan bulmak — seni bulmam gibi", level: "C1" },
  { english: "BENEVOLENT", turkish: "Hayırsever / İyiliksever", hint: "İyilik yapmayı seven kişi", level: "C1" },
  { english: "CLANDESTINE", turkish: "Gizli / Yasadışı gizlilik", hint: "Gizlice yürütülen operasyon gibi", level: "C1" },
  { english: "CONUNDRUM", turkish: "İkilem / Çözülmesi zor problem", hint: "Kafayı karıştıran zor soru", level: "C1" },
  { english: "DICHOTOMY", turkish: "İkiye bölünme / Zıtlık", hint: "İki karşıt parçaya ayrılma", level: "C1" },
  { english: "FASTIDIOUS", turkish: "Titiz / Müşkülpesent", hint: "Her detaya dikkat eden", level: "C1" },
  { english: "GREGARIOUS", turkish: "Sosyal / Cana yakın", hint: "İnsanlarla vakit geçirmeyi seven", level: "C1" },
  { english: "HARBINGER", turkish: "Habercisi / Müjdeci", hint: "Yaklaşan bir şeyin işareti", level: "C1" },
  { english: "IMPECCABLE", turkish: "Kusursuz / Mükemmel", hint: "Hiçbir hatası olmayan", level: "C1" },
  { english: "METICULOUS", turkish: "Titiz / Detaycı", hint: "Her ayrıntıya özen gösteren", level: "C1" },
  { english: "NONCHALANT", turkish: "Kayıtsız / Umursamaz görünen", hint: "Aldırışsız gibi davranan", level: "C1" },
  { english: "PARADOX", turkish: "Çelişki / Paradoks", hint: "Kendi içinde çelişen ama doğru olan", level: "C1" },
  { english: "PRECARIOUS", turkish: "Tehlikeli / Güvensiz", hint: "Her an değişebilecek dengesiz durum", level: "C1" },
  { english: "RETICENT", turkish: "Ağzı sıkı / Ketum", hint: "Az konuşan, çekingen", level: "C1" },
  { english: "SAGACIOUS", turkish: "Bilge / Ferasetli", hint: "Derin kavrayışlı ve akıllıca", level: "C1" },
  { english: "TENACIOUS", turkish: "İnatçı / Azimli", hint: "Asla pes etmeyen — sen işte!", level: "C1" },
  { english: "VINDICATE", turkish: "Haklı çıkarmak / Aklamak", hint: "Birinin masum olduğunu kanıtlamak", level: "C1" },
  { english: "CACOPHONY", turkish: "Kulak tırmalayan ses", hint: "Ahenksizcarpışan sesler", level: "C1" },

  // ========================
  // C2 — Ustalık
  // ========================
  { english: "SESQUIPEDALIAN", turkish: "Uzun kelime kullanan", hint: "İronik: bu kelimenin kendisi uzun", level: "C2" },
  { english: "DEFENESTRATION", turkish: "Pencereden atma", hint: "Evet, bunun için özel bir kelime var", level: "C2" },
  { english: "ONOMATOPOEIA", turkish: "Yansıma sözcük", hint: "Buzz, splash, meow gibi ses taklit eden kelimeler", level: "C2" },
  { english: "PUSILLANIMOUS", turkish: "Korkak / Yüreksiz", hint: "Cesaretin tam tersi", level: "C2" },
  { english: "VERISIMILITUDE", turkish: "Gerçeğe benzerlik", hint: "Bir hikâyenin inandırıcılığı", level: "C2" },
  { english: "OBSEQUIOUS", turkish: "Yaltakçı / Dalkavuk", hint: "Aşırı itaatkâr ve yaranmacı", level: "C2" },
  { english: "LOQUACIOUS", turkish: "Çok konuşkan", hint: "Susmak bilmeyen biri", level: "C2" },
  { english: "PERSPICACIOUS", turkish: "Keskin zekâlı / Anlayışlı", hint: "Derini gören, çabuk kavrayan", level: "C2" },
  { english: "SUPERCILIOUS", turkish: "Kibirli / Küçümseyen", hint: "Tepeden bakan tavır", level: "C2" },
  { english: "PULCHRITUDINOUS", turkish: "Son derece güzel", hint: "Fiziksel güzelliği anlatan çok nadir kelime", level: "C2" },
  { english: "SYCOPHANT", turkish: "Dalkavuk / Yağcı", hint: "Çıkar için pohpohlayan kişi", level: "C2" },
  { english: "INEFFABLE", turkish: "Tarif edilemez", hint: "Kelimelerle anlatılamayacak kadar güzel", level: "C2" },
  { english: "RECALCITRANT", turkish: "İnatçı / Dik kafalı", hint: "Otoriteye karşı gelen", level: "C2" },
  { english: "VICISSITUDE", turkish: "Değişkenlik / Iniş çıkış", hint: "Hayatın dalgalı doğası", level: "C2" },
  { english: "SCHADENFREUDE", turkish: "Başkasının talihsizliğinden keyif alma", hint: "Almancadan geçen karanlık duygu", level: "C2" },
  { english: "CIRCUMLOCUTION", turkish: "Dolambaçlı anlatım", hint: "Doğrudan söylemek yerine dolanmak", level: "C2" },
  { english: "CONFLAGRATION", turkish: "Büyük yangın", hint: "Kontrol edilemez dev ateş", level: "C2" },
  { english: "EQUANIMITY", turkish: "Soğukkanlılık / Sükunet", hint: "Zor anlarda bile sakin kalabilmek", level: "C2" },
  { english: "MAGNILOQUENT", turkish: "Tumturaklı konuşan", hint: "Abartılı ve gösterişli üslup", level: "C2" },
  { english: "TERGIVERSATION", turkish: "Dönek davranış / Kaçamaklı tavır", hint: "Fikrini sürekli değiştirip kaçınma", level: "C2" },
];
