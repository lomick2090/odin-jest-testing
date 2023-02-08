import {sayHello, capitalize } from './functions'

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