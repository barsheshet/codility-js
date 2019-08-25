function solution(A) {
  let counters = [];

  for (let item of A) {
    if (counters[item]) {
      counters[item]++;
    } else {
      counters[item] = 1;
    }
  }

  for (let i in counters) {
    if (counters[i] % 2 !== 0) {
      return parseInt(i);
    }
  }
}

module.exports = solution;
