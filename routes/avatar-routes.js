const express = require("express");
const router = express.Router();

const avatarImport = require("../modules/avatar.js");
const userDao = require("../modules/users-dao.js");

router.get("/avatar", async function (req, res) {   
      avatarListCompact = [];
        avatarListCompact =  await avatarImport.getAvatarList();
         res.render("avatar", { avatarListCompact: avatarListCompact});
//const user = await userDao.retrieveUserByName(username);

});

router.post("/avatar", async function (req, res) {
    console.log("in avatar post")
    const avatarName = req.body.avatarName;
    console.log("in avatar post - avatarName: " + avatarName);
    // get user = how?
    // const user = await userDao.retrieveUserById();
});

module.exports = router;
