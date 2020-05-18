describe("Array Methods", () => {
  // 1. concat()
  // The concat() method is used to merge two or more arrays.
  // This method does not change the existing arrays, but instead returns a new array.
  // Syntax: const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
  it("should return a correctly concatenated array", () => {
    const myFavDrinks = ["beer", "wine"];
    const myFavFoods = ["greek yogurt", "sweet potato"];
    const myFavFitness = ["yoga", "pilates"];
    expect(myFavDrinks.concat(myFavFoods)).toEqual(
      ["beer", "wine", "greek yogurt", "sweet potato"]
    );
    expect(myFavDrinks.concat(myFavFoods, myFavFitness)).toEqual(
      ["beer", "wine", "greek yogurt", "sweet potato", "yoga", "pilates"]
    );
  });
  // 2. copyWithin()
  // The copyWithin() method shallow copies part of an array to another location
  // in the same array and returns it, without modifying its size.
  // Syntax: arr.copyWithin(target[, start[, end]])
  // start & end are optional
  it("should return a correctly copied array", () => {
    // If the target idx is negative, the target will be counted from the end
    // If 'start' is omitted, it'll copy from the start; 0
    // If 'end' is omitted, it'll copy until the end of the array
    expect([1, 2, 3, 1, 2]).toEqual([1, 2, 3, 4, 5].copyWithin(-2));
    // Copy to 0 the elements which are at 3 to the end(4, 5)
    expect([4, 5, 3, 4, 5]).toEqual([1, 2, 3, 4, 5].copyWithin(0, 3));
    // Copy to 0 the element at idx 3(4)
    expect([4, 2, 3, 4, 5]).toEqual([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
    // Copy to -2 the elements which are at from -3 to -2(not include -1)(3, 4)
    expect([1, 2, 3, 3, 4]).toEqual([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
  });
  // 3. entries()
  // The entries() method returns a new Array Iterator object
  // that contains the key/value pairs for each index in the array.
  // Syntax: arr.entries()
  it("should return correct key/value pairs", () => {
    const myFavDrinks = ["beer", "wine", "soju"];
    const iterator = myFavDrinks.entries();
    expect([0, "beer"]).toEqual(iterator.next().value);
    expect([1, "wine"]).toEqual(iterator.next().value);
    expect([2, "soju"]).toEqual(iterator.next().value);
  });
  // 4. every()
  // The every() method tests whether all elements
  // in the array pass the test implemented by the provided function.
  // Note that it returns true for any condition put on an empty array.
  // Syntax: arr.every(callback(element[, index[, array]])[, thisArg])
  it("should return a correct boolean value for given conditions", () => {
    const smallDigits = [1, 2, 3];
    const largeDigits = [100, 200, 300];
    const isSmallEnough = value => value < 10;

    expect(smallDigits.every(isSmallEnough)).toBe(true);
    expect(largeDigits.every(isSmallEnough)).toBe(false)
    // Note that it returns true for any condition put on an empty array.
    expect([].every(isSmallEnough)).toBe(true);
  });
  // 5. fill()
  // The fill() method fills all the elements of an array
  // from a start index to an end index with a static value.
  // Note the end index is not included
  // and its default value is array.length if it's not provided
  // Syntax: arr.fill(value[, start[, end]])
  it("should return a corrently filled array", () => {
    // If 'start' & 'end' are not provided, fill 0 to arr.length \w given value
    expect([1, 2, 3].fill(4)).toEqual([4, 4, 4]);
    // If 'end' is not provided, fill start to arr.length \w given value
    expect([1, 2, 3].fill(4, 1)).toEqual([1, 4, 4]);
    // If (end - start) = 1, then change only the value in 'start' idx \w given value
    expect([1, 2, 3].fill(4, 1, 2)).toEqual([1, 4, 3]);
    // If (start === end), keey the array as is
    expect([1, 2, 3].fill(4, 1, 1)).toEqual([1, 2, 3]);
    // If start & end are out of idx, keey the array as is
    // but note that they the result is mutable
    expect([1, 2, 3].fill(4, 3, 3)).toEqual([1, 2, 3]);
    // If start/end is negative, treat it as 'length + start(end)'
    expect([1, 2, 3].fill(4, -3, -2)).toEqual([4, 2, 3]);
    // If start/end is not valid value(e.g. NaN), keep the array as is
    expect([1, 2, 3].fill(4, NaN, NaN)).toEqual([1, 2, 3]);
    // If start/end is out of boundary of the target array, keey the array as is
    expect([1, 2, 3].fill(4, 3, 5)).toEqual([1, 2, 3]);
  });
});
