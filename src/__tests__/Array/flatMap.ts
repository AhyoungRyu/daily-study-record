// Note that only NodeJS version 11 and above support this method
// (same as flat())
describe('flatMap()', () => {
  // The flatMap() method first maps each element using a mapping function,
  // then flattens the result into a new array.
  // It is identical to a 'map()' followed by a flat of depth 1,
  // but flatMap is often quite useful,
  // as merging both into one method is slightly more efficient.
  // Note that flatMap() is an experimental method.
  // So it's not supported in IE & Edge at the moment.
  // Should be aware of using it for now.
  // Syntax: const new_array = arr.flatMap(
  //  function callback(currentValue[, index[, array]]) {
  //    return element for new_array
  //   }[, thisArg])
  // Returns a new array with each element being the result of the callback function
  // and flattened to a depth of 1.
  it('returns an identical results with map() method but flatten 1 level', () => {
    const testArray: Array<number> = [1, 2, 3, 4];
    expect(testArray.map((x) => [x * 2])).toEqual([[2], [4], [6], [8]]);
    // See how it's different with the map()'s behaviour
    expect(testArray.flatMap((x) => [x * 2])).toEqual([2, 4, 6, 8]);
  });
  it('returns an equivalent result with reduce() + concat()', () => {
    const testArray: Array<number> = [1, 2, 3, 4];
    expect(testArray.flatMap((x) => [x * 2])).toEqual(
      testArray.reduce((acc: Array<number>, x: number) => acc.concat([x * 2]), []),
    );
  });
});
