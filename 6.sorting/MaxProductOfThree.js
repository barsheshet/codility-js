function solution(A) {
  const sorted = A.sort((a, b) => b - a);

  const prod1 = sorted[0] * sorted[1] * sorted[2];
  const prod2 = sorted[A.length - 1] * sorted[A.length - 2] * sorted[0];

  return Math.max(prod1, prod2);
}

module.exports = solution;
