  var button = document.querySelector(".hotel-search");
	var form = document.querySelector(".order-form");
  var adults = document.querySelector(".order-amount-adults");
  var children = document.querySelector(".order-item-children");

	button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("visually-hidden");
  localStorage.setItem("adults", adults.value);
  localStorage.setItem("children", children.value);
	});
