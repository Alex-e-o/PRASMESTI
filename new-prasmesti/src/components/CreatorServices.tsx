import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, MessageSquare, Briefcase, TrendingUp } from 'lucide-react';
import { useLanguage } from '../languageContext';

// Creator Services specific translations
const translations = {
  sectionTitle: {
    en: "For Creators: Monetize Smarter, Grow Your Influence",
    fr: "Pour les Créateurs : Monétisez Plus Intelligemment, Développez Votre Influence",
  },
  sectionSubtitle: {
    en: "We help creators monetize smarter through the right brand deals.",
    fr: "Nous aidons les créateurs à monétiser plus intelligemment grâce aux bonnes collaborations de marque.",
  },
  serviceOneTitle: {
    en: "Strategic Brand Deal Sourcing",
    fr: "Recherche Stratégique de Partenariats de Marque",
  },
  serviceOneDescription: {
    en: "Connecting you with premium brands that align perfectly with your content, audience, and long-term vision, ensuring authentic and impactful collaborations.",
    fr: "Nous vous connectons avec des marques haut de gamme qui correspondent parfaitement à votre contenu, votre audience et votre vision à long terme, assurant des collaborations authentiques et percutantes.",
  },
  serviceTwoTitle: {
    en: "Expert Negotiation & Representation",
    fr: "Négociation et Représentation Expertes",
  },
  serviceTwoDescription: {
    en: "Handling all negotiations to secure the best terms and compensation for your partnerships, so you can focus on creating, not contracts.",
    fr: "Nous gérons toutes les négociations pour obtenir les meilleures conditions et compensations pour vos partenariats, afin que vous puissiez vous concentrer sur la création, et non sur les contrats.",
  },
  serviceThreeTitle: {
    en: "Long-Term Partnership Strategy",
    fr: "Stratégie de Partenariat à Long Terme",
  },
  serviceThreeDescription: {
    en: "Developing a sustainable monetization roadmap that goes beyond single campaigns, fostering lasting relationships that build your brand and revenue.",
    fr: "Élaboration d'une feuille de route de monétisation durable qui va au-delà des campagnes ponctuelles, favorisant des relations durables qui construisent votre marque et vos revenus.",
  },
  callToAction: {
    en: "Ready to elevate your creator journey?",
    fr: "Prêt à propulser votre parcours de créateur ?",
  },
  explorePartnerships: {
    en: "Explore Creator Partnerships",
    fr: "Explorer les Partenariats Créateurs",
  },
};

const CreatorServices: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];
  const scrollToSection = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const services = [
    {
      icon: Briefcase,
      title: t('serviceOneTitle'),
      description: t('serviceOneDescription'),
    },
    {
      icon: MessageSquare,
      title: t('serviceTwoTitle'),
      description: t('serviceTwoDescription'),
    },
    {
      icon: TrendingUp,
      title: t('serviceThreeTitle'),
      description: t('serviceThreeDescription'),
    },
  ];

  return (
    <section id="creator-services" className="site-glow-section py-20 md:py-28 bg-slate-900 text-white">
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
              className="bg-slate-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-slate-700 hover:border-indigo-500 transition-all duration-300"
            >
              <service.icon className="h-12 w-12 text-indigo-400 mb-6" />
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
            className="theme-action inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
          >
            {t('explorePartnerships')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorServices;
