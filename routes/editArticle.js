const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer-uploader.js");
const { verifyAuthenticated }= require("../middleware/auth-middleware.js");
const fs = require("fs");
const jimp = require("jimp");

const articlesDao = require("../modules/articles-dao.js");

router.get("/editArticle", verifyAuthenticated, async function(req,res){
    res.locals.title = "Edit article";

    const articleId = req.query.articleId;

    const article = await articlesDao.retrieveArticlesByArticleId(articleId);

    res.render("editArticle", {article:article});

});

router.delete("/deleteArticle", verifyAuthenticated, async function(req, res){
    const articleIdToDelete = req.query.articleId;  

    if(!articleIdToDelete){
        return res.status(400).json({ success: false, message: "No article ID provided" });
    }
    
    try{
        const changes = await articlesDao.deleteArticle(articleIdToDelete);
        if(changes){
            return res.json({ success: true, message: "Article successfully deleted" });
        }else{
            return res.status(400).json({ success: false, message: "Failed to delete article" });
        }
    }catch(error){
        console.error("Error deleting article:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }


});

router.post("/submit-editArticle", upload.single("image"), async function(req,res){

    const articleId = req.body.articleId;
    const title = req.body.title;
    const content = req.body.content;
    const categoryId = req.body.category;
    
    const fileInfo = req.file;
    const oldFileName = fileInfo.path;
    const newFileName = `./public/images/${fileInfo.originalname}`;
    fs.renameSync(oldFileName, newFileName);

    const imageName = fileInfo.originalname; 

    const image = await jimp.read(newFileName);
    const height = image.bitmap.height;
    const width = image.bitmap.width;
    
    const userId = req.cookies.user.userId;


    const obj = {

        articleId:articleId,
        title: title,
        content: content,
        imageName:imageName,
        imageUrl: newFileName,
        imageHeight: height,
        imageWidth: width,
        userId: userId,
        categoryId: categoryId
    }

    try{
        const postId = await articlesDao.updateUserArticle(obj);
        if(postId){
            res.redirect("./yourPage");
        }
        
    }catch(error){
        console.log(error);
        res.setToastMessage("Create post fail, try again");
        res.redirect("./yourPage");
    }

});

module.exports = router;