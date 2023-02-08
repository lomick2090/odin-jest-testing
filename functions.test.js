import {sayHello, capitalize, reverseString, calculator} from './functions'

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

