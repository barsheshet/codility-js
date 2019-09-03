const BinaryGap = require('./BinaryGap');

describe('BinaryGap tests', () => {
  it('should return 5 for N=1041', () => {
    expect(BinaryGap(1041)).toBe(5);
  });

  it('should return 0 for N=15', () => {
    expect(BinaryGap(15)).toBe(0);
  });

  it('should return 0 for N=32', () => {
    expect(BinaryGap(32)).toBe(0);
  });
});
