const CyclicRotation = require('./CyclicRotation');

describe('CyclicRotation tests', () => {
  it('should return [9, 7, 6, 3, 8] for A=[3, 8, 9, 7, 6] and K=3', () => {
    expect(CyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
  });

  it('should return [0, 0, 0] for A=[0, 0, 0] and K=1', () => {
    expect(CyclicRotation([0, 0, 0], 1)).toEqual([0, 0, 0]);
  });

  it('should return [1, 2, 3, 4] for A=[1, 2, 3, 4] and K=4', () => {
    expect(CyclicRotation([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });
});
