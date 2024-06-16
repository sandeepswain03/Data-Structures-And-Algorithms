//write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function upperCase(str) {
  let newStr = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return newStr;
}

let str = "hello world";

let newStr = upperCase(str);

console.log(newStr.join(" "));
