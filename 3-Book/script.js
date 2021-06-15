let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    if (myLibrary.some((book) => book.title === newBook.title)) return false;
    myLibrary.push(newBook);
    displayBook(newBook);
    return true;
}

function createBookRecord() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("read").checked;
    return new Book(title, author, pages, isRead);
}

const form = document.querySelector(".popup");

document.getElementById("book-form").addEventListener("click", function() {
    form.reset();
    document.querySelector(".popup").classList.add("popup-active");
});

form.addEventListener("submit", function() {
    if (addBookToLibrary(createBookRecord()))
        document.querySelector(".popup").classList.remove("popup-active");
    else
        alert("You have already added this book to the library!");
});

function displayBook(book) {
    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("h3");
    author.textContent = book.author;

    const pages = document.createElement("h3");
    pages.textContent = book.pages;

    const read = document.createElement("button");

    const remove_button = document.createElement("button");

    books_grid = document.getElementById("booksGrid");

    const bookCard = document.createElement("div");
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(remove_button);

    books_grid.appendChild(bookCard);
}