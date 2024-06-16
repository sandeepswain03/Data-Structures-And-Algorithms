// In an array of numbers and strings, only add those members which are not strings
let arr = [1, "45", 3, 2, 4, "sandeep"];
let added_arr = 0;

arr.forEach((elem) => {
  if (typeof elem === "number") added_arr += elem;
});

console.log(added_arr);
