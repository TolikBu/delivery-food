const cardButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cardButton.addEventListener('click', function (event){
  modal.classList.add("is-open");
});
close.addEventListener('click', function (event) {
  modal.classList.remove("is-open");
});


new WOW().init();