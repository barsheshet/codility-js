const PassingCars = require('./PassingCars');

describe('PassingCars tests', () => {
  it('should return 5 for A=[0, 1, 0, 1, 1]', () => {
    expect(PassingCars([0, 1, 0, 1, 1])).toBe(5);
  });
});
