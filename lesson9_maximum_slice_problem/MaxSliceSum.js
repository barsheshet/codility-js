function solution(A) {
  let tempMax = -Infinity;
  let max = -Infinity;

  for (let item of A) {
    tempMax = Math.max(item, item + tempMax);
    max = Math.max(max, tempMax);
  }

  return max;
}

module.exports = solution;
