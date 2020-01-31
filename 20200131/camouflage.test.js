/*
    - 옷의 종류마다 갯수를 구한다
    - 구한 개수에 +1 은 해준 후에 모두 곱한 후
    - 마지막 하나 남은 것을 빼준다
*/

const solution = (arr) =>  Object.values(groupBy(arr)).reduce((acc, cur) => acc * (cur+1),1) - 1

const groupBy = (arr) =>  arr.reduce((acc,[_, key]) => ({
        ...acc,
        [key] : acc[key] ? acc[key] + 1 : 1        
    }), {});
    


test('get count of cases that can wear at least one', () => {
    expect(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])).toBe(5);
    expect(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])).toBe(3);
})

test('groupBy', () => {
    expect(groupBy([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])).toEqual({"headgear" : 2, "eyewear" : 1});
    
})