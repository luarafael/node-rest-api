const users = require("../mocks/users");
module.exports = {
  index(req, res) {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(users));
  },
};
