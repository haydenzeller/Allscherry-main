/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'api.allscherry.com'
            },
        ],
    },
};

export default nextConfig;
