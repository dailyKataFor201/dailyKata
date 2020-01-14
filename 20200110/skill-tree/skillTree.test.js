/*
    - BCD 이외의 스킬들은 모두 제거
    - 제거된 하나하나를 skill과 비교하며 찾아보기.
*/

const getCorrectSkillTreeCount = (skill, skillTrees) =>  skillTrees.map(v => v.replace(new RegExp(`[^${skill}]`, 'g'),''))
    .filter( v => skill.startsWith(v)).length;



// const filterUtilitySkill = (skill, skillTree) =>  
//     [...skillTree].filter(v =>  [...skill].indexOf(v) !== -1).join('');
const filterUtilitySkill = (skill, skillTree) =>  
    [...skillTree].filter(v =>  [...skill].indexOf(v) !== -1).join('');

test('getCorrectSkillTreeCount', () => {
    expect(getCorrectSkillTreeCount("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
})

test('filterUtilitySkill', () => {
    expect(filterUtilitySkill("CBD","BACDE")).toBe("BCD");
})