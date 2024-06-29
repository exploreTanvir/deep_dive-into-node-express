const path=require("path")
// console.log(__filename)
const myPathName=__filename 
// console.log(path)
// console.log(path.basename(myPathName))
// console.log(path.basename(__dirname))
// console.log(path.extname(myPathName))
// console.log(path.isAbsolute(myPathName))
// console.log(path.isAbsolute("./test.js"))
console.log(path.join("user","admin","testfile.js"))


const pathObj={
    dir:"uer/local",
    ext:".js",
    name:"pathTest"
}
console.log(path.format(pathObj))
console.log(path.parse(myPathName))