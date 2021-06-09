/*
1. progress와 speed를 갖는 객체를 만듬.
2. 맨 앞의 것을 확인하여 100 인지 확인.
    - 100이라면, 뒤의 것도 100인지 확인하며, 갯수를 세고, 더이상 아니라면 result에 push
    - 100아니라면 +1씩 추가해주며 맨 앞의 것이 100인지 확인
3. progress에 남는 값이 없다면 result를 리턴
*/

const solution = (progresses, speeds) => {
  const works = progresses.map((v, i) => {
    return { progress: v, speed: speeds[i] };
  });
  const result = [];

  let limit = 0;
  while(works.length) {
    works.forEach(work => {
      const acc = work.progress + work.speed;
      work.progress = acc >= 100 ? 100 : acc;
    });
    
   if(works[0].progress === 100) {
    works.shift();
    let i = 0;
    i++;
    let limit2 = 0;
    while(works[0]){
      if(works[0].progress === 100) {
        works.shift();
        i++;
      }else {
        break;
      }
      if(limit2++ > 100){console.log('리밋2'); throw 'error';}
    }
    result.push(i);
   }
   if(limit > 100) {console.log('리밋'); throw 'error';}
   limit++;
  }
  return result;
};
test('solution',() => {
  expect(solution([93], [1])).toEqual([1]);
  expect(solution([93, 30], [1, 30])).toEqual([2]);
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2]);
});