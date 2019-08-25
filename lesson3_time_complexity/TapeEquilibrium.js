function solution(A) {
  let leftSums = [];
  let sum = 0;
  for (let i = 0; i < A.length - 1; i++) {
    sum += A[i];
    leftSums[i] = sum;
  }

  let min = Infinity;
  sum = 0;
  for (let i = A.length - 1; i > 0; i--) {
    const j = i - 1;
    sum += A[i];
    const absDiff = Math.abs(leftSums[j] - sum);
    min = Math.min(min, absDiff);
  }

  return min;
}

module.exports = solution;
