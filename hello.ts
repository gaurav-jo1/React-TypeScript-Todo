// ➡ 1.Type Annotations on Variables

const myName: string = "Alice";

// ➡ 2.FUnctions

function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()}!!`);
}


// ➡ Return Type Annotations

function addition(first: number, second: number): number {
  return first + second;
}

let result = addition(5,3)

// ➡ Anonymous Functions
const names = ["Alice", "Bob", "Eve"];

names.forEach((name) => {
  console.log(name.toUpperCase())
})

// ➡ Object Types
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// ➡ Optional Properties

function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// ➡ Defining a Union Type

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");