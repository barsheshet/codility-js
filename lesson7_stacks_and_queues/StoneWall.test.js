const StoneWall = require('./StoneWall');

describe('StoneWall tests', () => {
  it('should return 7 for H=[8, 8, 5, 7, 9, 8, 7, 4, 8]', () => {
    expect(StoneWall([8, 8, 5, 7, 9, 8, 7, 4, 8])).toBe(7);
  });
});
