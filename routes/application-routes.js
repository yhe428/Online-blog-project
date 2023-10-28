const express = require("express");
const router = express.Router();

const { verifyAuthenticated } = require("../middleware/auth-middleware.js");

// instead of messageDao =  require?
const usersDao = require("../modules/users-dao.js");

router.get("/", function(req, res) {
    res.render("home");
});

module.exports = router;