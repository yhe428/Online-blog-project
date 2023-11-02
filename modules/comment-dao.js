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

//get all comments (includes sub-comments) by one artcle
async function getAllCommentsByAricleID(articleId){
    const db = await dbPromise;

    //these codes mean get comments from one article
    const allComments = await db.all(SQL`
    select * from Comments
    where articleCommented = ${articleId}
    order by commentDateTime desc
    `)

    //get replies of comments
    // for (let comment of allComments) {
    //     comment.replies = await db.all(SQL`
    //         SELECT * FROM Comments WHERE parentId = ${comment.commentId}
    //     `);
    // }
    return allComments;//return back an array

}

//get all comments (includes sub-comments) by one poster
async function getAllCommentsByPosterId(id){
    const db = await dbPromise;

    const allComments = await db.all(SQL`
    select * from Comments
    where posterId = ${id}
    
    `)
    return allComments;
}

//region reply
//get all sub-comments from commentId (parent)
async function getAllCommentReplysByCommentId(commentId){
    const db = await dbPromise;

    const allReplies = await db.all(SQL`
    select * from Comments
    where parentId = ${commentId}
    
    `)
    return allReplies;
    
}
/**
 * Reply to a comment.
 * @param {Object} param - Contains information about the reply.
 * @param {number} param.parentId - The ID of the comment being replied to.
 * @param {string} param.content - The content of the reply.
 * @param {number} param.posterId - The ID of the user posting the reply.
 * @param {number} param.articleCommented - The ID of the article the original comment belongs to.
 * @returns {Promise<number>} - Returns the ID of the newly inserted reply.
 */

async function replyCommentReply(param) {
    const db = await dbPromise;
    const result = await db.run(SQL`
        INSERT INTO Comments (parentId, commentDateTime, content, posterId, articleCommented) 
        VALUES (${param.parentId}, datetime('now'), ${param.content}, ${param.posterId}, ${param.articleCommented})
    `);
    return result.lastID; // Return the ID of the newly inserted reply.
}

/* ---------------------------end region reply----------------------------------  */

//deletes a comment by its ID
async function deleteComments(commentId){
    const db = await dbPromise;

    await db.run(SQL`
        DELETE FROM Comments WHERE commentId = ${commentId}
    `);
    
}
//get one comment from its commentId
async function getCommentById(commentId) {
    const db = await dbPromise;
    const comment = await db.get(SQL`
        SELECT * FROM Comments WHERE commentId = ${commentId}
    `);
    return comment;
}

//update comments
async function updateCommentContentById(commentId, newContent) {
    const db = await dbPromise;
    await db.run(SQL`
        UPDATE Comments SET content = ${newContent} WHERE commentId = ${commentId}
    `);
}


module.exports = {
    createComment,
    getAllCommentsByAricleID,
    getAllCommentsByPosterId,
    getAllCommentReplysByCommentId,
    replyCommentReply,
    deleteComments,
    getCommentById,
    updateCommentContentById
}