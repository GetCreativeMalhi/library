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
            readArrayDisplayBooks(myLibrary);
}

function checkReadStatus(event){
    const findParentCardId = event.target.closest(".card").dataset.id;
    const findIndex = myLibrary.findIndex(book => {
        return book.id === findParentCardId;
    });


    if (findIndex === -1) return;
    if(event.target.checked){
        myLibrary[findIndex].readStatus = "Read";
    }else{
        myLibrary[findIndex].readStatus = "Unread";
    }
    console.log(myLibrary[findIndex].readStatus);
    readArrayDisplayBooks(myLibrary);
};

function removeBook(event){
    const removeCardId = event.target.closest('.card').dataset.id;
    const removeBookId = myLibrary.findIndex(book =>{
       return book.id === removeCardId;
    });
    if (removeBookId === -1) return;
    myLibrary.splice(removeBookId, 1);
    readArrayDisplayBooks(myLibrary);

};

function readArrayDisplayBooks(myLibrary){
        const contentGrid = document.querySelector(".content-grid");
       const childToRemove = document.querySelectorAll(".card");
       childToRemove.forEach(c => {
            c.remove();
       })
    //    childToRemove.remove();
      
        var rObjTitle = "";
        var rObjAuthor = "";
        var rObjPages = "";
        var rObjStatus = "";
        var rObjId = "";
        
        for(const bookObj of myLibrary){
            rObjAuthor = bookObj.author;
            rObjTitle = bookObj.title;
            rObjPages = bookObj.pages;
            rObjStatus = bookObj.readStatus;
            rObjId = bookObj.id;
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.id = rObjId;
            const cardTitle = document.createElement("h3");
            cardTitle.classList.add("card-heading");
            const cardAuthor = document.createElement("h4");
            cardAuthor.classList.add("card-heading");
            const cardPages = document.createElement("h4");
            const cardStatus = document.createElement("h4");
            const cardAuthorSpan = document.createElement("span");
            const cardPagesSpan = document.createElement("span");
            const cardStatusSpan = document.createElement("span");
            const cardCheckbox = document.createElement("input");
            const statusWrapper = document.createElement("div");
            statusWrapper.classList.add("status-wrapper");
            cardCheckbox.setAttribute("type", "checkbox");
            if (bookObj.readStatus === "Read"){
                cardCheckbox.checked = true;
            }else {
                cardCheckbox.checked = false;
            }
            const removeBtn = document.createElement("button");
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
            removeBtn.textContent = "Remove";
            cardAuthor.appendChild(cardAuthorSpan);
            cardPages.appendChild(cardPagesSpan);
            cardStatus.appendChild(cardStatusSpan);
            statusWrapper.appendChild(cardStatus);
            statusWrapper.appendChild(cardCheckbox);
            card.appendChild(cardTitle);
            card.appendChild(cardAuthor);
            card.appendChild(cardPages);
            card.appendChild(statusWrapper);
            
            cardCheckbox.addEventListener("click", checkReadStatus);
            card.appendChild(removeBtn);
            contentGrid.appendChild(card);

            removeBtn.addEventListener("click", removeBook);
        }
       
}; 




const addBookBtn = document.querySelector("#addbook-btn");
const dialog = document.querySelector("#addbook-dialog");
const closeBtn = document.querySelector(".close-btn");

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});



function readFormAddBook(){
    var formTitleInput;
    var formAuthorInput;
    var formPagesInput;
    var formReadStatusInput;
    const form = document.querySelector("#addbook-form");


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        formTitleInput= document.querySelector("#form-title").value;
        

        formAuthorInput = document.querySelector("#form-author").value;
        

       formPagesInput= document.querySelector("#form-pages").value;

        if(document.querySelector("#form-read").checked){
            formReadStatusInput = "Read";
        } else {
            formReadStatusInput = "Unread";
        }
       
        if (myLibrary.find(book => book.title === formTitleInput) &&  myLibrary.find(book => book.author === formAuthorInput)){
            alert("This book aready exists in the Library");
           
            
        } else {
            addBookToLibrary(crypto.randomUUID(), formTitleInput, formAuthorInput, formPagesInput, formReadStatusInput);}
        formTitleInput = "";
        formAuthorInput = "";
        formPagesInput = "";
        formReadStatusInput = "";
        
       
        
        dialog.close();
       document.getElementById("addbook-form").reset();
    });
    
}
readFormAddBook();

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

