// オブジェクトの分割代入
// const user = {
//     fullname: "田中太郎",
//     age: 20,
// }

// 分割代入を使わない方法
// const fullname = user.fullname;
// const age = user.age;

// 分割代入を使う方法
// const { fullname, age } = user;

// console.log(`こんにちは、${fullname}さん。`);
// console.log(`あなたは${age}歳です。`);

// function greet({fullname}) {
//     return `こんばんは、${fullname}さん。`;
// }
// console.log(greet(user));


// 配列の分割代入
const users = ["田中", "山田", "鈴木"];

// const users1 = users[0];
// const users2 = users[1];
// const users3 = users[2];

// 分割代入の場合
const [user1, user2, user3] = users;

console.log(`1人目は${user1}さんです。`);
console.log(`2人目は${user2}さんです。`);
// console.log(`3人目は${user3}さんです。`);