/**
 * Main application file.
 * 
 * NOTE: This file contains many required packages, but not all of them - you may need to add more!
 */

// Setup Express
const express = require("express");
const app = express();
const port = 3000;

// Setup Handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Setup body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setup cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Make the "public" folder available statically
const path = require("path");
const { verify } = require("crypto");
app.use(express.static(path.join(__dirname, "public")));

// Use the toaster middleware
app.use(require("./middleware/toaster-middleware.js"));

const { addUserToLocals } = require("./middleware/auth-middleware.js");
app.use(addUserToLocals);

// Setup routes
app.use(require("./routes/application-routes.js"));

//new account route
app.use(require("./routes/newAccount.js"));

//comment
app.use(require("./routes/commentHandle.js"));

//post article route
app.use(require("./routes/post-article.js"));

//photographer route
app.use(require("./routes/photographer-routes.js"));

//search route
app.use(require("./routes/search-routes.js"));

//edit account route
app.use(require("./routes/editAccount.js"));

//delete account route
app.use(require("./routes/deleteAccount.js"));

//edit password route
app.use(require("./routes/editPassword.js"));

//edit article route
app.use(require("./routes/editArticle.js"));

// Start the server running.
app.listen(port, function () {
    console.log(`The Best App In The World ™️ listening on port ${port}!`);
});
