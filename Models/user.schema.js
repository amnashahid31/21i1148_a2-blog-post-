const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    FullName :String,
    email:String,
    role:String,
    Password:String,
    
},{timestamps:true})
const model = mongoose.model("User" , userSchema);
module.exports = model;
