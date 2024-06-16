// given a string reverse each word in the sentence

let str = "saare jha se accha hindustan hamara";

let reverse_str = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});

console.log(reverse_str.join(" "));
