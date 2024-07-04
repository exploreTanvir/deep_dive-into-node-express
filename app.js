const express=require("express")
const morgan=require("morgan")
const userRouter=require("./userRoute")
const postRouter=require("./postRoute")
const app=express()
// app.use(morgan())



app.use("/user",userRouter)
app.use("/post",postRouter)

app.get("/products/:prodId",(req,res)=>{
        res.send("Hello I am listening")
})
app.get("/",(req,res)=>{
        res.send("this is home page")
})
// app.get("/about",morgan("dev"),(req,res)=>{
//         res.send("this is about page")
// })
// app.get("/test",(req,res)=>{
//     res.send("this is test page")
// })
app.get("*",(req,res)=>{
    res.send("404 not found")
})

const PORT=process.env.PORT||3001

app.listen(PORT,()=>{
    console.log(`server is running on the port nb ${PORT}`)
})