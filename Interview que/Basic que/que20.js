//write a javascript program to compute the union of two arrays

function union(arr1, arr2) {
   return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3, 4], [2, 3, 4, 6]));
