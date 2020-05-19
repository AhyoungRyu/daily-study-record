describe("concat()", () => {
  // The concat() method is used to merge two or more arrays.
  // This method does not change the existing arrays, but instead returns a new array.
  // Syntax: const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
  it("should return a correctly concatenated array", () => {
    type StringArrayType = Array<string>;
    const myFavDrinks: StringArrayType = ["beer", "wine"];
    const myFavFoods: StringArrayType = ["greek yogurt", "sweet potato"];
    const myFavFitness: StringArrayType = ["yoga", "pilates"];
    expect(myFavDrinks.concat(myFavFoods)).toEqual(
      ["beer", "wine", "greek yogurt", "sweet potato"]
    );
    expect(myFavDrinks.concat(myFavFoods, myFavFitness)).toEqual(
      ["beer", "wine", "greek yogurt", "sweet potato", "yoga", "pilates"]
    );
  });
});
