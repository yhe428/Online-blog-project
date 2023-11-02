const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function createPost(post){
    const db = await dbPromise;

    const result = await db.run(SQL`
    insert into Articles (title, articleContent, articleDate, imageName, imageUrl, imageHeight, imageWidth, writerId, categoryId) VALUES
    (${post.title}, ${post.content}, date('now'),${post.imageName}, ${post.imageUrl}, ${post.imageHeight}, ${post.imageWidth},${post.userId}, ${post.categoryId})    
    `);
    post.articleId = result.lastID;
    return post.articleId;

}

async function retrieveImageHeight(articleId) {
    const db = await dbPromise;

    const imageHeight = await db.get(SQL`
        select imageHeight from Articles
        where articleId = ${articleId}`);

    return imageHeight;
}

module.exports = {
    createPost,
    retrieveImageHeight
};
