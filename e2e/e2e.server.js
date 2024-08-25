const { createServer } = require("webpack-dev-server");
const config = require("../webpack.common");

const server = createServer(config);

server.listen(8081, "localhost", (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send("ok");
  }
});
