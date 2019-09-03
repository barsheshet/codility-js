function solution(N) {
  if (N === 1) {
    return 4;
  }

  let i = 2;
  let min = 2 * (1 + N);

  while (i * i < N) {
    if (N % i === 0) {
      let factor1 = N / i;
      let factor2 = i;
      min = Math.min(min, 2 * (factor1 + factor2));
    }
    i++;
  }

  if (i * i === N) {
    min = Math.min(min, 2 * (i + i));
  }

  return min;
}

module.exports = solution;
