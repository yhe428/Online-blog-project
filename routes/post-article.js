const express = require("express");
const router = express.Router();
const postDao = require("../modules/post-dao.js");
const articlesDao = require("../modules/articles-dao.js");
const path = require("path");

// Import required middleware and packages
const upload = require("../middleware/multer-uploader.js");
const fs = require("fs");
const jimp = require("jimp");

router.get("/yourPage", async function (req, res) {
    res.locals.title = "Your page"

    const user = req.cookies.user;
    const userId = user.userId;
    res.locals.user= user; 
    
    const articles = await articlesDao.retrieveArticleByWriterId(userId);
    res.locals.articles = articles;

    res.render("yourpage");
});

router.post("/submit-article", upload.single("image"), async function(req,res){

    const title = req.body.title;
    const content = req.body.content;
    const categoryId = req.body.category;

    const fileInfo = req.file;
    const oldFileName = fileInfo.path;
    const newFileName = `./public/images/${fileInfo.originalname}`;
    fs.renameSync(oldFileName, newFileName);
    

    const imageName = fileInfo.originalname; 

    //get image height from user uploaded picture
    const image = await jimp.read(newFileName);
    const height = image.bitmap.height;
    const width = image.bitmap.width;
    
    
    const userId = req.cookies.user.userId;

    const obj = {
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
        const postId = await postDao.createPost(obj);
        if(postId){
            res.redirect("/blog");
        }
        
    }catch(error){
        console.log(error);
        res.setToastMessage("Create post fail, try again");
        res.redirect("./yourPage");
    }

});


module.exports = router;