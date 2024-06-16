//loop an array and add all members of it

function Adding(arr) {
  let added_arr = 0;
  arr.forEach((i) => {
    added_arr += i;
  });
  return added_arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(Adding(arr));
