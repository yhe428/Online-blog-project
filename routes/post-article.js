const express = require("express");
const router = express.Router();
const { verifyAuthenticated } = require("../middleware/auth-middleware.js");
const { v4: uuid } = require("uuid");

// Import required middleware and packages
const upload = require("../middleware/multer.js");
const fs = require("fs");
const jimp = require("jimp");

router.get("/yourPage", async function (req, res) {
    const user = req.cookies.user;
    //console.log(user); 
    res.locals.user= user; 
    res.locals.userLogIn = true;
    res.render("yourpage");
});

router.post("/submit-article", upload.single("imageFile"), async function(req,res){
    const fileInfo = req.file;

    // Move the image into the images folder
    const oldFileName = fileInfo.path;
    const id = uuid();
    //this is to make sure the image id is unique in case same image name
    const newFileName = `./public/images/${fileInfo.originalname}${id}`;
    fs.renameSync(oldFileName, newFileName);

    // Using jimp, read in the image, resize it, and save it to the thumbnails folder.
    // "read" and "write" are async functions so we can use "await" (which means we must
    // declare this route handler function to also be async).
    const image = await jimp.read(newFileName);
    image.resize(320, jimp.AUTO);
    // image.sepia(); // Bonus
    await image.writeAsync(`./public/images/thumbnails/${fileInfo.originalname}${id}`);

    // Get some information about the file and send it to the uploadDetails view for rendering.
    res.locals.fileName = fileInfo.originalname;
    // res.render("uploadDetails");

    // Redirect back to the homepage.
    res.redirect("/");


})



module.exports = router;