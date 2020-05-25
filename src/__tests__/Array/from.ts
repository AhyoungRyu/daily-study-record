describe('from()', () => {
  // The from() method creates a new, shallow-copied
  // Array instance from an array-like or iterable object.
  // Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
  // Returns a new array instance
  it('returns straightforward results from simple arrays', () => {
    expect(Array.from('foo')).toEqual(['f', 'o', 'o']);
  });
  it('takes Set from an argument', () => {
    const testSet: Set<string> = new Set(['foo', 'yoyo']);
    expect(Array.from(testSet)).toEqual(['foo', 'yoyo']);
  });
  it('takes Map from an argument', () => {
    const testMap1: Map<number, number> = new Map([
      [1, 2],
      [2, 4],
      [4, 8],
    ]);
    expect(Array.from(testMap1)).toEqual([
      [1, 2],
      [2, 4],
      [4, 8],
    ]);

    const testMap2: Map<number, string> = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(Array.from(testMap2.values())).toEqual(['a', 'b']);
    expect(Array.from(testMap2.keys())).toEqual([1, 2]);
  });
  it('takes a simple mapping function', () => {
    expect(Array.from([1, 2, 3], (x) => x + x)).toEqual([2, 4, 6]);
  });
});
