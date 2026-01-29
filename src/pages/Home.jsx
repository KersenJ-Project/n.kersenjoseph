import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Briefcase, Scale, FileText, Building2, Shield, Clock, Ear } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-slate-950 text-slate-100">
      {/* HERO */}
      <section
        className="relative flex min-h-[80vh] items-center justify-center border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        aria-labelledby="hero-title"
      >
        <div className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-72 max-w-4xl bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6 text-left">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-sky-300/70">
              {t('home.hero_tagline')}
            </p>
            <h1
              id="hero-title"
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.1s' }}
            >
              {t('home.hero_title')}
            </h1>
            <p
              className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.25s' }}
            >
              {t('home.hero_description')}
            </p>
            <p
              className="max-w-xl text-sm sm:text-base text-slate-300 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.35s' }}
            >
              {t('home.hero_secondary')}
            </p>

            <div
              className="mt-4 flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.45s' }}
            >
              <Link to="/contact">
                <AnimatedButton>
                  <span className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/30 transition hover:bg-sky-400">
                    {t('home.hero_cta_primary')}
                  </span>
                </AnimatedButton>
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-slate-100 underline-offset-4 hover:text-sky-300 hover:underline"
              >
                {t('home.hero_cta_secondary')}
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full border border-sky-400/60 bg-slate-900/80 text-[10px] font-semibold text-sky-100 flex items-center justify-center">
                  ES
                </span>
                <span>{t('home.hero_badge_bar')}</span>
              </div>
              <div className="h-4 w-px bg-slate-700 hidden sm:block" />
              <p>{t('home.hero_badge_business')}</p>
            </div>
          </div>

          <motion.aside
            className="mt-8 flex-1 lg:mt-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/90 p-6 shadow-sm shadow-black/50">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {t('home.hero_card_title')}
                  </p>
                  <p className="font-heading text-lg font-semibold text-slate-50">
                    {t('home.hero_card_name')}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {t('home.hero_card_status')}
                </div>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <Briefcase className="mt-0.5 h-4 w-4 text-sky-300" />
                  <div>
                    <dt className="font-medium text-slate-100">
                      {t('home.hero_card_business_title')}
                    </dt>
                    <dd className="text-slate-300">
                      {t('home.hero_card_business_desc')}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="mt-0.5 h-4 w-4 text-sky-300" />
                  <div>
                    <dt className="font-medium text-slate-100">
                      {t('home.hero_card_compliance_title')}
                    </dt>
                    <dd className="text-slate-300">
                      {t('home.hero_card_compliance_desc')}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Scale className="mt-0.5 h-4 w-4 text-sky-300" />
                  <div>
                    <dt className="font-medium text-slate-100">
                      {t('home.hero_card_bar_title')}
                    </dt>
                    <dd className="text-slate-300">
                      {t('home.hero_card_bar_desc')}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="mt-0.5 h-4 w-4 text-sky-300" />
                  <div>
                    <dt className="font-medium text-slate-100">
                      {t('home.hero_card_address_title')}
                    </dt>
                    <dd className="text-slate-300">
                      {t('home.hero_card_address_desc')}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        className="border-b border-slate-800 bg-slate-950/60"
        aria-labelledby="services-title"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/70">
              {t('home.services_tagline')}
            </p>
            <h2
              id="services-title"
              className="mt-3 font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-50"
            >
              {t('home.services_title')}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {t('home.services_intro')}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Briefcase,
                title: t('home.services.business_law.title'),
                description: t('home.services.business_law.description'),
              },
              {
                icon: FileText,
                title: t('home.services.contracts.title'),
                description: t('home.services.contracts.description'),
              },
              {
                icon: Scale,
                title: t('home.services.litigation.title'),
                description: t('home.services.litigation.description'),
              },
              {
                icon: Building2,
                title: t('home.services.corporate.title'),
                description: t('home.services.corporate.description'),
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-500/70 hover:shadow-md hover:shadow-sky-900/40"
              >
                <div>
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section
        className="bg-slate-950"
        aria-labelledby="values-title"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/70">
              {t('values.tagline')}
            </p>
            <h2
              id="values-title"
              className="mt-3 font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-50"
            >
              {t('values.title')}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {t('values.intro')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30">
                <Shield className="h-4 w-4" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-50">
                {t('values.rigor.title')}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {t('values.rigor.description')}
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30">
                <Clock className="h-4 w-4" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-50">
                {t('values.reactivity.title')}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {t('values.reactivity.description')}
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30">
                <Ear className="h-4 w-4" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-50">
                {t('values.listen.title')}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {t('values.listen.description')}
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}