//remove all the spaces and tabs from a string

// iterative approach
// function removeSpaceTabs(string) {
//     let newStr = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] !== " " && string[i] !== "\t") {
//             newStr += string[i];
//         }
//     }
//     return newStr;
// }

// recursive approach
function removeSpaceTabs(string) {
    if (string === "") {
        return "";
    }
    if (string[0] === " " || string[0] === "\t") {
        return removeSpaceTabs(string.slice(1));
    }
    return string[0] + removeSpaceTabs(string.slice(1));
}


console.log(removeSpaceTabs("hello world"));