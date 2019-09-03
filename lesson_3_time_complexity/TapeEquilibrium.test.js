const TapeEquilibrium = require('./TapeEquilibrium');

describe('TapeEquilibrium tests', () => {
  it('should return 1 for A=[3, 1, 2, 4, 3]', () => {
    expect(TapeEquilibrium([3, 1, 2, 4, 3])).toBe(1);
  });
});
