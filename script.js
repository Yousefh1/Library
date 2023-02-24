const popContainer = document.getElementById("popup-form-container");
const popForm = document.getElementById("popup-form");
const addButton = document.getElementById("close_btn");
const cancelButton = document.getElementById("cancel-form");
// popContainer.addEventListener("click", () =>
// style.display = 'none')


cancelButton.addEventListener("click", () => {
  popContainer.style.display = 'none';
});


addButton.addEventListener("click", () => {
  popContainer.style.display = 'block';
});
