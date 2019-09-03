const Fish = require('./Fish');

describe('Fish tests', () => {
  it('should return 2 for A=[4, 3, 2, 1, 5] B=[0, 1, 0, 0, 0]', () => {
    expect(Fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toBe(2);
  });
});
