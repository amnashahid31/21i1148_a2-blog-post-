const {getAllUsers , GetUserById, registerUser, updateuserById, DeleteUserById, Login} = require("../Controllers/userController")

const express = require("express");
const { AuthenticateUser } = require("../utils");

const router = express.Router();

//routes for the User Authentication Module
router.get("/" , AuthenticateUser ,  getAllUsers ) 
router.post("/login" , Login )    
router.get("/:id" , GetUserById)   
router.post("/" , registerUser) 
router.patch("/:id" , updateuserById) 
router.delete("/:id" ,DeleteUserById)   


module.exports = router;

