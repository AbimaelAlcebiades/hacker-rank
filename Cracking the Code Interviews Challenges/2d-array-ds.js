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

/* Simply I used an in for two-dimensional array. The care are ... the array entry values are integers, then...
- Remember that negative values could be received. 
- Manipulate iterator with efficiency avoiding addtional loops. */
function hourglassSum(arr) {
    let greaterHourGlass;
    arr.forEach(function (arrayLine, lineNumber) {
        if (lineNumber + 3 > arr.length) {
            return;
        }
        arrayLine.forEach(function (element, index) {
            if (index + 3 > arrayLine.length) {
                return;
            }
            // First line glassHour.
            let sumGlassHour = element;
            sumGlassHour += arrayLine[index + 1];
            sumGlassHour += arrayLine[index + 2];

            // Second line glassHour.
            sumGlassHour += arr[lineNumber + 1][index + 1];

            // Third line glassHour.
            sumGlassHour += arr[lineNumber + 2][index];
            sumGlassHour += arr[lineNumber + 2][index + 1];
            sumGlassHour += arr[lineNumber + 2][index + 2];

            if (greaterHourGlass == undefined || sumGlassHour > greaterHourGlass) {
                greaterHourGlass = sumGlassHour;
            }
        });
    });
    return greaterHourGlass;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}