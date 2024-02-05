/**
 * Using the JavaScript language, have the function lineOrdering(strArr) read
 * the strArr parameter being passed which will represent the relations among
 * people standing in a line. The structure of the input will be
 * ["A>B","B>C","A<D",etc..]. The letters stand for different people and the
 * greater than and less than signs stand for a person being in front of someone
 * or behind someone. A>B means A is in front of B and B<C means that B is
 * behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are
 * the following ways you can arrange the people in line: DSJB, SDJB and DJSB.
 * Your program will determine the number of ways people can be arranged in
 * line. So for this example your program should return the number 3. It also
 * may be the case that the relations produce an impossible line ordering,
 * resulting in zero as the answer.
 *
 * Only the symbols <, >, and the uppercase letters A...Z will be used. The
 * maximum number of relations strArr will contain is ten.
 * */

function lineordering(strarr) {
  const people = Array.from(new Set(strarr.join(",").match(/[A-Z]+/g)));
  console.log(people);

  const permutation = permutator(people);
  const validpermutation = [];

  permutation.forEach((element) => {
    const permutationvalid = relationspossible(element, strarr);
    if (permutationvalid) {
      validpermutation.push(element);
    }
  });

  return validpermutation.length;
}

function relationspossible(people, relations) {
  for (let i = 0; i < relations.length; i++) {
    let [personA, relationship, personB] = relations[i].split("");

    if (relationship === "<") {
      [personB, personA] = [personA, personB];
    }

    const indexa = people.indexOf(personA);
    const indexb = people.indexOf(personB);

    if (indexa <= indexb) {
      return false;
    }
  }
  return true;
}

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

console.log(lineordering(["J>B", "B<S", "D>J"]));
