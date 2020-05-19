describe("fill()", () => {
  // The fill() method fills all the elements of an array
  // from a start index to an end index with a static value.
  // Note the end index is not included
  // and its default value is array.length if it's not provided
  // Syntax: arr.fill(value[, start[, end]])
  it("If 'start' & 'end' are not provided, fill 0 to arr.length with given value", () => {
    expect([1, 2, 3].fill(4)).toEqual([4, 4, 4]);
  });
  it("If (end - start) = 1, then change only the value in 'start' idx \w given value", () => {
    expect([1, 2, 3].fill(4, 1, 2)).toEqual([1, 4, 3]);
  });
  it("If (start === end), keey the array as is", () => {
    expect([1, 2, 3].fill(4, 1, 1)).toEqual([1, 2, 3]);
  });
  it("If start & end are out of idx, keey the array as is but note that they the result is mutable", () => {
    expect([1, 2, 3].fill(4, 3, 3)).toEqual([1, 2, 3]);
  });
  it("If start/end is negative, treat it as 'length + start(end)'", () => {
    expect([1, 2, 3].fill(4, -3, -2)).toEqual([4, 2, 3]);
  });
  it("If start/end is not valid value(e.g. NaN), keep the array as is", () => {
    expect([1, 2, 3].fill(4, NaN, NaN)).toEqual([1, 2, 3]);
  });
  it("If start/end is out of boundary of the target array, keey the array as is", () => {
    expect([1, 2, 3].fill(4, 3, 5)).toEqual([1, 2, 3]);
  });
});
