const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
//const bcrypt = require("bcrypt");

//introduce users DAO
const userDao = require("../modules/users-dao.js");

//route handler deal with new account creation
router.get("/newAccount", function (req, res) {

    res.render("new-account");
});

//get user info from frontend and create into databse
router.post("/newAccount", async function (req, res) {
    const username = req.body.username.trim();
    const firstname = req.body.firstname.trim();
    const lastname = req.body.lastname.trim();
    const password = req.body.password.trim();
    const birth = req.body.birth.trim();
    const address = req.body.address.trim();
    const phone = req.body.phone.trim();
    const email = req.body.email.trim();
    const description = req.body.description.trim();

    //Greta: password hashed and salted, if you compeleted encryption, then you can 
    //change my password in obj into hashed and salted one


    //make the properties from user into object 
    const obj = {
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: password,
        birth: birth,
        address: address,
        phone: phone,
        email: email,
        description: description
    }

    try {
        const userId = await userDao.createAccount(obj);

        if (userId) {
            //save sucessful in database, redirect to login and set message
            res.setToastMessage("Create account successfully");
            res.redirect("./login")
        }

    } catch (error) {
        console.log(error);
        res.setToastMessage("Create account fail, try again");
        res.redirect("./newAccount");

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

router.get("/login", function (req, res) {
    if (res.locals.user) {
        res.render("/yourPage");
    }
    else {
        res.render("login");
    }
});

router.post("/login", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await userDao.retrieveUserWithCredentials(username, password);
    if (user) {
        res.locals.user = user;
         console.log(" in post authToken");
        // const authToken = uuid();
        // user.authToken = authToken;
        // console.log("authToken");
        // await userDao.updateUser(user);
        // res.cookie("authToken", authToken);
        // res.locals.user = user;

        res.redirect("/yourPage")
    } else {
        res.setToastMessage("Wrong username or password");
        res.redirect("./login");
    }
});

router.get("/yourPage", function (req, res) {

    res.render("yourPage");
});

router.get("/logout", function (req, res) {
    // res.clearCookie("authToken");
    // res.locals.user = null;
    res.setToastMessage("Successfully logged out!");
    res.redirect("./login");
});

module.exports = router;