const popContainer = document.getElementById("popup-form-container");
const popForm = document.getElementById("popup-form");
const addButton = document.getElementById("close_btn");
const cancelButton = document.getElementById("cancel-form");
const bookList = document.getElementById("book-list");
const submitButton = document.getElementById("submit-btn");
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
bookList.innerHTML += html
}
popForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if(title.value && author.value) {
    bookTemplate(title.value, author.value, pages.value)
  }
})



function Book(title,author,pages,read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;

}
function addToLibrary() {
  let firstTitle = document.getElementById("title").value;
  let firstauthor = document.getElementById("author").value;
  let firstPages = document.getElementById("pages").value;
  let checkedRead = document.getElementById("read").checked;

}


let myLibrary = [
  {
  title: "Pachinko",
  author: " Min Jin Lee",
  pages: "490",
  }
];
submitButton.addEventListener("click", () => {
  popContainer.style.display = 'none'
} ) 
const bookToChange = myLibrary.find(book => book.title == title);
bookToChange['read'] = !bookToChange['read'];