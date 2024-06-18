//iterative approach
// function fibonacci(value) {
//   let n0 = 0;
//   let n1 = 1;
//   for (let i = 0; i < value; i++) {
//     let temp = n0 + n1;
//     n0 = n1;
//     n1 = temp;
//   }
//   return n0;
// }

//recursive approach
function fibonacci(n) {
  if (n <= 1) {
    return n;// jo value hoga vo retrun hoga 0 ya 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));
