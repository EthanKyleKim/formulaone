// next.config.js
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['three'],
}

export default nextConfig
