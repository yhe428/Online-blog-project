const express = require("express");
const router = express.Router();

const searchDao = require("../modules/search-dao.js");

router.get("/search", function (req, res) {
    res.locals.title = "Search";
    res.render("search");
});

router.post("/search", async function (req, res) {

    try {
        const input = req.body.searchquery;

        const results = await searchDao.retrieveAllSearchResults(input);

        if (results.length > 0) {
            res.locals.results = results;
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



module.exports = router;
