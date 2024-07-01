/** @type {import('next').NextConfig} */

const nextConfig = () => {
  return {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    images: {
      unoptimized: true,
    }
  }
}

export default nextConfig;
