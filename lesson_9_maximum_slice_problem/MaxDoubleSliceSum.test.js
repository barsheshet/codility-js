const MaxDoubleSliceSum = require('./MaxDoubleSliceSum');

describe('MaxDoubleSliceSum tests', () => {
  it('should return 17 for A=[3, 2, 6, -1, 4, 5, -1, 2]', () => {
    expect(MaxDoubleSliceSum([3, 2, 6, -1, 4, 5, -1, 2])).toBe(17);
  });
});
