const PermMissingElem = require('./PermMissingElem');

describe('PermMissingElem tests', () => {
  it('should return 4 for A=[2, 3, 1, 5]', () => {
    expect(PermMissingElem([2, 3, 1, 5])).toBe(4);
  });
});
