function solution(S) {
  let stack = [];
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];

  for (let i in S) {
    if (open.includes(S[i])) {
      stack.push(S[i]);
    } else {
      if (close.includes(S[i])) {
        if (close.indexOf(S[i]) !== open.indexOf(stack.pop())) {
          return 0;
        }
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

module.exports = solution;
