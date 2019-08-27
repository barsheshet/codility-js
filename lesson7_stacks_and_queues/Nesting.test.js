const Nesting = require('./Nesting');

describe('Nesting tests', () => {
  it('should return 1 for S=(()(())())', () => {
    expect(Nesting('(()(())())')).toBe(1);
  });

  it('should return 0 for S=())', () => {
    expect(Nesting('())')).toBe(0);
  });
});
