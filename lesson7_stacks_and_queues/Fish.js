function solution(A, B) {
  let upstream = [];
  let eaten = 0;

  for (let i in A) {
    if (B[i] === 1) {
      upstream.push(A[i]);
    } else {
      while (upstream.length) {
        eaten++;
        const fish = upstream.pop();
        if (fish > A[i]) {
          upstream.push(fish);
          break;
        }
      }
    }
  }

  return A.length - eaten;
}

module.exports = solution;
