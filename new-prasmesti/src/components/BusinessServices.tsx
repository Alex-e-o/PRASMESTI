import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Code, TrendingUp, HandCoins } from 'lucide-react';
import { useLanguage } from '../languageContext';

// Business Services specific translations
const translations = {
  sectionTitle: {
    en: "For Businesses: Drive Growth, Save Time",
    fr: "Pour les Entreprises : Stimulez la Croissance, Gagnez du Temps",
  },
  sectionSubtitle: {
    en: "We design websites that buy you time, so you can focus on scaling.",
    fr: "Nous concevons des sites web qui vous font gagner du temps, afin que vous puissiez vous concentrer sur la croissance.",
  },
  serviceOneTitle: {
    en: "High-Performance Website Design & Development",
    fr: "Conception et Développement de Sites Web Hautes Performances",
  },
  serviceOneDescription: {
    en: "Crafting bespoke, lightning-fast websites optimized for user experience and search engines, ensuring your online presence drives real results.",
    fr: "Création de sites web sur mesure, ultra-rapides, optimisés pour l'expérience utilisateur et les moteurs de recherche, garantissant que votre présence en ligne génère de vrais résultats.",
  },
  serviceTwoTitle: {
    en: "Conversion-Focused Landing Pages",
    fr: "Pages de Destination Axées sur la Conversion",
  },
  serviceTwoDescription: {
    en: "Building compelling landing pages designed to capture leads and convert visitors into customers, maximizing your marketing ROI.",
    fr: "Construction de pages de destination convaincantes conçues pour capter des leads et convertir les visiteurs en clients, maximisant votre ROI marketing.",
  },
  serviceThreeTitle: {
    en: "Growth-Oriented Digital Infrastructure",
    fr: "Infrastructure Numérique Axée sur la Croissance",
  },
  serviceThreeDescription: {
    en: "Implementing robust, scalable digital systems that support your business operations, streamline workflows, and facilitate future expansion.",
    fr: "Mise en œuvre de systèmes numériques robustes et évolutifs qui soutiennent vos opérations commerciales, rationalisent les flux de travail et facilitent l'expansion future.",
  },
  callToAction: {
    en: "Ready to elevate your business?",
    fr: "Prêt à propulser votre entreprise ?",
  },
  getStarted: {
    en: "Get Started for Businesses",
    fr: "Commencer pour les Entreprises",
  },
};

const BusinessServices: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];
  const scrollToSection = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const services = [
    {
      icon: Layout,
      title: t('serviceOneTitle'),
      description: t('serviceOneDescription'),
    },
    {
      icon: TrendingUp,
      title: t('serviceTwoTitle'),
      description: t('serviceTwoDescription'),
    },
    {
      icon: Code,
      title: t('serviceThreeTitle'),
      description: t('serviceThreeDescription'),
    },
  ];

  return (
    <section id="business-services" className="site-glow-section py-20 md:py-28 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-6"
        >
          {t('sectionTitle')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto mb-16"
        >
          {t('sectionSubtitle')}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-slate-700 hover:border-emerald-500 transition-all duration-300"
            >
              <service.icon className="h-12 w-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-semibold font-display mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-slate-300 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold font-display text-white mb-6">
            {t('callToAction')}
          </h3>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="theme-action inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
          >
            {t('getStarted')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessServices;
