const MinAvgTwoSlice = require('./MinAvgTwoSlice');

describe('MinAvgTwoSlice tests', () => {
  it('should return 1 for A=[4, 2, 2, 5, 1, 5, 8]', () => {
    expect(MinAvgTwoSlice([4, 2, 2, 5, 1, 5, 8])).toBe(1);
  });
});
