describe("copyWithin()", () => {
  // The copyWithin() method shallow copies part of an array to another location
  // in the same array and returns it, without modifying its size.
  // Syntax: arr.copyWithin(target[, start[, end]])
  // start & end are optional
  it("should return a correctly copied array", () => {
    // If the target idx is negative, the target will be counted from the end
    // If 'start' is omitted, it'll copy from the start; 0
    // If 'end' is omitted, it'll copy until the end of the array
    // Below test case is not feasible in TS since it throws an error
    // that it must take 2-3 arguments
    // expect([1, 2, 3, 1, 2]).toEqual([1, 2, 3, 4, 5].copyWithin(-2));
    // Copy to 0 the elements which are at 3 to the end(4, 5)
    expect([4, 5, 3, 4, 5]).toEqual([1, 2, 3, 4, 5].copyWithin(0, 3));
    // Copy to 0 the element at idx 3(4)
    expect([4, 2, 3, 4, 5]).toEqual([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
    // Copy to -2 the elements which are at from -3 to -2(not include -1)(3, 4)
    expect([1, 2, 3, 3, 4]).toEqual([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
  });
});
