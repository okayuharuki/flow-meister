// 変数に型をつける
// 文字列：string
const userName: string = "山田";

// 数字：number
const age: number = 20;

// true or false：boolean
const isActive: boolean = false;

// 関数に型を付ける
function hello(name: string): string {
  return `Hello,${name}さん`;
}
hello("田中");

// 型を使いまわそう
type UserName = string;

const userName1: UserName = "山田";
const userName2: UserName = "田中";
const userName3: UserName = "鈴木";

// ユニオン型
type UserName2 = "山田" | "田中" | "鈴木";

const userName21: UserName2 = "山田";
const userName22: UserName2 = "田中";
// const userName23: UserName2 = "高橋";

// オブジェクトの型を定義する
type User = {
  name: string;
  age: number;
  email?: string;
};

const user: User = {
  name: "佐藤",
  age: 35,
//   email: "sato@example.com",
};

// 配列の型の定義
// const lines: number[] = [1, 2, 3];
// const texts: string[] = ["a", "b", "c"];

const lines: Array<number> = [1, 2, 3];
const texts: Array<string> = ["a", "b", "c"];

const userObjects: User[] = [
  {
    name: "佐藤",
    age: 35,
    email: "sato@example.com",
  },
  {
    name: "田中",
    age: 36,
    email: "tanaka@example.com",
  },
];
