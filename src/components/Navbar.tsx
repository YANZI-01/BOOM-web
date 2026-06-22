import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import React, { useState } from "react";
import { X, Copy, Check, Menu } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
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
        className="fixed w-full z-50 top-0 left-0 flex items-center px-7 py-3 backdrop-blur-md bg-black/50 border-b border-white/5"
      >
        <div className="flex items-center gap-3 flex-1 flex-basis-0">
          <Link to="/" className="font-display font-bold text-[18px] tracking-widest text-white" translate="no">BOOM</Link>
        </div>
        <div className="hidden md:flex items-center justify-center gap-7 text-[13px] flex-1 flex-basis-0">
          <Link 
            to="/"
            className={`transition-all duration-300 relative py-1.5 tracking-wider ${
              currentPath === "/" ? "text-boom-green font-medium text-glow" : "text-white/70 font-light hover:text-white"
            }`}
          >
            {t('产品概览', 'Product Overview')}
            {currentPath === "/" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-boom-green shadow-[0_0_8px_#a3e635]" />
            )}
          </Link>
          <Link 
            to="/without-boom"
            className={`transition-all duration-300 relative py-1.5 tracking-wider ${
              currentPath === "/without-boom" ? "text-boom-green font-medium text-glow" : "text-white/70 font-light hover:text-white"
            }`}
          >
            {t('没有BOOM', 'Without BOOM')}
            {currentPath === "/without-boom" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-boom-green shadow-[0_0_8px_#a3e635]" />
            )}
          </Link>
          <Link 
            to="/brand"
            className={`transition-all duration-300 relative py-1.5 tracking-wider ${
              currentPath === "/brand" ? "text-boom-green font-medium text-glow" : "text-white/70 font-light hover:text-white"
            }`}
          >
            {t('关于我们', 'About Us')}
            {currentPath === "/brand" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-boom-green shadow-[0_0_8px_#a3e635]" />
            )}
          </Link>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            translate="no"
            className="text-[11px] font-bold border border-white/20 px-3 py-1 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            {language === 'zh' ? 'EN' : '中文'}
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black px-4 py-1.5 rounded-full font-bold text-[13px] tracking-wide hover:scale-105 transition-transform hidden sm:block"
          >
            {t('立即探索', 'Explore Now')}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-[22px] h-[22px]" /> : <Menu className="w-[22px] h-[22px]" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[64px] left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 z-40 py-5 px-7 flex flex-col gap-5 md:hidden"
          >
            <Link 
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg transition-colors tracking-wider ${
                currentPath === "/" ? "text-boom-green font-medium" : "text-white/70 font-light"
              }`}
            >
              {t('产品概览', 'Product Overview')}
            </Link>
            <Link 
              to="/without-boom"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg transition-colors tracking-wider ${
                currentPath === "/without-boom" ? "text-boom-green font-medium" : "text-white/70 font-light"
              }`}
            >
              {t('没有BOOM', 'Without BOOM')}
            </Link>
            <Link 
              to="/brand"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg transition-colors tracking-wider ${
                currentPath === "/brand" ? "text-boom-green font-medium" : "text-white/70 font-light"
              }`}
            >
              {t('关于我们', 'About Us')}
            </Link>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}
              className="bg-white text-black px-5 py-3 rounded-full font-bold tracking-wide mt-4 w-full sm:hidden"
            >
              {t('立即探索', 'Explore Now')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <div key="modal-overlay" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
              
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-white mb-2">{t('立即探索', 'Explore Now')}</h3>
              </div>

              <div className="space-y-4">
                {/* user registration */}
                <div className="bg-black/50 border border-white/5 rounded-2xl p-5 flex flex-col items-start gap-4">
                  <p className="text-boom-text-dim text-sm leading-relaxed text-left">
                    {t('立即体验产品，可联系我们：', 'To explore the product, please contact us:')}
                  </p>
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-white font-mono text-base font-medium tracking-wide">hello@boomai.com.cn</span>
                    <button 
                      onClick={() => handleCopy('hello@boomai.com.cn')}
                      className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap"
                    >
                      {copiedText === 'hello@boomai.com.cn' ? <Check className="w-3.5 h-3.5 text-boom-green" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedText === 'hello@boomai.com.cn' ? t('已复制', 'Copied') : t('复制', 'Copy')}
                    </button>
                  </div>
                </div>

                {/* investors */}
                <div className="bg-black/50 border border-white/5 rounded-2xl p-5 flex flex-col items-start gap-4">
                  <p className="text-boom-text-dim text-sm leading-relaxed text-left">
                    {t('寻找商业合作，直联创始人：', 'For business cooperation, contact the founder directly:')}
                  </p>
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-white font-mono text-base font-medium tracking-wide">founder@boomai.com.cn</span>
                    <button 
                      onClick={() => handleCopy('founder@boomai.com.cn')}
                      className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap"
                    >
                      {copiedText === 'founder@boomai.com.cn' ? <Check className="w-3.5 h-3.5 text-boom-green" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedText === 'founder@boomai.com.cn' ? t('已复制', 'Copied') : t('复制', 'Copy')}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

