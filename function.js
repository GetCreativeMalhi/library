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

function readArrayDisplayBooks(array){
    var rObjTitle = "";
    var rObjAuthor = "";
    var rObjPages = "";
    var rObjStatus = "";
    const contentGrid = document.querySelector(".content-grid");

    for(const bookObj of myLibrary){
        rObjAuthor = bookObj.author;
        rObjTitle = bookObj.title;
        rObjPages = bookObj.pages;
        rObjStatus = bookObj.readStatus;

        const card = document.createElement("div");
        card.classList.add("card");

        const cardTitle = document.createElement("h3");
        const cardAuthor = document.createElement("h4");
        const cardPages = document.createElement("h4");
        const cardStatus = document.createElement("h4");


        const cardAuthorSpan = document.createElement("span");
        const cardPagesSpan = document.createElement("span");
        const cardStatusSpan = document.createElement("span");

        cardAuthorSpan.classList.add("muted");
        cardPagesSpan.classList.add("muted");
        cardStatusSpan.classList.add("muted");

        cardAuthorSpan.textContent = rObjAuthor;
        cardPagesSpan.textContent = rObjPages;
        cardStatusSpan.textContent = rObjStatus;
        cardTitle.textContent = rObjTitle;
        cardAuthor.textContent = "Author: ";
        cardPages.textContent = "Pages: ";
        cardStatus.textContent = "Status: ";

        cardAuthor.appendChild(cardAuthorSpan);
        cardPages.appendChild(cardPagesSpan);
        cardStatus.appendChild(cardStatusSpan);

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardStatus);

        contentGrid.appendChild(card);
    }

}; 

addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J. R. R. Tolkien', 295, 'Not read');
readArrayDisplayBooks(myLibrary);