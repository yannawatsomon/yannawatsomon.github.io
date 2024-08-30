class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class BookCollection {
    constructor() {
        this.books = []
    }
    
    addBook(book){
        this.books.push(book)
        document.write(`Added: ${book.title}<br/>`)
    }

    searchBooks(keyword){
        keyword = keyword.toLowerCase()
        for(let book of this.books){
            if (book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword)) {
                return `Found: ${book.title} by ${book.author}`
            }
        }
        return `Book with query ${keyword} is not found`
    }
    books(){
        return this.books
    }
}

function displayBooks(arr) {
    for(let i in arr){
        document.write(`${parseInt(i) + 1}. ${arr[i].title} by ${arr[i].author}`)
        document.write('<br/>');

    }
}

const Library = new BookCollection()

// Adding books to the library
Library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
Library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
Library.addBook(new Book("1984", "George Orwell"));
Library.addBook(new Book("Pride and Prejudice", "Jane Austen"));
Library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));


// Demonstrating functionality
document.write("<br/>Searching for the book with author 'Harper Lee':<br/>");
document.write(Library.searchBooks("Harper Lee"))
document.write('<br/>');


document.write(
 "<br/>Searching for the book with title 'The Great Gastby':<br/>"
);
document.write(Library.searchBooks("The Great Gatsby"))
document.write('<br/>');

document.write(
 "<br/>Searching for the book with title 'Design Thinking':<br/>"
);
document.write(Library.searchBooks("Design Thinking"))
document.write('<br/>');


let books = Library.books;
document.write("<br/>These are the books in the library:<br/>");
displayBooks(books);