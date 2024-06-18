// iterative approach
// function countVowels(string) {
//   let lowerStr = string.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < lowerStr.length; i++) {
//     if ("aeiou".includes(lowerStr[i])) {
//       count++;
//     }
//   }
//   return count;
// }

//recursive approach
function countVowels(string) {
  if (string === "") return 0;
  return (
    ("aeiouAEIOU".includes(string[0]) ? 1 : 0) + countVowels(string.slice(1))
  );
}

console.log(countVowels("SANDEEP"));
