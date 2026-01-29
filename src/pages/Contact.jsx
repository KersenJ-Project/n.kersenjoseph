import { motion } from "motion/react"
import { useTranslation } from 'react-i18next';
import Form from "../components/Form";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-screen bg-sky-50 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 gap-4"
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 mb-2">
            Contacter Maitre Saint-Hilaire
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-4">
                {t('contact.contact_info', 'Contact Information')}
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-sky-600 text-lg">📞</span>
                  <span>06 01 68 66 61</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-sky-600 text-lg">✉️</span>
                  <a
                    href="mailto:esthetiqueplus.inc@gmail.com"
                    className="hover:text-sky-600 underline transition-colors"
                  >
                    jovenel.saint-hilaire@avocat.fr
                  </a>
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-4">
                {t('contact.days_operation')}
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>{t('contact.days_of_work', 'Mon-Sat')}: 9h - 19h30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </motion.section>
  );
}