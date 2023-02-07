import {sayHello, capitalize } from './functions'

test('say hello', () => {
    expect(sayHello()).toBe('hello');
})


test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});