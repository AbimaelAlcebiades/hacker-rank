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
    const a = readLine();
    const b = readLine();

    /* I need compare two strings, that can be or not has same size. If I take greater string,
    with just one iteration I can compare all the cases and apply my logic. "Voila!". */
    let greater;
    let smaller;
    let diffGreater;

    if (a.length > b.length) {
        greater = a.split('');
        smaller = b.split('');
    } else {
        greater = b.split('');
        smaller = a.split('');
    }

    diffGreater = greater.slice();

    for (let indexA = 0; indexA < greater.length; indexA++) {
        for (let indexB = 0; indexB < smaller.length; indexB++) {
            if (greater[indexA] == smaller[indexB]) {
                smaller.splice(smaller.indexOf(greater[indexA]), 1);
                diffGreater.splice(diffGreater.indexOf(greater[indexA]), 1);
                break;
            }
        }
    }

    console.log(diffGreater.length + smaller.length);
}
