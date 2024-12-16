/**
 * @type {import('next').NextConfig}
*/

const nextConfig = () => {
  return {
    reactStrictMode: true,
    output: 'export',
    images: {
      unoptimized: true,
    }
  }
}

export default nextConfig;
