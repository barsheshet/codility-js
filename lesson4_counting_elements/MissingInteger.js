function solution(A) {
  let counters = new Array(1000000).fill(true);

  for (let i in A) {
    if (A[i] > 0) {
      counters[A[i]] = false;
    }
  }

  let j = 1;

  while (j < counters.length) {
    if (counters[j]) {
      return j;
    }
    j++;
  }

  return j;
}

module.exports = solution;
