const solution = (n) => {
  let result = 0;
  for (let i = 1; i < n + 1; i++){
    result += Math.floor((n/i))*i;
  }
  return result;
};
test('test', () => {
  expect(solution(7)).toBe(41);
});

