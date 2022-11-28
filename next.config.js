/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery",
  }));
    return config;},
   /*images:{
    loader:"akamai",
    path:""
  },
  basePath:"/out",
  assetPrefix:"/out",*/
  images:{
    loader:"akamai",
    path:"/biogx"
  },
  basePath:"/biogx",
  assetPrefix:"/biogx",
  trailingSlash: true,
  env: {
    IMGPATH: process.env.IMGPATH,
  }
  /*exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/home': { page: '/' },
      '/': { page: '/' },
    }
  }*/
}

 

module.exports = nextConfig