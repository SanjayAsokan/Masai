
function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo: function(){
        return `Book: ${this.title}, Author: ${this.author} `;
      }
    };
  }
  
const book = createBook("1984", "George Orwell");
console.log(book.printInfo());
