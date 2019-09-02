function solution(A) {
  let startArr = new Array(A.length).fill(0);
  let endArr = new Array(A.length).fill(0);

  for (let i = 1, j = A.length - 2; j >= 2; i++, j--) {
    startArr[i] = Math.max(0, startArr[i - 1] + A[i]);
    endArr[j] = Math.max(0, endArr[j + 1] + A[j]);
  }

  let max = startArr[0] + endArr[2];

  for (let i = 2; i < A.length - 1; i++) {
    max = Math.max(max, startArr[i - 1] + endArr[i + 1]);
  }

  return max;
}

module.exports = solution;
