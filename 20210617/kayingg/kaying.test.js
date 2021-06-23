const solution = (arr) => {
  const [M, N, x, y] = arr;

  for(let i = x - 1; i < M*N; i+=M) {
    if(i % N == y - 1) {
      return i + 1;
    }
  }
  
  return -1;
};

test('solution', () => {
    expect(solution([10, 12, 3, 9])).toBe(33);
    expect(solution([10, 12, 7, 2])).toBe(-1);
    expect(solution([13, 11, 5, 6])).toBe(83);
});