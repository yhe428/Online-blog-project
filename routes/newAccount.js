const express = require("express");
const router = express.Router();

//introduce users DAO
const userDao = require("../modules/users-dao.js");

router.get("/newAccount", function(req,res){
    
    res.render("new-account");
});

router.get("/verifyUsername", async function(req, res){
    let usernameToBeVerify = req.query.username;

    let returnedUser = await userDao.retrieveUserByName(usernameToBeVerify);

    if(returnedUser){
        res.send(true);
    }else{
        res.send(false);
    }

})

module.exports = router;