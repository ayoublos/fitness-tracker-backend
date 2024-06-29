const express=require(`express`)
const app=express()

app.get(`/`,(req,res)=>{
    res.send(`welcome to my fitness app`)
})


module.exports=app