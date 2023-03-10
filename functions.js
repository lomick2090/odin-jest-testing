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
};

function caesarCipher(string, offset) {
    let working = string.split('');
    
    for (let i = 0; i < working.length; i++) {
        if (working[i].charCodeAt(0) < 65 ||  (working[i].charCodeAt(0) < 97 && working[i].charCodeAt(0) > 90)  || working[i].charCodeAt(0) > 122 ) {
            continue;
        } 

        let newCode = working[i].charCodeAt(0) + offset;
        if (newCode > 122 || (newCode > 90 && newCode < 97) || (offset >= 7 && newCode >= 97)) {
            newCode = newCode - 26;
        };

        working[i] = String.fromCharCode(newCode);
    }

    return working.join('');
};

function analyzeArray(arr) {
    let findAverage = (arr) => {
        let sum = 0;
        arr.forEach(number => {sum = sum + number});

        return (sum / arr.length);
    };

    let findMin = (arr) => {
        let min = arr[0];
        arr.forEach(number => {(number < min) ? min = number : min = min})
        
        return min;
    };

    let findMax = (arr) => {
        let max = arr[0];
        arr.forEach(number => {(number > max) ? max = number : max = max })

        return max;
    };

    return {
        min: findMin(arr),
        max: findMax(arr),
        average: findAverage(arr),
        length: arr.length
    }
}

export {capitalize, sayHello, reverseString, calculator, caesarCipher, analyzeArray}