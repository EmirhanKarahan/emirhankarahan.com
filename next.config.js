/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
  },
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "images.ctfassets.net",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
