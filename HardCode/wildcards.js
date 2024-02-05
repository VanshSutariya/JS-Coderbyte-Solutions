function wildcards(str) {
  let arr = str.split(" ");
  let pattern = arr[0];
  let word = arr[1];
  let regex = "";
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "+") {
      regex += "[a-z]";
    }
    if (pattern[i] === "$") {
      regex += "[0-9]";
    }
    if (pattern[i] === "*") {
      if (pattern[i + 1] === "{") {
        regex += ".{" + pattern[i + 2] + "}";
      } else {
        regex += ".{3}";
      }
    }
  }
  return new RegExp("^" + regex + "$").test(word);
}

console.log(wildcards("+++++* abcdehhhhhh"));
console.log(wildcards("$+*{2} 9mmmrrrkbb"));
console.log(wildcards("++*{5} jtggggg"));
