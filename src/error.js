module.exports = {
  notFound(req, res) {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ message: "Not Found" }));
  },
};
