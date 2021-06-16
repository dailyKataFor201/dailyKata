/*
    1. n^4 풀이
        - i, j 모두 돈다
        - 오른쪽이랑 바꿔서 최대 길이인지 확인한다.
        - 다시 돌려놓는다.
        - 밑이랑 바꿔서 최대 길이인지 확인한다.
        - 다시 돌려놓는다.
        - 최대 길이를 반환한다.
    2. n^3 풀이
        - 위와 동일한 방식으로 진행한다
        - 변경된 부분만 넘겨서 체크 하는 부분만 확인해서 최대 길이인지 확인한다.
*/

const solution = (n, arr) => {
  let answer = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(j+1 < n) {
        const tmp = check(swap(arr, i, j, i, j+1));
        console.log(i, j+1, tmp);
        if(tmp > answer) answer = tmp;
      }
      if(i+1 < n) {
        const tmp = check(swap(arr, i, j, i+1, j));
        console.log(i+1, j, tmp);
        
        if(tmp > answer) answer = tmp;
      }
    }
  }
  console.log('ㅆ:발', answer);
  return answer;
};

test('solution', () => {
  expect(solution(5, ['YCPZY', 'CYZZP', 'CCPPP', 'YCYZC', 'CPPZZ'])).toBe(4);
});

const check = (arr) => {
  const n = arr.length
  let answer = 1;
  for(let i = 0; i < n; i++) {
    let cnt = 1;
    for(let j = 1; j < n; j++) {
      if(arr[i][j] == arr[i][j-1]) {
        cnt += 1;
      }else {
        cnt = 1;
      }
      if(answer < cnt) answer = cnt;
    }
    cnt = 1;
    for(let j = 1; j < n; j++) {
      if(arr[j][i] == arr[j-1][i]) {
        cnt += 1;
      }else{
        cnt = 1;
      }
      if(answer < cnt) answer = cnt;
    }
  }
  return answer;
}

test('check', () => {
  expect(check([['T', 'C', 'P', 'Z', 'Y'], ['C', 'Y', 'Z', 'Z', 'P'], ['C', 'C', 'P', 'P', 'P'], ['Y', 'C', 'Y', 'Z', 'C'], ['C', 'P', 'P', 'Z', 'Z']])).toBe(3);
});

const swap = (arr, i1,j1, i2, j2) => {
  const target = [...arr];
  let tmp = target[i1][j1];
  target[i1][j1] = target[i2][j2];
  target[i2][j2] = tmp;
  return target;
}

test('swap', () => {
  expect(swap([[1,2],[4,5]], 0,0,1,1)).toEqual([[5,2],[4,1]]);
  expect(swap([['T', 'C', 'P', 'Z', 'Y'], ['C', 'Y', 'Z', 'Z', 'P'], ['C', 'C', 'P', 'P', 'P'], ['Y', 'C', 'Y', 'Z', 'C'], ['C', 'P', 'P', 'Z', 'Z']], 0,0,1,1)).toEqual([['Y', 'C', 'P', 'Z', 'Y'], ['C', 'T', 'Z', 'Z', 'P'], ['C', 'C', 'P', 'P', 'P'], ['Y', 'C', 'Y', 'Z', 'C'], ['C', 'P', 'P', 'Z', 'Z']]);
});