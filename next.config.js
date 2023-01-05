/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["pt"],
    defaultLocale: "pt",
  },
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
