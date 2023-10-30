const express = require("express");
const router = express.Router();

const userDao = require("../modules/users-dao.js");

router.get("/photographers", async function(req, res) {

    try{
        const users = await userDao.getAllUsers();
        res.locals.users = users;

        let id = req.query.userId;
        const currentPhotographer = await userDao.retrieveUserById(id);

        res.locals.photographer = currentPhotographer;

        res.render("photographers");

    }catch (error){
        res.status(500).send('Server error');
    }
    

});

// router.get("/photographers", async function (req, res) {
    
//     let id = req.query.userId;
//     const currentPhotographer = await userDao.retrieveUserById(id);

//     res.locals.photographer = currentPhotographer;

//     res.render("photographers");
// });


module.exports = router;