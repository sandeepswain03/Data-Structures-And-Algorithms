//write a javascript function that reverse a number

// function reverse(Num) {
//   return Number(Num.toString().split("").reverse().join(""));
// }

// let Num = 123456789;

// console.log(reverse(Num));

function reverse(num) {
  let rev = 0;
  while (num > 0) {
    let temp = num % 10;
    rev = rev * 10 + temp;
    num = Math.floor(num / 10);
  }
  return rev;
}

let num = 1234;

console.log(reverse(num));
