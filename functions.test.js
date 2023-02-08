import {sayHello, capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './functions'

test('say hello', () => {
    expect(sayHello()).toBe('hello');
})

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalize 2', () => {
    expect(capitalize('vjdidj')).toBe('Vjdidj');
});

test('capitalize 3', () => {
    expect(capitalize(';idkd')).toBe(';idkd');
});

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse string 2', () => {
    expect(reverseString(';idcneod')).toBe('doencdi;');
});

test('calculator', () => {
    expect(calculator.multiply(5,3)).toBe(15);
});

test('calculator 2', () => {
    expect(calculator.divide(calculator.add(6,4), calculator.subtract(8,6))).toBe(5);
});

test('cipher', () => {
    expect(caesarCipher('abcde', 1)).toBe('bcdef');
});

test('cipher 2', ()=> {
    expect(caesarCipher('z..ZZ,xa', 3)).toBe('c..CC,ad');
});

test('cipher 3', () => {
    expect(caesarCipher('Z', 9)).toBe('I');
});

test('analyze array', () => {
    let x = analyzeArray([5,4,3,2,1])
    expect(x.average).toBe(3);
    expect(x.min).toBe(1);
    expect(x.max).toBe(5);
    expect(x.length).toBe(5)
})