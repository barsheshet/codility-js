function solution(N) {
  const binary = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;

  for (let bit of binary) {
    if (bit === '1') {
      maxGap = Math.max(maxGap, currentGap);
      currentGap = 0;
    } else {
      currentGap++;
    }
  }

  return maxGap;
}

module.exports = solution;
