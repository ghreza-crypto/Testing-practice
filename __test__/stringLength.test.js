
import stringLength from '../stringLength.js';

test('string length test for hello',()=>{
    expect(stringLength('hello')).toBe(5);
});
test('string length test for more than 10',()=>{
    expect(stringLength('1234567891011')).toBe('invalid');
});