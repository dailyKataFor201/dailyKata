/*
- 코스를 순회한다. n
  - orders를 순회하며 course 를 이용해 조합을 구한다. n^2
  - max인 것을 모두 구해 result에 넣는다.
- 정렬 후 반환한다.
*/
const solution = (orders, courses) => {
  const result = [];
  courses.forEach(course => {
    const combs = [];
    orders.forEach(order => {
      combs.push(...combination([...order], course).map(v=>v.sort()).map(v => v.join('')));
    });
    let max = 0;
    
    const organized = groupBy(combs);
    Object.values(organized).forEach(v => {
      if(v > max) max = v;
    });
    result.push(...Object.entries(organized).filter(([v, num]) => num === max && num >= 2).map(v => v[0]));
  });
  return result.sort();
}

test('solution', () => {
  expect(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
  expect(solution(["XYZ", "XWY", "WXA"], [2,3,4]	)).toEqual(["WX", "XY"]);
});

const groupBy = (arr) => {
  const result = {};
  arr.forEach((v, i) => {
    if(!result[v]) result[v] = 1;
    else result[v] +=1;
  });
  return result;
}

test('groupBy', () => {
  expect(groupBy([ 'ABCFG', 'AC', 'CDE', 'ACDE' ])).toEqual({
    'ABCFG': 1, 'AC': 1, 'CDE':1 , 'ACDE':1
  });
  expect(groupBy([ 'ABCFG', 'AC', 'CDE', 'ACDE', 'AC' ])).toEqual({
    'ABCFG': 1, 'AC': 2, 'CDE':1 , 'ACDE':1
  });
});

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}