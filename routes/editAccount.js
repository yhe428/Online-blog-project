const express = require("express");
const router = express.Router();

const userDao = require("../modules/users-dao.js");
const { verifyAuthenticated } = require("../middleware/auth-middleware.js");

router.get("/editAccount", function (req, res){
    console.log(req.cookies.user);
    res.locals.user = req.cookies.user;
    res.render("edit-account");
});

module.exports = router;