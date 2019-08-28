const MaxSliceSum = require('./MaxSliceSum');

describe('MaxSliceSum tests', () => {
  it('should return 5 for A=[3, 2, -6, 4, 0]', () => {
    expect(MaxSliceSum([3, 2, -6, 4, 0])).toBe(5);
  });
});
