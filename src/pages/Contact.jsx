import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Form from '../components/Form';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative w-full bg-slate-950 flex justify-center py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-x-0 -top-20 mx-auto h-40 max-w-3xl bg-gradient-to-b from-sky-500/15 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl space-y-10">
        <header className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/70">
            {t('contact.tagline')}
          </p>
          <h1
            id="contact-title"
            className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-slate-50"
          >
            {t('contact.title')}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            {t('contact.intro')}
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Colonne Informations */}
          <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7 shadow-sm">
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-slate-50 mb-4">
              {t('contact.info_block_title')}
            </h2>
            <p className="mb-6 text-sm text-slate-300">
              {t('contact.info_block_body')}
            </p>

            <dl className="space-y-4 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-sky-300" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {t('contact.phone_label')}
                  </dt>
                  <dd>
                    <a
                      href="tel:0601686661"
                      className="font-medium hover:text-sky-300"
                    >
                      06 01 68 66 61
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-sky-300" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {t('contact.email_label')}
                  </dt>
                  <dd>
                    <a
                      href="mailto:jovenel.saint-hilaire@avocat.fr"
                      className="font-medium hover:text-sky-300"
                    >
                      jovenel.saint-hilaire@avocat.fr
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-sky-300" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {t('contact.address_label')}
                  </dt>
                  <dd className="text-slate-200">
                    {t('contact.address_value')}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-sky-300" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {t('contact.hours_label')}
                  </dt>
                  <dd className="text-slate-200">
                    {t('contact.hours_value')}
                  </dd>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                <span className="font-semibold">{t('contact.siren_label')}</span>{' '}
                <span>{t('contact.siren_value')}</span>
              </div>
            </dl>
          </article>

          {/* Colonne Formulaire */}
          <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7 shadow-sm">
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-slate-50 mb-4">
              {t('contact.form_title')}
            </h2>
            <p className="mb-5 text-sm text-slate-300">
              {t('contact.form_intro')}
            </p>
            <Form />
          </article>
        </section>
      </div>
    </motion.section>
  );
}