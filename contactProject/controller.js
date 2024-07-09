const fs=require("fs")

exports.getAllContact=(req,res)=>{
    fs.readFile("./data.js",(err,data)=>{
        res.writeHead(200,{"content-type":"text/html"})
        res.write(data)
            res.end()
    })
}
exports.getOneContact=(req,res)=>{
    fs.readFile("./data.js",(err,data)=>{
        res.writeHead(200,{"content-type":"text/html"})
        res.write(data)
            res.end()
    })
}
exports.createContact=(req,res)=>{
    const name=req.body.name
   const id=req.body.id
   const email=req.body.email
   const phone=req.body.phone
   const cData=(name,id,email,phone)
   fs.writeFile("./createdData.js",cData,(err)=>{
    if(err){
        res.writeHead(404,{"content-type":"text/html"})
        res.write("file create failed")
        res.end()
    }
    else{
        res.writeHead(200,{"content-type":"text/html"})
        res.write("file create success")
        res.end()
    }
   })

}
exports.updateContact=(req,res)=>{
    res.send("update contact")
}
exports.deleteAllContact=(req,res)=>{
    res.send("Delete All contact")
}
exports.deleteOneContact=(req,res)=>{
    res.send("Delete One contact")
}