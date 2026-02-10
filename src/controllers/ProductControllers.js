const products = require("../mocks/products");

module.exports = {
  index(req, res) {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(products));
  },
};
