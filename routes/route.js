module.exports = (app) => {
  const add = require("../controllers/add");
  var router = require("express").Router();

  router.get("/addRoute", add.add);
  router.get("/addRoute1", add.add1);
  router.get("/create", add.create);

  app.use("/", router);
};
