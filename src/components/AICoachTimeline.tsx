import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Bell, Activity, Moon, Coffee, RefreshCw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function AICoachTimeline() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a scroll-linked animation for the timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const heightProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineData = [
    {
      icon: <Coffee className="w-6 h-6 text-boom-green" />,
      time: t("07:00 AM - 醒来时刻", "07:00 AM - Wake Up Time"),
      title: t("睡眠与恢复综合评估", "Comprehensive Sleep & Recovery Evaluation"),
      desc: t("睡眠不是一天的结束，而是下一次决策的开始。AI Coach 基于睡眠、恢复、负荷与压力状态，持续理解身体变化，并随着身体状态的变化实时更新建议。", "Sleep isn't the end of a day, but the beginning of the next decision. AI Coach continuously understands body changes based on sleep, recovery, load, and stress states, and updates suggestions in real time as your body state changes."),
      highlight: t("“昨夜慢波睡眠偏少，当前恢复进程仍在继续。”", "\"Slow-wave sleep was low last night, the current recovery process is still continuing.\""),
      img: "/04-1.png"
    },
    {
      icon: <Activity className="w-6 h-6 text-[#ff6b00]" />,
      time: t("16:00 PM - 训练准备 & 负荷预警", "16:00 PM - Training Prep & Load Warning"),
      title: t("训练之外，也在影响训练", "Training beyond training"),
      desc: t("很多时候，影响恢复的并不是训练本身，而是训练之外持续累积的压力。AI Coach 持续评估生活负荷、运动负荷与恢复状态之间的关系，并根据身体状态变化动态调整建议，帮助你避免在错误的时间进行高强度训练。", "Often, what affects recovery isn't the training itself, but the accumulated stress outside of training. AI Coach continuously evaluates the relationship between life load, training load, and recovery status, dynamically adjusting suggestions based on body state changes to help you avoid high-intensity training at the wrong time."),
      highlight: t("“当前压力水平较高，建议将高强度训练推迟至晚间进行。”", "\"Current stress level is relatively high, suggesting you postpone high-intensity training to the evening.\""),
      img: "/04-2.png"
    },
    {
      icon: <Bell className="w-6 h-6 text-boom-green" />,
      time: t("19:00 PM - 进阶训练中", "19:00 PM - Advanced Training"),
      title: t("实时反馈的边界守护", "Real-time Boundary Defense"),
      desc: t("训练过程中，AI Coach 持续监测身体反应与负荷变化。当训练刺激达到目标时，它会提醒你及时结束训练；当风险逐渐累积时，它也会发出预警，帮助你避免过度训练。", "During training, AI Coach continuously monitors physical reactions and load changes. When the training stimulus reaches the target, it reminds you to end the training in time; when risks gradually accumulate, it also issues warnings to help you avoid overtraining."),
      highlight: t("目标训练负荷已达成，建议结束本次训练。", "Target training load has been reached, it's recommended to end this training session."),
      img: "/04-3.png"
    },
    {
      icon: <Moon className="w-6 h-6 text-boom-green" />,
      time: t("22:00 PM - 科学重建", "22:00 PM - Scientific Reconstruction"),
      title: t("追踪身体的适应进程", "Tracking the body's adaptation process"),
      desc: t("恢复不是一个瞬间，而是一个持续发生的过程。AI Coach 持续评估身体对训练刺激的适应情况，追踪恢复进展，并预测下一次高质量训练的最佳时机。", "Recovery is not an instant, but a continuous process. AI Coach continuously evaluates the body's adaptation to training stimuli, tracks recovery progress, and predicts the best timing for the next high-quality training session."),
      highlight: t("当前身体处于恢复优先阶段，建议补充碳水与蛋白质，避免额外高负荷活动，并于 22:30 前进入睡眠状态。", "The current body is in a recovery-first phase, it's recommended to supplement carbohydrates and protein, avoid extra high-load activities, and enter a sleep state before 22:30."),
      img: "/04-4.png"
    }
  ];

  return (
    <section id="aicoach" className="py-20 md:py-32 bg-black relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-boom-green font-display text-lg md:text-xl mb-4 font-medium tracking-wide"
          >
            05 // THE CORE: 24/7 AI COACH
          </motion.h3>
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-3xl sm:text-4xl md:text-6xl font-bold font-display leading-tight"
          >
            {t('像一支顶级教练团队，', 'Like a top-tier coaching team, ')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-boom-green to-white text-glow">{t('全天候为你提供个性化决策与建议', 'providing personalized decisions and guidance 24/7')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-boom-text-dim text-base md:text-lg max-w-3xl mx-auto mt-4 md:mt-6"
          >
            {t('把过去属于顶尖运动员的支持体系，带给每一个追求进步的人。BOOM ONE 将体能师、康复师和生理师等的核心决策能力融入 AI Coach，持续平衡生活负荷、运动负荷与恢复节奏，帮助你在正确的时间，做出正确的决定。', 'Bringing the support system of elite athletes to everyone striving for progress. BOOM ONE integrates the core decision-making capabilities of strength and conditioning coaches, physical therapists, and physiologists into AI Coach, continuously balancing life load, training load, and recovery rhythm, helping you make the right decisions at the right time.')}
          </motion.p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative">
           {/* Center Line Track */}
           <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2"></div>
           
           {/* Animated fill line */}
           <motion.div 
              style={{ height: heightProgress }}
              className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-boom-green transform md:-translate-x-1/2 box-glow shadow-boom-green origin-top"
           ></motion.div>

           <div className="space-y-20 md:space-y-32">
             {timelineData.map((item, index) => {
               const isEven = index % 2 === 0;
               return (
                 <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                    {/* Node */}
                    <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-black border-2 border-white/20 transform md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center z-10 transition-colors duration-500 hover:border-boom-green group">
                       <div className="bg-boom-gray rounded-full p-2 group-hover:bg-boom-green/20 transition-colors">
                          {item.icon}
                       </div>
                    </div>

                    {/* Content Section (Left or Right) */}
                    <div className={`w-full md:w-1/2 pl-12 sm:pl-16 md:px-16 ${isEven ? 'md:pr-16 md:pl-0 md:text-right' : 'md:pl-16 md:pr-0 md:ml-auto'}`}>
                      <motion.div
                         initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8 }}
                      >
                         <h5 className={`font-display font-medium tracking-wide mb-2 ${index === 1 ? 'text-[#ff6b00]' : 'text-boom-green'}`}>{item.time}</h5>
                         <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                         <p className="text-boom-text-dim leading-relaxed mb-6">
                           {item.desc}
                         </p>
                         
                         <div className={`p-4 rounded-xl border inline-block text-sm font-medium text-white ${isEven ? 'md:mr-0 md:ml-auto' : ''} ${index === 1 ? 'border-[#ff6b00]/30 bg-[#ff6b00]/5 shadow-[0_0_15px_rgba(255,107,0,0.1)]' : 'border-boom-green/30 bg-boom-green/5 shadow-[0_0_15px_rgba(163,230,53,0.1)]'}`}>
                            <span className={`mr-2 ${index === 1 ? 'text-[#ff6b00]' : 'text-boom-green'}`}>✦</span>
                            {item.highlight}
                         </div>

                         {(index === 0 || index === 1 || index === 2) && (
                            <div className={`mt-6 max-w-sm relative w-full rounded-[24px] bg-[#1a1a1e] py-4 px-6 overflow-hidden shadow-2xl border border-white/5 ${isEven ? 'md:mr-0 md:ml-auto' : ''}`}>
                              {/* The Glowing Bottom Aura */}
                              <div className={`absolute -bottom-[20%] left-[10%] right-[10%] h-1/2 ${index === 1 ? 'bg-[#ff6b00]/80' : 'bg-boom-green/80'} blur-[50px] z-0 pointer-events-none rounded-full`}></div>
                            
                              {/* Content */}
                              <div className="relative z-10 text-left">
                                <div className="flex justify-between items-start mb-2">
                                   <div className="text-lg md:text-xl font-display font-light text-white tracking-tight">
                                      {index === 1 ? t('今日 19:00-21:00', 'Today 19:00-21:00') : index === 2 ? t('后天 10:00-12:00', 'Day after Tmrw 10:00-12:00') : t('今天 16:00-18:00', 'Today 16:00-18:00')}
                                   </div>
                                   <div className={`w-8 h-8 rounded-full ${index === 1 ? 'bg-[#ff6b00] shadow-[0_0_15px_rgba(255,107,0,0.5)]' : 'bg-boom-green shadow-[0_0_15px_rgba(163,230,53,0.5)]'} flex items-center justify-center shrink-0`}>
                                     <RefreshCw className="w-4 h-4 text-black animate-[spin_3s_linear_infinite]" strokeWidth={2.5} />
                                   </div>
                                </div>
                                
                                <div className="text-white/60 text-sm tracking-widest font-light uppercase font-sans">
                                  {t('超量恢复窗口期', 'Supercompensation Window')}
                                </div>
                              </div>
                            </div>
                         )}

                         <div className={`mt-6 w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 aspect-video ${isEven ? 'ml-auto' : ''}`}>
                             <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80" />
                         </div>
                      </motion.div>
                    </div>
                 </div>
               )
             })}
           </div>
        </div>
      </div>
    </section>
  );
}
