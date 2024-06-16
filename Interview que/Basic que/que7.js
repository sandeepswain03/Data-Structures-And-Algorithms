//write a javascript function that checks whther a passed string is an palindrome or not

function checkPalindrome(str) {
  let newStr = str.split("").reverse().join("");
  return str === newStr;
}

let str = "nitin";

console.log(checkPalindrome(str));
