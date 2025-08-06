/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Enable static exports for deployment
  trailingSlash: true,
  // Optimize bundle size
  compress: true,
  // Enable source maps in development
  productionBrowserSourceMaps: false,
  // Configure webpack for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig 