const http=require("http")

const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.end("hello node js you are beauty")
})

server.listen(3000,()=>{
    console.log("server is running on the port number 3000")
})