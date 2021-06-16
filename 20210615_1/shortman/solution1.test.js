/*
  - 9c7을 만들어서 더했을 경우 100이 나오는 경우를 찾는다.
  - 다 더해서 100이 나오는지 확인한다.
  - 오름차순으로 정렬후 리턴한다.
*/
const solution = (arr) => {
  const cases = combination(arr, 2);
  const target = arr.reduce((acc, cur) => acc+cur, 0);
  for(let i = 0; i < cases.length; i++) {
    const [first, second] = cases[i];
    if(target - first - second == 100) {
      const result = [];
      for(let j = 0; j < arr.length; j++) {
        if(arr[j] !== first && arr[j] !== second) {
          result.push(arr[j]);
        }
      }
      return result.sort((a,b)=>a-b);
    }
  }
}

test('solution', () => {
  expect(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])).toEqual([7,8, 10, 13, 19, 20, 23]);
});

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}