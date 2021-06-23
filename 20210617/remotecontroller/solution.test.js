/*
- 목표채널 - 100을 해서 최소인지 확인.
- 0 ~ 백만을 돈다.
- 돌면서 번호중에 망가진게 없는지 확인한다.
- 없다면 길이를 반환한다.
- 목표채널 - 선택채널 + 길이를 더한다.
- 위의 값이 최소인지 확인한다.
*/


const solution = (target, n, broken) => {
  let min = target - 100;
  for(let i = 0; i <= 1000000; i++) {
    // console.log(i);
    let tmp = check(i, broken);
    // console.log(tmp);
    if(tmp > 0) {
      // console.log(min, Math.abs(target - i) + tmp)
      if(min > Math.abs(target - i) + tmp) {
        min = Math.abs(target - i) + tmp;
        // console.log('==', min);
      }
    }
  }

  return min;
}

const check = (target, broken) => {
  let c = target;
  if(c == 0) {
    if(broken.find(v=>v===0)) return 0;
    else return 1;
  }
  let len = 0;
  while(c > 0) {
    if(broken.find(v=>v===c % 10)) return 0;
    len +=1;
    c = Math.floor(c/10);
  }
  return len;
}

test('check', () => {
  expect(check(5457, [6, 7, 8])).toBe(0);
  expect(check(5457, [6, 8])).toBe(4);
});

test('solution', () => {
  expect(solution(5457, 3, [6,7,8])).toBe(6);
});