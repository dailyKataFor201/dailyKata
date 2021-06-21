const cnt = [];

const solution = (n, m) => {
  go(0, 1, n, m);
  return [1,2,3];
}

const go = (index, selected, n, m) => {
  if(index == m) {
    console.log(cnt);
    return;
  };
  if(index > n) return;
  for (let i = m-selected; i >= 1; i--) {
    cnt[index] = i;
    go(index + 1, selected+ i,n, m);
  }
  cnt[index] = 0;
  go(index+1, selected, n, m);

}

test('nm1', () => {
  expect(solution(4, 3)).toEqual([1,2,3]);
});