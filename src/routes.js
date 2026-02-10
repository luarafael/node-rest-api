const UserControllers = require("./controllers/UserControllers");
const ProductControllers = require("./controllers/ProductControllers");

module.exports = [
  {
    endpoint: "/users",
    handler: UserControllers.index,
  },
  {
    endpoint: "/users",
    handler: UserControllers.create,
  },
  {
    endpoint: "/products",
    handler: ProductControllers.index,
  },
];
