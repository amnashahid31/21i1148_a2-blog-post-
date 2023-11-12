const {postCreate, getPostbyID, updatePostById, DeletePostById, AllPosts, ratingPost, commentingPost} = require ("../Controllers/postController");
const express = require("express");

const Prouter = express.Router();

Prouter.post("/createpost", postCreate)
Prouter.get("/:Postid", getPostbyID)
Prouter.put("/:Postid", updatePostById)
Prouter.delete("/:Postid", DeletePostById)
Prouter.get("/", AllPosts)
Prouter.post("/:Postid/rating", ratingPost)
Prouter.post("/:Postid/comment", commentingPost)
module.exports = Prouter;