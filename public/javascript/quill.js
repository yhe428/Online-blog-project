window.addEventListener("load", function() {
    
    var quill = new Quill('#editor', {
        theme: 'snow'  
    });

    //when user submit their form, the text of quill will copy in editor-textarea
    document.querySelector('form').addEventListener('submit', function() {
        document.getElementById('editor-textarea').value = quill.root.innerHTML;
    });
});