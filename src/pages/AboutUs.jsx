import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-slate-950 flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl space-y-10">
        <header className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/70">
            {t("aboutus.tagline")}
          </p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-50">
            {t("aboutus.title")}
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
            {t("aboutus.intro")}
          </p>
        </header>

        <section aria-label={t("aboutus.timeline_aria")} className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-slate-50 mb-3">
                {t("aboutus.profile_title")}
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                {t("aboutus.profile_body")}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-slate-50 mb-3">
                {t("aboutus.approach_title")}
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                {t("aboutus.approach_body")}
              </p>
            </div>
          </div>

          <ol className="relative border-l border-slate-800 space-y-6 pl-5">
            <li className="relative">
              <div className="absolute -left-[9px] h-4 w-4 rounded-full border border-sky-400 bg-slate-950" />
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80">
                  {t("aboutus.timeline_1_period")}
                </p>
                <h3 className="mt-1 font-heading text-base sm:text-lg font-semibold text-slate-50">
                  {t("aboutus.timeline_1_title")}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  {t("aboutus.timeline_1_body")}
                </p>
              </div>
            </li>

            <li className="relative">
              <div className="absolute -left-[9px] h-4 w-4 rounded-full border border-sky-400 bg-slate-950" />
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80">
                  {t("aboutus.timeline_2_period")}
                </p>
                <h3 className="mt-1 font-heading text-base sm:text-lg font-semibold text-slate-50">
                  {t("aboutus.timeline_2_title")}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  {t("aboutus.timeline_2_body")}
                </p>
              </div>
            </li>

            <li className="relative">
              <div className="absolute -left-[9px] h-4 w-4 rounded-full border border-sky-400 bg-slate-950" />
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80">
                  {t("aboutus.timeline_3_period")}
                </p>
                <h3 className="mt-1 font-heading text-base sm:text-lg font-semibold text-slate-50">
                  {t("aboutus.timeline_3_title")}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  {t("aboutus.timeline_3_body")}
                </p>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </section>
  );
}