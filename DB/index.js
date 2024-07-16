const express=require("express")
const mongoose=require("mongoose")
const app=express()

//Way-1

// mongoose.connect("mongodb://127.0.0.1:27017/usersDB")
// .then(()=>console.log("DB is connected"))
// .catch((err)=>{
//     console.log(err)
//     console.log("DB is not connected")
// })


//Way-2

const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/usersDB")
        console.log("DB is connected")
    } catch (error) {
        console.log("DB is not connected")
        console.log(error)
    }
}


app.get("/",(req,res)=>{
    res.send("This Is Home Page")
})


const PORT=3005
app.listen(PORT,async()=>{
    console.log(`Server is running on the port number ${PORT}`)
    await connectDB()
})