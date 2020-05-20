describe("filter()", () => {
  // The filter() method creates a new array with all elements
  // that pass the test implemented by the provided function.
  // Note that 
  // - filter() doesn't mutate the array on which it is called
  // - The range of elements processed by filter() is set 
  //   before the first invocation of callback.
  //   If existing elements of the array are changed, or deleted,
  //   their value as passed to callback will be the value at the time
  //   filter() visits them;
  //   elements that are deleted are not visited.
  // Syntax: arr.filter(callback(element[, index[, array]])[, thisArg])
  it("returns an array of filtered numbers with simple callback function", () => {
    function isBigEnough (value: number): boolean {
      return value >= 10;
    }
    expect([10, 5, 4, 20].filter(isBigEnough)).toEqual([10, 20]);
  });
  it("returns an array of filtered object by key", () => {
    type testObjectType = { id?: string| null | number |undefined };
    const arrOfObj: Array<testObjectType> = [
      { id: NaN },
      { id: null },
      { id: 1 },
      { id: "1" },
      { id: undefined },
      { id: -1 },
      { id: 12.2 },
      { },
    ];
    function isNumber (value: testObjectType) {
      return value.id
        && typeof value.id === 'number'
        && !isNaN(value.id);
    }
    expect(arrOfObj.filter(isNumber)).toEqual([
      { id: 1 },
      { id: -1 },
      { id: 12.2 },
    ]);
  });
  it("returns an array of searched key words using filter", () => {
    const fruits: Array<string> = ['apple', 'banana', 'grapes', 'mango', 'orange'];
     // Array filters items based on search criteria (query)
    function searchKeywordItems(query: string): Array<string> {
      return fruits.filter((el) =>
        el.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    };
    expect(searchKeywordItems("ap")).toEqual([
      "apple",
      "grapes",
    ]);
    expect(searchKeywordItems("an")).toEqual([
      "banana",
      "mango",
      "orange",
    ]);
  });
});
