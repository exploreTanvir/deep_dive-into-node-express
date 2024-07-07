exports.getAllPost=(req,res)=>{
    res.send("Render all post")
}

exports.getSinglePost=(req,res)=>{
    res.send("Product id is = "+req.params.postID)
}

exports.createPost=(req,res)=>{
    res.send("Create new post")
}

exports.updateAllPost=(req,res)=>{
    res.send("Update your post")
}

exports.updateSinglePost=(req,res)=>{
    res.send("Update your post at the id num is = "+req.params.postID)
}

exports.deleteAllPost=(req,res)=>{
    res.send("Delete your post") 
}

exports.deleteSinglePost=(req,res)=>{
    res.send("Delete your post at the id num is = "+req.params.postID)
}