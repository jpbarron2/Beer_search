const controller = require("../controllers/beers_api");

module.exports = app => {
  app.get("/api/beer", controller.home);
};
