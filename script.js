
let library = [];

function Book(title,author,pages,read) {
  this.author = author;
  this.pages = pages;
  this.title = title;
  this.read = read;
};

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  library[index].toggleRead();
  render();
}
function render() {
  let libraryEl = document.querySelector("#library-container");
   libraryEl.innerHTML = "";
for (let i = 0; i < library.length; i++) {
  let book = library[i];
  let bookel = document.createElement("div");
  bookel.setAttribute("class", "book-card")
  bookel.innerHTML = `<div class="card-header">
  <h3 class="author">  ${book.author};
  <h3 class="title"> by ${book.title}</h3>
  </div>
  <div class="card-body">
  <p> ${book.pages} pages </p>
  <p class="read-status">${book.read ? "Read" : "Note Read Yet"}</p>
  <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
  <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
  </div>
  
  `

  libraryEl.appendChild(bookel);
}
}
function addBookToLibrary() {
let title = document.querySelector("#title").value;
let author = document.querySelector("#author").value;
let pages = document.querySelector("#pages").value;
let read = document.querySelector("#read").value;
let newBook = new Book(title,author,pages,read);
library.push(newBook);
render();
};

let newBookbtn = document.getElementById("open_form");
newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#popup-form");
  newBookForm.style.display = "block" 
})
 document.querySelector("#popup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
 })
 function removeBook(index) {
  library.splice(index,1)
  render(); 
 }
