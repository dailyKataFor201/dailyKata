/*
  1. 배열의 값들을 모두 이진수로 변환
  2. 이진수를 다시 각 배열로 변환
  3. 배열을 돌면서 둘중 하나라도 1일 경우 #으로 변환
  4. 리턴.
*/
const parseMap = (n, m1, m2) => {
  const parsedM1 = m1.map(v=>[...v.toString(2).padStart(n, '0')]);
  const parsedM2 = m2.map(v=>[...v.toString(2).padStart(n, '0')]);
  return parsedM1.map((width, i) => width.map((height, j) => parsedM1[i][j] == 1 || parsedM2[i][j] == 1 ? '#' : ' ',[]).join(''),[]);
}

test('map', () => {
  expect(parseMap(5, [9, 20, 28, 18, 11], 	[30, 1, 21, 17, 28])).toEqual(["#####","# # #", "### #", "# ##", "#####"]);
});