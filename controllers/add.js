const db = require("../models/blog") 
exports.add = (req,res)=>{
    console.log("routes")
    res.send("this is coming from controller")
}
exports.add1 = (req,res)=>{
    console.log("routes1")
    // res.send("this is coming from controller")
}

exports.create = (req,res)=>{

    const blog = new db({
        title:req.body.title,
        desc:req.body.desc
    })

    blog.save(blog).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })


}
