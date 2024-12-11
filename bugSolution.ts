function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Cannot add non-numbers";
  }
}

let result1 = addSafe(5, 10); // Result: 15
let result2 = addSafe("hello", 5); // Result: "Cannot add non-numbers"