/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
  },
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
