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

async function retrieveUserById(id) {
    const db = await dbPromise;

    const user = await db.get(SQL`
        select * from Users
        where userId = ${id}`);

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

async function editUserAccount(user){
    const db = await dbPromise;

    const result = await db.run(SQL`
        UPDATE Users 
        SET 
            username = ${user.username},
            fName = ${user.fname},
            lName = ${user.lname},
            userDescription = ${user.description},
            email = ${user.email},
            address = ${user.address},
            phone = ${user.phone},
            birthDate = ${user.birthDate}
            WHERE userId = ${user.userId}
    `);

    return result.changes;
    
}

async function getAllUsers() {
    const db = await dbPromise;

    const users = await db.all(SQL`select * from Users`);
    return users;
};

async function updatePassword(user){
    const db = await dbPromise;

    const result = await db.run(SQL`
    update Users set password = ${user.password} where userId = ${user.userId};
    
    `)
    return result.changes;

}

async function deleteUser(id){
    const db = await dbPromise;

    const result = await db.run(SQL`
    delete from Users where userId = ${id}
    `)
    return result.changes;
}


/*--------------------------------------------------*/
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

async function retrieveArticlesByUserId(userId) {
    const db = await dbPromise;

    const articlesArray = await db.all(SQL`select a.articleId, a.title, a.articleContent
    from Articles as a, Users as u
    where a.writerId = u.userId
    and u.userId = ${userId}`);

    return articlesArray;
}

module.exports = {
    createAccount,
    retrieveUserByName,
    retrieveUserWithCredentials,
    retrieveUserWithAuthToken,
    updateUser,
    getAllUsers,
    editUserAccount,
    deleteUser,
    updatePassword,
    retrieveUserById,
    retrieveAllArticles,
    retrieveNatureArticles,
    retrievePortraitArticles,
    retrieveLifeArticles,
    retrieveArticlesByUserId
};