# 1. 제목 : 소수 찾기

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

## 제한 조건
- n은 2 이상 1000000이하의 자연수

## 입출력 예
- n : 10 => result : 4
- n : 5 => result : 3
    
# 1. 이해
- 1 ~ 1000000 사이의 인자값이 들어옴 
# 2. 계획
- 소수가 무엇인지 공부
- 소수를 체크하는 방법 생각.
- 전략
    - 계획1
        - i를 1부터 10000까지의 수를 루프로 돌림
        - i를 매번 2 ~ i-1까지 나눴을때 나머지가 0이 나오면 소수가 아님
    - 계획 2
        - 배열 인덱스에 2 ~ n 까지 boolean 값에 true를 넣어놓음.
        - 그 이후에 데이터를 인덱스를 받아가면서 값을 확인
            - true일 경우
                - 해당 수가 소수인지 아직 검증 되지 않았으므로, 해당 수가 소수인지 확인
                    - 소수라면
                        - 자신 빼고 해당 수의 배수를 인덱스에서 false로 변경
                        - 카운트를 ++ 해줌.
                    - 소수가 아니라면
            - false일 경우
                - 이미 소수가 아니라고 확인 했으므로 넘어감.
# 3. 실행
## 1.  소수란 :  자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다. 또는 1과 그 수 자신 이외의 자연수로는 나눌 수 없는 자연수로 정의하기도 한다.
## 2. 예 : 5는 1 * 5 또는 5 * 1로 수를 곱한 결과를 적는 유일한 방법이 그 수 자신을 포함하기 떄문에 5는 솟수이다.
# 4. 반성.