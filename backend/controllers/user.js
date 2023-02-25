const User=require("../models/user.js");
const jwt=require("jsonwebtoken");


const registerUser=async (req,res)=>{

    try {
        const newUser=await User.create(req.body);
        return res.status(200).json({
            message:"User Created SucessFully",
            newUser
        })
    } catch (error) {
        return res.status(400).json({
            message:"Bad Request",
            errorMessage:error.message
        })
    }
};

const logInUser=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({
                message:"User not found"
            })
        }
        if(user.password===req.body.password){
            const token=jwt.sign({
                exp: Math.floor((Date.now()/1000)+(60*60)),
                id:user.id,
            },'WONDERLA')
            return res.status(200).json({
                message:"Login Successfully",
                user,
                token
            })
        }else{
            return res.status(400).json({
                message:"Password or Email doesn't match"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}


module.exports={registerUser, logInUser};