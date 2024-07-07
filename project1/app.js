const express=require("express")
const app=express()




app.get("*",(req,res)=>{
    res.send("404 not found")
})

const PORT=3002
app.listen(PORT,()=>{
    console.log(`server is running on the port nb ${PORT}`)
})