# 오픈 채팅방 & 기능 개발

## 오픈 채팅방 이해

1. 입력값 : ['Enter||Leave||Change id nickname']
2. leave일땐 id가 없음
3. 나갔다 오면서 nickname을 변경하거나, 아이디를 변경 했을때 동일한 id를 가진 result history의 nickname들이 변경 되어야함.

## 오픈 채팅방 계획

1. enter, leave인 경우 유저 아이디와 함께 정답에 출력될 메시지의 종류를 기록.
2. enter, change인 경우 연관 배열을 이용하여 각 유저 아이디를 키로, 닉네임을 값으로 저장해 둔다.
이렇게 최종 닉네임을 유저 아이디 별로 유지
3. event를 순회하며 채팅방에 출력할 메시지를 생성하고, 연관 배열에 저장된 아이디별 최종 닉네임을 사용.

## 기능 개발 이해

progress는 앞의 일이 먼저 수행되어야 뒤의 것도 배포될 수 있다는 의존성을 가짐
뒤의 것이 배포가 먼저 되더라도, 앞의것이 배포가 되지 않으면 기다려야 하며, 앞의 것이 배포될 때 같이 배포할 수 있음.
배포가 될때 몇개의 progress가 배포되는지 배열에 담아서 리턴하기.

1. 입력값
    - progresses : [93, 30, 55] 수행되어야할 일
    - speeds : [1, 30, 5] 일의 속도
2. 출력값
    - [2, 1] 한턴에 배포되는 progress의 갯수

## 기능 개발 계획

1. progress와 speed를 갖는 객체를 만듬.
2. 맨 앞의 것을 확인하여 100 인지 확인.
    - 100이라면, 뒤의 것도 100인지 확인하며, 갯수를 세고, 더이상 아니라면 result에 push
    - 100아니라면 +1씩 추가해주며 맨 앞의 것이 100인지 확인
3. progress에 남는 값이 없다면 result를 리턴

## 실행

## 회고
