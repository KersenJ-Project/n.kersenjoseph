import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, m } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, LoaderCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile, socialLinks } from '../data/links';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = {
  from_name: '',
  reply_to: '',
  subject: '',
  message: '',
  company: '', // Honeypot anti-spam
};

export default function Contact() {
  const { t, i18n } = useTranslation();
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.from_name.trim()) {
      nextErrors.from_name = t('contact.errors.nameRequired');
    }
    if (!formData.reply_to.trim()) {
      nextErrors.reply_to = t('contact.errors.emailRequired');
    } else if (!emailRegex.test(formData.reply_to)) {
      nextErrors.reply_to = t('contact.errors.emailInvalid');
    }
    if (!formData.subject.trim()) {
      nextErrors.subject = t('contact.errors.subjectRequired');
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = t('contact.errors.messageMin');
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Détection du pot de miel (honeypot anti-spam)
    if (formData.company.trim()) {
      setStatus('success');
      setFeedback(t('contact.success'));
      setFormData(initialForm);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setFeedback(
        i18n.language === 'en'
          ? 'EmailJS is not configured. Please add your credentials in the .env file.'
          : 'EmailJS n’est pas encore configuré. Ajoutez vos clés dans le fichier .env.'
      );
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      // Import dynamique d'EmailJS pour préserver le temps de chargement initial
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setStatus('success');
      setFeedback(t('contact.success'));
      setFormData(initialForm);
      formRef.current?.reset();
    } catch {
      setStatus('error');
      setFeedback(t('contact.error'));
    }
  };

  const inputClass =
    'w-full rounded-xl border border-mocha-500/30 bg-espresso-950/20 dark:bg-espresso-950/40 light:bg-cream-100/80 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors';

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* Lueur de lampe chaude en arrière-plan */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* En-tête */}
        <div className="mb-14">
          <p className="font-display tracking-widest text-sm sm:text-base text-amber-500 uppercase">
            {t('contact.surtitle')}
          </p>
          <h2
            id="contact-title"
            className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink"
          >
            {t('contact.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Formulaire style lettre / billet d'époque */}
          <div className="lg:col-span-8">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border-2 border-caramel-400/35 bg-surface p-7 sm:p-10 shadow-warm relative"
            >
              {/* Ligne pointillée décorative style ticket */}
              <div
                className="absolute top-0 right-10 left-10 h-[2px] border-t-2 border-dashed border-caramel-400/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Champ masqué langue pour EmailJS */}
              <input type="hidden" name="language" value={i18n.language} />

              {/* Pot de miel anti-spam masqué */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="company-honeypot">Entreprise</label>
                <input
                  id="company-honeypot"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-xs font-bold uppercase tracking-wider text-caramel-400 mb-1.5"
                  >
                    {t('contact.nameLabel')} <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    className={inputClass}
                    aria-describedby={errors.from_name ? 'err-from_name' : undefined}
                  />
                  {errors.from_name && (
                    <p id="err-from_name" className="mt-1 text-xs text-red-500">
                      {errors.from_name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="reply_to"
                    className="block text-xs font-bold uppercase tracking-wider text-caramel-400 mb-1.5"
                  >
                    {t('contact.emailLabel')} <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.reply_to}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    className={inputClass}
                    aria-describedby={errors.reply_to ? 'err-reply_to' : undefined}
                  />
                  {errors.reply_to && (
                    <p id="err-reply_to" className="mt-1 text-xs text-red-500">
                      {errors.reply_to}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold uppercase tracking-wider text-caramel-400 mb-1.5"
                >
                  {t('contact.subjectLabel')} <span className="text-amber-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.subjectPlaceholder')}
                  className={inputClass}
                  aria-describedby={errors.subject ? 'err-subject' : undefined}
                />
                {errors.subject && (
                  <p id="err-subject" className="mt-1 text-xs text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-caramel-400 mb-1.5"
                >
                  {t('contact.messageLabel')} <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  className={inputClass}
                  aria-describedby={errors.message ? 'err-message' : undefined}
                />
                {errors.message && (
                  <p id="err-message" className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Bouton d'envoi et retours visuels */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-amber-500 hover:bg-burnt-700 text-espresso-950 hover:text-cream-100 font-sans font-bold text-sm tracking-wide transition-all duration-300 shadow-warm hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'loading' && (
                    <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                  )}
                  <span>
                    {status === 'loading' ? t('contact.sending') : t('contact.submit')}
                  </span>
                </button>

                <AnimatePresence mode="wait">
                  {feedback && (
                    <m.div
                      key={status}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className={`inline-flex items-center gap-2 text-sm font-medium ${
                        status === 'error'
                          ? 'text-red-500'
                          : 'text-amber-500 dark:text-amber-400'
                      }`}
                      role="status"
                      aria-live="polite"
                    >
                      {status === 'error' ? (
                        <AlertCircle size={16} aria-hidden="true" />
                      ) : (
                        <CheckCircle2 size={16} aria-hidden="true" />
                      )}
                      <span>{feedback}</span>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

          {/* Volet Coordonnées adjacentes */}
          <aside className="lg:col-span-4 rounded-2xl border border-mocha-500/30 bg-surface p-7 sm:p-8 shadow-warm flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-ink">
                {profile.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-caramel-400 mt-0.5">
                {profile.title}
              </p>
            </div>

            <div className="space-y-4 text-sm text-muted">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-amber-500 mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs uppercase text-caramel-400 font-bold">
                    {t('contact.directEmail')}
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-medium text-ink hover:text-amber-500 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-500 mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs uppercase text-caramel-400 font-bold">
                    {t('contact.location')}
                  </span>
                  <span className="font-medium text-ink">{profile.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-mocha-500/20">
              <span className="block text-xs uppercase text-caramel-400 font-bold mb-3">
                Réseaux & Code
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub de Nyle Kersen Joseph"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mocha-500/40 bg-page text-ink hover:text-amber-500 hover:border-amber-500 transition-all duration-300 hover:scale-105"
                >
                  <Github size={17} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn de Nyle Kersen Joseph"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mocha-500/40 bg-page text-ink hover:text-amber-500 hover:border-amber-500 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
