const jwt = require("jsonwebtoken")

//user authentication
let AuthenticateUser = async(req , res , next) =>{

    let token = req.headers.token;

    try{
    let DecodedData = await jwt.verify(token , process.env.SECRET_KEY)
    if(DecodedData)
    {
        req.User = DecodedData;
        next()
    }else
    {
        res.status(404).json({"Message":"Your Are Not Authenticated"})
    }
}catch(err)
{
    res.status(404).json({"Message":"Your Are Not Authenticated" , err})

}}

module.exports ={
    AuthenticateUser
}