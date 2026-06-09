import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function TargetAudience() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(0);

  const audiences = [
    {
      id: "run",
      title: t("长距离跑者", "Long-Distance Runners"),
      desc: t("日复一日的积累，只为突破自己的极限", "Day after day of accumulation, just to break personal limits"),
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "cycle",
      title: t("耐力骑行者", "Endurance Cyclists"),
      desc: t("在漫长的征程中，挑战更远的距离", "Challenging longer distances in the long journey"),
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "swim",
      title: t("公开水域 / 泳者", "Open Water Swimmers"),
      desc: t("在未知的环境中，与身体的极限共处", "Coexisting with physical limits in unknown environments"),
      img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "hyrox",
      title: t("HYROX 训练者", "HYROX Athletes"),
      desc: t("在高强度的组合挑战中，突破心肺边界", "Breaking cardiopulmonary boundaries in high-intensity combination challenges"),
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "heavy",
      title: t("高负荷任务者", "High-Load Taskers"),
      desc: t("在高压与高负荷下，保持稳定与专注", "Maintaining stability and focus under high pressure and load"),
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="audience" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-boom-green font-display text-xl mb-4 font-medium tracking-wide"
          >
            05 // FOR SERIOUS ATHLETES
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display"
          >
            {t('为耐力运动的', 'Built for')} <br/>
            <span className="text-boom-green text-glow">{t('严肃运动者', 'serious endurance athletes')}</span> {t('而生。', '.')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-boom-text-dim text-lg mt-6 max-w-2xl"
          >
            {t('他们相信长期主义，尊重身体规律。在持续的训练与挑战中，追求稳定的进步与突破。', 'They believe in long-termism and respect their body\'s laws. In continuous training and challenges, they seek steady progress and breakthroughs.')}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full">
          {audiences.map((item, index) => {
            const isActive = hovered === null ? index === 0 : hovered === index;
            return (
              <motion.div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out flex-shrink-0 md:flex-shrink ${isActive ? 'md:flex-[3] flex-[auto] h-48 md:h-auto' : 'md:flex-[1] flex-none h-20 md:h-auto'} border border-white/5`}
                onMouseEnter={() => setHovered(index)}
                onClick={() => setHovered(index)}
              >
                <img 
                  src={item.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out mix-blend-luminosity opacity-80"
                  style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 text-left z-10 flex flex-col justify-end h-full md:h-auto pointer-events-none">
                  <h4 className="text-white font-bold text-xl md:text-2xl font-display mb-2 drop-shadow-md whitespace-nowrap">
                    {item.title}
                  </h4>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-boom-text-dim md:text-white/80 text-sm drop-shadow-md pr-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
