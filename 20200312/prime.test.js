/*
1. 2 부터 n 까지의 모든 배열을 생성
2. 2부터 n의 스퀘어 루트까지 수를 제거
3. 필터로 갯수 가져오기
*/

const solution = (n) => {
    const arr = [...Array(n + 1)].fill(true);
    arr[0] = false;
    arr[1] = false;
    let count = n - 1;

    for (let i = 2; i <= n; i++) {
        if (arr[i] != false){
            for (let j =1; i * j <= n; j++) {
              if(i * j != i){
                  if(arr[i*j] != false){
                    // console.log(i +" "+j);
                    arr[i*j] = false;
                    count--;
                  }
                 
              }
            }
        } 
    }
    
    return arr.filter(v => v == true).length;
}
test('solution', () => {
    expect(solution(10)).toBe(4);
    expect(solution(5)).toBe(3);
})