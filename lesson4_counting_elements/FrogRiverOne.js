function solution(X, A) {
  let expected = 0;

  for (let i = 1; i <= X; i++) {
    expected += i;
  }

  let leafs = {};
  let sum = 0;

  for (let i in A) {
    if (!leafs[A[i]]) {
      leafs[A[i]] = true;
      sum += A[i];
      if (sum === expected) {
        return parseInt(i);
      }
    }
  }

  return -1;
}

module.exports = solution;
