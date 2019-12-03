/*
    - N : 정수 변수
    - 각 자릿수의 합을 구해서 return 한다.
*/
const getSumEachPositionOfNum = (N) => {
   return N.toString().split('').reduce((acc, cur) =>  acc+parseInt(cur), 0)

    // if(N < 10){
    //     return N;
    // }
    // return getSumEachPositionOfNum(N % 10) + getSumEachPositionOfNum(N / 10 % 10);

    // let result = 0;
    // let devider = 1;
    
    // for(let i = 0 ; N > devider ; i ++) {
    //     result +=  Math.floor( N / devider % 10 );
    //     devider *= 10;
    // }
    //     result =  Math.floor(N / 1 % 10);
    //     result += Math.floor(N / 10 % 10);
    //     result += Math.floor(N / 100 % 10);

    
    
    return result
}


test('getSumEachPositionOfNum', ()=> {
    expect(getSumEachPositionOfNum(12)).toBe(3);
    expect(getSumEachPositionOfNum(123)).toBe(6);
    expect(getSumEachPositionOfNum(987)).toBe(24);
});