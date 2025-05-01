const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');

test('The function would add by 5',()=>{
    expect(addFive(1)).toBe(6);
})