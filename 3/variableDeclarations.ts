// var 声明
var a = 10

// let 声明
let hello = "Hello!"

// const 声明
const numLivesForCat = 9

// 解构

//解构数组
let input: [number, number] = [1, 2]
let [first, second] = input

function f([first, second]: [number, number]): void {
    console.log(first)
    console.log(second)
}

f([first, second])
f(input)

let [one, ...rest] = [1, 2, 3, 4]

// 对象解构
let o = {
    aa: "foo",
    bb: 12,
    cc: "bar"
}

let { aa, bb } = o

// 展开
let ary1 = [1, 2];
let ary2 = [3, 4];
let bothPlus = [0, ...ary1, ...ary2, 5]