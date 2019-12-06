const sortDescIntArray = (intValue) => {
   return parseInt(intValue.toString().split('').sort().reverse().join(''));
}
test("sortDescIntArray", () => {
    expect(sortDescIntArray(123)).toBe(321);
    expect(sortDescIntArray(1234)).toBe(4321);
    expect(sortDescIntArray(118372)).toBe(873211);
})