/*
1. for문을 돌며 스택의 마지막값과 비교한다.
2. 같다면, 스택의 마지막 값을 팝한다.
3. 다르다면, 해당 값을 push한다.
4. 만약 스택에 값이 없는 경우는 다르다고 판단하여 push 한다.
5. for문을 다 돌았을때 스택이 비어있다면 1을 아니면 0을 리턴.
*/

const solution = (s) => {
  const stack = [];

  [...s].forEach((v, i) => {
    if(stack[stack.length - 1] == v) stack.pop();
    else stack.push(v);
  });
  return stack.length === 0 ? 1 : 0;
};

test('solution', () => {
  expect(solution('baabaa')).toBe(1);
  expect(solution('cdcd')).toBe(0);
})