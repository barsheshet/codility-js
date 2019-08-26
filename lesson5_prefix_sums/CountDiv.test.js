const CountDiv = require('./CountDiv');

describe('CountDiv tests', () => {
  it('should return 3 for A=6 B=11 K=2', () => {
    expect(CountDiv(6, 11, 2)).toBe(3);
  });
});
