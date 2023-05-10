/** @type {import('next').NextConfig} */
function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });

  return config;
}

const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['src'],
  },
  webpack,
};

module.exports = nextConfig;
