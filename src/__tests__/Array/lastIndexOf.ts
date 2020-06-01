describe('lastIndexOf()', () => {
  // The lastIndexOf() method returns the last index at
  // which a given element can be found in the array, or -1 if it is not present
  // The array is searched backwards, starting at fromIndex.
  // Syntax: arr.lastIndexOf(searchElement[, fromIndex])
  // Return: The last index of the element in the array; -1 if not found.
  // Note that lastIndexOf compares searchElement to elements of the Array
  // using strict equality (the same method used by the ===, or triple-equals, operator).
  const targetArray: Array<number> = [100, 200, 300, 100];
  it("returns an index of the target element from an array but returns -1 if it's not found", () => {
    expect(targetArray.lastIndexOf(100)).toEqual(3);
    expect(targetArray.lastIndexOf(200)).toEqual(1);
    expect(targetArray.lastIndexOf(300)).toEqual(2);
    expect(targetArray.lastIndexOf(400)).toEqual(-1);
  });
  it("returns an index of the target element from an array when 'fromIndex' param is provided", () => {
    // 'fromIndex' param(optional):
    // The index at which to start searching backwards.
    // Defaults to the array's length minus one (arr.length - 1),
    // i.e. the whole array will be searched.
    // If the index is greater than or equal to the length of the array,
    // the whole array will be searched.
    expect(targetArray.lastIndexOf(200, 4)).toEqual(1);
    // If negative, it is taken as the offset from the end of the array.
    // Note that even when the index is negative,
    // the array is still searched from back to front.
    expect(targetArray.lastIndexOf(300, -2)).toEqual(2);
    expect(targetArray.lastIndexOf(200, -2)).toEqual(1);
    expect(targetArray.lastIndexOf(100, -2)).toEqual(0);
    // If the calculated index is less than 0, -1 is returned,
    // i.e. the array will not be searched.
    expect(targetArray.lastIndexOf(400, -2)).toEqual(-1);
  });
  it('can also find all occurances of the target element from the given array', () => {
    const arrayOfIndexes: Array<number> = targetArray.reduce(
      (acc: Array<number>, element: number, idx: number) =>
        element === 100 ? [...acc, targetArray.lastIndexOf(element, idx)] : acc,
      [],
    );
    expect(arrayOfIndexes).toEqual([0, 3]);
  });
});
