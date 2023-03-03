// const popContainer = document.getElementById("popup-form-container");
// const popForm = document.getElementById("popup-form");
// const addButton = document.getElementById("close_btn");
const cancelButton = document.getElementById("cancel-form");
// const bookList = document.getElementById("book-list");
// const submitButton = document.getElementById("submit-btn");
// popContainer.addEventListener("click", () =>
// style.display = 'none')


// cancelButton.addEventListener("click", () => {
//   popContainer.style.display = 'none';
// });


// addButton.addEventListener("click", () => {
//   popContainer.style.display = 'block';
// });

// const bookTemplate = (title, author, pages) => {
//   const html = `
//   <li class='book-item'> ${title} ${author} ${pages}</li>
// `
// bookList.innerHTML += html
// }
// popForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if(title.value && author.value) {
//     bookTemplate(title.value, author.value, pages.value)
//   }
// })



// function Book(title,author,pages,read) {
//   this.author = author;
//   this.title = title;
//   this.pages = pages;
//   this.read = read;

// }
// function addToLibrary() {
//   let firstTitle = document.getElementById("title").value;
//   let firstauthor = document.getElementById("author").value;
//   let firstPages = document.getElementById("pages").value;
//   let checkedRead = document.getElementById("read").checked;
//   let newBook = new Book(title,author,pages,read);
//   console.log(newBook)
// }

// document.getElementById("popup-form").addEventListener("submit", function() {
//   event.preventDefault();
//   alert("Hellow WOrld")
// })
// let myLibrary = [
//   {
//   title: "Pachinko",
//   author: " Min Jin Lee",
//   pages: "490",
//   }
// ];
// submitButton.addEventListener("click", () => {
//   popContainer.style.display = 'none'
// } ) 

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
  <h3 class="author"> by ${book.author};
  <h3 class="title"> by ${book.title}</h3>
  </div>;
  <div class="card-body">
  <p> ${book.pages} pages </p>
  <p class="read-status">${book.read ? "Read" : "Note Read Yet"}</p>
  <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
  <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
  </div>;
  
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
