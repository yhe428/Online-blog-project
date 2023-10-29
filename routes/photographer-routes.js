const express = require("express");
const router = express.Router();

const userDao = require("../modules/users-dao.js");

router.get("/photographers", async function(req, res) {

    const users = await userDao.getAllUsers();
    res.locals.users = users;

    const firstPhotographer = await userDao.getUserById(1);
    res.locals.photographer = firstPhotographer;

    res.render("photographers");

});

router.get("/photographers/:userId", async function (req, res) {
    let userId = req.params['userId'];

    try {
        const currentPhotographer = await userDao.getUserById(userId);
        console.log(currentPhotographer);

            res.json(currentPhotographer);
           
        }
     catch (error) {
        console.error("An error occurred:", error);
        res.sendStatus(500);

    }

     //res.render("photographers", { photographer: currentPhotographer });
});

module.exports = router;