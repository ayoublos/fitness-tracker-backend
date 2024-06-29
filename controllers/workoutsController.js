const express=require(`express`)
const workouts=express.Router()
let workoutData=require(`../models/workout`)


workouts.get(`/`,(req,res)=>{
res.status(200).send(workoutData)
})
workouts.post(`/`,(req,res)=>{
    const newObj={...req.body,id:workoutData.length+1}
    workoutData.push(newObj)

res.send(workoutData)

})
workouts.put(`/:id`,(req,res)=>{
    const id=req.params.id
    let index=workoutData.findIndex(el=>el.id==id)
    workoutData[index]={...workoutData[index],...req.body}
res.send(workoutData)

})
workouts.delete(`/:id`,(req,res)=>{
    const id=req.params.id
    workoutData=workoutData.filter(el=>el.id!=id)


    // const deletedWorkout=workoutData.splice(index,1)
   
res.redirect(`/workouts`)

})


module.exports=workouts