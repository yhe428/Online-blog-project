const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function retrieveAllSearchResults(input) {
  try {
    const db = await dbPromise;

        const resultsArray = await db.all(SQL`select distinct articleId, categoryName, title, content, authorfName, authorlName, articleDate, imageName, imageHeight, avatar, numberComments
        from ArticlesSearch
        where ArticlesSearch MATCH ${input + "*"} order by rank`);
    console.log("search results:", resultsArray);

    return resultsArray;
  } catch (error) {
    console.error("An error occurred while retrieving search results");
  }
}

module.exports = {
  retrieveAllSearchResults,
};
