
function Book(title, author){
    return{
        title,
        author,
        details: function(){
            console.log(`Title : ${this.title}, Author : ${this.author}`)
        }

    }
}
function createLibrary(){
    var books = []
    return{
        add(book){
            books.push(book)
        },
        remove(title){
            for(let i=0;i<books.length;i++){
                if(books[i].title === title){
                    books.splice(i,1)
                    return
                }
            }
            console.log(`${title}: Not Found`)
        },
        listBooks(){
            if(books.length == 0){
                console.log("No Books in Library")
            }
            else{
                books.forEach(book =>book.details())
            }
        }

    }
}
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.add(book1);
library.add(book2);

library.listBooks();

library.remove("To Kill a Mockingbird");
library.listBooks();