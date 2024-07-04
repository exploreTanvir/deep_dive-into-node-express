const { getAllPost, getSinglePost, createPost, updateAllPost, updateSinglePost, deleteAllPost, deleteSinglePost } = require("./postController")

const router=require("express").Router()

router.get("/",getAllPost)
// ======URL PARAMETER =======
router.get("/:postID",getSinglePost)



router.post("/",createPost)



router.put("/",updateAllPost)
// ======URL PARAMETER =======
router.put("/:postID",updateSinglePost)



router.delete("/",deleteAllPost)
// ======URL PARAMETER =======
router.delete("/:postID",deleteSinglePost)



module.exports=router