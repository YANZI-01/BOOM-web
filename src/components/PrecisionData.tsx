import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { GlassCard } from "./GlassCard";

export function PrecisionData() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="precision" className="py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-0 relative z-10 pt-8 pb-4">
          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-boom-green font-display text-xl mb-4 font-medium tracking-wide"
            >
              02 // 16HZ EXTREME PRECISION
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 font-display"
            >
              {t('心跳未止，', 'Relentless Heartbeat, ')}{t('感知不停', 'Continuous Perception')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-boom-text-dim text-lg max-w-2xl mx-auto drop-shadow-lg bg-black/40 py-2 px-4 rounded-full inline-block backdrop-blur-sm"
            >
              <span className="text-white font-bold">{t('业内唯一', 'The industry\'s only')}</span>{t('的 16Hz/s 高频连续精准采集。为你构建毫无缝隙的数据真理。', ' 16Hz/s continuous high-frequency precision sampling, building a seamless truth of your data.')}
            </motion.p>
          </div>
        </div>

        <div ref={ref} className="relative h-64 md:h-96 w-full flex items-center justify-center my-8 md:my-10 mb-8 overflow-hidden z-20">
           {/* Floating Particles */}
           <div className="absolute inset-0 z-0 pointer-events-none">
             {[...Array(20)].map((_, i) => (
               <motion.div
                 key={`particle-${i}`}
                 className="absolute w-1 h-1 rounded-full bg-boom-green shadow-[0_0_8px_rgba(163,230,53,0.8)]"
                 initial={{ 
                   x: `${Math.random() * 100}%`, 
                   y: "100%", 
                   opacity: 0,
                 }}
                 animate={{ 
                   y: "-20%", 
                   opacity: [0, 1, 0]
                 }}
                 transition={{ 
                   duration: Math.random() * 2 + 2, 
                   ease: "linear", 
                   repeat: Infinity, 
                   delay: Math.random() * 2 
                 }}
               />
             ))}
           </div>

           {/* Abstract visualization of 16Hz vs 1Hz */}
           
           <div className="absolute inset-0 flex items-center w-full px-0 opacity-30 z-10">
               {/* Slow wave - old tech */}
               <svg viewBox="0 0 1000 100" className="w-full h-full stroke-white/20 fill-none" preserveAspectRatio="none">
                  <path d="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50 T1000,50" strokeWidth="2" />
               </svg>
           </div>
           
           <motion.div 
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ duration: 1 }}
             className="absolute inset-0 flex items-center w-full px-0 z-20"
           >
             <motion.div 
                className="flex w-[200%] h-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 3, repeat: Infinity }}
             >
               <svg viewBox="0 0 2400 100" className="w-full h-full stroke-boom-green fill-none drop-shadow-[0_0_20px_rgba(163,230,53,1)]" preserveAspectRatio="none">
                  {/* High frequency dynamic wave - 2x longer wavelength, perfectly tiles at 50% (1200 width) */}
                  <motion.path 
                    animate={{ scaleY: [0.8, 1.2, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ transformOrigin: "50% 50px" }}
                    d="M0,50 Q150,-10 300,50 T600,50 T900,50 T1200,50 T1500,50 T1800,50 T2100,50 T2400,50" 
                    strokeWidth="6" 
                  />
               </svg>
             </motion.div>
           </motion.div>

           {/* Frosted Glass Grating effect */}
           <div 
             className="absolute inset-0 z-[25] pointer-events-none mix-blend-overlay opacity-80"
             style={{
               background: 'repeating-linear-gradient(to right, transparent 0px, transparent 20px, rgba(0,0,0,0.9) 20px, rgba(0,0,0,0.9) 40px)',
               backdropFilter: 'blur(8px)',
               WebkitBackdropFilter: 'blur(8px)'
             }}
           ></div>

           <div className="absolute -left-10 h-full w-32 bg-gradient-to-r from-black to-transparent z-30"></div>
           <div className="absolute -right-10 h-full w-32 bg-gradient-to-l from-black to-transparent z-30"></div>
           
           <motion.div 
             animate={{ scale: [0.95, 1.08, 0.95] }}
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-boom-green/30 px-8 py-4 rounded-full z-40"
           >
              <span className="font-display text-4xl text-white font-bold text-glow">16<span className="text-xl text-boom-green ml-1">Hz/s</span></span>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 z-10 relative">
          {[
            { label: t('心率 HR', 'Heart Rate (HR)'), val: t('反映心脏健康与运动强度。', 'Reflects heart health and workout intensity.') },
            { label: t('心率变异性 HRV', 'HRV'), val: t('自主神经状态的关键指标。', 'Key autonomic nervous system indicator.') },
            { label: t('压力水平 Stress', 'Stress Level'), val: t('综合评估身心压力与应激反应。', 'Comprehensive assessment of physical and mental stress.') },
            { label: t('血氧饱和度 SpO₂', 'Blood Oxygen SpO₂'), val: t('反映呼吸与代谢状态。', 'Reflects respiratory and metabolic status.') },
            { label: t('睡眠质量 Sleep', 'Sleep Quality'), val: t('评估睡眠恢复效果。', 'Evaluates sleep recovery effects.') }
          ].map((stat, i) => (
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 * i }}
               key={i} 
            >
              <GlassCard className="h-full bg-boom-gray/50 p-8">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-boom-green shadow-[0_0_10px_rgba(163,230,53,1)]"></div>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{stat.label}</h4>
                <p className="text-boom-text-dim text-sm">{stat.val}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
