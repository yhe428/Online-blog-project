window.addEventListener('load', function(){
    let loginButton = this.document.querySelector('#login-button');
    loginButton.addEventListener('click',function(){
        window.location.href = "/login";
    });

});