/** @type {import('next').NextConfig} */

const withSvgr = require('next-plugin-svgr');
const nextConfig = {
  experimental: {
    appDir: true,
  },
};



module.exports = withSvgr(nextConfig);
