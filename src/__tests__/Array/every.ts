describe("every()", () => {
  // The every() method tests whether all elements
  // in the array pass the test implemented by the provided function.
  // Note that it returns true for any condition put on an empty array.
  // Syntax: arr.every(callback(element[, index[, array]])[, thisArg])
  it("should return a correct boolean value for given conditions", () => {
    type NumberArray = Array<number>;
    const smallDigits: NumberArray = [1, 2, 3];
    const largeDigits: NumberArray = [100, 200, 300];
    function isSmallEnough(value: number): boolean {
      return  value < 10
    }; 

    expect(smallDigits.every(isSmallEnough)).toBe(true);
    expect(largeDigits.every(isSmallEnough)).toBe(false)
    // Note that it returns true for any condition put on an empty array.
    expect([].every(isSmallEnough)).toBe(true);
  });
});
