import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import AnimatedButton from '../components/AnimatedButton';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-sky-50">
      {/* HERO */}
      <section
        className="relative min-h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url()` }}
      >
        <motion.div
          className="absolute inset-0 bg-black opacity-30 z-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 4 }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl">
          <h2
            className="text-4xl md:text-6xl font-bold animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Maitre Saint-Hilaire
          </h2>
          <p
            className="mt-4 text-lg md:text-xl animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            Maître Jovenel SAINT-HILAIRE a exercé à Paris dans un premier temps avant de s'installer en Essonne. Il exerce principalement en droit des affaires et accompagne les entreprises dans leurs problématiques juridiques et contentieuses. Avocat généraliste, il intervient également en droit des étrangers et en contentieux du droit civil général. La proximité, la disponibilité, la réactivité, l'écoute sont au rendez-vous pour la satisfaction de ses clients par des solutions adaptées.
          </p>
          <p>
            Prenez rendez-vous avec Maître SAINT-HILAIRE pour vos besoins en conseils et rédaction juridiques et vos contentieux.
          </p>
        </div>
      </section>

      {/* Domaines */}
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl text-center">
          <h2>
            Domaines de pratique
          </h2>
          <p>
            Maitre Saint-Hilaire s'engage a aider ses clients ...
          </p>
        </div>
      </section>

    </div>
  );
}