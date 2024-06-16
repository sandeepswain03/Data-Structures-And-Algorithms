//write a javascript program to shuffle an array

function shufflekaro(arr) {
  let totalShuffleArea = arr.length;
  while (totalShuffleArea > 0) {
    totalShuffleArea--;
    let indexToBeExchanged = Math.floor(Math.random() * totalahuffle);
    let temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexToBeExchanged];
    arr[indexToBeExchanged] = temp;
  }

  return arr;
}

console.log(shufflekaro([1, 2, 3, 4, 5, 6, 7, 8, 9]));
