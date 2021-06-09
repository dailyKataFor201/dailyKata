/*
1. enter, leave인 경우 유저 아이디와 함께 정답에 출력될 메시지의 종류를 기록.
2. enter, change인 경우 연관 배열을 이용하여 각 유저 아이디를 키로, 닉네임을 값으로 저장해 둔다.
이렇게 최종 닉네임을 유저 아이디 별로 유지
3. event를 순회하며 채팅방에 출력할 메시지를 생성하고, 연관 배열에 저장된 아이디별 최종 닉네임을 사용.
*/

const openChatRoom = (input) => {
  const events = [];
  const users = {};
  input.forEach(event => {
    const [op, id, nickname] = event.split(' ');
    switch(op) {
      case 'Enter': {
        users[id] = nickname;
        events.push([op, id]);
        break;
      }
      case 'Leave': {
        events.push([op, id]);
        break;
      }
      case 'Change': {
        users[id] = nickname;
        break;
      }
      default: {
        throw 'invalid operation';
      }
    }
  });
  const result = [];
  events.forEach(e => {
    const [op, id] = e;
    switch(op) {
      case 'Enter': result.push(`${users[id]}님이 들어왔습니다.`); break;
      case 'Leave': result.push(`${users[id]}님이 나갔습니다.`); break;
    }
  });
  return result;
}

test('openChatRoom', () => {
  expect(openChatRoom(["Enter uid1234 Muzi"])).toEqual(["Muzi님이 들어왔습니다."]);
  expect(openChatRoom(["Enter uid1234 Muzi", "Leave uid1234 Muzi"])).toEqual(["Muzi님이 들어왔습니다.", "Muzi님이 나갔습니다."]);
  expect(openChatRoom(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))
  .toEqual(["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);
});
