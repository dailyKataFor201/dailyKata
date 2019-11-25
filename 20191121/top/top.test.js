/*
    - 맨 오른쪽 부터 한개씩 element(높이) pop 하여 남은 배열을 거꾸로 순회하면서 더 큰 탑을 찾는다.
    - 찾으면 해당 탑의 순서를 unshift하여 거꾸로 담아준다.( 왜냐면 우리는 맨 마지막 것부터 확인하므로.)

    //맵을 사용한 계획.
    6 9 5 7 4
    - 자신의 왼쪽에 있는 모든 element들을 확인하여 자신보다 큰 값을 찾는다.
    - 

*/

const getWhichTopReceiveSign = (heightsOfTops) => {

  return heightsOfTops.map((_, i) => {
    //    let receivingTopIndex = 0;
    //    for(var j = 0; j<= i-1; j++){
    //     if(v<heightsOfTops[j]) receivingTopIndex = j +1;
    //    }
    //    return receivingTopIndex;
    //최적화
    // 배열의 처음부터 접근을 하다 보니, 항상 반복문을 모두 돌아야 했지만,
    // 송신탑의 바로 이전 부터 시작 하면, return을 바로 할 수 있기 때문에
    // 반복문을 모두 돌 필요도 없고, 변수도 필요가 없다.
    return getHigherTopNum(heightsOfTops, i+1);

    
}) 
    // const result = [];
    // var sendingTop = heightsOfTops.pop();
    // while(sendingTop != null) {
    //     result.unshift(getHigherTop(heightsOfTops,sendingTop));
    //     sendingTop = heightsOfTops.pop();
    // }
    // return result;
}

// const getHigherTop = (heightsOfTops,topHeight) => {
//     for(var num = heightsOfTops.length  ; num > 0; num--){
//        return getHigherTop(heightsOfTops,num);
//     }
// }

const getHigherTopNum = (heightsOfTops,sendingTopNum) => {
    for(let i = sendingTopNum-1; i>0; i--){ 
        if(heightsOfTops[sendingTopNum-1] < heightsOfTops[i-1]) return i;
    }
    return 0;
}

test('getWhichTopReceiveSign',() => {
    expect(getWhichTopReceiveSign([6,9,5,7,4])).toEqual([0,0,2,2,4]);
    expect(getWhichTopReceiveSign([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
    expect(getWhichTopReceiveSign([1,5,3,6,7,6,5])).toEqual([0,0,2,0,0,5,6]);
    	
});

test('getHigherTopNum', () => {
    expect(getHigherTopNum([6,9,5,7,4],5)).toBe(4);
    expect(getHigherTopNum([6,9,5,7,4],4)).toBe(2);
});

// test('getHigherTopNum', () => {
//     expect(getHigherTop([6,9,5,7],4)).toBe(4);
//     expect(getHigherTop([6,9,5],7)).toBe(2);
//     expect(getHigherTop([6],9)).toBe(0);
// })