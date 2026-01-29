import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="w-screen bg-sky-50 flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-800 mb-6">
          {t("aboutus.title")}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          {t("aboutus.description")}
        </p>
      </div>
    </section>
  );
}