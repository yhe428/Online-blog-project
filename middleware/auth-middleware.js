const userDao = require("../modules/users-dao.js");

async function addUserToLocals(req, res, next) {
   // console.log("in auth-mid addUserToLocals");
    const user = await userDao.retrieveUserWithAuthToken(req.cookies.authToken);
    console.log("in auth-mid addUserToLocals - after retrieve ");
    res.locals.user = user;
    next();
}

function verifyAuthenticated(req, res, next) {
    console.log("in auth-mid verifyAuth");
    if (res.locals.user) {
        next();
    }
    else {
        res.redirect("/login");
    }
}

module.exports = {
    addUserToLocals,
    verifyAuthenticated
}