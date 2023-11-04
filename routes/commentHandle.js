const express = require("express");
const router = express.Router();

const commentDao = require("../modules/comment-dao.js");

const { verifyAuthenticated } = require("../middleware/auth-middleware.js");


router.post("/createComment", verifyAuthenticated, async function(req,res){


    let posterId = req.cookies.user.userId;
    // console.log(posterId);

    let content = req.body.comment;
    // console.log(content);

    const articleId = req.body.articleId;
    // console.log(articleId);

    const comment = {
        content:content,
        posterId:posterId,
        articleCommented: articleId
    }

    // console.log(comment);

    try{
        if(articleId){
            await commentDao.createComment(comment);
            res.setToastMessage("comment successfully");
            res.redirect(`/full-article/${articleId}`);
        }else{
            res.setToastMessage("comment fail, please try again");
            res.redirect(`/full-article/${articleId}`)
        }

    }catch(error){
        console.log(error);
        res.setToastMessage("server error, please try again");
    }
    

});

router.post("/createReply", verifyAuthenticated, async function(req,res){

    let posterId = req.cookies.user.userId;
    let content = req.body.replyComment;
    const parentId = req.body.parentId;
    const articleId = req.body.articleId;

    const commentReply = {
        parentId:parentId,
        content:content,
        posterId: posterId,
        articleCommented: articleId
    }
    // console.log(commentReply);

    try{
        if(parentId){
            await commentDao.createComment(commentReply);
            res.setToastMessage("comment successfully");
            res.redirect(`/full-article/${articleId}`);
        }else{
            res.setToastMessage("comment fail, please try again");
            res.redirect(`/full-article/${articleId}`)
        }
        

    }catch(error){
        console.log(error);
        res.setToastMessage("server error, please try again");

    }

});

router.delete('/deleteComment/:id', verifyAuthenticated, async (req, res) => {
    try {
        const commentId = req.params.id;
        
        const result = await commentDao.deleteComment(commentId);
        
        if (result) {
            res.json({ success: true, message: 'Comment deleted successfully' });
        } else {
            res.json({ success: false, message: 'Comment could not be deleted' });
        }
        
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ success: false, message: 'Server error, please try again later.' });
    }
});

module.exports = router;

