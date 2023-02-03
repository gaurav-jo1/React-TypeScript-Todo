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
var x = Math.random() < 0.5 ? 10 : "hello world!";
x = 5;
console.log(x);
