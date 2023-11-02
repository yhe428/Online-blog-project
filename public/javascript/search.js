window.addEventListener('load', function () {

/*const buttons = document.querySelectorAll(".btn search-articles");

buttons.forEach(function (button) {
    button.addEventListener("click", async function () {
      const articleId = button.dataset.id;
      console.log("clicked button", articleId);
      const response = await fetch(`/full-article/${articleId}`);
      const data = response.json();
      console.log(data);

    });
  });*/

  btn.addEventListener("click", async function () {
    const articleId = btn.dataset.id;
    await fetch(`/full-article/${articleId}`);
  });

});