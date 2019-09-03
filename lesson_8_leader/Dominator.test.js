const Dominator = require('./Dominator');

describe('Dominator tests', () => {
  it('should return 0 for A=[3, 4, 3, 2, 3, -1, 3, 3, 3]', () => {
    expect([0, 2, 4, 6, 7]).toContain(Dominator([3, 4, 3, 2, 3, -1, 3, 3, 3]));
  });
});
