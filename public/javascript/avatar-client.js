
window.addEventListener('load', function () {

    const popupButton = document.querySelector("#popup-button");
    const popupWindow = document.querySelector("#popup-window")
    const avatarImg = this.document.querySelector("#remind-avatar img")
    popupButton.addEventListener("click", function(){
        popupWindow.style.display = "block";
    });

    getAvatarArray(popupWindow, avatarImg);

    function getAvatarArray(popupWindow, avatarImg) {
        const avatarButtonArray = document.querySelectorAll(".avatar-button");

        avatarButtonArray.forEach(function(button){
            button.addEventListener("click", async function(event){
                event.preventDefault();
                const avatarId = button.dataset.id;

                try{
                    const obj = await fetch(`https://api.multiavatar.com/${avatarId}.png`);
                    if(obj.ok){
                        const avatarUrl = obj.url;
                        avatarImg.src = avatarUrl;
                        popupWindow.style.display = "none";
                        
                        document.querySelector('#avatar-input').value = avatarUrl;

                    }else{
                        console.error("Failed to fetch avatar");
                    }
                }catch(error){
                    console.error("Error fetching avatar", error);
                }
                
            });
        });

    }

});