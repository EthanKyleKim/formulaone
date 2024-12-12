// next.config.js
const nextConfig = {
  distDir: './dist', // Changes the build output directory to `./dist/`.
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['three'],
}

export default nextConfig
