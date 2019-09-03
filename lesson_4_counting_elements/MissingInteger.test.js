const MissingInteger = require('./MissingInteger');

describe('MissingInteger tests', () => {
  it('should return 5 for A=[1, 3, 6, 4, 1, 2]', () => {
    expect(MissingInteger([1, 3, 6, 4, 1, 2])).toBe(5);
  });

  it('should return 4 for A=[1, 2, 3]', () => {
    expect(MissingInteger([1, 2, 3])).toBe(4);
  });

  it('should return 1 for A=[-1, -3]', () => {
    expect(MissingInteger([-1, -3])).toBe(1);
  });
});
