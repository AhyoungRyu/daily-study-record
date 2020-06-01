describe('keys()', () => {
  // The keys() method returns a new Array Iterator object
  // that contains the keys for each index in the array.
  // Syntax: arr.keys()
  // Return: A new Array iterator object
  it('returns Key iterator', () => {
    const targetArray: Array<string> = ['I', 'need', 'a', 'break'];
    expect(Object.keys(targetArray)).toEqual(['0', '1', '2', '3']);
    expect([...targetArray.keys()]).toEqual([0, 1, 2, 3]);
  });
});
