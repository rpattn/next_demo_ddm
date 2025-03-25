/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
          '/api/getFile': ['./data/'],
        },
      },
};

export default nextConfig;
