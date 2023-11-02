const express = require("express");
const router = express.Router();

const commentDao = require("../modules/comment-dao.js");
const userDao = require("../modules/users-dao.js");

const { verifyAuthenticated } = require("../middleware/auth-middleware.js");


router.post("/createComment", verifyAuthenticated, async function(req,res){


    let posterId = req.cookies.user.userId;
    console.log(posterId);

    let content = req.body.comment;
    console.log(content);

    const articleId = req.body.articleId;
    console.log(articleId);
    



    //-------(hold part below)--------------------

    // let parentId = req.body.parentId;
    // console.log(parentId);

    
    // const comment = {
    //     parentId: parentId,
    //     content:content,
    //     articleCommented:articleId,
    //     posterId:posterId
    
    // }

    // if(articleId){
    //     let commentId = await commentDao.createComment(comment);
    //     res.setToastMessage("comment successfully")
    //     res.redirect("/createComment");
    // }else{
    //     res.setToastMessage("comment fail")
    //     res.redirect("/createComment");
    // }

});

module.exports = router;

