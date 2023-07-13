module.exports = (app) => {
  // const add = require("../controllers/add");
  const product = require("../controllers/productController");
  const user = require("../controllers/userController");

  var router = require("express").Router();
  router.get("/createProduct", product.createProduct)
  router.get("/getProducts", product.getProducts)
  router.get("/getProductById", product.getProductById)
  router.get("/signUp", user.signUpUser)

  // router.get("/addRoute", add.add);
  // router.get("/addRoute1", add.add1);
  // router.get("/create", add.create);
  // // router.get("/find", add.findAll);
  // // router.get("/update", add.update);
  // router.get("/read",add.read);
  // router.post("/update",add.update)
  // router.post("/delete",add.delete)
  // router.post("/signup",add.signup)

  // app.use("/blog", router);
  app.use("/", router);
};
