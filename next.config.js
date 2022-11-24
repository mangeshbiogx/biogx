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
  }*/
 images:{
    loader:"akamai",
    path:""
  },
  basePath:"/biogx",
  assetPrefix:"/biogx",
  trailingSlash: true,
}

 

module.exports = nextConfig