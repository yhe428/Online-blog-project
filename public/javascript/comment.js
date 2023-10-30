window.addEventListener("load", function(){
    const replyButtons = this.document.querySelectorAll('.replyButton');
    replyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const commentId = button.getAttribute('data-id');
            const replyForm = document.getElementById(`replyForm-${commentId}`);
            replyForm.style.display = (replyForm.style.display === 'none' || replyForm.style.display === '') ? 'block' : 'none';
        });
    });






});