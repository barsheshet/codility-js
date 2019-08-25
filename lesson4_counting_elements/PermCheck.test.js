const PermCheck = require('./PermCheck');

describe('PermCheck tests', () => {
  it('should return 1 for A=[4, 1, 3, 2]', () => {
    expect(PermCheck([4, 1, 3, 2])).toBe(1);
  });

  it('should return 0 for A=[4, 1, 3]', () => {
    expect(PermCheck([4, 1, 3])).toBe(0);
  });
});
