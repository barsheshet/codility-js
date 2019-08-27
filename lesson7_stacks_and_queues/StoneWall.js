function solution(H) {
  let counter = 0;
  let height = 0;
  let stack = [];
  let i = 0;

  while (i < H.length) {
    if (H[i] > height) {
      const block = H[i] - height;
      stack.push(block);
      height += block;
      counter++;
      i++;
    } else {
      if (H[i] < height) {
        height -= stack.pop();
      } else {
        i++;
      }
    }
  }

  return counter;
}

module.exports = solution;
