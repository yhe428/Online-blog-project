const express = require("express");
const router = express.Router();

const userDao = require("../modules/users-dao.js");

router.get("/photographers", async function(req, res) {

    try{
        const users = await userDao.getAllUsers();
        // console.log(users); return back a object array, not a object!
        // res.locals.users = users;

        const firstPhotographer = await userDao.retrieveUserById(1);
        // console.log(firstPhotographer); working, your previous code is getUserById, which is not exist in user-dao
        res.locals.photographer = firstPhotographer;
        res.render("photographers");
    }catch (error){
        res.status(500).send('Server error');
    }
    

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