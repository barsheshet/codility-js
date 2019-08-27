const Brackets = require('./Brackets');

describe('Brackets tests', () => {
  it('should return 1 for S={[()()]}', () => {
    expect(Brackets('{[()()]}')).toBe(1);
  });

  it('should return 0 for S=([)()]', () => {
    expect(Brackets('([)()]')).toBe(0);
  });
});
