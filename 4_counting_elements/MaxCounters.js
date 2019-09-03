function solution(N, A) {
  let counters = new Array(N).fill(0);
  let resetValue = 0;
  let max = 0;

  for (let item of A) {
    if (item <= N) {
      counters[item - 1] = Math.max(counters[item - 1], resetValue) + 1;
      max = Math.max(counters[item - 1], max);
    } else {
      resetValue = max;
    }
  }

  return counters.map(item => Math.max(item, resetValue));
}

module.exports = solution;
