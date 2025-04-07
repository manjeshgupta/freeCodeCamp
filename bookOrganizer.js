const books = [
  {
  title: "The power of Subconcious mind.",
  authorName: "Shiv Khera",
  releaseYear: 1945
  },
  {
  title: "The Pursuit of Happiness",
  authorName: "Dan Michell",
  releaseYear: 2019
  },
  {
  title: "How wise man thinks.",
  authorName: "Manjesh",
  releaseYear: 2024
  }
];

function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  } 
  if(book1.releaseYear > book2.releaseYear){
    return 1;
  }
  return 0;
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);


console.log("Filtered and Sorted Books:");
console.log(filteredBooks);
