const popContainer = document.getElementById("popup-form-container");
const popForm = document.getElementById("popup-form");
const addButton = document.getElementById("close_btn");
const cancelButton = document.getElementById("cancel-form");
const bookList = document.getElementById("book-list");

// popContainer.addEventListener("click", () =>
// style.display = 'none')


cancelButton.addEventListener("click", () => {
  popContainer.style.display = 'none';
});


addButton.addEventListener("click", () => {
  popContainer.style.display = 'block';
});

const bookTemplate = (title, author, pages) => {
  const html = `
  <li class='book-item'> ${title} ${author} ${pages}</li>
`
//bookList.innerHTML += html
}
popForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if(title.value && author.value) {
    bookTemplate(title.value, author.value, pages.value)
  }
})

let myLibrary = [
  
];

function Book(title,author,pages,read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;

}
function addToLibrary() {
}