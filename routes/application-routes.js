const express = require("express");
const router = express.Router();

//introduce users DAO
const userDao = require("../modules/users-dao.js");

router.get("/", function(req, res) {
    res.render("home");
});

router.get("/blog", function(req, res) {

    res.render("blog");

});

router.get("/photographers", function(req, res){

    res.render("photographers");
});


router.get("/full-article", function(req, res){

    res.render("full-article");
});


module.exports = router;