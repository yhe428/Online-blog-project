const express = require("express");
const router = express.Router();
const dbPromise = require("../modules/database.js");
const SQL = require("sql-template-strings");

const commentDao = require("../modules/comment-dao.js");

const { verifyAuthenticated } = require("../middleware/auth-middleware.js");


const userDao = require("../modules/users-dao.js");

router.get("/createComment", verifyAuthenticated, function(req,res){
    res.render("comments");
})

router.post("/createComment", verifyAuthenticated, async function(req,res){


    let posterId = req.body.postId;
    console.log(posterId);

    let content = req.body.commentContent;
    console.log(content);
    //-------(hold part below)--------------------

    let parentId = req.body.parentId;
    console.log(parentId);

    
    const comment = {
        parentId: parentId,
        content:content,
        articleCommented:articleId,
        posterId:posterId
    
    }

    if(articleId){
        let commentId = await commentDao.createComment(comment);
        res.setToastMessage("comment successfully")
        res.redirect("/createComment");
    }else{
        res.setToastMessage("comment fail")
        res.redirect("/createComment");
    }

});

module.exports = router;

