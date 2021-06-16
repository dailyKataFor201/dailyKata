/*
  - 1 ~ 100만까지 for문을 돌린다.
  - 고장난 버튼이 하나라도 있다면 넘어간다.
  - 입력한 버튼 개수 + abs(입력한 채널 - 목표 채널)를 한다.
  - 최소값을 구한다.
*/

const possible = (c, broken) => {
  let target = c;
  if(target == 0) {
    if(broken.find(v => v == 0)) return 0;
    else return 1;
  }
  let len = 0;
  while (target > 0) {
    if(broken.find(v => v == target % 10)) return 0;
    len += 1;
    target /= 10;
  }
  return len;
}

const solution = (target, n, broken) => {
  let ans = Math.abs(target - 100);
  for(let i = 0; i <= 1000000; i++) {
    const len = possible(i, broken);
    const press = Math.abs(i - target);
    if(ans > len + press) ans = len + press;
  }  
  return 6;
}

test('solution', () => {
  expect(solution(5457, 3, [6, 7, 8])).toBe(6);
});