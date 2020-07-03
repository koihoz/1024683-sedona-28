  var button = document.querySelector(".hotel-search");
	var form = document.querySelector(".order-form");
  var adults = document.querySelector(".order-amount-adults");
  var children = document.querySelector(".order-item-children");
  var dates = document.querySelector(".order-item-date");


	button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("visually-hidden");
  form.classList.add("modal-show");
  localStorage.setItem("adults", adults.value);
  localStorage.setItem("children", children.value);
	});


  form.addEventListener("submit", function (evt) {
   if (!aduits.value || !children.value || !dates.value) {
     evt.preventDefault();
   }
 });
