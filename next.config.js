/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*basePath:"/out",
  assetPrefix:"/out",*/
 images:{
    loader:"akamai",
    path:""
  },
  basePath:"/biogx",
  assetPrefix:"/biogx"
}

module.exports = nextConfig
