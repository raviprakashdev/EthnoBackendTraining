const mongoose = require("mongoose")
// const { Schema } = require("mongoose")
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:String,
    desc:String
})

module.exports = mongoose.model("Blog",blogSchema)
