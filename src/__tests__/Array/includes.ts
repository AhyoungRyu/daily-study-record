describe('includes()', () => {
  // The includes() method determines whether an array includes a certain element,
  // returning true or false as appropriate.
  // Syntax: arr.includes(searchElement[, fromIndex])
  // 'fromIndex' is an optional param and the default value is 0
  // Returns a 'boolean' value.
  it("returns 'true' if the target value is found from a simple numeric elements of array", () => {
    expect([1, 2, 3].includes(2)).toEqual(true);
    expect([1, 2, 3].includes(4)).toEqual(false);
    expect([1, 2, NaN].includes(NaN)).toEqual(true);
  });
  it("returns 'true' if the target value when 'fromIndex' param is provided", () => {
    expect([1, 2, 3].includes(3, 2)).toEqual(true);
  });
  it("searches from the idx of (array.length - fromIdex) by asc if 'fromIdx' is a negative value", () => {
    expect([1, 2, 3].includes(3, -1)).toEqual(true);
  });
  it('searches an entire array if the computed index is less or equal than (-1 * array.length)', () => {
    // array length is 4
    // fromIndex is -100
    // the computed index is 4 + (-100) = -96
    const targetArray: Array<number> = [1, 2, 3, 4];
    expect(targetArray.includes(1, -100)).toEqual(true);
    expect(targetArray.includes(2, -100)).toEqual(true);
    expect(targetArray.includes(3, -100)).toEqual(true);
    expect(targetArray.includes(4, -100)).toEqual(true);
    expect(targetArray.includes(1, -3)).toEqual(false);
  });
});
