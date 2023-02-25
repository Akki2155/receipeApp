const express=require("express")
const router=express.Router();

const {postReceipe, getAllReceipe, getReceipeById}=require("../controllers/receipe");
const auth=require("../middleware/auth.js");

router.get("/", getAllReceipe);
router.get("/:id", getReceipeById);
router.post("/create",auth,postReceipe );


module.exports=router;