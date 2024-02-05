/*
Examples
Input: ["[3, 4]", "[1, 2, 7, 7]"]
Output: 1
Input: ["[13, 4]", "[1, 2, 3, 6, 14]"]
Output: 3,6
*/

function scaleBalancing(strArr) {
  const scale = JSON.parse(strArr[0]);
  const availableWeights = JSON.parse(strArr[1]);
  const leftScale = scale[0];
  const rightScale = scale[1];

  // Check if balancing with a single weight is possible
  for (let weight of availableWeights) {
    if (
      leftScale + weight === rightScale ||
      rightScale + weight === leftScale
    ) {
      return weight.toString();
    }
  }

  // Check if balancing with two weights is possible
  for (let i = 0; i < availableWeights.length; i++) {
    for (let j = i + 1; j < availableWeights.length; j++) {
      const weight1 = availableWeights[i];
      const weight2 = availableWeights[j];

      if (
        leftScale + weight1 === rightScale + weight2 ||
        leftScale + weight2 === rightScale + weight1 ||
        leftScale + weight1 + weight2 === rightScale ||
        rightScale + weight1 + weight2 === leftScale
      ) {
        return [weight1, weight2].sort((a, b) => a - b).join(",");
      }
    }
  }

  return "not possible";
}

// Examples
console.log(scaleBalancing(["[5, 9]", "[1, 2, 6, 7]"])); // Output: "2,6"
console.log(scaleBalancing(["[3, 4]", "[1, 2, 7, 7]"])); // Output: "1"
console.log(scaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"])); // Output: "3,6"
console.log(scaleBalancing(["[5, 9]", "[1, 2, 9, 7]"])); // Output: "not possible"
