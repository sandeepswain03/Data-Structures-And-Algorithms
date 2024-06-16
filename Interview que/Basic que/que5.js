//duplicate ([1,2,3,4,5])

function duplicate(arr) {
  return arr.concat(arr);
}

let arr = [1, 2, 3, 4, 5];

console.log(duplicate(arr));
