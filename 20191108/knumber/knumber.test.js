/*
 - use foreach to commands 
 - slice, sort, getting k and put that into result array.

 array : [1, 5, 2, 6, 3, 7, 4]
 commands : [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
 result : [5, 6, 3]
*/

const getKnumber = (array, commands) => {
    const result = [];
   
    commands.forEach(([start, end, k]) => {
       result.push(array.slice(start-1,end).sort()[k-1]);
    });

    return  commands.map(([start, end, k]) => 
         array.slice(start-1,end).sort()[k-1],
      );
   return commands.reduce((pre, [start, end, k]) => {
        return [...pre,array.slice(start-1,end).sort()[k-1]]
    },[]);
    return result;
}

test('getKnumber',() => {
    expect(getKnumber([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
    expect(getKnumber([1, 5, 2],[[1, 3, 2]])).toEqual([2]);
});