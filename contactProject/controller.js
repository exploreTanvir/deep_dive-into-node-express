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
    res.send("create contact")
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