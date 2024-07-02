const fs=require("fs")

const testObj={
    name:"tanvir",
    email:"tanvir853@gmail.com",
    address:{
        city:"magura",
        country:"BD"
    }
}

const data=JSON.stringify(testObj)
fs.writeFile("writefiletest.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file write successfully")
    }
})

fs.readFile("./writefiletest.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    let testdata=JSON.parse(data)
        console.log(testdata)
})