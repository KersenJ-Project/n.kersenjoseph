import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-200 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-heading text-2xl font-semibold text-slate-50 flex items-center gap-2">
                {t('footer.brand')}
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-slate-100 mb-3">
              {t('footer.contact_title')}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex flex-wrap items-center gap-2">
                <Phone size={18} />
                <a
                  href="tel:0601686661"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  06 01 68 66 61
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-2">
                <Mail size={18} />
                <a
                  href="mailto:jovenel.saint-hilaire@avocat.fr"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  jovenel.saint-hilaire@avocat.fr
                </a>
              </li>
              <li className="flex flex-wrap items-start gap-2">
                <MapPin size={18} />
                <span className="hover:text-sky-300 transition-colors duration-300">
                  {t('footer.address_value')}
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-5 text-xs sm:text-sm text-slate-500">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4">
            <p>
              © {new Date().getFullYear()} {t('footer.brand')} — {t('footer.rights_reserved')}
            </p>
            <p className="text-[11px] text-slate-500">
              {t('footer.siren_label')}: {t('footer.siren_value')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}