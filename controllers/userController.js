const User = require("../models/user");
const bcrypt = require('bcrypt')
exports.signUpUser = async (req, res) => {
  const { email, password } = req.body; //destructing
  // const email = req.body.email
  // const password = req.body.password
//   const passwordEncrypt = bcrypt.hash(password, 8);
  const user = new User({
    email: email,
    password: password,
  });
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
