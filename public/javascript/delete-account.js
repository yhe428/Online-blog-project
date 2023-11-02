window.addEventListener("load", function(){
    const pathname = window.location.pathname;

    if(pathname == '/editAccount'){
        const deleteButton = this.document.querySelector('#delete_button');

        deleteButton.addEventListener("click", async function(event){
            event.preventDefault();

            const userConfirmation = confirm ("Are you sure to delete?");

            if(userConfirmation){
                try{
                    const response = await fetch("/deleteAccount", { method: "DELETE" });
                    const data = await response.json();
            
                    if(data.success){
                        window.location.href = "/login";
                        alert("Delete successful!")
                    } else {
                        alert("Delete fail!");
                    }

                }catch(err){
                    alert("Request error, please try again later!")
                }
            }else{
                window.location.href = "/editAccount";
            }
        });

    }

});