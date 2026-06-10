import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6 md:px-12 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
         <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <span translate="no" className="font-display font-bold text-lg tracking-widest text-white">BOOM</span>
            </div>
            <p className="text-boom-text-dim text-sm max-w-[330px] mx-auto md:mx-0 whitespace-pre-line">
               {t('向内探索，向外突破。\n为每一位追求卓越的耐力运动者而生。BOOM 将顶级教练团队的思维融入全天候 AI Coach，让科学训练与精准恢复成为持续进步的底层能力。', 'Explore inward, break outward. Built for every endurance athlete striving for excellence. BOOM integrates the mindset of top coaching teams into a 24/7 AI Coach, making scientific training and precise recovery the foundational capability for continuous progress.')}
            </p>
         </div>
         
         <div>
            <h4 className="text-white font-bold mb-4 font-display">{t('产品特征', 'Product Features')}</h4>
            <ul className="space-y-2 text-sm text-boom-text-dim">
              <li>{t('全天候 AI Coach', '24/7 AI Coach')}</li>
              <li>{t('超量恢复识别', 'Supercompensation Recognition')}</li>
              <li>{t('16Hz 高频连续采集', '16Hz High-Freq Continuous Sampling')}</li>
              <li>{t('灵活无感佩戴', 'Invisible Fit')}</li>
            </ul>
         </div>

         <div>
            <h4 className="text-white font-bold mb-4 font-display">{t('探索更多', 'Explore More')}</h4>
            <ul className="space-y-2 text-sm text-boom-text-dim">
              <li>{t('产品理念', 'Product Philosophy')}</li>
              <li>{t('科学依据', 'Scientific Basis')}</li>
              <li>{t('开发者选项', 'Developer Options')}</li>
              <li>{t('用户故事', 'User Stories')}</li>
            </ul>
         </div>

         <div>
            <h4 className="text-white font-bold mb-4 font-display">{t('联系我们', 'Contact Us')}</h4>
            <ul className="space-y-2 text-sm text-boom-text-dim">
              <li>{t('官网：boomai.com.cn', 'Website: boomai.com.cn')}</li>
              <li>{t('邮箱：hello@boomai.com.cn', 'Email: hello@boomai.com.cn')}</li>
            </ul>
         </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 text-center text-xs text-boom-text-dim">
         <p>© 2024 BOOM Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}
