function solution(A) {
  let counter = 0;
  let candidate = null;
  for (let i in A) {
    if (counter === 0) {
      candidate = parseInt(i);
      counter++;
    } else {
      if (A[candidate] === A[i]) {
        counter++;
      } else {
        counter--;
      }
    }
  }

  if (counter === 0) {
    return -1;
  }

  let numOfCand = 0;

  for (let item of A) {
    if (item === A[candidate]) {
      numOfCand++;
    }
  }

  if (numOfCand > A.length / 2) {
    return candidate;
  }

  return -1;
}

module.exports = solution;
