"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/SplitText";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/hero.jpg",
    title: "MISTERI BABEL",
    subtitle: "Monumen Kesombongan & Asal Mula Bangsa-Bangsa",
    content: (
      <div className="mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-gray-300 font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Scroll ke bawah untuk mulai menjelajah
        </div>
      </div>
    ),
    isHero: true,
  },
  {
    id: 2,
    image: "/images/post_flood.jpg",
    title: "Awal Mula: Dunia Pasca-Air Bah",
    tag: "Bagian I",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Kisah epik ini mengambil latar waktu beberapa generasi setelah peristiwa <strong className="text-white">Air Bah (Nuh dan keluarganya)</strong> yang menyapu bersih peradaban lama. Pada masa pemulihan ini, umat manusia mulai kembali berkembang biak dan bertambah banyak, membentuk satu komunitas global yang erat.
        </p>
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500">
          <p className="text-white font-medium mb-2">Satu Bahasa, Satu Identitas</p>
          <p className="text-sm md:text-base">
            Kondisi dunia saat itu memiliki satu ciri utama yang sangat penting: <strong>seluruh umat manusia di bumi hanya berbicara dengan satu bahasa dan satu logat yang sama</strong>. Kesamaan absolut ini menciptakan ikatan persaudaraan yang sangat kuat, komunikasi tanpa hambatan, dan rasa kesatuan yang tak terpatahkan di antara semua orang.
          </p>
        </div>
        <p>
          Awalnya, mereka hidup nomaden secara berkelompok. Namun, sebuah migrasi massal dari wilayah timur membawa mereka ke <strong className="text-amber-400">Tanah Sinear</strong> (Mesopotamia selatan/Irak modern). Dataran luas dan sangat subur ini meyakinkan mereka untuk menghentikan pengembaraan dan mulai membangun peradaban yang menetap.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    image: "/images/ancient_bricks.jpg",
    title: "Penemuan Teknologi & Ambisi",
    tag: "Bagian II",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Keputusan untuk menetap di lokasi yang subur memicu lompatan teknologi yang revolusioner dalam sejarah arsitektur kuno. Sebelumnya, nenek moyang mereka hanya membangun struktur sederhana dari batu alam dan lumpur mentah.
        </p>
        <blockquote className="italic text-white/90 font-serif text-xl pl-4 border-l-2 border-white/20">
          "Mari kita membuat batu bata dan membakarnya baik-baik."
        </blockquote>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">✦</span>
            <div>
              <strong className="text-white">Kiln-Fired Bricks (Bata Bakar):</strong> Mereka menemukan bahwa membakar tanah liat dalam perapian suhu tinggi menghasilkan material yang jauh lebih keras dan tahan lama dari batu biasa.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">✦</span>
            <div>
              <strong className="text-white">Bitumen (Aspal Alam):</strong> Sebagai perekat, mereka menggunakan ter hitam yang melimpah di Timur Tengah, menciptakan struktur yang kedap air dan luar biasa kokoh.
            </div>
          </li>
        </ul>
        <p>
          Dengan lonjakan teknologi ini, rasa percaya diri dan kesombongan umat manusia ikut memuncak. Mereka merencanakan megaproyek yang belum pernah ada sebelumnya: <strong className="text-amber-400">sebuah kota metropolitan raksasa dengan menara yang puncaknya menembus langit.</strong>
        </p>
      </div>
    ),
  },
  {
    id: 4,
    image: "/images/ancient_astrology.jpg",
    title: "Dua Motivasi Utama",
    tag: "Lanjutan",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Megaproyek Menara Babel bukanlah sekadar kebutuhan akan tempat tinggal. Ada dua motivasi filosofis dan teologis yang mendasari ambisi tak wajar ini:
        </p>
        <div className="grid gap-6">
          <div className="group flex flex-col md:flex-row gap-4 items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors shadow-lg">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold shadow-inner">
              1
            </div>
            <div>
              <strong className="text-white block mb-2 text-xl group-hover:text-amber-400 transition-colors">Mencari Nama (Kemasyhuran)</strong>
              <p className="text-sm md:text-base leading-relaxed">Mereka ingin menciptakan monumen kehebatan manusia abadi. Ini adalah bentuk <em className="text-white">hubris</em> (kesombongan tertinggi), di mana manusia secara arogan ingin mengagungkan diri mereka sendiri dan menantang batasan kodrat sebagai makhluk ciptaan.</p>
            </div>
          </div>
          <div className="group flex flex-col md:flex-row gap-4 items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors shadow-lg">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold shadow-inner">
              2
            </div>
            <div>
              <strong className="text-white block mb-2 text-xl group-hover:text-amber-400 transition-colors">Menolak Tersebar (Pemberontakan)</strong>
              <p className="text-sm md:text-base leading-relaxed">Mereka dengan tegas berkata, <em>"Supaya kita jangan terserak ke seluruh bumi."</em> Hal ini secara langsung menentang perintah ilahi pasca-Air Bah yang menginstruksikan manusia untuk beranak cucu dan memenuhi seluruh bumi, bukan memusatkan kekuatan di satu kekaisaran absolut.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    image: "/images/king_nimrod.jpg",
    title: "Kisah Khusus: Tirani & Kematian Namrud",
    tag: "Bagian Ekstra",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Menurut literatur kuno (Midrash Yahudi & tradisi Islam), otak di balik proyek pemberontakan ini adalah <strong className="text-white text-xl">Raja Namrud (Nimrod)</strong>. Ia digambarkan sebagai penguasa tiran yang sangat sombong dan menuntut disembah sebagai dewa.
        </p>
        <p>
          Dendam terhadap peristiwa Air Bah, Namrud memerintahkan pembangunan menara agar ia bisa "naik ke langit dan memerangi Tuhan." Ia bahkan dikisahkan menembakkan panah ke langit dari atas menara, menantang Sang Pencipta secara langsung.
        </p>
        <div className="p-6 rounded-2xl bg-amber-900/10 border border-amber-500/20 shadow-lg mt-4">
          <h3 className="text-amber-400 font-bold mb-2 flex items-center gap-2">
            <span className="text-2xl">🦟</span> Kematian yang Sangat Ironis
          </h3>
          <p className="text-sm md:text-base">
            Tuhan tidak menghukum tiran ini dengan pasukan raksasa, melainkan dengan makhluk paling kecil: <strong className="text-white">seekor nyamuk</strong>. Nyamuk itu masuk melalui lubang hidung Namrud dan bersarang di dalam kepalanya selama bertahun-tahun.
          </p>
          <p className="text-sm md:text-base mt-3">
            Rasa sakit yang luar biasa membuat Namrud hanya bisa merasa tenang sesaat <strong className="text-amber-400">jika kepalanya dipukul dengan palu atau sepatu</strong> oleh pelayannya. Raja yang dulu meminta disujud, akhirnya mati mengenaskan hanya karena siksaan seekor nyamuk.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    image: "/images/builders.jpg",
    title: "Puncak Kisah: Intervensi Ilahi",
    tag: "Bagian III",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Pembangunan pun dimulai dengan skala masif. Siang dan malam, mesin raksasa peradaban ini bekerja menyatukan kekuatan seluruh umat manusia. Dengan satu bahasa dan satu komando terpusat, pekerjaan berjalan sangat cepat dan efisien. Kota mulai terbentuk megah, dan struktur menara perlahan menjulang semakin tinggi mendekati awan.
        </p>
        <p>
          Pada titik kulminasi inilah intervensi ilahi terjadi. Dalam narasi Kitab Kejadian, diceritakan secara antropomorfik bahwa <strong className="text-white">Tuhan "turun"</strong> untuk meninjau kota dan menara yang sedang diusahakan oleh anak-anak manusia.
        </p>
        <div className="relative p-6 rounded-2xl bg-amber-900/10 border border-amber-500/20 backdrop-blur-sm mt-4">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-600 rounded-l-2xl"></div>
          <p className="font-semibold text-white mb-2">Simbol Ambisi Tak Terkendali</p>
          <p className="text-sm md:text-base">
            Tuhan memandang proyek ini bukan sekadar masalah arsitektur gedung yang tinggi, melainkan <strong className="text-amber-400">simbol bahaya dari keangkuhan manusia tanpa batas</strong>. Jika kesatuan dalam pemberontakan ini dibiarkan, <em>"mulai dari sekarang apapun yang mereka rencanakan, tidak ada yang tidak akan dapat terlaksana."</em> Manusia akan merasa maha kuasa, tak terkalahkan, dan pada akhirnya akan menghancurkan peradaban mereka sendiri dengan kesombongan.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    image: "/images/confusion.jpg",
    title: "Hukuman: Strategi Kekacauan",
    tag: "Bagian IV",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Tuhan mengambil keputusan tegas untuk menghentikan proyek pemberontakan tersebut. Namun, metode hukuman yang diberikan sangat unik dan ironis. 
        </p>
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
            <span className="text-2xl block mb-2">❌</span>
            <p className="text-sm font-medium text-white/70">Tidak ada kilat api menyambar menara</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
            <span className="text-2xl block mb-2">❌</span>
            <p className="text-sm font-medium text-white/70">Tidak ada gempa bumi menghancurkan kota</p>
          </div>
        </div>
        <blockquote className="text-xl md:text-2xl italic text-white font-serif border-l-4 border-amber-500 pl-6 py-4 bg-gradient-to-r from-amber-500/10 to-transparent rounded-r-xl">
          "Baiklah Kita turun dan mengacaukan bahasa mereka, sehingga mereka tidak mengerti lagi bahasa masing-masing."
        </blockquote>
        <p>
          Tepat di jantung kekuatan mereka, keajaiban bahasa itu dicabut seketika. Seorang tukang yang meminta mortar mungkin mendengar temannya menjawab dengan kosakata yang sepenuhnya asing. Mandor kehilangan kendali karena instruksinya berubah menjadi suara tak bermakna bagi pekerja. <strong className="text-amber-400">Miskomunikasi fatal dan kesalahpahaman meledak secara dramatis di mana-mana.</strong>
        </p>
      </div>
    ),
  },
  {
    id: 8,
    image: "/images/babel_sunset.jpg",
    title: "Akhir Cerita: Proyek Terhenti",
    tag: "Bagian V",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Akibat dari kekacauan sistem komunikasi yang mendadak ini, rasa frustrasi dan kepanikan massal melanda seluruh penjuru kota. Tanpa kemampuan krusial untuk berbagi informasi, mustahil bagi mereka untuk melanjutkan manajemen proyek arsitektur dan logistik yang begitu kompleks. <strong className="text-white text-xl">Pekerjaan raksasa itu terhenti total.</strong>
        </p>
        <ul className="space-y-4 my-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
            <p><strong>Pengelompokan Baru:</strong> Karena tidak bisa lagi saling memahami secara universal, manusia secara alamiah mulai memisahkan diri, berkelompok hanya dengan mereka yang bahasanya sama.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
            <p><strong>Eksodus Massal:</strong> Kelompok-kelompok ini kemudian memutuskan untuk meninggalkan Sinear. Sesuai dengan rancangan awal ilahi, <strong className="text-amber-400">umat manusia akhirnya berpencar dan menyebar mendiami seluruh permukaan bumi.</strong></p>
          </li>
        </ul>
        <p>
          Kota raksasa dan kerangka menara yang terbengkalai itu kemudian dinamakan <strong className="text-white">Babel</strong>. Secara etimologi Ibrani berasal dari kata <em>balal</em>, yang secara harfiah berarti "mengacaukan", sebagai pengingat abadi bahwa di tempat itulah Tuhan mengacaukan bahasa dunia.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    youtubeId: "mqKv0L4juIY",
    youtubeStart: 120, // start at 2 minutes (120s)
    youtubeEnd: 420,   // end at 7 minutes (420s)
    image: "/images/babel_sunset.jpg", // fallback background
    title: "Saksikan: Dokumenter Menara Babel",
    tag: "Visualisasi",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Untuk memvisualisasikan dengan lebih nyata bagaimana megahnya proyek Menara Babel serta konteks sejarah dan keagamaan di baliknya, mari kita saksikan bersama cuplikan video dokumenter ini.
        </p>
        <p className="text-sm md:text-base text-white/70 italic">
          Video telah diatur otomatis untuk menampilkan segmen yang paling relevan.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    image: "/images/ziggurat_ruins.jpg",
    title: "Catatan Penutup Sejarah",
    tag: "Epilog",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg flex flex-col justify-center h-full">
        <p>
          Dari reruntuhan sisa ambisi umat manusia ini, ribuan tahun kemudian di lokasi yang sama berdirilah <strong className="text-white">Kekaisaran Babilonia</strong> yang nyata dan berkuasa.
        </p>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
          <p className="relative z-10">
            Peradaban Babilonia ini secara historis meneruskan tradisi megalitik membangun menara berundak raksasa yang disebut <strong className="text-amber-400 font-bold text-xl">Ziggurat</strong>. Struktur paling termasyhur adalah <strong className="text-white">Etemenanki</strong> ("Kuil Fondasi Surga dan Bumi").
          </p>
          <p className="mt-4 relative z-10">
            Hingga saat ini, sisa-sisa fondasinya masih dipelajari oleh para arkeolog modern, berdiri di tengah gurun Irak sebagai monumen sejarah sekaligus saksi bisu dari legenda kejatuhan Menara Babel.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <h3 className="text-white text-3xl font-display uppercase tracking-[0.4em] border-b-2 border-amber-500 pb-2">Selesai</h3>
        </div>
      </div>
    ),
  },
];

