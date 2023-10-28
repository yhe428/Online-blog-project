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

async function retrieveUserWithCredentials(username, password) {
    const db = await dbPromise;
    const user = await db.get(SQL`
        select * from Users
        where username = ${username} and password = ${password} `);
    return user;
}

async function retrieveUserWithAuthToken(authToken) {
    //console.log("in UD retrieveUserWithAuthToken");
   
   const db = await dbPromise;

    const user = await db.get(SQL`
        select * from Users
        where authToken = ${authToken}`);
    return user;
}

async function updateUser(user) {
    console.log("in UD updateUser");

        const db = await dbPromise;

        await db.run(SQL`
            update users
            set authToken = ${user.authToken}
            where userId = ${user.userId}`);
}

async function retrieveUserById(id) {
    const db = await dbPromise;

    const user = await db.get(SQL`
        select * from users
        where id = ${id}`);

    return user;
}

module.exports = {
    createAccount,
    retrieveUserByName,
    retrieveUserWithCredentials,
    retrieveUserWithAuthToken,
    updateUser,
    retrieveUserById

};