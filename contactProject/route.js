const router=require("express").Router()

const { getAllContact, getOneContact, createContact, updateContact, deleteAllContact, deleteOneContact } = require("./controller")



router.get("/getAll",getAllContact)
router.get("/getOne/:userID",getOneContact)


router.post("/createContact",createContact)


router.put("/updateOne/:userID",updateContact)


router.delete("/deleteAll",deleteAllContact)
router.delete("/deleteOne/:userID",deleteOneContact)

module.exports=router