export default function ModernPresentation() {
  return (
    <main className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-[#0a0a0a] text-white font-sans scroll-smooth">
      {slides.map((slide, index) => (
        <section 
          key={slide.id} 
          className="relative h-screen w-full snap-start snap-always flex items-center justify-center overflow-hidden"
        >
          {slide.isHero ? (
            <>
              <motion.div
                initial={{ scale: 1.15, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />
              <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[2px]" />
              
              <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-6 sm:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false }}
                  className="text-center flex flex-col items-center"
                >
                  <SplitText
                    text={slide.title}
                    className="text-5xl md:text-8xl lg:text-[120px] font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6 drop-shadow-2xl text-center leading-tight"
                    delay={0.05}
                  />
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8" />
                  <h2 className="text-xl md:text-3xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto text-center">
                    {slide.subtitle}
                  </h2>
                  {slide.content}
                </motion.div>
              </div>
            </>
          ) : (
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-8 md:gap-16">
              
              {/* Image/Video Side - Alternates left/right based on even/odd index */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                viewport={{ once: false, amount: 0.4 }}
                className={`w-full md:w-1/2 h-[40vh] md:h-[70vh] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}
              >
                {slide.youtubeId ? (
                  <iframe
                    className="w-full h-full border-none bg-black"
                    src={`https://www.youtube.com/embed/${slide.youtubeId}?start=${slide.youtubeStart}${slide.youtubeEnd ? `&end=${slide.youtubeEnd}` : ''}&autoplay=0&rel=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <motion.div
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 20, ease: "linear" }}
                      className="w-full h-full relative"
                    >
                      <Image 
                        src={slide.image} 
                        alt={slide.title} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                    {/* Subtle gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
                  </>
                )}
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
                viewport={{ once: false, amount: 0.4 }}
                className={`w-full md:w-1/2 h-auto max-h-[50vh] md:max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs text-amber-400 uppercase tracking-widest font-semibold mb-4">
                  {slide.tag}
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
                  {slide.title}
                </h2>
                {slide.content}
              </motion.div>

            </div>
          )}
        </section>
      ))}
    </main>
  );
}
