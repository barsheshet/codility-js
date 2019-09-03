function solution(A) {
  let arr = [];

  for (let item of A) {
    if (arr[item]) {
      return 0;
    }
    arr[item] = true;
  }

  for (let i = 1; i < arr.length; i++) {
    if (!arr[i]) {
      return 0;
    }
  }

  return 1;
}

module.exports = solution;
