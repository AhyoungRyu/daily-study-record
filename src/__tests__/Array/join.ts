describe('join()', () => {
  // The join() method creates and returns a new string by concatenating
  // all of the elements in an array (or an array-like object),
  // separated by commas or a specified separator string.
  // Syntax: arr.join([separator])
  // Optional param; separator:
  // Specifies a string to separate each pair of adjacent elements of the array.
  // The separator is converted to a string if necessary.
  it("returns the index of the target element in the array or return -1 if it's not found", () => {
    const targetArray: Array<string> = ['You', 'raise', 'me', 'up'];
    // If the optional param omitted, the array elements are separated with a comma (",")
    expect(targetArray.join()).toEqual('You,raise,me,up');
    expect(targetArray.join(', ')).toEqual('You, raise, me, up');
    expect(targetArray.join(' + ')).toEqual('You + raise + me + up');
    // If separator is an empty string,
    // all elements are joined without any characters in between them.
    expect(targetArray.join('')).toEqual('Youraisemeup');
  });
});
