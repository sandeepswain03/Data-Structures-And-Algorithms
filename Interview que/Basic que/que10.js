// write a javascript function to get the numeber of occurrences of each letter in specified string

function occurrences(str) {
  let occurrences = {};
  str.split("").forEach((elem) => {
    if (occurrences.hasOwnProperty(elem) === false) {
      occurrences[elem] = 1;
    } else {
      occurrences[elem]++;
    }
  });
  return occurrences;
}

let str = "sandeep";

console.log(occurrences(str));
