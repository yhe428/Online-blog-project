window.addEventListener('load', function () {
  //let pathname = window.location.pathname;

  //if(pathname == '/photographers'){

  const buttonArray = document.querySelectorAll(".name-button");
  buttonArray.forEach(function (button) {
    button.addEventListener("click", async function () {
      const photographerId = button.dataset.id;
      await fetch(`./photographers/${photographerId}`);
      // console.log(photographerId);
    });
  });

  //if(pathname == '/blog')

  // const btn = document.querySelectorAll(".btn");
  // btn.forEach(function (btn) {

    btn.addEventListener("click", async function () {
      const articleId = btn.dataset.id;
      await fetch(`/full-article/${articleId}`);
    });
  });
// });

