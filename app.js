const express=require("express")
const morgan=require("morgan")
const app=express()
// app.use(morgan())

app.get("/",(req,res)=>{
        res.send("this is home page")
})
app.get("/about",morgan("dev"),(req,res)=>{
        res.send("this is about page")
})
app.get("/test",(req,res)=>{
    res.send("this is test page")
})
app.get("*",(req,res)=>{
    res.send("404 not found")
})

const PORT=process.env.PORT||3001

app.listen(PORT,()=>{
    console.log(`server is running on the port nb ${PORT}`)
})