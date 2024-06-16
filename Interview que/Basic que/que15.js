// write a javascript function which accepts an argument and returns the type.Note: There are six possible values that typeof returns: object, boolean, function , number, string and undefined.

function typeTeller(elem) {
  return typeof elem;
}

console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("sandeep"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function(){}));
