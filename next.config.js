/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "en", // Set your default locale
    locales: ["en", "yo", "ig", "ha"], // Add Nigerian languages as supported locales
    fallbackLng: "en", // Set the fallback language
  },
};

module.exports = nextConfig;
