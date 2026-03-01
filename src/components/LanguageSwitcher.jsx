import { useTranslation } from "react-i18next"
import { motion } from "motion/react"

export default function LanguageSwitcher({ isMobile }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Sauvegarde de la langue choisie
  localStorage.setItem("language", currentLang);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`relative flex ${
        isMobile ? "justify-start" : "justify-center"
      } items-center bg-slate-950 rounded-xl p-2 w-26 h-12`}
    >
      {/* La box qui glisse */}
      <motion.div
        layout
        layoutId="activeLangBox"
        className="absolute top-2 bottom-2 w-[48%] bg-white rounded-lg shadow"
        animate={{
          left: currentLang === "fr" ? "4px" : "50%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />

      {/* Boutons */}
      <button
        onClick={() => changeLanguage("fr")}
        className={`relative z-10 w-1/2 py-1 font-semibold transition ${
          currentLang === "fr" ? "text-slate-700" : "text-white"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`relative z-10 w-1/2 py-1 font-semibold transition ${
          currentLang === "en" ? "text-slate-700" : "text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}