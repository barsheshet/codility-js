const EquiLeader = require('./EquiLeader');

describe('EquiLeader tests', () => {
  it('should return 2 for A=[4, 3, 4, 4, 4, 2]', () => {
    expect(EquiLeader([4, 3, 4, 4, 4, 2])).toBe(2);
  });
});
