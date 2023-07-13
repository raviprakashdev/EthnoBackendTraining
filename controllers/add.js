const db = require("../models/blog");
exports.add = (req, res) => {
  console.log("routes");
  res.send("this is coming from controller");
};
exports.add1 = (req, res) => {
  console.log("routes1");
  // res.send("this is coming from controller")
};

exports.create = (req, res) => {
  const blog = new db({
    title: req.body.title,
    desc: req.body.desc,
  });

  blog
    .save(blog)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
// signup 
// 1 take email id
// 2 take password
// 3 read (email) exist
// if(email exist in db ){
//     res.send("email already exist")
// }else{
//     create
// }

// login
// 1 take email id
// 2 take password
// 3 check email is in db or not 
// JWT token = email + password + secrectkey + expiry


exports.read = async (req,res) =>{
     const blog =  await db.find({}); //processing
     console.log("read",blog)
     res.send(blog) //try to send response
}

exports.update = async(req,res)=>{
    const { title,desc } = req.body
    const blog = await db.findOneAndUpdate(
        {title:title},
        {desc:desc},
        {upsert:true}
    )
    res.send(blog)
}
exports.delete = async (req,res)=>{
    
        await db.findByIdAndRemove("646b2254c0ce85da78b27684")
        res.send("data delted")
}



// try {
//     await Cart.findByIdAndRemove(req.params.id)
//     res.status(200).send({status: 'ok'})
//   } catch (e) {
//     console.log(err)
//     sendResponseError(500, `Error ${err}`, res)
//   }

exports.findAll = async (req, res) => {
  try {
    const blog = await db.find({});
    // console.log(carts)
    res.status(200).send({ status: "ok", blog });
  } catch (err) {
    console.log(err);
    sendResponseError(500, `Error ${err}`, res);
  }
};
// exports.update = async (req, res) => {
// //   const { productId, count } = req.body;
//   try {
//     const blog = await db.findOneAndUpdate(
//       { title:"third title" },
//       {  desc:"this is third desc1" },
//       { upsert: true }
//     );

//     res.status(201).send({ status: "ok", blog });
//   } catch (err) {
//     console.log(err);
//     sendResponseError(500, `Error ${err}`, res);
//   }
// };
