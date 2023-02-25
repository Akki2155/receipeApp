const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors");

const receipeRoutes=require("./routes/receipe.js")
const userRoutes=require("./routes/user.js");

const app=express();
app.use(cors());
app.use(express.json());


app.use("/api/v1/receipe", receipeRoutes);
app.use("/api/v1/user", userRoutes);














const DB_URL="mongodb+srv://Akki2155:akki3009@cluster0.hjhrres.mongodb.net/receipeDB?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
mongoose.connect(DB_URL, { useNewUrlParser:true , useUnifiedTopology:true}).then(()=>
   app.listen(4000, ()=> console.log('Server is Up at PORT : 4000'))
).catch((err)=> console.log(err.message));