/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 's3-alpha-sig.figma.com',
          port: '',
          pathname: '/img/**'
        },
        {
            protocol: 'https',
            hostname: 'img.icons8.com',
            port: '',
            pathname: '/**'
          }]
      }
};

export default nextConfig;
