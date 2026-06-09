import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export function WearExperience() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const placements = [
    {
      id: "bra",
      label: t('胸衣', 'Sports Bra'),
      src: "/peidai_3.png",
      fallbackSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
    },
    {
      id: "arm",
      label: t('手臂', 'Armband'),
      src: "/peidai_2.png",
      fallbackSrc: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "waist",
      label: t('裤腰', 'Waistband'),
      src: "/peidai_1.png",
      fallbackSrc: "https://images.unsplash.com/photo-1574680093668-2965ceb52f1b?q=80&w=2070"
    },
    {
      id: "p4",
      label: "",
      src: "/peidai_4.png",
      fallbackSrc: "https://images.unsplash.com/photo-1552674605-15c2145efa38?q=80&w=2070",
      hiddenButton: true
    },
    {
      id: "p5",
      label: "",
      src: "/peidai_5.png",
      fallbackSrc: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop",
      hiddenButton: true
    }
  ];

  const features = [
    { 
      title: t('全环境适用', 'All Environments'), 
      desc: t('无论是极限越野、日常通勤，还是深海畅游，轻松胜任。', 'Whether it is extreme trail running, daily commute, or deep sea swimming, it handles it easily.') 
    },
    { 
      title: t('零感佩戴', 'Invisible Wear'), 
      desc: t('极具人体工学的弧面设计，18g超轻量化。', 'Ergonomically curved design, 18g ultra-lightweight.') 
    },
    { 
      title: t('自由多部位佩戴', 'Multi-Placement Freedom'), 
      desc: t('手臂、裤子、胸衣等适配思路，服务不同运动场景。', 'Adaptive strategies for arms, pants, and sports bras serve diverse sports scenarios.') 
    }
  ];

  const getOffset = (index: number) => {
    let diff = index - currentIndex;
    const length = placements.length;
    if (diff < -2) diff += length;
    if (diff > 2) diff -= length;
    return diff;
  };

  return (
    <section id="wear" className="relative w-full bg-white text-black pt-48 pb-48 md:pt-[350px] md:pb-[350px] overflow-hidden">
      {/* Top transition gradient from black to white */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-[250px] bg-gradient-to-b from-black to-white pointer-events-none"></div>
      
      {/* Bottom transition gradient from white to black */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-[250px] bg-gradient-to-b from-white to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 font-display text-sm md:text-base mb-4 font-bold tracking-[0.2em] uppercase"
          >
            01 // {t('INVISIBLE FIT', 'INVISIBLE FIT')}
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight text-black"
          >
            {t('忘记它的存在，', 'Forget its presence, ')}
            <br className="md:hidden" />
            {t('才能感受真正的自由。', 'to truly feel freedom.')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            {t('BOOM ONE 采用无屏幕、超轻量化设计，让你专注于每一次呼吸、每一次发力与每一个突破瞬间。无论是胸带还是臂带，它都能柔和贴合并随身体极致律动，彻底解除传统设备的佩戴束缚。', 'BOOM ONE features a screen-free, ultra-lightweight design, allowing you to focus on every breath and breakthrough moment. It softly adheres and rhythms with your body.')}
          </motion.p>
        </div>

        {/* Categories / Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {placements.map((p, idx) => (
            !p.hiddenButton && (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-6 py-2.5 rounded-full border text-sm font-bold tracking-wide transition-all duration-300 ${
                currentIndex === idx 
                  ? 'bg-black text-white border-black scale-105' 
                  : 'bg-transparent text-gray-500 border-gray-300 hover:border-gray-500 hover:text-black'
              }`}
            >
              {p.label}
            </button>
            )
          ))}
        </div>

        {/* Coverflow Carousel */}
        <div className="relative h-[350px] md:h-[500px] w-full max-w-6xl mx-auto mb-8 md:mb-12">
          {placements.map((p, idx) => {
            const offset = getOffset(idx);
            return (
              <motion.div
                key={p.id}
                initial={false}
                animate={{
                  x: offset === 0 ? "0%" : offset === 1 ? "60%" : offset === -1 ? "-60%" : offset === 2 ? "110%" : "-110%",
                  scale: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.7,
                  opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 1 : 0.7,
                  zIndex: offset === 0 ? 10 : Math.abs(offset) === 1 ? 5 : 1
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 right-0 mx-auto w-[260px] md:w-[374px] h-[350px] md:h-[500px]"
                onClick={() => Math.abs(offset) > 0 && setCurrentIndex(idx)}
              >
                <img 
                  src={p.src} 
                  onError={(e) => {
                    if ((e.target as HTMLImageElement).src.includes(encodeURI(p.src))) {
                      (e.target as HTMLImageElement).src = p.fallbackSrc || "";
                    }
                  }}
                  alt={p.label || "Wear"} 
                  className="w-full h-full object-cover rounded-[32px] md:rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-pointer hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-shadow duration-500" 
                />
              </motion.div>
            );
          })}
        </div>

        {/* Feature Grid at the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 * i }}
               key={i} 
               className="text-center group"
            >
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-6 bg-gray-50 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-black group-hover:bg-boom-green transition-colors duration-300"></div>
              </div>
              <h4 className="text-black font-bold text-xl mb-3 font-display">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
