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

/*I tried to solve using iterations on string, wrong choose. This approach will be very slower in some tests.
You should trying to solve using math, yes, use calculations. :D*/
function repeatedString(s, n) {

    let repeated = 0;
    let findA = /a/g;
    let countAInString = s.match(findA);
    countAInString = (countAInString) ? countAInString.length : 0;

    if(countAInString == 0){
        return 0;
    }

    let repeatedStringCount = parseInt(n / s.length, 10);
    let restSubstring = parseInt(n % s.length, 10);
    
    repeated = countAInString * repeatedStringCount;
    
    if(restSubstring != 0){
        let countCharInsubstring =  s.substr(0, restSubstring).match(findA);
        if(countCharInsubstring){
            repeated += countCharInsubstring.length;
        }
    }

    return repeated;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
