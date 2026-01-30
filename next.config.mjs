/** @type {import('next').NextConfig} */
const nextConfig = {
    // Setup for static export or standalone depending on needs, 
    // keeping default for now for API routes support
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true, // For compatibility if deploying to certain static hosts, remove if Vercel
    }
};

export default nextConfig;
