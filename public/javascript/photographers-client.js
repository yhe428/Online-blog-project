window.addEventListener('load', function () {
  //let pathname = window.location.pathname;

  //if(pathname == '/photographers'){

  const buttonArray = document.querySelectorAll(".name-button");
  buttonArray.forEach(function (button) {
    button.addEventListener("click", async function () {
      const photographerId = button.dataset.id;
      await fetch(`./photographers/${photographerId}`);
    });
  });

  //if(pathname == '/blog')

   const btn = document.querySelector(".btn");

    btn.addEventListener("click", async function () {
      const articleId = btn.dataset.id;
      await fetch(`/full-article/${articleId}`);
    });

  //if(pathname == '/categories)

  const natureBtn = document.querySelector(".nature-btn");
   

  natureBtn.addEventListener("click", async function (event) {
     let name = event.target.innerText; 
    await fetch(`./categories/${name}`);   
  });

 });
