module.exports = {
  i18n: {
    defaultLocale: "en", // Set your default locale
    locales: ["en", "yo", "ig", "ha"], // Add Nigerian languages as supported locales
    fallbackLng: "en", // Set the fallback language
    resources: {
      en: {
        // Add translations for English
        common: require("./locales/en/common.json"),
        // Include other translation files for other namespaces or components
        // For example: jobsDescription: require("./public/locales/en/jobsDescription.json"),
      },
      yo: {
        // Add translations for Yoruba
        common: require("./locales/yo/common.json"),
        // Include other translation files for other namespaces or components
      },
      ig: {
        // Add translations for Igbo
        common: require("./locales/ig/common.json"),
        // Include other translation files for other namespaces or components
      },
      ha: {
        // Add translations for Hausa
        common: require("./locales/ha/common.json"),
        // Include other translation files for other namespaces or components
      },
    },
  },
  // Add any additional configuration options here
};
