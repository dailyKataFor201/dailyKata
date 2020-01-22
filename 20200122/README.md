# 문제 : 쇠막대기

##풀이
1. 괄호가 열리자마자 닫히는 부분을 모두 0으로 변경
2. 괄호가 열리면 stickCount++
3. 레이저가 나온다면 result의 개수에 현재 stickCount를 더함
4. 레이저가 닫힌다면 result에 +1해주고, stickCount-- 