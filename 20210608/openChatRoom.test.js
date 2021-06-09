/*
  1. user:nickname users를 준비
  2. 입장 또는 퇴장시, op와 id만 events에 push(입장을 할 경우 users에 입력. 재 입장시 알아서 변경. id : nickname)
  3. change일 경우 users의 것을 변경.
*/

const solution = (chats) => {
  const users = {};
  const events = [];

  for(const chat of chats) {
    const [op, id, nickname] = chat.split(' ');
    switch(op){
      case 'Enter': users[id] = nickname; events.push({op, id}); break;
      case 'Leave': events.push({op, id}); break;
      case 'Change': users[id] = nickname; break;
    }
  }

  return events.reduce((acc, {op, id}) => [...acc, `${users[id]}님이 ${op === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`], []);
}

test('soultion', () => {
  expect(solution(["Enter uid1234 Prodo"])).
  toEqual(["Prodo님이 들어왔습니다."]);
  expect(solution(["Enter uid1234 Prodo", "Leave uid1234"])).
  toEqual(["Prodo님이 들어왔습니다.", "Prodo님이 나갔습니다."]);
  
  expect(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo"])).
  toEqual(["Prodo님이 들어왔습니다.", "Prodo님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);

  expect(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])).
  toEqual(["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);
  

});