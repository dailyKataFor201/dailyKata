
const solution = (arr) => {
    arr.sort((a, b) => a-b).reverse();

    for(let h = arr.length; h >=0; h --){
        let overHArticles = arr.filter(v => v >= h).length;
        let extra = arr.length - overHArticles;
        if(overHArticles >= h && h >= extra) {
            return h;
        }
    }
}

test('solution', () => {
    expect(solution([0])).toBe(0);
    expect(solution([1])).toBe(1);
    expect(solution([1, 2])).toBe(1);
    expect(solution([1, 2, 0])).toBe(1);
    expect(solution([1, 2, 4, 5, 6])).toBe(3);
    expect(solution([1, 2, 0])).toBe(1);
    expect(solution([1, 2, 3])).toBe(2);
    expect(solution([3, 0, 6, 1, 5])).toBe(3);
    
})