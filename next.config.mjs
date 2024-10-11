/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd())
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-json-server.typicode.com',
        port: '',
        pathname: '/aynunnissa/tokobiru-data2/**',
      },
      {
        protocol: 'https',
        hostname: 'my-json-server.typicode.com',
        port: '',
        pathname: '/aynunnissa/tokobiru-data/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/aynunnissa/tokobiru-data/**',
      },
    ],
  },
};

export default nextConfig;
