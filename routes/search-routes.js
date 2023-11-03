const express = require("express");
const router = express.Router();

const searchDao = require("../modules/search-dao.js");

router.get("/search", function (req, res) {

res.render("search");

});

router.post("/search", async function (req, res) {

    try {
        const input = req.body.searchquery;
        console.log(input);

        const results = await searchDao.retrieveAllSearchResults(input);

        if(results.length > 0) {
            res.locals.results = results;
            console.log(results);
            res.locals.input = input;
        }
    
        else {
            res.setToastMessage("Your search did not return any results");
        }
        
        res.render("search");
    }
   
    catch (error) {
        res.status(500).send("An error occurred during the search");
    }

});

/*router.get("/full-article/:articleId", async function(req, res) {
    let id = req.params['articleId'];
   const article = await articlesDao.retrieveArticleByArticleId(id);
   // console.log(article);
   // res.locals.article = article;
   
   res.render("full-article", {article: article});*/

//});










module.exports = router;
