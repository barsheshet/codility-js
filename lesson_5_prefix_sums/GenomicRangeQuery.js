function solution(S, P, Q) {
  let result = [];

  for (let i in P) {
    let slice = S.slice(P[i], Q[i] + 1);
    if (slice.includes('A')) {
      result[i] = 1;
    } else if (slice.includes('C')) {
      result[i] = 2;
    } else if (slice.includes('G')) {
      result[i] = 3;
    } else {
      result[i] = 4;
    }
  }

  return result;
}

module.exports = solution;
