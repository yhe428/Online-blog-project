const express = require("express");
const router = express.Router();


//introduce users DAO
const userDao = require("../modules/users-dao.js");

router.get("/", function (req, res) {
    res.render("home");
});

router.get("/blog", async function (req, res) {

    const articles = await userDao.retrieveAllArticles();
    res.locals.articles = articles;

    res.render("blog");
});

router.get("/full-article", function (req, res) {

    const fullArticle = {

        imageUrl: "./images/mount_taranaki.jpg",

        heading: "I like buttercups",

        article: "Munchkin cougar lion persian havana brown. singapura forest american shorthair. Panther. Tom. Savannah. Leopard.Munchkin cougar lion persian havana brown. Norwegian forest american shorthair. Panther. Tom. Savannah. Leopard. Norwegian forest devonshire rex or savannah. Cheetah burmese but tiger yet cougar russian blue. Grimalkin leopard yet sphynx for ragdoll. Burmese sphynx singapura forest american shorthair. Panther. Tom. Savannah. Leopard. Norwegian forest devonshire rex or savannah. Cheetah burmese but tiger yet cougar russian blue. Grimalkin leopard yet sphynx for ragdoll. ",
        flaviconAvatarUrl: "./images/male_avatarp.png",
        fName: "Mickey",
        lName: "Mouse",
        numberOfComments: 9,
        date: "18 October 2023",

    }
    res.render("full-article", fullArticle);
});

router.get("/nature", async function (req, res) {
    const natureArticles = await userDao.retrieveNatureArticles();
    res.locals.articles = natureArticles;
    res.render("nature");
});

router.get("/portrait", async function (req, res) {
    const portraitArticles = await userDao.retrievePortraitArticles();
    res.locals.articles = portraitArticles;
    res.render("portrait");
});

router.get("/life", async function (req, res) {
    const lifeArticles = await userDao.retrieveLifeArticles();
    res.locals.articles = lifeArticles;
    res.render("life");
});



module.exports = router;