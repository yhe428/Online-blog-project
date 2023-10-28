window.addEventListener('load', function(){
    let createAccountButton = this.document.querySelector('#create-account');
    createAccountButton.addEventListener('click',function(){
        window.location.href = "/newAccount";
    });

    let loginButton = document.querySelector('#login');
    loginButton.addEventListener('click',function(){
        //alert("You clicked login")
        window.location.href = "/login";
    });

});