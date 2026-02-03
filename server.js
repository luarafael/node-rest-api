const http = require("http");
const server = http.createServer(function () {
  console.log("Server is running");
});
server.listen(3000);
