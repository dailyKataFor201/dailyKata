/*
문제 1 - 주어진 정수를 문자열로 변환한다.
ex) 1234 -> ‘1234’

1. 이해
    - 주어진 값이 정수(0보다 큰)
    - 정수를 어떻게 string으로 바꿀것인가.
2. 계획
    - 입력값을 10으로 나눠 나머지를 배열 앞에 넣는다.
    - 입력값을 10으로 나눈 몫이 0이 되면 그만
    - 배열을 하나씩 불러와서 String 변수에 담는다.

3. 실행
4. 반성
*/

const getIntToStr = (inputInt) => {

    return getArrayToStr(seperateIntToArray(inputInt));

};



const getIntToStrWithRecursion = (inputInt) => {

    if(inputInt==0){
        return "";
    }

    return getIntToStrWithRecursion(getDevideResult(inputInt))+getModulerWithTen(inputInt);
}


const seperateIntToArray = (inputInt) => {
    
    let intValues = [];
  
    while(inputInt != 0 ){
        //  if(inputInt != 0 ){                    //이전의 if문은 inputInt를 10으로 나눴을때의 값을 if문으로 사용하였지만, 현재는 그냥 나누지 않고 현재의값이 0인지 확인하여 if문을 간단히 하였음.
        intValues.unshift(getModulerWithTen(inputInt));
        inputInt = getDevideResult(inputInt);
    
    }
   
    return intValues;

}

const getModulerWithTen = (inputInt) => {
    
    return inputInt % 10;

};

const getDevideResult = (inputInt) => {

    return parseInt(inputInt / 10);

}


const getArrayToStr = (array) => {

    let result = "";
    array.forEach(element => {
        result = result+element;
    });
    return result;

};




test('getIntToStr', () => {
    expect(getIntToStr(1234)).toBe('1234');
    expect(getIntToStr(12345)).toBe('12345');
});

test('seperateIntToArray', () => {
    expect(seperateIntToArray(1234)).toEqual([1, 2, 3, 4]);
    expect(seperateIntToArray(12345)).toEqual([1, 2, 3, 4, 5]);
});

test('getModulerWithTen', () => {
    expect(getModulerWithTen(1234)).toBe(4);
    expect(getModulerWithTen(123)).toBe(3);
});

test('getDevideResult', () => {
    expect(getDevideResult(1234)).toBe(123);
    expect(getDevideResult(123)).toBe(12);
});

test('getArrayToStr', () => {
    expect(getArrayToStr([1, 2, 3, 4])).toBe('1234');
    expect(getArrayToStr([1, 2, 3])).toBe('123');
});

test.only('getIntToStrWithRecursion', () => {
    expect(getIntToStrWithRecursion(1234)).toBe('1234');
});