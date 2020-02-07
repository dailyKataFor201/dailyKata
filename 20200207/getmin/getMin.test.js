
const solution = (a,b) => {
    a.sort(compareFirst)
    b.sort(compareSecond)
    return a.reduce((acc,cur,i) =>  acc + cur * b[i],0);
}

const compareFirst = (a,b) => a-b 
const compareSecond = (a,b) => b-a


test('solution', ()=> {
    expect(solution([1,4,2], [5, 4, 4])).toBe(29);
    expect(solution([1,2], [3, 4])).toBe(10);
})