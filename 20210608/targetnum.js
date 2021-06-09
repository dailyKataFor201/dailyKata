/*
1. 처음엔 -를 하나만 만들며 각 요소에 적용한 후 검사
2. 두번째엔 -를 두개 만들어 모든 순열을 적용한 후 검사
3. 세번째엔 -를 세개 만들어 모든 순열을 적용한 후 검사
4. n번째엔 -를 n개 만들어 모든 순열을 적용한 후 검사.
*/

const targetNum = (arr, target) => {
  let result = 0;
  
  function recur(idx, sum) {
    console.log(idx, sum);

    if(idx === arr.length) {
      if( sum === target) {
        console.log('======',sum);
        result +=1;
      }
      return;
    }
    recur(idx+1, sum+arr[idx]);
    recur(idx+1, sum-arr[idx]);
  }
  recur(0, 0);
  return result;
}

test('targetNum', () => {
  expect(targetNum([1,1,1,1,1], 3)).toBe(5);
});