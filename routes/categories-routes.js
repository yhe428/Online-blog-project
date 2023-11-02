const express = require("express");
const router = express.Router();

const articlesDao = require("../modules/articles-dao.js");

router.get("./categories/:name", async function (req, res){

    let category = req.params['name'];
   console.log(category);
    const articlesArray = await articlesDao.retrieveCategoryArticles(category);
    res.locals.articles = articlesArray;

    res.render("categories");
});

module.exports = router;