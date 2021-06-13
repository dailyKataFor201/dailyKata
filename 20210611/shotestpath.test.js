/*
1. brutal force로 진행한다
2. 모든 경우를 다 진행하며 그중 가장 최소를 찾는다.
3. 이미 갔다왔고, 더이상 갈 수 없는 상황이 나온다면 -1을 리턴하며, 내가 처음에 넣었던 answer이 동일할 경우 -1을 리턴한다.
*/
const initValue = Infinity;

const solution = (maps) => {
  const targetW = maps[0].length;
  const targetH = maps.length;
  let min = initValue;

  function stp(w, h, acc) {
    if(w === targetW - 1 && h === targetH - 1) {
      if(min > acc) {
        min = acc;
      }
    }
    console.log(w, h);
    if(w+1 <= targetW - 1 && maps[w+1][h]) stp(w+1, h, acc + 1);
    if(h+1 <= targetH - 1 && maps[w][h+1]) stp(w, h+1, acc + 1);
  }

  stp(0, 0, 0);

  return initValue === min ? -1 : min;
}

test('solution', () => {
  expect(solution([[1,0],[1,1]])).toBe(2);
  expect(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])).toBe(11);
}); 