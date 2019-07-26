// 泛型
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString"); // 明确指定类型
let output1 = identity("myString"); // 自动推导

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  
    return arg;
}