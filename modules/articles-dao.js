const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");
const { countCommentsByArticleID } = require('./comment-dao.js');

async function retrieveAllArticles() {
  const db = await dbPromise;

  const articles = await db.all(SQL`
        SELECT 
            a.articleId, a.imageName, a.imageHeight, a.imageWidth, 
            a.title, a.articleContent, a.articleDate, 
            u.fName, u.lName, c.name,
            COALESCE(COUNT(com.commentId), 0) as commentCount
        FROM Users as u
        JOIN Articles as a ON u.userId = a.writerId
        JOIN Categories as c ON c.categoryId = a.categoryId
        LEFT JOIN Comments as com ON com.articleCommented = a.articleId
        GROUP BY a.articleId
        ORDER BY a.articleDate DESC
    `);

    return articles;
}

async function retrieveCategoryArticles(category) {
    const db = await dbPromise;

  const articlesArray =
    await db.all(SQL` select a.articleId, a.imageName, a.imageHeight, a.imageWidth, a.title, a.articleContent, a.articleDate, u.fName, u.lName, c.name
    from Users as u, Articles as a, Categories as c
    where u.userId = a.writerId
    and c.categoryId = a.categoryId
    and c.name = ${category}
    order by a.articleDate desc`);

    //yang
    for (let article of articlesArray) {
      article.commentsCount = await countCommentsByArticleID(article.articleId);
    }

    return articlesArray;
}

async function retrieveArticlesByUserId(userId) {
  const db = await dbPromise;

  const articlesArray =
    await db.all(SQL`select a.articleId, a.title, a.articleContent, a.imageName, a.imageHeight, a.imageWidth, a.articleDate, c.name
    from Articles as a, Users as u, categories as c
    where a.writerId = u.userId
    and c.categoryId = a.categoryId
    and u.userId = ${userId}
    order by a.articleDate desc`);

    //yang
    for (let article of articlesArray) {
      article.commentsCount = await countCommentsByArticleID(article.articleId);
    }

    return articlesArray;
}

async function retrieveArticleByArticleId(articleId) {
  const db = await dbPromise;

  const article =
    await db.get(SQL` select a.articleId, a.imageName, a.title, a.articleContent, a.articleDate, u.fName, u.lName, c.name
    from Users as u, Articles as a, Categories as c
    where u.userId = a.writerId
    and c.categoryId = a.categoryId
    and a.articleId = ${articleId}`);

    return article;
}
async function retrieveArticleByWriterId(id) {
    const db = await dbPromise;

    const articles = await db.all(SQL`
    select * from Articles where writerId = ${id} 
    `)

    return articles;
}

async function retrieveArticlesByArticleId(id) {
    const db = await dbPromise;

  const article = await db.get(SQL`
    select * from Articles
    where articleId = ${id}`);

    return article;
}

async function updateUserArticle(article) {
    const db = await dbPromise;

  const result = await db.run(SQL`
    update Articles set
    title = ${article.title},
    articleContent = ${article.content},
    imageName = ${article.imageName},
    imageHeight = ${article.imageHeight},
    imageWidth = ${article.imageWidth},
    writerId = ${article.userId},
    categoryId = ${article.categoryId}
    where articleId = ${article.articleId}
    `);

  return result.changes;
}

async function deleteArticle(id) {
    const db = await dbPromise;

  await db.run(SQL`delete from Comments where articleCommented = ${id}`);

  const result = await db.run(
    SQL`delete from Articles where articleId = ${id}`
  );

  return result.changes;
}

async function retrieveAllArticlesWithCommentCount() {
  const db = await dbPromise;
  const articlesWithCount = await db.all(SQL`
        SELECT Articles.*, COUNT(Comments.commentId) as commentCount 
        FROM Articles
        LEFT JOIN Comments ON Articles.articleId = Comments.articleCommented
        GROUP BY Articles.articleId
    `);
  return articlesWithCount;
}

module.exports = {
  retrieveAllArticles,
  retrieveCategoryArticles,
  retrieveArticlesByUserId,
  retrieveArticleByArticleId,
  retrieveArticleByWriterId,
  retrieveArticlesByArticleId,
  updateUserArticle,
  deleteArticle,
  retrieveAllArticlesWithCommentCount,
};
