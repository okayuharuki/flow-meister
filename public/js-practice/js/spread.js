const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

// オブジェクトの場合
const book = {
  title: "JavaScript入門",
  author: "田中太郎",
  pages: "120",
  price: "3000"
};

const newBook = { ...book, pages: 320 };
console.log(newBook);

// 分割代入
const { title, author, ...rest } = book;
console.log(title);
console.log(author);
console.log(rest);
