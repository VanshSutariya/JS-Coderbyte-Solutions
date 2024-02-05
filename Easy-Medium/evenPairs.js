function EvenPairs(str) {
  var regEx = /[24680](.)*[24680]/;
  return regEx.test(str);
}

console.log(EvenPairs("7r4gg812"));
