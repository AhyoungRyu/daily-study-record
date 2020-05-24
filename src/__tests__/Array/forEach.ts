describe('forEach()', () => {
  // The forEach() method executes a provided function once for each array element.
  // It is not invoked for index properties that have been deleted
  // or are uninitialized (i.e. on sparse arrays).
  // Syntax: arr.forEach(function callback(currentValue[, index[, array]]) {
  //  the iterator
  // }[, thisArg]);
  // Returns nothing;
  // Unlike map() or reducer(), it always returns the value 'undefined'
  // and is not chainable.
  // The typical use case is to execute side effects at the end of chain.
  // Also, forEach()
  //  - doesn't mutate the array on which it is called.
  //  - doesn't have to stop or break the loop other than by throwing an exception
  it('behaves exactly like for-loop', () => {
    const items: Array<string> = ['item1', 'item2', 'item3'];
    const copy1: Array<string> = [];

    for (let i: number = 0; i < items.length; i++) {
      copy1.push(items[i]);
    }

    const copy2: Array<string> = [];
    items.forEach(function (item: string) {
      copy2.push(item);
    });
    expect(copy1).toEqual(copy2);
  });
  it('reflects an update if the given array is modified during iteration', () => {
    const numbers: Array<number> = [1, 2, 3, 4];
    const copiedNumbers: Array<number> = [];
    numbers.forEach(function (word: number) {
      copiedNumbers.push(word);
      if (word === 2) {
        numbers.shift();
      }
    });
    // When the entry containing the value "2" is reached,
    // the first entry of the whole array is shifted off,
    // which results in all remaining entries moving up one position.
    // Because element "4" is now at an earlier position in the array, "3" will be skipped.
    // forEach() does not make a copy of the array before iterating.
    expect(copiedNumbers).toEqual([1, 2, 4]);
  });
});
