const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function createComment(comment){
    const db = await dbPromise;

    const result = await db.run(SQL`
    insert into Comments (parentId, commentDateTime, content, posterId, articleCommented) VALUES
    (${comment.parentId || null}, datetime ('now'), ${comment.content},${comment.posterId}, ${comment.articleCommented})
    
    `);
    comment.commentId = result.lastID;
    return comment.commentId;

}


async function getAllCommentsByAricleID(articleId){
    const db = await dbPromise;

    const allComments = await db.all(SQL`
    SELECT Comments.*, Users.fName, Users.lName, Users.avatar
    FROM Comments
    JOIN Users ON Comments.posterId = Users.userId
    WHERE Comments.articleCommented = ${articleId}
    ORDER BY Comments.commentDateTime DESC
    `)

    return allComments;

}

async function getNestedCommentsByArticleID(articleId) {
    const allComments = await getAllCommentsByAricleID(articleId);
    const parentComments = allComments.filter(comment => !comment.parentId);
    const childComments = allComments.filter(comment => comment.parentId);

    parentComments.forEach(parentComment => {
        parentComment.replies = childComments.filter(reply => reply.parentId === parentComment.commentId);
    });

    return parentComments;  
}

async function deleteComment(commentId) {
    const db = await dbPromise;

    const result = await db.run(SQL`
        DELETE FROM Comments WHERE commentId = ${commentId}
    `);

    return result.changes; 
}

async function countCommentsByArticleID(articleId) {
    const db = await dbPromise;

    const row = await db.get(SQL`
        SELECT COUNT(*) as commentCount
        FROM Comments
        WHERE articleCommented = ${articleId}
    `);

    return row.commentCount;
}






module.exports = {
    createComment,
    getAllCommentsByAricleID,
    getNestedCommentsByArticleID,
    deleteComment,
    countCommentsByArticleID
    
    
}