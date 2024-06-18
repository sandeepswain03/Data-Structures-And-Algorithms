function balancePar(array, startIndex = 0, counter = 0) {
  if (startIndex == array.length) {
    return counter == 0;
  }

  if (counter < 0) {
    return false;
  }

  if (array[startIndex] == "(") {
    return balancePar(array, startIndex + 1, counter + 1);
  } else if (array[startIndex] == ")") {
    return balancePar(array, startIndex + 1, counter - 1);
  } else {
    return false;
  }
}

let array = ["(", "(", ")", ")", "(", ")"];

console.log(balancePar(array));
