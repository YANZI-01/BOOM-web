import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { GlassCard } from "./GlassCard";

export function RecoveryAlgorithm() {
  const { t } = useLanguage();
  return (
    <section id="recovery" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="text-center mb-24">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-boom-green font-display text-xl mb-4 font-medium tracking-wide"
        >
          03 // TRUE RECOVERY™
        </motion.h3>
        <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-4xl md:text-5xl font-bold font-display"
        >
          {t('懂你的节奏，更懂你的', 'Understands your rhythm, masters your ')}<br className="md:hidden" />
          <span className="text-boom-green text-glow">{t('超量恢复窗口', 'Supercompensation Window')}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-boom-text-dim text-lg mt-4 max-w-2xl mx-auto"
        >
          {t('真正的进步，发生在恢复期间', 'Real progress happens during recovery.')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative aspect-square md:aspect-auto md:h-[550px] lg:col-span-8"
         >
           <GlassCard className="w-full h-full p-8 flex flex-col justify-between bg-boom-gray/30 border border-white/10 rounded-[40px] relative overflow-hidden">
             
             {/* Text Header (Now higher z-index to overlay image) */}
             <div className="relative z-40 bg-black/40 p-4 rounded-2xl backdrop-blur-md inline-block self-start border border-white/5 mt-4 ml-4">
               <h4 className="text-xl font-bold text-white mb-2">{t('恢复判断算法', 'Recovery Algorithm')}</h4>
               <p className="text-boom-text-dim text-xs md:text-sm">{t('彻底告别冰冷机械的“静止分值”，', 'Say goodbye to cold mechanical "static scores", ')}<br />{t('BOOM ONE 跟踪你的体能变化周期。', 'BOOM ONE tracks your stamina cycles.')}</p>
             </div>
             
             {/* Left side character image (Frame_1.png) */}
             <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-[40px]">
               <img 
                 src="/Frame_1.png" 
                 alt="Athlete"
                 className="absolute left-0 bottom-0 w-[80%] md:w-[60%] lg:w-[45%] h-full object-cover object-left-bottom opacity-90 mix-blend-screen"
               />
               {/* Fade out the right side of the image so it blends smoothly into the background, applied across the image width area */}
               <div className="absolute left-0 bottom-0 w-[80%] md:w-[60%] lg:w-[45%] h-full bg-gradient-to-r from-transparent via-transparent to-[#1B1D1F]/90 z-20 mix-blend-normal"></div>
             </div>

             {/* Full Custom Supercompensation Curve Chart */}
             <div className="absolute inset-0 top-1/4 left-0 w-full h-3/4 overflow-visible pointer-events-none select-none px-4 z-20">
               <svg viewBox="0 0 500 300" className="w-full h-full fill-none overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="30%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="45%" stopColor="rgba(255,255,255,0.9)" />
                      <stop offset="64%" stopColor="#a3e635" /> {/* Peak is at 64% */}
                      <stop offset="85%" stopColor="rgba(255,255,255,0.5)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                    <linearGradient id="baselineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="30%" stopColor="rgba(255,255,255,0.15)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Baseline */}
                  <line x1="0" y1="180" x2="500" y2="180" stroke="url(#baselineGradient)" strokeDasharray="4,4" strokeWidth="1" />
                  
                  {/* Vertical Guide to Peak */}
                  <line x1="320" y1="60" x2="320" y2="300" stroke="rgba(163,230,53,0.3)" strokeDasharray="3,3" strokeWidth="1" />
                  {/* Horizontal Guide to Peak */}
                  <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(163,230,53,0.3)" strokeDasharray="3,3" strokeWidth="1" />

                  {/* The Curve - Partially hidden by the left gradient fade but overlaying the image */}
                  <path d="M -10,180
                           C 40,180 80,260 140,260
                           C 220,260 240,60 320,60
                           C 380,60 420,180 510,180" 
                        stroke="url(#curveGradient)" 
                        className="drop-shadow-[0_0_6px_rgba(163,230,53,0.4)]" 
                        strokeWidth="3" 
                        style={{ mixBlendMode: 'screen' }}
                  />
               </svg>

               {/* Nodes */}
               <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
                 {/* Node 1: 高强度训练 */}
                 <div className="absolute flex flex-col justify-center items-end" style={{ left: '12.5%', top: '73.3%', transform: 'translate(-50%, -50%)' }}>
                    <div className="w-2.5 h-2.5 bg-white/50 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)] border border-black backdrop-blur-sm relative z-10 transition-opacity"></div>
                    <div className="absolute top-4 left-4 w-28 text-left bg-black/40 p-1.5 rounded-lg backdrop-blur-md">
                       <div className="text-white text-xs md:text-sm font-bold mb-0.5">{t('高强度训练', 'Intense Training')}</div>
                       <div className="text-boom-text-dim text-[10px] leading-tight">{t('身体疲劳', 'Body Fatigue')}</div>
                    </div>
                 </div>

                 {/* Node 2: 恢复开始 */}
                 <div className="absolute flex flex-col items-center" style={{ left: '28%', top: '86.6%', transform: 'translate(-50%, -50%)' }}>
                    <div className="w-3 h-3 bg-white/90 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)] border-2 border-black"></div>
                    <div className="absolute top-4 left-2 w-28 text-left bg-black/40 p-1.5 rounded-lg backdrop-blur-md hidden md:block">
                       <div className="text-white text-xs md:text-sm font-bold mb-0.5">{t('恢复开始', 'Recovery Begins')}</div>
                       <div className="text-boom-text-dim text-[10px] leading-tight">{t('能量重建', 'Energy Rebuild')}</div>
                    </div>
                 </div>

                 {/* Node 3: 超量恢复窗口 */}
                 <div className="absolute flex flex-col items-center" style={{ left: '64%', top: '20%', transform: 'translate(-50%, -50%)' }}>
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-5 h-5 bg-boom-green/40 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,1)]"
                    >
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </motion.div>
                    <div className="absolute bottom-8 left-3 w-40 text-left bg-black/40 p-2 rounded-lg backdrop-blur-md border border-boom-green/20">
                       <div className="text-boom-green text-sm md:text-base font-bold mb-1">{t('超量恢复窗口', 'Supercompensation Window')}</div>
                       <div className="text-boom-text-dim text-xs leading-tight drop-shadow-md">{t('身体能力', 'Body Capability')}<br/>{t('超越训练前水平', 'Exceeds Pre-training level')}</div>
                    </div>
                 </div>

                 {/* Node 4: 错过窗口 */}
                 <div className="absolute flex flex-col items-center" style={{ left: '92%', top: '60%', transform: 'translate(-50%, -50%)' }}>
                    <div className="w-2 h-2 bg-white/70 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)] border border-black"></div>
                    <div className="absolute top-4 right-0 md:left-2 md:right-auto w-24 text-right md:text-left bg-black/40 p-1.5 rounded-lg backdrop-blur-md">
                       <div className="text-white text-xs font-bold mb-0.5">{t('错过窗口', 'Missed Window')}</div>
                       <div className="text-boom-text-dim text-[10px] leading-tight">{t('适应下降', 'Adaptation Drops')}</div>
                    </div>
                 </div>
               </div>
             </div>
           </GlassCard>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 lg:col-span-4"
         >
            <div>
               <h4 className="text-2xl font-bold text-white mb-4">{t('比你更懂你的身体体感', 'Understands your body better than you do')}</h4>
               <p className="text-boom-text-dim leading-relaxed">
                 {t('恢复不仅仅是“休息好了就行”，而是生理负荷与能量补充的动态平衡。BOOM ONE 的算法高度还原真实体感，当你的身体即将进入最强的“超量恢复（Supercompensation）”窗口时，立刻给予你精确指引。', 'Recovery is more than just "getting enough rest". It is the dynamic balance of physiological load and energy refueling. BOOM ONE accurately predicts your "Supercompensation" window and gives precise guidance right on time.')}
               </p>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-white/10">
               <div className="flex items-center justify-between">
                 <span className="text-white font-medium">{t('疲劳深度评估', 'Deep Fatigue Assessment')}</span>
                 <span className="text-boom-green">{t('100% 吻合', '100% Match')}</span>
               </div>
               <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="bg-boom-green h-full"></motion.div>
               </div>
               
               <div className="flex items-center justify-between mt-6">
                 <span className="text-white font-medium">{t('恢复时效预测', 'Recovery Time Prediction')}</span>
                 <span className="text-boom-green">{t('实时更新', 'Real-time Updates')}</span>
               </div>
               <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} className="bg-boom-green h-full"></motion.div>
               </div>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
