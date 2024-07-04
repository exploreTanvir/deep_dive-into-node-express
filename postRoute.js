const router=require("express").Router()

router.get("/",(req,res)=>{
    res.send("Render all post")
})
router.post("/",(req,res)=>{
    res.send("Create new post")
})
router.put("/",(req,res)=>{
    res.send("Update your post")
})
router.delete("/",(req,res)=>{
    res.send("Delete your post")
})



module.exports=router