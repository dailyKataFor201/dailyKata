# 문제 : 기능개발

## 1. 이해
    - progresses : 작업의 진행도가 element로 갖는 배열
    - speeds : 하루 작업할 수 있는 속도를 elementfh rkwsms qoduf
    - 작업은 순서대로 완료되지 않고, 뒤의 작업이 완료되었다 하더라도, 맨 앞의 작업이 완료 되지 않으면 밴포를 못함.
    - 맨앞의 작업이 완료 됬다면, 뒤에 더 완료된 작업이 존재하는지 확인함.
    - 그리고 개수를 세서 배열에 입력.
## 2. 계획
    - progresses와 speeds 배열을 스택으로 이용한다. 이 둘이 모두 pop되서 없어질 때 까지 반복한다.
    - progresses의 element에 speeds의 element를 계속 해서 더한다.
    - progresses의 맨 앞자리가 100 이상인지 확인하고 pop을 한다.
    - 하지만 이전에 완료된 작업이 있을 수 있으니, 순환문을 이용하여 계속 pop
    - pop 하는 횟수를 계산 한 후에 result 배열에 입력.
## 3. 실행
## 4. 반성