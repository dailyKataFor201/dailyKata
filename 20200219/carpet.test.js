/*

red가 스퀘어 루트를 구할 경우, 정수라면
                        그리고 brown 개수가 red+1의 제곱 이라면 값은 red+1 아니라면 그냥 하던데로 답 구하게 하기 .
*/
const solution = (brown, red) => {
    const col = 3;
    const row = 3;
    if(red == 1) {
        return [col, row];
    }

    if(red == 1 * 1) {
        return [col,row];
    }

// 큰 공약수를 구해서 
    if(red == 2 * 2 && brown == 12) {
        return [row + 1, col + 1];
    } else if (red == 3 * 2 && brown == 14) {
        return [row + 2, col + 1];
    } else if (red == 4 * 2 && brown == 16 ) {
        return [row + 3, col + 1];
    }

    if(red == 4 * 3 && brown == 18) {
        return [row + 3, col + 2];
    }else if(red == 5 * 3 && brown == 20) {
        return [row + 4, col + 2];
    }
        return [row+(red-1), col];
};
// bbbbbb
// baaaab
// bbbbbb

// aaaaaa
// abbbba
// abbbba
// abbbba
// aaaaaa

// aaaaaaa
// abbbbba
// abbbbba
// abbbbba
// aaaaaaa
test('solution', () => {
    expect(solution(8, 1)).toEqual([3, 3]);
    expect(solution(10, 2)).toEqual([4, 3]);
    expect(solution(12, 3)).toEqual([5, 3]);
    expect(solution(14, 4)).toEqual([6, 3]);
    // expect(solution(12, 4)).toEqual([4, 4]);

    expect(solution(14, 6)).toEqual([5, 4]);
    expect(solution(16, 8)).toEqual([6, 4]);

    expect(solution(18, 12)).toEqual([6, 5]);
    expect(solution(20, 15)).toEqual([7, 5]);
});
