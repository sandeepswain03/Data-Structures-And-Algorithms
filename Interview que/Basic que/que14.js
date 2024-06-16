//write a javascript function to clone an array

// function clone(arr) {
//   return [...arr];
// }

// let arr = clone([1, 2, 3, 4, 5]);

// console.log(arr);

function clone(arr) {
  return arr.map(function (elem) {
    return elem + elem;
  });
}

let newarr = clone([1, 2, 3, 4, 5]);

console.log(newarr);