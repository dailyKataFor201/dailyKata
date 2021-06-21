// const c = [...Array(10)].map(v => false);
const a = [];

const solution = (n, m) => {
  go(0, 1, n, m);
  return [1,2,3];
}

const go = (index, start, n, m) => {
  if(index == m) return;

  for(let i = start; i <= n; i++) {
    // if(c[i]) continue;
    // c[i] = true; 
    a[index] = i;
    go(index + 1, n + 1, m);
    // c[i] = false;
  }
}

test('nm1', () => {
  expect(solution(3, 2)).toEqual([1,2,3]);
});