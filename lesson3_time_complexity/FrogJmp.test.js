const FrogJmp = require('./FrogJmp');

describe('FrogJmp tests', () => {
  it('should return 3 for X=10 Y=85 D=30', () => {
    expect(FrogJmp(10, 85, 30)).toBe(3);
  });
});
