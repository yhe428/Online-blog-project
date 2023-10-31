const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");


async function retrieveAllArticles() {
    const db = await dbPromise;

    const articles = await db.all(SQL` select a.articleId, a.imageName, a.imageHeight, a.imageWidth, a.title, a.articleContent, a.articleDate, u.fName, u.lName, c.name
    from Users as u, Articles as a, Categories as c
    where u.userId = a.writerId
    and c.categoryId = a.categoryId
    order by a.articleDate desc` );

    let newArticlesArray = articles.map(function (article) {

        let calculation = article.imageHeight / article.imageWidth;
        if (calculation <= 0.8) {
            return { ...article, imageHeight: "short" };
        }
        if (calculation > 0.8 && calculation < 1.2) {
            return { ...article,  imageHeight: "medium" };
        }
        if (calculation >= 1.2 && calculation < 1.5) {
            return { ...article, imageHeight: "tall" };
        }
        if (calculation >= 1.5) {
            return { ...article, imageHeight: "tallest" };
        }
        
    });
   
    return newArticlesArray;
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
};