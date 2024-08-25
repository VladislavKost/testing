const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../webpack.common.js");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

server.listen(8081, "localhost", (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send("ok");
  }
});
