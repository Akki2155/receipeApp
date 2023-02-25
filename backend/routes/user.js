const express=require("express");
const router=express.Router();

const {registerUser, logInUser}=require("../controllers/user.js")

router.post("/login", logInUser);
router.post("/register", registerUser);


module.exports=router;