const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
// create/add product
// get products
// get single product
// Foreign key
