function primeMover(num) {
  if (num == 1) {
    return 2;
  }
  if (num == 2) {
    return 3;
  }
  let counter = 1;
  for (let i = 3; i < 100000; i++) {
    let prime = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime++;
      }
    }
    if (prime == 0) {
      counter++;
    }
    if (counter == num) {
      return i;
    }
  }
}
console.log(primeMover(16));
