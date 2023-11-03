const express = require("express");
const router = express.Router();
const { imageOrientation } = require("../modules/select.js");

const articlesDao = require("../modules/articles-dao.js");

router.get("/", function (req, res) {
    res.locals.title = "Dazzling Duck Photography"
    res.render("home");
});

router.get("/blog", async function (req, res) {
    res.locals.title = "Blog";
    const articles = await articlesDao.retrieveAllArticles();
    res.locals.articles = imageOrientation(articles);
    res.render("blog");
});

router.get("/full-article/:articleId", async function(req, res) {
    res.locals.title = "Full Article";
    let id = req.params['articleId'];
    const article = await articlesDao.retrieveArticleByArticleId(id); 
    res.render("full-article", article);
});

router.get("/nature", async function (req, res) {
    res.locals.title = "Nature";
    const natureArticles = await articlesDao.retrieveCategoryArticles("Nature");
    res.locals.articles = imageOrientation(natureArticles);
    res.render("nature");
});

router.get("/portrait", async function (req, res) {
    res.locals.title = "Portrait";
    const portraitArticles = await articlesDao.retrieveCategoryArticles("Portrait");
    res.locals.articles = imageOrientation(portraitArticles);
    res.render("portrait");
});

router.get("/life", async function (req, res) {
    res.locals.title = "Life";
    const lifeArticles = await articlesDao.retrieveCategoryArticles("Life");
    res.locals.articles = imageOrientation(lifeArticles);
    res.render("life");
});


module.exports = router;