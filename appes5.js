//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Construtor 
function UI() {
}

//Add Book to List
UI.prototype.addBooklist = function(book) {
    console.log(book);
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', 
function(e){
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    console.log(title, author,  isbn);

    //Instantiate UI
    const ui = new UI();

    //Add book to list
    ui.addBooklist(book);

    e.preventDefault();
});