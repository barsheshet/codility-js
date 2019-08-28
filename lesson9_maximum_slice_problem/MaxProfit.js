function solution(A) {
  let minArr = [];
  let min = Infinity;
  let maxArr = [];
  let max = -Infinity;
  let j = A.length - 1;
  let i = 0;

  while (i < A.length) {
    min = Math.min(A[i], min);
    minArr[i] = min;
    max = Math.max(A[j], max);
    maxArr[j] = max;
    i++;
    j--;
  }

  let maxProfit = 0;

  for (let i in A) {
    maxProfit = Math.max(maxArr[i] - minArr[i], maxProfit);
  }

  return maxProfit;
}

module.exports = solution;
