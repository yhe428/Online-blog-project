const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function createAccount(user) {
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

    const db = await dbPromise;

    const user = await db.get(SQL`
        select * from Users
        where authToken = ${authToken}`);
    return user;
}

async function updateUser(user) {

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

async function retrieveAllArticles() {
    const db = await dbPromise;


    const articles = await db.all(SQL` SELECT a.title, a.articleContent, a.articleDate, u.fName, u.lName, c.name
   from Users as u, Articles as a, Categories as c
    where u.userId = a.writerId
   and c.categoryID = a.categoryId`);

    return articles
}


async function retrieveNatureArticles() {

    const db = await dbPromise;

    const natureArticles = await db.all(SQL` SELECT a.title, a.articleContent, a.articleDate, u.fName, u.lName, c.name
    from Users as u, Articles as a, Categories as c
    where u.userId = a.writerId
    and c.categoryID = a.categoryId
    and c.name = 'Nature'`);

    return natureArticles;
}

async function retrievePortraitArticles() {

    const db = await dbPromise;

    const portraitArticles = await db.all(SQL`SELECT a.title, a.articleContent, a.articleDate, u.fName, u.lName, c.name
    from Users as u, Articles as a, Categories as c
    where u.userId = a.writerId
    and c.categoryID = a.categoryId
    and c.name = 'Portrait'`);

    return portraitArticles;
}

async function retrieveLifeArticles() {

    const db = await dbPromise;

    const lifeArticles = await db.all(SQL`SELECT a.articleId, a.title, a.articleContent, a.articleDate, u.fName, u.lName, c.name
    from Users as u, Articles as a, Categories as c
    where u.userId = a.writerId
    and c.categoryID = a.categoryId
    and c.name = 'Life'`);

    return lifeArticles;
}

module.exports = {
    createAccount,
    retrieveUserByName,
    retrieveUserWithCredentials,
    retrieveUserWithAuthToken,
    updateUser,
    retrieveUserById,
    retrieveAllArticles,
    retrieveNatureArticles,
    retrievePortraitArticles,
    retrieveLifeArticles
};