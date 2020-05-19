describe("entries()", () => {
  // The entries() method returns a new Array Iterator object
  // that contains the key/value pairs for each index in the array.
  // Syntax: arr.entries()
  it("should return correct key/value pairs", () => {
    const myFavDrinks: Array<string> = ["beer", "wine", "soju"];
    const iterator: IterableIterator<[number, string]>= myFavDrinks.entries();
    expect([0, "beer"]).toEqual(iterator.next().value);
    expect([1, "wine"]).toEqual(iterator.next().value);
    expect([2, "soju"]).toEqual(iterator.next().value);
  });
});
