describe('indexOf()', () => {
  // The indexOf() method returns the first index at
  // which a given element can be found in the array,or -1 if it is not present.
  // Syntax: arr.indexOf(searchElement[, fromIndex])
  // Note that
  //  - 'fromIndex' is an optional param and the default value is 0
  //  - If the provided index is negative, the array is still searched from front to back.
  //  - If the provided index is 0, then the whole array will be searched.
  it("returns the index of the target element in the array or return -1 if it's not found", () => {
    const targetArray: Array<number> = [2, 9, 9];
    expect(targetArray.indexOf(2)).toEqual(0);
    expect(targetArray.indexOf(7)).toEqual(-1);
    expect(targetArray.indexOf(9, 2)).toEqual(2);
    expect(targetArray.indexOf(2, -1)).toEqual(-1);
    expect(targetArray.indexOf(2, -3)).toEqual(0);
  });
  it('can also find all occurances of the target element from the given array', () => {
    const targetArray: Array<string> = ['apple', 'banana', 'cherry', 'apple', 'apple'];
    const arrayOfIndexes: Array<number> = targetArray.reduce(
      (acc: Array<number>, element: string, idx: number) =>
        element === 'apple' ? [...acc, targetArray.indexOf(element, idx)] : acc,
      [],
    );
    expect(arrayOfIndexes).toEqual([0, 3, 4]);
  });
});
