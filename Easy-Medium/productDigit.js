function productdigits(num) {
  let value = num.toString().length + 1;
  let pivot = Math.sqrt(num);
  for (let i = 0; i <= pivot; i++) {
    if (num % i == 0) {
      let maxfactor = num / i;
      let totalLength = i.toString().length + maxfactor.toString().length;
      if (totalLength < value) {
        value = totalLength;
      }
    }
  }
  return value;
}

console.log(productdigits(181));
