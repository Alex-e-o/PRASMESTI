import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Handshake } from 'lucide-react';
import { useLanguage } from '../languageContext';

// Why Ethos Overflow specific translations
const translations = {
  whyEthosOverflow: {
    en: "Why Ethos Overflow?",
    fr: "Pourquoi Ethos Overflow ?",
  },
  introParagraph: {
    en: "At Ethos Overflow, we bridge the gap between ambitious businesses and influential creators. Our mission is to empower growth and foster genuine connections in the digital landscape, ensuring value for every partner.",
    fr: "Chez Ethos Overflow, nous faisons le pont entre les entreprises ambitieuses et les créateurs influents. Notre mission est de stimuler la croissance et de favoriser des connexions authentiques dans le paysage numérique, en assurant de la valeur pour chaque partenaire.",
  },
  valueOneTitle: {
    en: "Strategic Insight",
    fr: "Vision Stratégique",
  },
  valueOneDescription: {
    en: "We go beyond superficial solutions, delivering data-driven strategies for sustained success. Our deep market understanding ensures optimal outcomes for both businesses and creators.",
    fr: "Nous allons au-delà des solutions superficielles, en élaborant des stratégies basées sur les données pour un succès durable. Notre compréhension approfondie du marché assure des résultats optimaux pour les entreprises et les créateurs.",
  },
  valueTwoTitle: {
    en: "Performance-Driven",
    fr: "Axé sur la Performance",
  },
  valueTwoDescription: {
    en: "Every project is executed with a relentless focus on measurable results. For businesses, it's about conversions and efficiency; for creators, it's about impactful monetization.",
    fr: "Chaque projet est exécuté avec une concentration implacable sur des résultats mesurables. Pour les entreprises, il s'agit de conversions et d'efficacité ; pour les créateurs, il s'agit d'une monétisation impactante.",
  },
  valueThreeTitle: {
    en: "Authentic Partnerships",
    fr: "Partenariats Authentiques",
  },
  valueThreeDescription: {
    en: "We believe in building relationships based on trust and mutual benefit. We connect creators with brands that genuinely align with their audience and values, fostering long-term success.",
    fr: "Nous croyons en la construction de relations basées sur la confiance et le bénéfice mutuel. Nous mettons en relation les créateurs avec des marques qui correspondent réellement à leur public et à leurs valeurs, favorisant ainsi un succès à long terme.",
  },
  ctaTitle: {
    en: "Ready to Transform Your Digital Presence or Monetize Your Influence?",
    fr: "Prêt à Transformer Votre Présence Numérique ou à Monétiser Votre Influence ?",
  },
  ctaDescription: {
    en: "Connect with Ethos Overflow today and discover how we can help you achieve your ambitious goals.",
    fr: "Contactez Ethos Overflow dès aujourd'hui et découvrez comment nous pouvons vous aider à atteindre vos objectifs ambitieux.",
  },
  contactUs: {
    en: "Contact Us",
    fr: "Nous Contacter",
  },
};

const WhyEthos: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];
  const scrollToSection = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const features = [
    {
      icon: Lightbulb,
      title: t('valueOneTitle'),
      description: t('valueOneDescription'),
    },
    {
      icon: Rocket,
      title: t('valueTwoTitle'),
      description: t('valueTwoDescription'),
    },
    {
      icon: Handshake,
      title: t('valueThreeTitle'),
      description: t('valueThreeDescription'),
    },
  ];

  return (
    <section id="why-ethos" className="site-glow-section py-20 md:py-28 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-8 md:mb-12"
        >
          {t('whyEthosOverflow')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto mb-16"
        >
          {t('introParagraph')}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-slate-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-slate-700 hover:border-emerald-500 transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-semibold font-display mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20 bg-slate-800 p-10 rounded-xl max-w-4xl mx-auto border border-slate-700 shadow-xl"
        >
          <h3 className="text-3xl font-bold font-display text-white mb-4">
            {t('ctaTitle')}
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            {t('ctaDescription')}
          </p>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="theme-action inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
          >
            {t('contactUs')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEthos;
