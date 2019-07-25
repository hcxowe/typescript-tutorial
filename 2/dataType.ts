// 布尔值
let isDone: boolean = false

// 数值
let num: number = 4

// 字符串
let str: string = 'hcxowe'

// 数组
let ary: number[] = [1, 2, 3, 4, 5]
let ary1: string[] = ['1', '2', '3', '4', '5']
let ary11: any[] = [1, false, 'hcxowe', {}]

let ary2: Array<number> = [1, 2, 3, 4, 5]

// 元组
let x: [string, number, boolean]
x = ['hello', 10, false]

// 枚举
enum Color {
    Red = 0, 
    Green, 
    Blue
}

let c: Color = Color.Green

// Any
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false

// Void
let unusable: void = undefined

function warnUser(): void {
    console.log("This is my warning message")
}

// Null, Undefined
let u: undefined = undefined
let n: null = null

// Never

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message)
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {}
}

// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型

// 类型断言
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
let strLength1: number = (someValue as string).length