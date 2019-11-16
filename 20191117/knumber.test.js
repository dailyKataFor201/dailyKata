/*
- Use map for commands.
- slice array with Var start and end  from command and sort.
- get the index = k from sorted array.
*/
const getKnumber = (array,commands) => {

    return commands.map(([start, end, k]) => {
        return array.slice(start-1,end).sort((a,b) => a-b)[k-1];
     },[]);
}
test('getKnumber', () => {
    expect(getKnumber([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
    expect(getKnumber([1, 5, 2],[[1, 3, 2]])).toEqual([2]);
    expect(getKnumber([1, 21, 3],[[1, 3, 2]])).toEqual([3]);
});

//1,21,3