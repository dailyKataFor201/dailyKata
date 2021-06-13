const solution = (numbers, target) => {
  let count = 0;

  function dfx(i, acc) {
    if(i === numbers.length) {
      if(acc === target) {
        count+=1;
      }
    }else{
      dfx(i+1, acc + numbers[i]);
      dfx(i+1, acc - numbers[i]);
    }
  }
  dfx(0, 0);

  return count;
}

test('solution', () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
});