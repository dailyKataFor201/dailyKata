const solution = (E, S, M) => {
  let e=0, s=0, m=0, i = 0;
  while(i < 10000) {
    if(e === E && s === S && m === M) return i;
    e += 1;
    s += 1;
    m += 1;
    if(e === 16) e = 1;
    if(s === 29) s = 1;
    if(m === 20) m = 1;
    i++;
  }
}

test('solution', () => {
  expect(solution(1, 16, 16)).toBe(16);
  expect(solution(1, 2, 3)).toBe(5266);
  expect(solution(15, 28, 19)).toBe(7980);
});