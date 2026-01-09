// 条件 ? trueの場合 : falseの場合
const isLogin = false;

// if文の場合
// let message;
// if (isLogin) {
//     message = "ようこそ";
// } else {
//     message = "ログインしてください";
// }

// const message = isLogin ? "ようこそ" : "ログインしてください";

// console.log(`isLoginが「${isLogin}」の時、messageは「${message}」になる`);

// const message = isLogin && "ようこそ";
const message = isLogin || "ログインしてください";

console.log(`isLoginが「${isLogin}」の時、messageは「${message}」になる`);