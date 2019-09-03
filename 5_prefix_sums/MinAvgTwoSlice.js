function solution(A) {
  let minIndex = -1;
  let min = Infinity;

  for (let i = 0; i < A.length - 1; i++) {
    const avgOf2 = (A[i] + A[i + 1]) / 2;
    let avgOf3 = Infinity;

    if (A[i + 2] !== undefined) {
      avgOf3 = (A[i] + A[i + 1] + A[i + 2]) / 3;
    }

    let minAvg = Math.min(avgOf2, avgOf3);

    if (minAvg < min) {
      minIndex = i;
      min = minAvg;
    }
  }

  return minIndex;
}

module.exports = solution;
