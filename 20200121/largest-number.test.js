/*
    - 가장 큰 수가 나올 수 있도록 소트
    - 이어 붙힌다.
    - 0이 아니면 값을 리턴한다.
*/
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
function Student(name, gender, school) {
    console.log(this)
    Person.call(this,name,gender);
    console.log(this)
    this.school = school;
}
function Employee(name, gender, company) {
    Person.apply(this, [name, gender]);
    this.company = company;
}

var by = new Student('보영', 'female', '단국대');
var jn = new Employee('재난','male', '구골')
// console.log(by)
test('getLargestNumber', () => {
   
    expect(getLargestNumber([6, 10, 2])).toBe("6210");
    expect(getLargestNumber([3, 30, 34, 5, 9])).toBe("9534330");
})

test('compare', () => {
    expect(compare(9,1)).toBe(-1);
    expect(compare(1,2)).toBe(1);
    expect(compare(3490,980)).toBe(1);
})