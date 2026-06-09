import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 top-0 left-0 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/50 border-b border-white/5"
    >
      <div className="flex items-center gap-3">
        <span translate="no" className="font-display font-bold text-xl tracking-widest text-white">BOOM</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-boom-text-dim">
        <a href="#overview" className="hover:text-white transition-colors">{t('概览', 'Overview')}</a>
        <a href="#wear" className="hover:text-white transition-colors">{t('佩戴体验', 'Experience')}</a>
        <a href="#precision" className="hover:text-white transition-colors">{t('超高精度', 'Precision')}</a>
        <a href="#recovery" className="hover:text-white transition-colors">{t('恢复算法', 'Recovery')}</a>
        <a href="#aicoach" className="text-boom-green hover:text-white transition-colors">{t('AI教练', 'AI COACH')}</a>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
          translate="no"
          className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full hover:bg-white/10 transition-colors text-white"
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>
        <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform hidden sm:block">
          {t('立即探索', 'Explore')}
        </button>
      </div>
    </motion.nav>
  );
}
