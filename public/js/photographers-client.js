window.addEventListener('load', function(){

    const buttonArray = document.querySelectorAll(".name-button");
    buttonArray.forEach(function(button) {
      button.addEventListener("click", async function() {
        const photographerId = button.dataset.id;
        getPhotographerById(photographerId);
    });
  });
  
  async function getPhotographerById(photographerId) {
    const response = await fetch(`./photographers/${photographerId}`);
    let currentPhotographer = await response.json();
    console.log(currentPhotographer);
    displayPhotographerDetails(currentPhotographer);
  }

  function displayPhotographerDetails(photographer) {
    const photographerDisplayDiv = document.querySelector(".article-container");
    photographerDisplayDiv.innerHTML =`
    <p>${photographer.phone}</p>
    <h2>${photographer.fName} ${photographer.lName}'s Description</h2>
    <p>${photographer.userDescription}</p>`
  }


});