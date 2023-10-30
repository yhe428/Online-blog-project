const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");


async function retrieveAllArticles() {
    const db = await dbPromise;


    const articles = await db.all(SQL` SELECT a.title, a.articleContent, a.articleDate, u.fName, u.lName, c.name
   from Users as u, Articles as a, Categories as c
    where u.userId = a.writerId
   and c.categoryID = a.categoryId`);

    return articles;
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
    retrieveAllArticles,
    retrieveNatureArticles,
    retrievePortraitArticles,
    retrieveLifeArticles,
    retrieveArticlesByUserId
}