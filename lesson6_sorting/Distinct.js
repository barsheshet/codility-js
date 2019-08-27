function solution(A) {
  const sorted = A.sort((a, b) => a - b);
  let counter = 0;

  if (A.length !== 0) {
    counter = 1;
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      counter++;
    }
  }

  return counter;
}

module.exports = solution;
