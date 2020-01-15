'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function factorial(number) {
    let result = 1;
    for (let factor = number; factor != 0; factor--) {
        result = result * factor;
    }
    return result;
}

function main() {
    const n = +(readLine());
    console.log(factorial(n));
}