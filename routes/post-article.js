const express = require("express");
const router = express.Router();
const { verifyAuthenticated } = require("../middleware/auth-middleware.js");
const postDao = require("../modules/post-dao.js");
const path = require("path");

// Import required middleware and packages
const upload = require("../middleware/multer-uploader.js");
const fs = require("fs");
const jimp = require("jimp");

router.get("/yourPage", async function (req, res) {
    const user = req.cookies.user;
    //console.log(user); 
    res.locals.user= user; 
    res.locals.userLogIn = true;
    res.render("yourpage");
});

router.post("/submit-article", upload.single("image"), async function(req,res){


    
    //retrieve title from user
    const title = req.body.title;
    // console.log(title); working
    //retrieve content from user
    const content = req.body.content;
    // console.log(content); working

    const fileInfo = req.file;
    const oldFileName = fileInfo.path;
    const newFileName = `./public/images/${fileInfo.originalname}`;
    fs.renameSync(oldFileName, newFileName);
    
    const imageName = path.basename(fileInfo.originalname,path.extname(fileInfo.originalname));
    // console.log(imageName);working


    //get image height from user uploaded picture
    const image = await jimp.read(newFileName);
    const height = image.bitmap.height;
    // console.log(height); working
    const userId = req.cookies.user.userId;
    // console.log(userId);working

    const obj = {
        title: title,
        content: content,
        imageName:imageName,
        imageUrl: newFileName,
        imageHeight: height,
        userId: userId,
        categoryId: 1 

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