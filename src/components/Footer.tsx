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
            <p className="text-boom-text-dim text-sm max-w-xs mx-auto md:mx-0">
               {t('探索向内，突破向外。我们服务于所有耐力运动的严肃运动者，为您打造一整套以教练思维为核心的全天候体系。', 'Explore within. Break beyond. We serve all serious endurance athletes, building a 24/7 coaching-centric ecosystem for you.')}
            </p>
         </div>
         
         <div>
            <h4 className="text-white font-bold mb-4 font-display">{t('产品特征', 'Product Features')}</h4>
            <ul className="space-y-2 text-sm text-boom-text-dim">
              <li>{t('续航一周 7 Days Battery', '7 Days Battery')}</li>
              <li>{t('16Hz 超高频采集', '16Hz Ultra-High Frequency')}</li>
              <li>{t('灵活无感佩戴', 'Invisible Fit')}</li>
              <li>{t('全天候动态判定', '24/7 Dynamic Assessment')}</li>
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
