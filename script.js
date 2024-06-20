const myLibrary = [];
let bookIndex=0;



class Book{
    constructor(title,author,pages,isRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
    this.index=bookIndex;
    }
}



function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    const bookDisplay = document.querySelector(".book-display");
    for (i=bookIndex; i<myLibrary.length;i++){
        const bookContainer = document.createElement("div");
        bookContainer.className="book-container";
        const author = document.createElement("p");
        author.textContent=`Author: ${myLibrary[i].author}`;
        const title = document.createElement("p");
        title.textContent=`Title: ${myLibrary[i].title}`;
        const pages = document.createElement("p");
        pages.textContent=`Pages: ${myLibrary[i].pages}`;
        const deleteButton = document.createElement("button");
        deleteButton.className="delete-button";
        deleteButton.textContent="Delete";
        const read = document.createElement("button");
        read.className=myLibrary[i].isRead;
        read.addEventListener("click",()=>{
            if (read.className==="true"){
                read.className="false";
            }
            else{
                read.className="true"
            }
        })
        deleteButton.addEventListener("click",()=>{
            bookContainer.remove(`div[data=${bookIndex}]`);
            myLibrary.splice(this.index,1);
            bookIndex--;
     
        });
        bookContainer.setAttribute("data",bookIndex);
        bookContainer.appendChild(author);
        bookContainer.appendChild(title);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(read);
        bookContainer.appendChild(deleteButton);
        bookDisplay.appendChild(bookContainer);
        bookIndex++;

        
    }
}

const newBook = document.querySelector(".new-book");
const dialog=document.querySelector("dialog");
const submitButton = document.querySelector(".submit-button");
const form = document.querySelector("form");
submitButton.addEventListener("click",(event)=>{
    if(title.value===""||author.value===""||pages.value===""){
        
    }
    else{
    event.preventDefault();
    dialog.close();
    }
  
})

dialog.addEventListener("close",()=>{
    if(title.value===""||author.value===""||pages.value===""){
        
    }
    else{
    const isRead = document.querySelector('input[name="isRead"]:checked');

    const book = new Book(title.value,author.value,pages.value,isRead.value);
    addBookToLibrary(book);
    displayBooks();
    form.reset();
    }
    
})

newBook.addEventListener("click",(event)=>{
    dialog.showModal();    
})



