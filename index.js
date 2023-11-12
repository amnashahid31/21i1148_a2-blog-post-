const express = require("express")
const mongoose  =require("mongoose")
const app = express();
const user = require("./Models/user.schema");
const post = require("./Models/post.schema");
const Userrouter = require("./Routes/userRoutes");
const Postrouter = require ("./Routes/postRoutes");
app.use(express.json())
const cors = require("cors")
require("dotenv").config()

//server on the which the app will run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/user" ,  Userrouter)
app.use("/post", Postrouter)

app.get("/" , (req , res)=>{
    res.json({"Message":"Hello from local host 3000"})
})

//connecting app with database
mongoose.connect(process.env.MONGODB_STRING).then(()=>{
    console.log("Connected to MongoDB") 
}).catch(err=>{
    console.log(err)
})