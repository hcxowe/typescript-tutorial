// 函数
function add(x: number, y: number): number {
    return x + y
}

// 可选参数
function buildName(firstName: string, lastName?: string): string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

// 默认参数
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

// 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: any): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}