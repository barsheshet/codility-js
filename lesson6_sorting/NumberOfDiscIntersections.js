function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const special = A.map((radius, i) => {
    return {
      i,
      start: i - radius,
      end: i + radius
    };
  }).sort((a, b) => a.start - b.start);

  let counter = 0;
  const limit = 10000000;

  for (let i = 0; i < special.length - 1; i++) {
    let j = i + 1;
    while (j < special.length && special[i].end >= special[j].start) {
      counter++;
      if (counter > limit) {
        return -1;
      }
      j++;
    }
  }

  return counter;
}

module.exports = solution;
