const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function createAccount(user){
    const db = await dbPromise;

    const result = await db.run(SQL`
    insert into Users (password, username, fName, lName, userDescription, email, address, phone, birthDate) values
    (${user.password}, ${user.username}, ${user.firstname}, ${user.lastname}, ${user.description}, ${user.email}, ${user.address}, ${user.phone}, ${user.birth})
    
    `)
    // Get the auto-generated ID value, and assign it back to the user object.
    user.userId = result.lastID;
    return user.userId;
}

async function retrieveUserByName(username) {
    const db = await dbPromise;

    const user = await db.get(SQL`
    select * from Users
    where username = ${username}`);

    return user;
}

/**
 * Gets the user with the given authToken from the database.
 * If there is no such user, undefined will be returned.
 * 
 * @param {string} authToken the user's authentication token
 */
async function retrieveUserWithAuthToken(authToken) {
    const db = await dbPromise;

    const user = await db.get(SQL`
        select * from users
        where authToken = ${authToken}`);

    return user;
}

module.exports = {
    createAccount,
    retrieveUserByName,
    retrieveUserWithAuthToken

};