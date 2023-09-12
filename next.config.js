/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    esmExternals: false,
    nextScriptWorkers: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ["legacy-suite-cms.s3.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/queen-elizabeth-II-a-monarchy-heritage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/a-den-of-billions-of-dollars-the-unfortunate-millionaires",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/necrology-death-announment-obituario-mortuary-tribute-death-notice-obituary-eualogy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/other-uses-of-crypto-for-our-everyday-lives",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
