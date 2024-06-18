let arr = [3, 4, 1, 8, 1, 7];
let findMe = 1;
let currIndex = 0;
//Output = 2;
//not found = -1

// function firstOcc(arr, findMe, currIndex) {
//   while (currIndex < arr.length) {
//     if (arr[currIndex] == findMe) {
//       return currIndex;
//     }
//     currIndex++;
//   }
//   return -1;
// }

function firstOcc(arr, findMe, currIndex) {
  if (arr.length == currIndex) {
    return -1;
  }

  if (arr[currIndex] == findMe) {
    return currIndex;
  }

  return firstOcc(arr, findMe, ++currIndex);
}

console.log(firstOcc(arr, findMe, currIndex));
