const GenomicRangeQuery = require('./GenomicRangeQuery');

describe('GenomicRangeQuery tests', () => {
  it('should return [2, 4, 1] for S=CAGCCTA P=[2, 5, 0] Q=[4, 5, 6] ', () => {
    expect(GenomicRangeQuery('CAGCCTA', [2, 5, 0], [4, 5, 6])).toEqual([
      2,
      4,
      1
    ]);
  });
});
