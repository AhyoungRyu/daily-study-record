describe('isArray()', () => {
  // The Array.isArray() method determines whether the passed value is an Array
  // Syntax: Array.isArray(value)
  // Param: value; The value to be checked
  // Return: Boolian; true if the value is an Array; otherwise, false.
  it('determines which is an Array or not', () => {
    expect(Array.isArray([])).toEqual(true);
    expect(Array.isArray([1])).toEqual(true);
    // Array.prototype itself is an array:
    expect(Array.isArray(Array.prototype)).toEqual(true);
    expect(Array.isArray({})).toEqual(false);
    expect(Array.isArray(null)).toEqual(false);
    expect(Array.isArray(undefined)).toEqual(false);
    expect(Array.isArray(17)).toEqual(false);
    expect(Array.isArray('Array')).toEqual(false);
    expect(Array.isArray(true)).toEqual(false);
    expect(Array.isArray(false)).toEqual(false);
    expect(Array.isArray({ __proto__: Array.prototype })).toEqual(false);
  });
});
