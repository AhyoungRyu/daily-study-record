// Note that only NodeJS version 11 and above support this method
describe('flat()', () => {
  // The flat() method creates a new array with all sub-array elements
  // concatenated into it recursively up to the specified depth.
  // Note that flat() is an experimental method.
  // So it's not supported in IE & Edge at the moment.
  // Should be aware of using it for now.
  // Syntax: const newArray = arr.flat(depth);
  // 'depth' is optional and its default value is 1.
  it("returns one level flatten array if 'depth' is not specified", () => {
    expect([1, 2, [3, 4]].flat()).toEqual([1, 2, 3, 4]);
    expect([1, 2, [3, 4, [5, 6]]].flat()).toEqual([1, 2, 3, 4, [5, 6]]);
  });
  it("returns an flattened array as specified in 'depth' param value", () => {
    expect([1, 2, [3, 4]].flat(1)).toEqual([1, 2, 3, 4]);
    expect([1, 2, [3, 4, [5, 6]]].flat(2)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('removes any empty slots from the given array', () => {
    // Disable eslint only for the next line just to give an example
    // eslint-disable-next-line no-sparse-arrays
    expect([1, 2, , 4, 5].flat()).toEqual([1, 2, 4, 5]);
    // eslint-disable-next-line no-sparse-arrays
    expect([1, 2, , [4, , 5]].flat()).toEqual([1, 2, 4, 5]);
  });
});
