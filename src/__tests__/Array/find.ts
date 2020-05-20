describe("find()", () => {
  // The find() method executes the callback function once for each index of the array
  // until it finds one where callback returns a true value.
  // If such an element is found, find immediately returns the value of that element.
  // Otherwise, find returns 'undefined'
  // Note that find() does not mutate the array on which it is called.
  // Syntax: arr.find(callback(element[, index[, array]])[, thisArg])
  it("returns an element from a simple array if there is any matched one", () => {
    const testArray: Array<number> = [5, 12, 8, 130, 44];
    expect(testArray.find(element => element > 10)).not.toBe([12, 130, 44]);
    expect(testArray.find(element => element > 10)).toBe(12);
  });
  it("returns an element from an object if there is any matched one", () => {
    const favDrinks: Array<{ name: string, quantity: number }> = [
      {name: 'soju', quantity: 2},
      {name: 'beer', quantity: 0},
      {name: 'wine', quantity: 5}
  ];
    expect(favDrinks.find(drink => drink.quantity > 3)).toEqual({name: 'wine', quantity: 5});
    expect(favDrinks.find(drink => drink.name === 'beer')).toEqual({name: 'beer', quantity: 0});
    expect(favDrinks.find(drink => drink.name === 'wiskey')).toEqual(undefined);
  });
});
