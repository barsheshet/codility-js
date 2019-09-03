const MinPerimeterRectangle = require('./MinPerimeterRectangle');

describe('MinPerimeterRectangle tests', () => {
  it('should return 22 for N=30', () => {
    expect(MinPerimeterRectangle(30)).toBe(22);
  });
});
