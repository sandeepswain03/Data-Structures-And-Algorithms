// iterative approach
// function reverseString(string) {
//   let newStr = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newStr += string[i];
//   }
//   return newStr;
// }

// recursive approach
function reverseString(string) {
  // console.log(`current string ${string}`);
  if (string === "") {
    return string;
  }

  return (
    string[string.length - 1] +
    reverseString(string.substring(0, string.length - 1))
  );

  // let reversPart = reverseString(string.substring(0, string.length - 1));
  // let result = string[string.length - 1] + reversPart;
  // console.log(
  //   `Reversing: Last char: ${
  //     string[string.length - 1]
  //   } added in front of ${reversPart} to form a result: ${result}`
  // );
  // return result;
}

console.log(reverseString("hello"));
