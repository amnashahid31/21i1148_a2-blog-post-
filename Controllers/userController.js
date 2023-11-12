const user = require("../Models/user.schema")
const jwt = require("jsonwebtoken")

//routes function implementation
let getAllUsers = async(req , res)=>{
    let users = await user.find({});
    if(users)
    {
       res.status(200).json(users)
    }else
    {
      res.status(404).json({"Message":"Error" , err:err})
    }
}

let GetUserById = async(req ,res)=>{
    let id = req.params.id;
    let users = await user.findOne({_id:id});
    if(users)
    {
       res.status(200).json(users)
    }else
    {
      res.status(404).json({"Message":"Error" , err:err})
    }
}

let registerUser = (req , res)=>{
    let data = req.body;
    user.create({
        FullName:data.FullName,
        email:data.email,
        Password:data.Password,
    }).then(data=>{
        res.status(201).json(data)
    }).catch(err=>{
        res.status(500).json({"Message":"there was Some Error"})
    })
}

let updateuserById = async(req ,res)=>{
    let id = req.params.id;
    let data = req.body;
    let users = await user.findByIdAndUpdate(id , data);
    if(users)
    {
       res.status(200).json(users)
    }else
    {
      res.status(404).json({"Message":"Error" , err:err})
    }
}

let DeleteUserById =  async(req ,res)=>{
    let id = req.params.id;
    let users = await user.findByIdAndDelete(id);
    if(users)
    {
       res.status(200).json(users)
    }else
    {
      res.status(404).json({"Message":"Error" , err:err})
    }
}

let Login = async(req , res)=>{
    let {email , Password} = req.body;
    console.log(Password)
    console.log(req.body)
    try{
        let User = await user.findOne({email});
        if(User)
        {
            console.log(User.Password)
            if(User.Password == Password)
            {
                let id = User._id;
                let role = User.role
                let token = await jwt.sign({id , role} ,
                     process.env.SECRET_KEY ,
                      {expiresIn :'1h'})
                res.json({User , "Success":true , "Message": "Welcome",token})
            }else
            {
                res.json({ "Success":false , "Message":"Invalid password"})

            }
        }else
        {
            res.json({ "Success":false , "Message":"User not Fopound"})

        }
    }catch(err)
    {
        res.json({"Success":false , "Message":"User not Fopound" , err})
        
    }
    
}



module.exports  ={
    GetUserById,
    getAllUsers,
    updateuserById,
    DeleteUserById,
    registerUser,
    Login
}