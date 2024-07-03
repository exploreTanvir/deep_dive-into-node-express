const express=require("express")
const env=require("dotenv")
const app=express()

app.get("/test",(req,res)=>{
        res.send("i am listening")
})


const PORT=process.env.PORT||3001

app.listen(PORT,()=>{
    console.log(`server is running on the port nb ${PORT}`)
})