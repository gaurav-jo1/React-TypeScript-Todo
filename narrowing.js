// function padLeft(padding: number | string, input: string): string {
//   throw new Error("Not implemented yet!");
// }
// 1. Truthiness narrowing ------------------------
// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `There are ${numUsersOnline} online now!`;
//   }
//   return "Nobody's here. :(";
// }
// let message = getUsersOnlineMessage(0)
// console.log(message)
// 2. Equality narrowing ------------------------------
function example(x, y) {
    if (x == y) {
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else {
        animal;
    }
}
// 4. Instancceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
var date = new Date();
// logValue(date)
// 5. Assignments
// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//     return " ".repeat(padding) + input;
//   }
//   return padding + input;
// }
// padLeft(12,12)
// 6. Control flow analysis
function example2() {
    var x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        console.log("Hello wolrd");
    }
    else {
        console.log(100);
    }
    return x;
}
example2();
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
// OR
function getArea2(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
    }
}
// 8. The Never type
//  TypeScript will use a never type to represent a state which shouldn’t exist.
// 8.1 Exhaustiveness checking
function getArea3(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
var circle = {
    kind: "circle",
    radius: 2
};
console.log(getArea3(circle));
