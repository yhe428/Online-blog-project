const express = require("express");
const router = express.Router();

const articlesDao = require("../modules/articles-dao.js");

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
// router.get("/full-article/:articleId", async function(req, res)

router.get("/full-article/:articleId", async function(req, res) {
     let id = req.params['articleId'];
    const article = await articlesDao.retrieveArticleByArticleId(id);
    // console.log(article);
    // res.locals.article = article;
    
    res.render("full-article", article);

});


router.get("/nature", async function (req, res) {
    const natureArticles = await articlesDao.retrieveCategoryArticles("Nature");

    res.locals.articles = natureArticles;
    res.render("nature");
});

router.get("/portrait", async function (req, res) {
    const portraitArticles = await articlesDao.retrieveCategoryArticles("Portrait");
    res.locals.articles = portraitArticles;
    res.render("portrait");
});

router.get("/life", async function (req, res) {
    const lifeArticles = await articlesDao.retrieveCategoryArticles("Life");
    res.locals.articles = lifeArticles;
    res.render("life");
});



module.exports = router;