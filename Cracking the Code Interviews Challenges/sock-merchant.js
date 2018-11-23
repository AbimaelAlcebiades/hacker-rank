'use strict';

const fs = require('fs');

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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    let sockPar = 0;
    
    // I like this approach... Divide and conquest.

    // Spliting socks.
    let sockColors = {};
    for (let index = 0; index < n; index++) {
        const element = ar[index];

        if (sockColors[element] == undefined){
           sockColors[element] = 0;
        }

        sockColors[element]++;
    }

    // Huumm, let me see how many sock pairs I have.
    for (const sockColor in sockColors) {
        let pair = sockColors[sockColor] / 2; 
        sockPar += parseInt(pair, 10);
    } 

    // It's it.
    return sockPar;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}