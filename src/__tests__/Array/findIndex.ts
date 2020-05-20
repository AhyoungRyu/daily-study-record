describe("findIndex()", () => {
  // The findIndex() method executes the callback function
  // once for every array index 0..length-1 (inclusive) in the array until it finds one
  // where callback returns a truthy value executes the callback function once for each index of the array.
  // Note that Unlike some other array methods such as Array.some,
  // in sparse arrays the callback is called even for indexes of entries not present in the array.
  // Syntax: arr.findIndex(callback(element[, index[, array]])[, thisArg])
  it("returns an idx of element from a simple array if there is any matched one", () => {
    expect([5, 12, 8, 130, 44].findIndex(element => element > 13)).toEqual(3);
  });
  it("returns -1 there is nothing to be matched", () => {
    expect([5, 12, 8, 130, 44].findIndex(element => element < 0)).toEqual(-1);
  });
});
