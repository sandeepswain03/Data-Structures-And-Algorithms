//write a javascript function that returns a passed string with letters in alphabetical order

function alphabetical_order(str) {
  return str.split("").sort().join("");
}

let str = "sandeep";

console.log(alphabetical_order(str));
