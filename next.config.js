/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["pt"],
    defaultLocale: "pt",
  },
  images: { domains: ["tailwindui.com", "images.unsplash.com"] },
};

module.exports = nextConfig;
