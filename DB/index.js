const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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





// Create schema
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    address:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//Create Model
const productModel=mongoose.model("student",productSchema)


app.get("/",(req,res)=>{
    res.send("This Is Home Page")
})

// post: /product -- create new product 
// create new post
app.post("/product",async(req,res)=>{
try {
    const newProduct=new productModel({
    name:req.body.name,
    age:req.body.age,
    address:req.body.address
})
    const productData=await newProduct.save()
    res.status(200).send(productData)
} catch (error) {
    res.status(500).send({message:error.message})
}
})



//  get: /product -- find all product 
// find all product
app.get("/product",async(req,res)=>{
    try {
       const allProduct= await productModel.find();
       if(allProduct){
        res.status(200).send({message:"Find All Product ",
            data:allProduct
        })
       }
       else{
        res.status(404).send({message:"404 Not found"})
       }
    } catch (error) {
    res.status(500).send({message:error.message})
    }
})

//  get: /product/:id -- find a specific product 
// find one product
app.get("/product/:id",async(req,res)=>{
    try {
        const id=req.params.id
       const allProduct= await productModel.findOne({_id:id}).select({_id:0,__v:0});
       if(allProduct){
        res.status(200).send({message:"Find One Product ",
            data:allProduct
        })
       }
       else{
        res.status(404).send({message:"404 Not found"})
       }
    } catch (error) {
    res.status(500).send({message:error.message})
    }
})



const PORT=3005
app.listen(PORT,async()=>{
    console.log(`Server is running on the port number ${PORT}`)
    await connectDB()
})