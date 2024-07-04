const express=require("express")
// const morgan=require("morgan")
const app=express()

const customMiddleware=(req,res,next)=>{
    if(req.url=="/test"){
        res.json({
            Message:"This page is blocked by admin"
        })
    }
    next()
}


const tinnyLogger=(req,res,next)=>{
    console.log(`${req.method}  ${req.url}`)
    next()
}

let middleware=[customMiddleware,tinnyLogger]
app.use(middleware)



app.get("/about",(req,res)=>{
    res.end("About page")
})
app.get("/test",(req,res)=>{
    res.end("Test page")
})
app.get("/",(req,res)=>{
res.send("Home page")
})
app.get("*",(req,res)=>{
res.send("404 not found")
})

const PORT=3001

app.listen(PORT,()=>{
    console.log(`server is running on the port nb ${PORT}`)
})