import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggle = () => {
    const newLang = i18n.language === 'en' ? 'jp' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 15, scale: 1.05 }}
      className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
    >
      {i18n.language === 'en' ? '日本語' : 'EN'}
    </motion.button>
  );
}
