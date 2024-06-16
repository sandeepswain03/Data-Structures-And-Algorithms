//write a javascript program to find the most frequent item of an array

function freq(arr) {
  let freq = {};
  arr.forEach(function (elem) {
    if (freq.hasOwnProperty(elem)) freq[elem]++;
    else freq[elem] = 1;
  });
  let ans = Object.keys(freq).reduce(function (acc, next) {
    return freq[acc] > freq[next] ? acc : next;
  });
  console.log(ans);
}

freq([1, 2, 3, 4, 5, 2, 3, 4, 1, 5, 6, 7, 8, 9, 3, 2, 1, 2, 2, 2, 2, 2]);
