/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // serverActions: true,
        missingSuspenseWithCSRBailout: false,
    },
    target: 'server',
    images: {
        domains: ['fsboafrica.com'],
    },

};

export default nextConfig;
