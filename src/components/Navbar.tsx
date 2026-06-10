import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import { X, Copy, Check } from "lucide-react";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "hello@boomai.com.cn";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <>
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
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform hidden sm:block"
          >
            {t('立即体验', 'Experience Now')}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-[#111113] border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl z-10 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-8 mt-2">
                <h3 className="text-2xl font-bold text-white mb-3">{t('立即体验', 'Experience Now')}</h3>
                <p className="text-boom-text-dim text-sm max-w-[280px] mx-auto leading-relaxed">
                  {t('联系我们，报名成为我们的天使用户吧！', 'Contact us to sign up as an angel user!')}
                </p>
              </div>

              <div className="bg-black/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-5">
                <span className="text-white font-mono text-lg font-medium tracking-wide">{email}</span>
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-boom-green" /> : <Copy className="w-4 h-4" />}
                  {copied ? t('已复制', 'Copied') : t('复制邮箱', 'Copy Email')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
