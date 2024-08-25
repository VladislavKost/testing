const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../webpack.common.js");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

export const runServer = async () => {
  console.log("Starting server...");
  await server.start();
};

export const stopServer = async () => {
  console.log("Stopping server...");
  await server.stop();
};
