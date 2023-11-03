const express = require("express");
const router = express.Router();

const userDao = require("../modules/users-dao.js");
const { verifyAuthenticated }= require("../middleware/auth-middleware.js");
const avatarImport = require("../modules/avatar.js");

router.get("/editAccount", verifyAuthenticated, async function (req, res){
    res.locals.title = "Edit account";
    res.locals.user = req.cookies.user;

    avatarListCompact = [];
    avatarListCompact =  await avatarImport.getAvatarList();
    res.render("edit-account", { avatarListCompact: avatarListCompact});
});

router.post("/editAccount", verifyAuthenticated, async function (req, res){
    const id = req.cookies.user.userId;
    const username = req.body.username.trim();
    const fname = req.body.fname.trim();
    const lname = req.body.lname.trim();
    const birthDate = req.body.birthDate.trim();
    const address = req.body.address.trim();
    const phone = req.body.phone.trim();
    const email = req.body.email.trim();
    const description = req.body.description.trim();
    const avatar = req.body.avatar;

    const user = {
        userId:id,
        username:username,
        fname:fname,
        lname:lname,
        birthDate: birthDate,
        address:address,
        phone: phone,
        email:email,
        description:description,
        avatar:avatar
    }
    

    try{
        const changes = await userDao.editUserAccount(user);

        if(changes){
            const userById = await userDao.retrieveUserById(id);
            res.locals.user = userById;
            res.cookie('user',userById);
            res.setToastMessage("Edit account successful");
            res.redirect("/editAccount");
        
        }

    }catch(error){
        console.log(error);
        res.setToastMessage("Edit account fail! Try again");
        res.redirect("/editAccount");
    }

});

router.get("/verifyUsername", async function (req, res) {
    let usernameToBeVerify = req.query.username;

    let returnedUser = await userDao.retrieveUserByName(usernameToBeVerify);

    if (returnedUser) {
        res.send(true);
    } else {
        res.send(false);
    }
})


module.exports = router;