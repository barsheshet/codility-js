function solution(S) {
  let stack = [];

  for (let char of S) {
    if (char === '(') {
      stack.push(true);
    } else {
      if (!stack.pop()) {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

module.exports = solution;
