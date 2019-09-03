function solution(N) {
  if (N === 1) {
    return 1;
  }

  let i = 2;
  let counter = 2;

  while (i * i < N) {
    if (N % i === 0) {
      counter += 2;
    }
    i++;
  }

  if (i * i === N) {
    counter++;
  }

  return counter;
}

module.exports = solution;
