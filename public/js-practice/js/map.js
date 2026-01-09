const users =["田中", "山田", "鈴木"];

const greetings = users.map((user) => {
    return `こんにちは、${user}さん！`;
})

console.log(greetings);