window.addEventListener('load', function () {

    const popupButton = document.querySelector("#popup-button");
    const popupWindow = document.querySelector("#popup-window")
    popupButton.addEventListener("click", function(){
        popupWindow.style.display = "block";
    });

    getAvatarArray();

    function getAvatarArray() {
        const avatarButtonArray = document.querySelectorAll(".avatar-button");
        for (let index = 0; index < avatarButtonArray.length; index++) {
            const element = avatarButtonArray[index];
            element.addEventListener("click", function (event) {
                const avatarInput = document.querySelector("#avatar-input").value;
                console.log("avatarInput = " + avatarInput);
                clickEvent(event);
                popupWindow.style.display = "none";
            });
        }
    }

    function clickEvent(event) {
        const clickedElement = event.target.id;
        const buttonName = `https://api.multiavatar.com/${clickedElement}.png`;
        console.log("buttonName: " + buttonName);
        avatarInput(buttonName);
       // return buttonName
    }
     
    function avatarInput(buttonName) {
     document.querySelector("#avatar-input").defaultValue = buttonName;
    }

});