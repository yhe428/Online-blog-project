const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function retrieveUserByName(username) {
    const db = await dbPromise;

    const user = await db.get(SQL`
        select * from account
        where username = ${username}`);

    return user;
}