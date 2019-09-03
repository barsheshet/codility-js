const MaxCounters = require('./MaxCounters');

describe('MaxCounters tests', () => {
  it('should return [3, 2, 2, 4, 2] for N=5 A=[3, 4, 4, 6, 1, 4, 4]', () => {
    expect(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
  });
});
