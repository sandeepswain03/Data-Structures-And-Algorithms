//loop an array of objects and remove all objects which don't have gender's value male

let data = [
  {
    name: "sandeep",
    gender: "male",
  },
  {
    name: "harsh",
    gender: "male",
  },
  {
    name: "tirth",
    gender: "female",
  },
];

let new_data = data.filter((obj) => {
  return obj.gender === "male";
});

console.log(new_data);

