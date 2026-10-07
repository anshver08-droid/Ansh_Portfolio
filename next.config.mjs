/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config) => {
    config.output.uniqueName = "ansh-portfolio";
    return config;
  },
};

export default nextConfig;
