import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-sky-800 text-sky-100 py-10 sm:py-14 w-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                Maître SAINT-HILAIRE
              </h2>
            </div>
            <p className="text-sky-300 text-sm leading-relaxed max-w-md">
              Prenez rendez-vous avec Maître SAINT-HILAIRE pour vos besoins en conseils et rédaction juridiques et vos contentieux.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-sky-200 mb-3">Contact</h3>
            <ul className="space-y-3 text-sm text-sky-300">
              <li className="flex flex-wrap items-center gap-2">
                <Phone size={18} />
                <a href="tel:438-345-5402" className="hover:text-white transition-colors duration-300">0601686661</a>
              </li>
              <li className="flex flex-wrap items-center gap-2">
                <Mail size={18} />
                <a href="mailto:esthetiqueplus.inc@gmail.com" className="hover:text-white transition-colors duration-300">
                  jovenel.saint-hilaire@avocat.fr
                </a>
              </li>
              <li className="flex flex-wrap items-start gap-2">
                <MapPin size={18} />
                <span className="hover:text-white transition-colors duration-300">{t('footer.address_value')}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-sky-700 mt-12 pt-6 text-sm text-sky-400">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4">
            <p>© {new Date().getFullYear()} Maître SAINT-HILAIRE {t('footer.rights_reserved')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}