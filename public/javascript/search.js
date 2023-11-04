window.addEventListener('load', function () {

  btn.addEventListener("click", async function () {
    const articleId = btn.dataset.id;
    await fetch(`/full-article/${articleId}`);
  });

});