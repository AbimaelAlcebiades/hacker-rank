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
    const mn = readLine().split(' ');
    const m = parseInt(mn[0], 10);
    const n = parseInt(mn[1], 10);
    const magazine = readLine().split(' ');
    const ransom = readLine().split(' ');

    /* I did think like in real world. I have a magazine and cropped the words.
    What phrase I want to build? Which words I found? With this I can response
    "Yes" or "Not". */
    let croppedWordsMagazine = magazine.slice();
    let foundedWords = 0;
    let indexWord;

    ransom.forEach(function (element) {
        indexWord = croppedWordsMagazine.indexOf(element);
        if (indexWord != -1) {
            croppedWordsMagazine.splice(indexWord, 1);
            foundedWords++;
        }
    });

    (foundedWords == n) ? console.log('Yes'): console.log('No');
}
