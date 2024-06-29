const express=require(`express`)
const app=express()
const workouts=require(`./controllers/workoutsController`)

app.use(express.json())
app.use(`/workouts`,workouts)
app.get(`/`,(req,res)=>{
    res.send(`welcome to my fitness app`)
})


module.exports=app