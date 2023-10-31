const express = require("express");
const router = express.Router();


//introduce users DAO
const articleDao = require("../modules/articles-dao.js");

router.get("/", function (req, res) {
    res.locals.title = "Dazzling Duck Photography"
    res.render("home");
});

router.get("/blog", async function (req, res) {
    res.locals.title = "Blog";
    const articles = await articlesDao.retrieveAllArticles();
    res.locals.articles = articles;

    res.render("blog");
});

router.get("/full-article", function (req, res) {
    res.locals.title = "Full article";

    const fullArticle = {

        imageName: "mount_taranaki.jpg",
        title: "I like buttercups",
        articleContent: "Munchkin cougar lion persian havana brown. singapura forest american shorthair. Panther. Tom. Savannah. Leopard.Munchkin cougar lion persian havana brown. Norwegian forest american shorthair. Panther. Tom. Savannah. Leopard. Norwegian forest devonshire rex or savannah. Cheetah burmese but tiger yet cougar russian blue. Grimalkin leopard yet sphynx for ragdoll. Burmese sphynx singapura forest american shorthair. Panther. Tom. Savannah. Leopard. Norwegian forest devonshire rex or savannah. Cheetah burmese but tiger yet cougar russian blue. Grimalkin leopard yet sphynx for ragdoll. ",
        flaviconAvatarUrl: "./images/male_avatarp.png",
        fName: "Mickey",
        lName: "Mouse",
        numberOfComments: 9,
        date: "18 October 2023",

    }
    res.render("full-article", fullArticle);
});

router.get("/nature", async function (req, res) {
    res.locals.title = "Nature";
    const natureArticles = await articlesDao.retrieveNatureArticles();
    res.locals.articles = natureArticles;
    res.render("nature");
});

router.get("/portrait", async function (req, res) {
    res.locals.title = "Portrait";
    const portraitArticles = await articlesDao.retrievePortraitArticles();
    res.locals.articles = portraitArticles;
    res.render("portrait");
});

router.get("/life", async function (req, res) {
    res.locals.title = "Life";
    const lifeArticles = await articlesDao.retrieveLifeArticles();
    res.locals.articles = lifeArticles;
    res.render("life");
});



module.exports = router;