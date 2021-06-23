const a = [];

const solution = (n, m) => {
  go(0, 1, n, m);
  return [1,2,3];
}

const go = (index, selected, n, m) => {
  if(index == m) {
    // console.log(a)
    return;
  };

  if (index > n) return;
  a[selected] = index;
  go(index+1, selected+1, n, m);
  a[selected] = 0;
  go(index+1, selected, n, m);
}

test('nm1', () => {
  expect(solution(3, 2)).toEqual([1,2,3]);
});