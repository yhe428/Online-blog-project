window.addEventListener("load", function(){

    const pathname = window.location.pathname;

    if(pathname == '/newAccount'){
        const usernameInput = this.document.querySelector("#txtUsername");

        usernameInput.addEventListener("blur", async function(){
            let username = usernameInput.value;

            //send ajax request to server to verify if user exists
            let responsePromise = await fetch (`./verifyUsername?username=${username}`);
            let usernameObj = await responsePromise.json();
            //judge if exists
            if(usernameObj == true){
                document.querySelector("#ifCanUse").innerHTML = "The username was used by another user!"
            }else{
                document.querySelector("#ifCanUse").innerText = "The username can be use."
            }

        })
    }

});