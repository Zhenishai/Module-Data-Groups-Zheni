function readingList(books) {
  const list = document.getElementById("reading-list");

  books.forEach((book) => {
    //Create elements
    const li = document.createElement("li");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const image = document.createElement("img");

    //Set text and attributes
    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    image.src = book.bookCoverImage;
    image.alt = book.title;

    //Set background color depending on alreadyRead
    if (book.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red"; 
    }

li.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <img src="${book.bookCoverImage}" />
    `;

list.appendChild(li);
  });
}


// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);