window.addEventListener("load", function(){
    const deleteButtons = document.querySelectorAll('#delete-article');
    

    deleteButtons.forEach(button => {
        button.addEventListener("click", async function(event){
            event.preventDefault();
            
            const articleId = this.dataset.site;   

            const userConfirmation = confirm("Are you sure you want to delete this article?");
            
            if(userConfirmation){
                try{
                    const response = await fetch(`/deleteArticle?articleId=${articleId}`, { method: "DELETE" });
                    const data = await response.json();
                    
                    if(data.success){
                        alert("Article deleted successfully!");
                        location.reload();  
                    } else {
                        alert("Failed to delete article!");
                    }
                }catch(err){
                    alert("Request error, please try again later!");
                }
            }
        });
    });
});