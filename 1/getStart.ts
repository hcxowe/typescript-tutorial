// 类型
function greeter(person: string) {
    return "Hello, " + person
}

document.body.innerHTML = greeter("Jane User")


// 接口
interface Person {
    firstName: string
    lastName: string
}

function hello(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

document.body.innerHTML = hello({ firstName: "Jane", lastName: "User" })

// 类
class Student {
    fullName: string

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

function hello1(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

document.body.innerHTML = hello1(new Student("Jane", "M.", "User"))