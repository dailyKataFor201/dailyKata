/*
  - json을 파싱한다.
  - 길이가 짧은 순서대로 정렬한다.
  - 모든 값을 set에 넣는다.
  - 배열로 반환한다.
*/

const solution = (s) => {
  const re = /{(\d|,)*}/g;
  const re2 = /(\d)+/g;

  const first = new RegExp(re);
  const second = new RegExp(re2);
  let f;
  const arr = [];
  while(f = first.exec(s)) {
    let s;
    const tmp = [];
    while(s = second.exec(f[0])){
      tmp.push(+s[0]);
    }
    arr.push(tmp);
  }
  
  return [...new Set(arr.sort((a,b) => a.length - b.length).flat())];
}

test('solution', () => {
  expect(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([2, 1, 3, 4]);
  expect(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")).toEqual([2, 1, 3, 4]);
  expect(solution("{{20,111},{111}}")).toEqual([111,20]);
  expect(solution("{{123}}")).toEqual([123]);
  expect(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")).toEqual([3, 2, 4, 1]);
});