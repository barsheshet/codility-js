function solution(A) {
  let counter = 0;
  let candidate = null;

  for (let i in A) {
    if (counter === 0) {
      candidate = A[i];
      counter++;
    } else {
      if (candidate === A[i]) {
        counter++;
      } else {
        counter--;
      }
    }
  }

  let numOfCand = 0;

  for (let item of A) {
    if (item === candidate) {
      numOfCand++;
    }
  }

  let result = 0;
  let leaders = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      leaders++;
      numOfCand--;
    }

    if (numOfCand > (A.length - i - 1) / 2 && leaders > (i + 1) / 2) {
      result++;
    }
  }

  return result;
}

module.exports = solution;
