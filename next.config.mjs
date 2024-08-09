/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
    ],
  },
};

export default nextConfig;
