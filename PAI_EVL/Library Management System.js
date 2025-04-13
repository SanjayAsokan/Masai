class Library{
    constructor(title, author, id){
        this.title = title
        this.author = author
        this.id = id
        this.checkedout = null
        this.status = "available"
    }
    // checkout(user){
    //     if(this.status == "available"{
    //         this.checkedout = user
    //         this.status = "Checked out"
    //         console.log(`[${this.constructor.name}] ${this.title}has been checked`)
    //     })
    // }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Fiction", "9780743273565");
const dvd1 = new DVD("Inception", "Christopher Nolan", 148, "Science Fiction", "PG-13");
const magazine1 = new Magazine("National Geographic", "Various", 80, "Science", "April 2023", "Monthly");