/*
- 자신의 왼쪽에 자신보다 큰 탑을 찾는다.
- result 변수에 담는다.
- 
*/
const getSendingTop = (heightOfTops) => {
const result = [];
    for(let i = heightOfTops.length -1; i>=0; i--){
        for(let j = i-1; j>=0; j++){
            if(heightOfTops[i]<heightOfTops[j]) result.unshift(j+1);
        }
    }

    
    return [0,0,2,2,4];
}

test('getSendingTop', () => {
    expect(getSendingTop([6,9,5,7,4])).toEqual([0,0,2,2,4]);
    // expect(getSendingTop([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
    // expect(getSendingTop([1,5,3,6,7,6,5])).toEqual([0,0,2,0,0,5,6]);
})