import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../languageContext';

// Contact specific translations
const translations = {
  sectionTitle: {
    en: "Get in Touch",
    fr: "Contactez-nous",
  },
  sectionSubtitle: {
    en: "Whether you're a business ready to scale or a creator looking to monetize, we'd love to hear from you.",
    fr: "Que vous soyez une entreprise prête à croître ou un créateur cherchant à monétiser, nous serions ravis de vous entendre.",
  },
  contactInfoTitle: {
    en: "Reach Out Directly",
    fr: "Contactez-nous Directement",
  },
  email: {
    en: "Email",
    fr: "Courriel",
  },
  phone: {
    en: "Phone",
    fr: "Téléphone",
  },
  address: {
    en: "Address",
    fr: "Adresse",
  },
  formTitle: {
    en: "Send Us a Message",
    fr: "Envoyez-nous un Message",
  },
  namePlaceholder: {
    en: "Your Name",
    fr: "Votre Nom",
  },
  emailPlaceholder: {
    en: "Your Email",
    fr: "Votre Courriel",
  },
  messagePlaceholder: {
    en: "Your Message",
    fr: "Votre Message",
  },
  submitButton: {
    en: "Send Message",
    fr: "Envoyer le Message",
  },
  successMessage: {
    en: "Your message has been sent successfully!",
    fr: "Votre message a été envoyé avec succès !",
  },
  errorMessage: {
    en: "There was an error sending your message. Please try again.",
    fr: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
  }
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Placeholder for SiteJourneyForm - replace with actual implementation if available
const SiteJourneyForm: React.FC<{ onSubmit: (data: FormData) => void; translate: (key: keyof typeof translations) => string; }> = ({ onSubmit, translate }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="sr-only">{translate('namePlaceholder')}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={translate('namePlaceholder')}
          className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">{translate('emailPlaceholder')}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={translate('emailPlaceholder')}
          className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">{translate('messagePlaceholder')}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder={translate('messagePlaceholder')}
          className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400 resize-y"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="theme-action w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
      >
        {translate('submitButton')}
      </button>
    </form>
  );
};


const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% chance of success
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
      setTimeout(() => setFormStatus('idle'), 5000); // Clear message after 5 seconds
    }, 1000);
  };

  return (
    <section id="contact" className="site-glow-section py-20 md:py-28 bg-slate-800 text-white">
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

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-700 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold font-display text-white mb-8">
              {t('contactInfoTitle')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">{t('email')}:</p>
                  <a href="mailto:info@ethosoverflow.com" className="text-xl text-white hover:text-emerald-300 transition-colors duration-300">
                    info@ethosoverflow.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">{t('phone')}:</p>
                  <a href="tel:+1-555-123-4567" className="text-xl text-white hover:text-emerald-300 transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-400">{t('address')}:</p>
                  <p className="text-xl text-white">
                    123 Agency Drive, Suite 400<br />
                    Montréal, QC H3B 1A1<br />
                    Canada
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-700"
          >
            <h3 className="text-3xl font-bold font-display text-white mb-8 text-center">
              {t('formTitle')}
            </h3>
            <SiteJourneyForm onSubmit={handleFormSubmit} translate={t} />
            {formStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-6 text-green-500 font-semibold"
              >
                {t('successMessage')}
              </motion.p>
            )}
            {formStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-6 text-red-500 font-semibold"
              >
                {t('errorMessage')}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
