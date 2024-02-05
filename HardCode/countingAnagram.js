function countinganagram(str) {
  let arr = new Set(str.split(" "));
  let signatures = {};
  arr.forEach((word) => {
    let key = word.split("").sort().join("");
    if (signatures[key] === undefined) {
      signatures[key] = 1;
    } else {
      signatures[key]++;
    }
  });
  let anagram = Object.values(signatures);
  // console.log(signatures, anagram)
  let counter = 0;
  for (let i = 0; i < anagram.length; i++) {
    if (anagram[i] > 1) {
      counter++;
    }
  }
  return counter;
}

console.log(countinganagram("cars are very srac cool so are arcs and my os"));
console.log(countinganagram("aa aa odg dog gdo"));
console.log(countinganagram("a c b c run urn urn"));
