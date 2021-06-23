/*
  - length과 start를 두고, length는 자릿수를 start는 시작하는 수를 나타내며 end는 start에 10곱해 -1 한 값으로 친다.
  - 총 9번 자리까지 돌리며 end가 n보다 큰 경우 end를 n으로 바꿔준다.
  - 마지막엔 (end - start + 1) + 1을 하여 자릿수를 더해준다.
*/
const solution1 = (n) => {
  let result = 0;
  for(let start = 1, len = 1; start <= n; start*=10, len++){
    let end = start*10 -1;
    if(end>n) end = n;
    result += (end - start + 1) * len;
  }
  return result;
}

test('solution1', () => {
  expect(solution(120)).toBe(252);
});