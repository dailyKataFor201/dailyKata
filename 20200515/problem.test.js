/*
1. 수포자들의 패턴을 변수에 저장한다.
2. 수포자들의 패턴을 주어진 정답의 갯수 만큼 만들어 놓는다.
3. 수포자들의 각각이 얼마나 맞는지 확인한다
4. 정답률이 높은 순으로 정렬한다.
5. 맨 앞자리가 가진 점수를 가진 애들 말고 다 삭제한다.
6. 만약에 동점자가 있으면 오름차순으로 정렬 후 반환한다..
*/

function problem(answers) {
  const arr = [
    [1, makeAnswerSheet([1,2,3,4,5], answers.length)],
    [2, makeAnswerSheet([2,1,2,3,2,4,2,5], answers.length)],
    [3, makeAnswerSheet([3,3,1,1,2,2,4,4,5,5], answers.length)],
  ];
  const result = [
    [1, makeAnswerSheet([1,2,3,4,5], answers.length)],
    [2, makeAnswerSheet([2,1,2,3,2,4,2,5], answers.length)],
    [3, makeAnswerSheet([3,3,1,1,2,2,4,4,5,5], answers.length)],
  ].map(([id, patterns]) =>
    ([id, check(answers, patterns)]))
    .sort((a,b) => b[1]-a[1]);

  return result.filter(([id, value]) => result[0][1] === value).map(([id, _]) => id).sort();

}

function check(dap, answers) {
  let result = 0;
  for(let i = 0; i < dap.length; i ++) {
    if(dap[i] == answers[i]) {
      result ++;
    }
  }
  return result;
}

function makeAnswerSheet(answersPattern, count) {
  let answersSheet = [];

  let i = 0;

  while(i < count) {
    answersSheet.push(answersPattern[i % answersPattern.length]);
    i++
  }
  
  return answersSheet;
}
test('problem', () => {
  expect(problem([1,2,3,4,5])).toEqual([1]);
  expect(problem([1,3,2,4,2])).toEqual([1,2,3]);
});
