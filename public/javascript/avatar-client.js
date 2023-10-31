window.addEventListener('load', function () {

    const popupButton = document.querySelector("#popup-button");
    const popupWindow = document.querySelector("#popup-window")

    popupButton.addEventListener("click", function(){
        popupWindow.style.display = "block";
    });

    const closeButton = document.querySelector("#close-button");
    closeButton.addEventListener("click", function(){
        popupWindow.style.display = "none";
    });


    getAvatarArray();

    function getAvatarArray() {
        const avatarButtonArray = document.querySelectorAll(".avatar-button");
        for (let index = 0; index < avatarButtonArray.length; index++) {
            const element = avatarButtonArray[index];
            element.addEventListener("click", function (event) {
                clickEvent(event, avatarButtonArray);
            });
        }
    }

    function clickEvent(event) {
        const clickedElement = event.target.id;
        const buttonName = `https://api.multiavatar.com/${clickedElement}.png`;
        console.log("buttonName: " + buttonName);
        return buttonName
    }
    
    //avatarViewDisplay();


    function avatarViewDisplay() {
        const messagePlace = document.querySelector('#message-place');
        const displayDiv = document.querySelector('#display-div');
        const avatarDisplayButton = document.querySelector('#display-avatar');
        avatarDisplayButton.addEventListener("click", function () {
            const nameAvailable = getAvatarName();
            if (nameAvailable == "" || nameAvailable == null) {
                messagePlace.innerText = "Nothing to display!"
            } else {                
                 const avatarDisplayUrl = `https://api.multiavatar.com/${nameAvailable}.png`;
                 displayImg = document.createElement("img");
                 displayImg.src= avatarDisplayUrl;
                 displayImg.height= "150";               
                 displayDiv.appendChild(displayImg);
            }
        });
    }

    function getAvatarName() {
        const inputAvatarName = document.querySelector('#avatarNameinput');
        const newAvatarName = inputAvatarName.value;
        return newAvatarName;  
    }

});