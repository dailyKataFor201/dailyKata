/*
#problem : theNumberOfKth

##description : 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.


limitation
- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

input/output examples
array				commands			return
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

1. 이해
    - 아는것
        - array
        - commands [i = start, j = end, k = Kth]
    - 모르는것
        - 어떻게 풀것인가.
2. 계획
    - commands를 한번씩 돌면서 array을 자르고, k 번째에 있는 데이터를 배열에 입력한다.
*/

const NumberOfKth = (array, commands) => {
    let result = [];
    commands.forEach((element,i) => {
        // console.log(array.slice(element[0],element[1]));
      result[i] =  getElementOfKth(sortArray(array.slice(element[0]-1,element[1])),element[2]);
    console.log(result);
    });
    // console.log(result);
    return result;
}

// const sliceArray = (array, start, end) => {

//     return array.slice(start-1,end);
// }

const sortArray = (array) => {

    return array.sort((a,b) => {
        return a - b;
    });
}

const getElementOfKth = (array, k) => {
    
    return array[k-1];
}

test('NumberOfKth', () => {

    expect(NumberOfKth([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
    expect(NumberOfKth([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1]])).toEqual([5, 6]);
});

// test('sliceArray', () => {

//     expect(sliceArray([1, 5, 2, 6, 3, 7, 4],2,5)).toEqual([5, 2, 6, 3]);
//     expect(sliceArray([1, 5, 2, 6, 3, 7, 4],2,4)).toEqual([5, 2, 6]);
// });

test('sortArray', () => {
    expect(sortArray([5, 2, 6, 3])).toEqual([2, 3, 5, 6]);
    expect(sortArray([5, 2, 6])).toEqual([2, 5, 6]);
    expect(sortArray([6])).toEqual([6]);
});

test('getElementOfKth', () =>{
    expect(getElementOfKth([2, 3, 5, 6],3)).toBe(5);
    expect(getElementOfKth([2, 3, 5, 6],1)).toBe(2);
    expect(getElementOfKth([6],1)).toBe(6);
});