function solution(A, K) {
  if (!A.length) {
    return [];
  }

  if (A.length === K) {
    return A;
  }

  let rotated = [...A];

  for (let i = 0; i < K; i++) {
    const last = rotated.pop();
    rotated.unshift(last);
  }

  return rotated;
}

module.exports = solution;
