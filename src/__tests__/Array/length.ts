describe('Array.length Property', () => {
  // The length property of an object which is an instance of type Array sets or
  // returns the number of elements in that array.
  // The value is an unsigned, 32-bit integer
  // that is always numerically greater than the highest index in the array.
  it('returns an integer with a positive sign and a value less than 2 to the 32nd power (232).', () => {
    // const namelistC = new Array(-100); //negative sign
    try {
      const namelistA: Array<unknown> = new Array(4294967296); //2 to the 32nd power = 4294967296
      const namelistB: Array<unknown> = new Array(-100); //negative sign
      // RangeError: Invalid array length
      expect(namelistA.length).toThrow('RangeError');
      expect(namelistB.length).toThrow('RangeError');
    } catch (e) {
      expect(e.message).toBe('Invalid array length');
    }
  });
  it('can be used to shorten an array', () => {
    const targetArray: Array<number> = [1, 2, 3, 4, 5, 6, 7];
    if (targetArray.length > 3) {
      targetArray.length = 3;
    }
    expect(targetArray).toEqual([1, 2, 3]);
    expect(targetArray.length).toEqual(3);
  });
});
