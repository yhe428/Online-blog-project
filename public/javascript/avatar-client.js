
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

        
        
        // for (let index = 0; index < avatarButtonArray.length; index++) {
        //     const element = avatarButtonArray[index];
        //     element.addEventListener("click", function (event) {
        //         const avatarInput = document.querySelector("#avatar-input").value;
        //         console.log("avatarInput = " + avatarInput);
        //         clickEvent(event);
        //         popupWindow.style.display = "none";
        //     });
        // }
    }

    // function clickEvent(event) {
    //     const clickedElement = event.target.id;
    //     const buttonName = `https://api.multiavatar.com/${clickedElement}.png`;
    //     console.log("buttonName: " + buttonName);
    //     avatarInput(buttonName);
    //    // return buttonName
    // }
    
    // function avatarInput(buttonName) {
    //  document.querySelector("#avatar-input").defaultValue = buttonName;
    // }

});