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

function example(x: string | number, y: string | boolean) {
  if (x == y) {
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

//

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);

    container.value *= factor;
  }
}

// 3. The in oprator narrowing ----------------------

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    animal;
  }
}

// 4. Instancceof narrowing

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

const date = new Date();

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
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);

  if (Math.random() < 0.5) {
    console.log("Hello wolrd");
  } else {
    console.log(100);
  }

  return x;
}

example2();

// 7. Using type predicates

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

// OR

function getArea2(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;
  }
}

// 8. The Never type
//  TypeScript will use a never type to represent a state which shouldn’t exist.

// 8.1 Exhaustiveness checking

function getArea3(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

const circle:Circle = {
  kind: "circle",
  radius: 2
}

console.log(getArea3(circle))