function LongestWord(sen) {
  sen = sen.trim();
  var arr = sen.split(" ");
  console.log(arr);
  const tr = arr.map((sp) => sp.replace(/[^a-zA-Z]/g, ""));
  console.log(tr);
  tr.sort((a, b) => a.length - b.length);
  console.log(tr.pop());
}
// let input = "I love dogs";
let input = "fun&!! time";
LongestWord(input);
