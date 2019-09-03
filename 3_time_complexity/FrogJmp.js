function solution(X, Y, D) {
  const distance = Y - X;

  return Math.ceil(distance / D);
}

module.exports = solution;
