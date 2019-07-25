// 接口

interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
  
let myObj = { 
    size: 10, 
    label: "Size 10 Object"
}

printLabel(myObj)

// 可选属性
interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100}
    if (config.color) {
        newSquare.color = config.color
    }

    if (config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}
  
let mySquare = createSquare({ color: "black" })


// 只读属性
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }
p1.x = 5

// ReadonlyArray
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!


// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

// 可索引的类型
interface StringArray {
    [index: number]: string
}
  
let myArray: StringArray
myArray = ["Bob", "Fred"]
  
let myStr: string = myArray[0]

// 类类型
interface ClockInterface {
    currentTime: Date
}

class Clock implements ClockInterface {
    currentTime: Date
    constructor(h: number, m: number) { }
}

// 继承接口
interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength: number
}

let square = <Square>{}
square.color = "blue"
square.sideLength = 10

// 混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { }
    counter.interval = 123
    counter.reset = function () { }
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

// 接口继承类
class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    //select() { }
}

// 错误：“Imag11”类型缺少“state”属性。
class Imag11 implements SelectableControl {
    select() { }
}