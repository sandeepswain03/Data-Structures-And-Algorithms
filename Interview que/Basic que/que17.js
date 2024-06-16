//write a javascript function to get the first element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function retrieve(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[arr.length - 1 - i]);
    }
  } else {
    console.log("not valid!");
  }
}

retrieve([1, 2, 3, 4, 5, 6], 3);
