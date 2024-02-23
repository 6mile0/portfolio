/** @type {import('next').NextConfig} */

const nextConfig = () => {
  if(process.env.NODE_ENV === 'development') {
    return {
        reactStrictMode: true,
        swcMinify: true,
        images: {
          unoptimized: true,
        },
        images: {
            remotePatterns: [
              {
                protocol: 'https',
                hostname: 'images.6mile.dev',
              },
            ],
          },
    }
  }
  
  // Disable image delivery optimization (for CF Page)
  return {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    images: {
      unoptimized: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.6mile.dev',
          },
        ],
      },
  }
}

export default nextConfig;
