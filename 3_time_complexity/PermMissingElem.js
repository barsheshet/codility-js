function solution(A) {
  let map = [];

  for (let item of A) {
    map[item] = true;
  }

  let i = 1;
  while (i < map.length) {
    if (!map[i]) {
      return i;
    }
    i++;
  }

  return i;
}

module.exports = solution;
