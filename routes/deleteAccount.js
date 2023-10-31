const express = require("express");
const router = express.Router();

const userDao = require("../modules/users-dao.js");
const { verifyAuthenticated }= require("../middleware/auth-middleware.js");

router.delete("/deleteAccount", verifyAuthenticated, async function (req, res){
    res.locals.title = "Edit account";
    const userIdToDelete = req.cookies.user.userId;

    if(!userIdToDelete){
        return res.status(401).json({ success: false, message: "User not authenticated" });
    }
    try{
        const changes = await userDao.deleteUser(userIdToDelete);
        if(changes){
            return res.json({ success: true, message: "User successfully deleted" });
        }else{
            return res.status(400).json({ success: false, message: "Failed to delete user" });
        }
    

    }catch(error){
        console.error("Error deleting user:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

});



module.exports = router;