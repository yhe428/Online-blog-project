const express = require("express");
const router = express.Router();

const userDao = require("../modules/users-dao.js");
const { verifyAuthenticated }= require("../middleware/auth-middleware.js");

router.get("/editAccount", verifyAuthenticated, function (req, res){
    res.locals.user = req.cookies.user;
    res.render("edit-account");
});

router.post("/editAccount", verifyAuthenticated, async function (req, res){
    const id = req.cookies.user.userId;
    console.log(id);

});


module.exports = router;