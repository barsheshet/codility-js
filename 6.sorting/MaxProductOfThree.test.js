const MaxProductOfThree = require('./MaxProductOfThree');

describe('MaxProductOfThree tests', () => {
  it('should return 60 for A=[-3, 1, 2, -2, 5, 6]', () => {
    expect(MaxProductOfThree([-3, 1, 2, -2, 5, 6])).toBe(60);
  });
});
