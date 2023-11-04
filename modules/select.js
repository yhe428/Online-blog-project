//calculate height/weight ratio and assign 'short' 'medium' 'tall' 'tallest' to img css class
function imageOrientation(articles){

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
    return newArticlesArray
}
module.exports = {
    imageOrientation
};