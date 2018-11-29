class Student {
    fullName: string

    constructor(public firstName, middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return 'hello: ' + person.firstName + person.lastName
}

let user = new Student('h', 'c', 'x')

document.body.innerHTML = greeter(user)
