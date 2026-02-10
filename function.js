// this is a js file for library

const myLibrary = [];

function Book(id, title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;
}

Book.prototype.info = function(){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus} yet`);
    return this.title, this.author, this.pages, this.readStatus;
};



function addBookToLibrary(id, title, author, pages, readStatus){
    const book = new Book(id, title, author, pages, readStatus);
    
            myLibrary.push(book);
          
        
}

addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'not read');
