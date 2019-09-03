const NumberOfDiscIntersections = require('./NumberOfDiscIntersections');

describe('NumberOfDiscIntersections tests', () => {
  it('should return 11 for A=[1, 5, 2, 1, 4, 0]', () => {
    expect(NumberOfDiscIntersections([1, 5, 2, 1, 4, 0])).toBe(11);
  });
});
