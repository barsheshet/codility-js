const Triangle = require('./Triangle');

describe('Triangle tests', () => {
  it('should return 1 for A=[10, 2, 5, 1, 8, 20]', () => {
    expect(Triangle([10, 2, 5, 1, 8, 20])).toBe(1);
  });

  it('should return 0 for A=[10, 50, 5, 1]', () => {
    expect(Triangle([10, 50, 5, 1])).toBe(0);
  });
});
