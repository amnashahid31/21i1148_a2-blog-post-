const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    postTitle :String,
    postContent:String,
    Owner:String,
    rating:Number,
    comments:[String],
},{timestamps:true})
const model = mongoose.model("Posts" , postSchema);
module.exports = model;