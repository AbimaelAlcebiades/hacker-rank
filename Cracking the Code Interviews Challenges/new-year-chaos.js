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

// Complete the minimumBribes function below.
function minimumBribes(q) {

    let totalBribes = 0;
    let countBribes = 0;
    const MAX_BRIBES = 2;

    for (let index = q.length - 1; index >= 0; index--) {
        const sticker = q[index];
        const stickerBehind = q[index + 1];

        if (stickerBehind == undefined) {
            countBribes = 0;
            continue;
        }

        if (sticker > stickerBehind) {
            q[index] = stickerBehind;
            q[index + 1] = sticker;
            countBribes++;
            totalBribes++;
            index = index + 2;
        } else {
            countBribes = 0;
        }

        if (countBribes > MAX_BRIBES) {
            console.log('Too chaotic');
            return;
        }

    }
    console.log(totalBribes);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
