const express = require("express");
const router = express.Router();
const dbPromise = require("../modules/database.js");
const SQL = require("sql-template-strings");

const commentDao = require("../modules/comment-dao.js");

// const verifyAuthenticated = require("../modules/auth-middleware.js");

const userDao = require("../modules/users-dao.js");

router.get("/createComment", function(req,res){
    res.render("comments");
})

router.post("/createComment", async function(req,res){

    let articleId = req.body.postId;
    console.log(articleId);

    let content = req.body.commentContent;
    console.log(content);

    let parentId = req.body.parentId;
    console.log(parentId);

    

    const comment = {
        parentId: parentId,
        content:content,
        articleCommented:articleId,
        posterId:req.session.user.id//need auth middleware
    
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

