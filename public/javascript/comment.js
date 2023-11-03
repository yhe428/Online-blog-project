window.addEventListener("load", function(){
    
    const replyWindow = this.document.querySelector('.reply-window');
    const replyButtons = document.querySelectorAll('.reply-btn');
    const submitbutton = this.document.querySelector('.submit-reply-btn');
    const deleteButton = this.document.querySelectorAll('.delete-btn');

    const hiddenParentIdInput = document.createElement("input");
    hiddenParentIdInput.type = "hidden";
    hiddenParentIdInput.name = "parentId";
    submitbutton.appendChild(hiddenParentIdInput);

    replyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            let commentId = btn.getAttribute('data-comment-id');
            // console.log(commentId);working
            hiddenParentIdInput.value = commentId;
            // console.log(hiddenParentIdInput.value);working

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
                        // Remove comment from the DOM or refresh the page.
                        alert("Comment deleted successfully!");
                        location.reload(); // Reload the page
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