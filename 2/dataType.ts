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