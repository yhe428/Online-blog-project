window.addEventListener("load", function(){
    
    const replyWindow = document.querySelector('.reply-window');
    const replyButtons = document.querySelectorAll('.reply-btn');
    const submitbutton = document.querySelector('.submit-reply-btn');
    const deleteButton = document.querySelectorAll('.delete-btn');

    const hiddenParentIdInput = document.createElement("input");
    hiddenParentIdInput.type = "hidden";
    hiddenParentIdInput.name = "parentId";
    submitbutton.appendChild(hiddenParentIdInput);

    replyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            let commentId = btn.getAttribute('data-comment-id');
            
            hiddenParentIdInput.value = commentId;
            

            replyWindow.removeAttribute('hidden');
            submitbutton.setAttribute('data-comment-id', commentId);
        });
    });

    this.document.body.addEventListener('click', function(){
        replyWindow.setAttribute('hidden',true);
    });

    replyWindow.addEventListener('click',function(e){
        e.stopPropagation();
    });


    //delete comment
    deleteButton.forEach(button =>{
        button.addEventListener('click', async function(e){
            let commentId = e.target.getAttribute('data-comment-id');

            try {
                const response = await fetch(`/deleteComment/${commentId}`, { method: 'DELETE' });
                if (response.ok) {
                    const data = await response.json();
                    if (data.success) {
                        alert("Comment deleted successfully!");
                        location.reload(); 
                    } else {
                        alert("Failed to delete comment.");
                    }
                }
            } catch (error) {
                console.error("Error deleting comment:", error);
                alert("Server error, please try again later.");
            }



        });
    });

});