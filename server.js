const express=require("express")
const app=express()
const ejs=require("ejs")

app.set("view engine","ejs")
app.get("/",(req,res)=>{

res.render("home",{id:process.env.HOSTNAME})

})
app.listen(8080,()=>console.log("server started in container id ",process.env.HOSTNAME))