
const solution = (numbers, target) => {
  let result = 0;
  function dfs(i, value) {
    if(i === numbers.length) {
      if(value == target) {
        result ++;
      }
    }else {
      dfs(i+1, value + numbers[i]);
      dfs(i+1, value - numbers[i]);
    }
  }
  dfs(0, 0);
  // arr[0] = arr[0];
  // if(arr.reduce((acc, cur) => acc+cur,0)===target) result ++;

  // arr = [...numbers];
  // arr[0] = -arr[0];
  // if(arr.reduce((acc, cur) => acc+cur,0)===target) result ++;

  // arr = [...numbers];
  // arr[0] = -arr[0];
  // arr[1] = arr[1];
  // if(arr.reduce((acc, cur) => acc+cur,0)===target) result ++;

  // arr = [...numbers];
  // arr[0] = -arr[0];
  // arr[1] = -arr[1];
  // if(arr.reduce((acc, cur) => acc+cur,0)===target) result ++;

  return result;
}

test('test', () => {
  expect(solution([1, 1],2)).toBe(1);
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
});