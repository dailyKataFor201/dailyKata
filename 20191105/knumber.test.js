/*
1. 계획
    - commands를 순회하며, command에 있는 i, j 만큼 배열을 slice한다.
    - 정렬을 한 후에 k번째 값을 뽑은 후에, 배열에 순서대로 입력한다.
입력값 : array = [1, 5, 2, 6, 3, 7, 4], commands =[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	 result = [5, 6, 3]

2. 실행

3. 반성
    - reduce와 map사용법에 대해서 잘 이해가 안됨.
    - 이후에 [...array] 문법을 사용하면 더 쉬울듯 함. reduce를 사용할 때 
    - map에 ' ,' 부분을 뺴는것과 안뺴는 것과 차이를 좀 알 필요가 있을듯 .
    - element가 배열일 경우 [i, j, k] 형태로 바로 받아서 코드를 더 간결하게 만들 수 있음.
*/


const getKnumber = (array, commands) => 
        commands.map(([start,end,k]) => 
        array.slice(start-1,end).sort(compare)[k-1],
    );

    // const result  = [];
    // commands.forEach(element => {
    //     const [start,end,k] = [...element];
    //    result.push(array.slice(start-1,end).sort(compare)[k-1]);
    // });

   

    // return commands.reduce( (result, [start,end,k]) => {
       
    //    return [...result,array.slice(start-1,end).sort(compare)[k-1]];
    // },[]);


    // console.log(a);

const compare = (a, b) => {
    return  a - b;
}
test('getKnumber', () => {
    expect(getKnumber([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
    expect(getKnumber([1, 5, 2],[[1, 3, 2]])).toEqual([2]);
});