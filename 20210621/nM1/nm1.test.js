const c = [...Array(10)].map(v => false);
const a = [];

const solution = (n, m) => {
  go(0, n, m);
  return [1,2,3];
}

const go = (index, n, m) => {
  if(index == m) return;
  // console.log('------',index);

  for(let i = 1; i <= n; i++) {
    if(c[i]) continue;
    c[i] = true; a[index] = i;
    // console.log(a);
    go(index+1, n, m);
    c[i] = false;
  }
}

test('nm1', () => {
  expect(solution(3, 2)).toEqual([1,2,3]);
});