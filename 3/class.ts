// 定义类
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return 'hello' + this.greeting
    }
}

let greeter = new Greeter('hcxowe')


class Animal {
    public name: string;
    private age: number;
    protected kind: string;
    readonly color: string = 'red';
    readonly length: number;

    protected constructor(name: string, age: number, kind: string) {
        this.name = name
        this.length = 10
    }

    public move(distance: number=0) {
        console.log(this.name, ' moved ', distance, 'm')
    }
}

// 继承
class Dog extends Animal {
    constructor(name: string) {
        super(name, 1, 'jinmao')
    }

    public bark() {
        console.log('wang, wang, wang!', this.name, this.age, this.kind)
    }
}

const all = new Animal('wat', 1, 'erha')
const dog = new Dog('wangcai')
dog.bark()
dog.move(10)


// 存取器
class Employee {
    private _fullName: string;

    get fullName():string {
        return this._fullName
    }

    set fullName(newName: string) {
        this._fullName = newName
    }
}

// 静态属性
class Grid {
    static origin = {x: 0, y:0}

    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor (public scale: number) {

    }
}

console.log(Grid.origin)


// 抽象类
abstract class Animal1 {
    abstract makeSound(): void;

    move():void {
        console.log('moved')
    }
}

class Cat extends Animal1 {
    makeSound() {
        console.log('makeSound')
    }
}