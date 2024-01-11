/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: async () => [{
        source: '/view/:id*',
        headers: [
            {
                key: 'Cache-Control',
                value: 'no-store',
            },
        ],
    }]
}

module.exports = nextConfig
