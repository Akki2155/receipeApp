const jwt=require("jsonwebtoken");
const KEY="WONDERLA"


const auth=async(req,res,next)=>{

    const token=req.headers.authorization.split(' ')[1];

    // const token=req.params.id;
    if(token){
        try {
            req.userID=jwt.verify(token, KEY);
            next();
        } catch (error) {
            return res.status(400).json({
                message:"Invalid Token"
            })
        }
    }else{
        return res.status(400).json({
            message:"You need to sign In to Access this!"
        })
    }
}

module.exports=auth;