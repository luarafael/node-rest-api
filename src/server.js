const http = require("http");
const routes = require("./routes");
const error = require("./error");

const server = http.createServer(function (req, res) {
  const route = routes.find((r) => r.endpoint === req.url);
  if (route) {
    route.handler(req, res);
    return;
  }
  error.notFound(req, res);
});
server.listen(3000);
