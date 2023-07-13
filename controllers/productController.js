const Product = require("../models/Product");

exports.createProduct = (req, res) => {
  const product = new Product({
    name: "product3",
    description: "description3",
    price: 500,
    countInStock: 100,
  });

  product.save(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.getProducts = async (req,res)  =>{
    const products = await Product.find({});
    res.send(products)
}
exports.getProductById = async (req,res)  =>{
    // TODO: pass id dynamically from client side
    const id = req.body.id
    console.log("id",id)
    const products = await Product.findById(id);
    res.send(products)
}

// cart getCartProduct 
// cart addCartProduct 
// cart deleteCartProduct 