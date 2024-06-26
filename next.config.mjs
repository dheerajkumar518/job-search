/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/dashboard",
                basePath: false,
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
