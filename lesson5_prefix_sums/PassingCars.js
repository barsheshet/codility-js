function solution(A) {
  let line = 0;
  let sum = 0;
  const limit = 1000000000;

  for (let item of A) {
    if (item === 0) {
      line++;
    } else {
      sum += line;
    }

    if (sum > limit) {
      return -1;
    }
  }

  return sum;
}

module.exports = solution;
