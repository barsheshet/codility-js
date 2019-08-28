const MaxProfit = require('./MaxProfit');

describe('MaxProfit tests', () => {
  it('should return 356 for A=[23171, 21011, 21123, 21366, 21013, 21367]', () => {
    expect(MaxProfit([23171, 21011, 21123, 21366, 21013, 21367])).toBe(356);
  });
});
