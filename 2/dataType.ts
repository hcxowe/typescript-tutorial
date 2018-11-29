// 基本类型
let bol: boolean = true
let num: number = 1.234
let na: string = 'hcxowe'

let nums: number[] = [1, 2, 3]
let chrs: string[] = ['1', '2', '3']
let chrs2: Array<string> = ['xx', 'yy', 'zz']

let x: [string, number] = ['1', 2]

enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Red // color = 0
let colorName: string = Color[1] // colorName = 'Green'

let any: any = 1
any = 'hcxowe'
any = true
let anys: any[] = [1, 'x', false]

function getSomething(): void {
    console.log('nothing')
}

let undef: undefined = undefined
let nul: null = null

num = null
num = undefined

let strlen: number = (any as string).length

// 变量声明
var a = 1
let b = 2
const c = 3

let [f, g] = [1, 2]
let {xx, yy} = {xx: 'x', yy: 'y'}
let o = {...{xx: 'x', yy: 'y'}, zz: 'z'}

// 接口
interface LabelledValue {
    readonly input?: number; // 只读
    label: string;
    color?: string;
    list?: ReadonlyArray<number>; // 只读数组
    [propName: string]: any; // 其他任性的属性
}

function printLabel(labelledObj:LabelledValue) {
    console.log(labelledObj.label)
}

printLabel({label: 'xyz'})

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string):boolean {
    let result = source.search(subString);
    return result > -1;
}