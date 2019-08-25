const OddOccurrencesInArray = require('./OddOccurrencesInArray');

describe('OddOccurrencesInArray tests', () => {
  it('should return 7 for A=[9, 3, 9, 3, 9, 7, 9]', () => {
    expect(OddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).toBe(7);
  });
});
