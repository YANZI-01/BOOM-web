import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Bell, Activity, Moon, Coffee } from "lucide-react";
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
      time: t("07:00 AM - 觉醒时刻", "07:00 AM - Awakening"),
      title: t("睡眠与恢复综合评估", "Comprehensive Sleep & Recovery Evaluation"),
      desc: t("AI Coach 判断昨夜睡眠深度与恢复情况。如果系统判断你尚未完全恢复，会自动建议你今天降低训练强度，或进行灵活性训练，而不是盲目冲刺突破。", "AI Coach evaluates last night's sleep depth and recovery. If you haven't fully recovered, it suggests lowering today's training intensity instead of pushing blindly."),
      highlight: t("“昨夜慢波睡眠偏少，建议今日将训练心率区间控制在 Zone 2。”", "\"Slow-wave sleep was low last night, suggested target HR is Zone 2 today.\""),
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Activity className="w-6 h-6 text-boom-green" />,
      time: t("14:00 PM - 训练准备 & 负荷预警", "14:00 PM - Training Prep & Load Warning"),
      title: t("动态调整平衡生活与训练", "Dynamically Balance Life & Training"),
      desc: t("很多时候你的压力并非来自运动，而是工作。全天候 16Hz 监测让 AI Coach 能够捕捉到你的生活高负荷状态。如果早晨开会过于疲劳，AI 会在你下午准备高强度训练前，发出适度降级的预警。", "Stress often comes from work, not just sports. 24/7 16Hz monitoring lets AI Coach catch high-load life moments, issuing warnings and modifying afternoon high-intensity training plans accordingly."),
      highlight: t("“目前神经压力指数极高，存在受伤风险，建议取消原定的间歇跑计划。”", "\"Current neural stress index is extremely high, suggesting you cancel the interval run.\""),
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    },
    {
      icon: <Bell className="w-6 h-6 text-boom-green" />,
      time: t("18:00 PM - 进阶训练中", "18:00 PM - Advanced Training"),
      title: t("实时反馈的边界守护", "Real-time Boundary Defense"),
      desc: t("在训练过程中，AI Coach 就是你的贴身顾问。当你的运动量已经达标，它会通过精准震动提醒；当判断出机体超负荷面临危险，它会立刻发出急促的干预警告。", "During training, AI Coach is your personal consultant. Once the target is reached, it reminds via haptic feedback; if it detects an overload risk, it issues a sharp intervention warning immediately."),
      highlight: t("震动反馈：目标已达成，安全着陆。", "Haptic Feedback: Target reached, safe landing."),
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Moon className="w-6 h-6 text-boom-green" />,
      time: t("22:00 PM - 科学重建", "22:00 PM - Scientific Reconstruction"),
      title: t("全方位的恢复处方", "Comprehensive Recovery Prescription"),
      desc: t("训练后的恢复同样关键。根据今天的消耗，AI Coach 会为你制定当晚的具体恢复计划：如何补水、需要摄入多少碳水与蛋白质、甚至指导何时入睡最为黄金。", "Post-training recovery is crucial. Based on today's caloric burn, AI Coach dictates tonight's recovery plan: hydration needs, macro intake, and even the golden hour to hit the bed."),
      highlight: t("“今日消耗 1200 kcal，建议睡前加餐并尽早于 22:30 入睡以修复微损伤。”", "\"Burned 1200 kcal today, consider a pre-sleep snack and aim for 22:30 bed time.\""),
      img: "https://images.unsplash.com/photo-1532029837206-abbe267fa205?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="aicoach" className="py-32 bg-black relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-boom-green font-display text-xl mb-4 font-medium tracking-wide"
          >
            04 // THE CORE: 24/7 AI COACH
          </motion.h3>
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-bold font-display leading-tight"
          >
            {t('模拟顶级教练组的', 'A personalized 24/7 coach')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-boom-green to-white text-glow">{t('个性化全天陪练', 'simulating a top-tier team')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-boom-text-dim text-lg max-w-3xl mx-auto mt-6"
          >
            {t('顶尖运动员的背后是一个包含主教练、康复师、营养师的庞大团队。现在，BOOM ONE 的 AI COACH 完美融合了这些职能。真正关注“生活负荷 + 运动负荷”与“睡眠 + 恢复”的绝对平衡。', 'Behind every elite athlete is a massive team including a head coach, trainer, and nutritionist. BOOM ONE\'s AI COACH perfectly merges these roles, truly focusing on the absolute balance of "life load + training load" and "sleep + recovery".')}
          </motion.p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative">
           {/* Center Line Track */}
           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2"></div>
           
           {/* Animated fill line */}
           <motion.div 
              style={{ height: heightProgress }}
              className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-boom-green transform md:-translate-x-1/2 box-glow shadow-boom-green origin-top"
           ></motion.div>

           <div className="space-y-32">
             {timelineData.map((item, index) => {
               const isEven = index % 2 === 0;
               return (
                 <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                    {/* Node */}
                    <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-black border-2 border-white/20 transform md:-translate-x-1/2 -translate-x-[23px] flex items-center justify-center z-10 transition-colors duration-500 hover:border-boom-green group">
                       <div className="bg-boom-gray rounded-full p-2 group-hover:bg-boom-green/20 transition-colors">
                          {item.icon}
                       </div>
                    </div>

                    {/* Content Section (Left or Right) */}
                    <div className={`w-full md:w-1/2 pl-20 md:px-16 ${isEven ? 'md:pr-16 md:pl-0 md:text-right' : 'md:pl-16 md:pr-0 md:ml-auto'}`}>
                      <motion.div
                         initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8 }}
                      >
                         <h5 className="text-boom-green font-display font-medium tracking-wide mb-2">{item.time}</h5>
                         <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                         <p className="text-boom-text-dim leading-relaxed mb-6">
                           {item.desc}
                         </p>
                         
                         <div className={`p-4 rounded-xl border border-boom-green/30 bg-boom-green/5 text-sm font-medium text-white shadow-[0_0_15px_rgba(163,230,53,0.1)] inline-block ${isEven ? 'md:mr-0 md:ml-auto' : ''}`}>
                            <span className="text-boom-green mr-2">✦</span>
                            {item.highlight}
                         </div>

                         <div className={`mt-8 w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 aspect-video ${isEven ? 'ml-auto' : ''}`}>
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
