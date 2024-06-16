let Obj = {};
let username = Obj?.name?.first ?? "Default";//if the first value is null or undefined then it will select the second value.
console.log(username);


