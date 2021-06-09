const capsulate = (s) => {
  let min = s.length;

  for(let size = 1; size < s.length; size++) {
    let i = 0;
    const result = [];
    const stack = [];
    while(i < s.length) {
      const target = s.substr(i, size)
      if(i == 0) {
        stack.push(target);
      }else {
        if(stack[stack.length - 1] === target) {
          stack.push(target);
        }else {
          result.push(`${stack.length == 1 ? '' : stack.length}${stack.pop()}`);
          while(stack.pop()){}
          stack.push(target);
        }
      }
      i+=size;
    }
    result.push(`${stack.length == 1 ? '' : stack.length}${stack.pop()}`);

    if(min > result.join('').length) min = result.join('').length;
  }
  
  return min;
}
test('capsule', () => {
  expect(capsulate('aabbaccc')).toBe(7);
  expect(capsulate('ababc')).toBe(4);
  expect(capsulate("ababcdcdababcdcd")).toBe(9);
  expect(capsulate("abcabcabcabcdededededede"	)).toBe(14);
  expect(capsulate("xababcdcdababcdcd")).toBe(17);
});
