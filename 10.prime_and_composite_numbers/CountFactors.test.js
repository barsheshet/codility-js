const CountFactors = require('./CountFactors');

describe('CountFactors tests', () => {
  it('should return 8 for N=24', () => {
    expect(CountFactors(24)).toBe(8);
  });
});
