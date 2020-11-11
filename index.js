let count = 0;

function Increment() {
    return {
      [Symbol.toPrimitive](hint) {
        if (hint == 'number') {
          return count;
        }
        if (hint == 'string') {
          count++;
          return count.toString();
        }
        return count;
      }
    };
}

let increment = new Increment();
let increment2 = Increment();

console.log(increment == +increment2); // true
console.log(`val: ${increment}`); // 1
console.log(`val: ${increment}`) // 2
console.log(`val: ${increment}`) // 3
