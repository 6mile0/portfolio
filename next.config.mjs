/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    unoptimized: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.6mile.dev',
          },
        ],
      },
};

export default nextConfig;
