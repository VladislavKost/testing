const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack.dev");

const server = new WebpackDevServer({}, { compiler: webpack(config) });
server.startCallback(() => {
  console.log("Webpack Dev Server is listening on port 8081");
  if (process.send) {
    process.send("ok");
  }
});
