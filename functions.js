function sayHello() {
    return 'hello'
}

function capitalize(string) {
    if (!(typeof string == 'string')) {
        return string;
    }
    let working = string.split('');
    working[0] = working[0].toUpperCase();
    return working.join('');
}

export {capitalize, sayHello}