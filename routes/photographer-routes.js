const express = require("express");
const router = express.Router();

const userDao = require("../modules/users-dao.js");
const articlesDao = require("../modules/articles-dao.js");
const { imageOrientation } = require("../modules/select.js");

router.get("/photographers", async function(req, res) {

    res.locals.title = "Photographers";

    try{
        const users = await userDao.getAllUsers();
        res.locals.users = users;

        const firstPhotographer = await userDao.retrieveUserById(1);
        res.locals.photographer = firstPhotographer;

        const articlesArray = await articlesDao.retrieveArticlesByUserId(1);
        res.locals.articles = imageOrientation(articlesArray);

        res.render("photographers");

    }catch (error){
        res.status(500).send('Server error');
    }
});

router.get("/photographers/:userId", async function (req, res) {
    res.locals.title = "Photographers";
    let id = req.params['userId'];
    const currentPhotographer = await userDao.retrieveUserById(id);
    res.locals.photographer = currentPhotographer;
 
    const users = await userDao.getAllUsers();
    res.locals.users = users;

    const articlesArray = await articlesDao.retrieveArticlesByUserId(id);
    res.locals.articles = imageOrientation(articlesArray);
    res.render("photographers");
});


module.exports = router;