var button = document.querySelector(".hotel-search");
var form = document.querySelector(".order-form");

var adults = document.querySelector(".order-amount-adults");
var children = document.querySelector(".order-amount-children");
var dates = document.querySelector(".order-item-date");


form.classList.add("visually-hidden");

button.addEventListener("click", function (evt) {
evt.preventDefault();
form.classList.toggle("visually-hidden");
form.classList.toggle("modal-show");
localStorage.setItem("adults", adults.value);
localStorage.setItem("children", children.value);
});

form.addEventListener("submit", function (evt) {

if (!adults.value || !children.value || !dates.value) {
  evt.preventDefault();
  form.classList.remove("modal-error");
  form.offsetWidth = form.offsetWidth;
  form.classList.add("modal-error");
}

});
