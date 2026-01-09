// function greet(userName) {
//     return `こんにちは、${userName}さん。`;
// }

// アロー関数の場合
// const greet = (userName) => {
//   return `こんにちは、${userName}さん。`;
// };

// 処理が1行の場合は波括弧とreturnを省略可能
// const greet = (userName) => `こんにちは、${userName}さん。`;

// 引数が1つの場合は括弧も省略可能
const greet = userName => `こんにちは、${userName}さん。`;

console.log(greet("田中太郎"));
