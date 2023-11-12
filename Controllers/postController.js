const post = require ("../Models/post.schema");
const jwt = require("jsonwebtoken")

//Routes functions implementation for Blog posts

let postCreate = (req,res)=>{
        let data = req.body;
        post.create({
            postTitle:data.Title,
            postContent:data.Content,
            Owner:data.Owner,
        }).then(data=>{
            res.status(201).json(data)
        }).catch(err=>{
            res.status(500).json({"Message":"there was Some Error"})
        })
}

let getPostbyID = async (req,res)=>{
    let Postid = req.params.id;
    let posts = await post.findOne({_id:Postid});
    if(posts)
    {
       res.status(200).json(posts)
    }else
    {
      res.status(404).json({"Message":"Error" , err:err})
    }
}



let updatePostById = async(req ,res)=>{
    let Postid = req.params.id;
    let data = req.body;
    let posts = await user.findByIdAndUpdate(Postid , data);
    if(posts)
    {
       res.status(200).json(posts)
    }else
    {
      res.status(404).json({"Message":"Error" , err:err})
    }
}

let DeletePostById =  async(req ,res)=>{
    let Postid = req.params.id;
    let posts = await user.findByIdAndDelete(Postid);
    if(posts)
    {
       res.status(200).json(posts)
    }else
    {
      res.status(404).json({"Message":"Error" , err:err})
    }
}

let AllPosts = async (req,res)=>{
    let posts = await post.find({});
    if(posts)
    {
       res.status(200).json(posts)
    }else
    {
      res.status(404).json({"Message":"Error" , err:err})
    }
}

let ratingPost = async (req,res)=>{
    try{
        const {rating} = req.body;
        const Postid = req.params.id;
        const posts = await post.findByIdAndUpdate(Postid, rating);
        if(posts)
         {
           res.status(200).json(posts)
         }else
         {
           res.status(404).json({"Message":"Error" , err:err})
         }
    }catch(err)
    {
        res.status(500).json({"Message":"Error happened", err})
    }
}

let commentingPost = async (req, res) => {
    try {
      const { text } = req.body;
      const Postid = req.params.id;
      const post = await post.findByIdAndUpdate(Postid, comments);
      if(posts)
      {
        res.status(200).json(posts)
      }else
      {
        res.status(404).json({"Message":"Error" , err:err})
      }
    }catch(err)
    {
        res.status(500).json({"Message":"Error happened", err})
    }
  };
  
module.exports =
{
    postCreate,
    getPostbyID,
    updatePostById,
    DeletePostById,
    AllPosts,
    ratingPost,
    commentingPost
};