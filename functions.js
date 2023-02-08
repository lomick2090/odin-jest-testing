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

function reverseString(string) {
    let working = string.split('');
    let working2 = [];
    for (let i = 0; i<working.length; i++) {
        working2[i] = working[(working.length-1)-i];
    }
    return working2.join('');
}

const calculator = {
    multiply: (x, y) => {
        return x*y;
    },
    divide: (x,y) => {
        return x / y;
    },
    add: (x,y) => {
        return x + y;
    },
    subtract: (x,y) => {
        return x - y;
    }
}

export {capitalize, sayHello, reverseString, calculator}