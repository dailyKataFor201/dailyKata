/*
1. while문을 돌면서, 짝지었을때 같으면 바로 지워주고 다시 1번을 시작한다.
2. 시작하기 전에 지우기 전과 길이를 비교해서 다르면진행하고
3. 2번에서 반복할때 제거하기 전의 길이와 제거한 후의 길이가 다르다면 진행하고,아니라면 return을 하되, 배열에 값이 남아있다면 0을, 없다면 1을 반환한다.
*/
const solution = (s) => {
  const stack = [];

  for(let i = 0; i < s.length; i++) {
    if(s[i] === stack[stack.length-1]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length === 0 ? 1 : 0;
};

test('solution', () => {
  expect(solution('aa')).toBe(1);
  expect(solution('baabaa')).toBe(1);
});