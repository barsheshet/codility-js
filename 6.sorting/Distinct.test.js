const Distinct = require('./Distinct');

describe('Distinct tests', () => {
  it('should return 3 for A=[2, 1, 1, 2, 3, 1]', () => {
    expect(Distinct([2, 1, 1, 2, 3, 1])).toBe(3);
  });
});
