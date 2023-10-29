const express = require("express");
const router = express.Router();

//introduce users DAO
const userDao = require("../modules/users-dao.js");

router.get("/", function (req, res) {
    res.render("home");
});

router.get("/blog", function (req, res) {
    // This is just a test object.  Cant seem to get an array of objects yet.
    const articles =  
        {
            pictureOrientation: "tall", 
            imageUrl: "./images/mount_taranaki.jpg",
            category: "Portrait",
            heading: "I like buttercups",          
          
            article: "Munchkin cougar lion persian havana brown. Norwegian forest american shorthair. Panther. Tom. Savannah. Leopard. Norwegian forest devonshire rex or savannah. Cheetah burmese but tiger yet cougar russian blue. Grimalkin leopard yet sphynx for ragdoll. Burmese sphynx singapura.",
            flaviconAvatarUrl: "./images/male_avatarp.png",
            fName: "Mickey",
            lName: "Mouse",
            numberOfComments: 9,
            flaviconComment: "./images/comment-white-oval-bubblep.png"
        }

    res.render("blog", articles);

});


//router.get("/photographers", function (req, res){
    //res.render("photographers");
//})

/*router.get("/photographers", async function(req, res) {

    const users = await userDao.getAllUsers();
    res.locals.users = users;

    const firstPhotographer = await userDao.retrieveUserById(1);
    res.locals.photographer = firstPhotographer;

    res.render("photographers");

});*/

module.exports = router;