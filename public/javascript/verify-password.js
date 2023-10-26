window.addEventListener("load", function() {
    let pathname = window.location.pathname;

    if(pathname == '/newAccount'){
        const input = document.querySelector('#confirmPassword');

        input.addEventListener("blur", function(){
            const password1 = document.querySelector("#txtPassword").value;
            const password2 = document.querySelector("#confirmPassword").value;
            if(password1 == password2){
                document.querySelector("#submit").disabled = false;
            }else{
                document.querySelector("#remind").innerHTML = "<span style ='color:red'>passwords do not match, please type again</span>";
                document.querySelector("#submit").disabled = true;
            }

        });

    }
})