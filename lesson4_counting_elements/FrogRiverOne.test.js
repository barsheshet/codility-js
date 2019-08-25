const FrogRiverOne = require('./FrogRiverOne');

describe('FrogRiverOne tests', () => {
  it('should return 6 for X=5 A=[1, 3, 1, 4, 2, 3, 5, 4]', () => {
    expect(FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
  });
});
