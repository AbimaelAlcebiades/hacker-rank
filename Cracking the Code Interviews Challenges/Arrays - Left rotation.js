'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nk = readLine().split(' ');
    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);

    /* My approach was... to separate and keep part of array that will be flipped. 
    In the end concatenate array flipped with part of array that no changed*/
    var fliped = [];
    const a = readLine().split(' ').map(function (element, index) {
        element = parseInt(element, 10);
        if (index < k) {
            fliped.push(element)
        }
        return element;
    });
    
    console.log(a.slice(k).concat(fliped).join(' ')); 
}
