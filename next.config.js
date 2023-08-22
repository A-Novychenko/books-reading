/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/signin",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
