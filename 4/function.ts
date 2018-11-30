function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

buildName('x')

function buildName1(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}

buildName1('x')

function buildName2(firstName: string, lastName = 'sdf') {
    return firstName + " " + lastName;
}

buildName2('x')

function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");