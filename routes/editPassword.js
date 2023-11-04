const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const userDao = require("../modules/users-dao.js");
const { verifyAuthenticated }= require("../middleware/auth-middleware.js");

router.get("/editPassword", verifyAuthenticated, function (req,res){
    res.locals.title = "Edit account";
    res.render("edit-password");

});

router.post("/editPassword", verifyAuthenticated, async function(req,res){
    const password = req.body.password.trim();
    
    const id = req.cookies.user.userId;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = {password:hashPassword, userId:id};

    try{
        const changes = await userDao.updatePassword(user);
        if(changes){
            res.locals.user = null;
            res.clearCookie("authToken");
            res.clearCookie("user");
            res.setToastMessage("Password has changed, please re-login");
            res.redirect("./login");

        }else{
            res.setToastMessage("Password change failed");
            res.redirect("./editPassword");

        }

    }catch(error){
        res.setToastMessage("Password change fail, please re-submit");
        res.redirect("./editPassword");


    }




});







module.exports = router;