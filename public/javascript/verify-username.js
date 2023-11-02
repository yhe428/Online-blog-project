window.addEventListener("load", function(){

    const pathname = window.location.pathname;

    if(pathname == '/newAccount' || pathname == '/editAccount'){
        const usernameInput = this.document.querySelector("#txtUsername");

        usernameInput.addEventListener("input", async function(){
            let username = usernameInput.value;

            //send ajax request to server to verify if user exists
            let responsePromise = await fetch (`./verifyUsername?username=${username}`);
            let usernameObj = await responsePromise.json();
            //judge if exists
            if(usernameObj == true){
                document.querySelector("#ifCanUse").innerHTML = "<span style='color:red'>That username was used by another user!</span>"
            }else{
                document.querySelector("#ifCanUse").innerText = ""; //"Username is available."
            }

        })
    }

});