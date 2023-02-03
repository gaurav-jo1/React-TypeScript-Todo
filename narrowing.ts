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
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}

const date = new Date()

// logValue(date)

// 5. Assignments

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

padLeft(12,12)