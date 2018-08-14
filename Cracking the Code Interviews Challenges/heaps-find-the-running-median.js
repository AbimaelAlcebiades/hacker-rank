// I did not solve alone... Code based in solutiin by gchagalidze
// https://www.hackerrank.com/rest/contests/master/challenges/ctci-find-the-running-median/hackers/gchagalidze/download_solution

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var numberOfElements = parseInt(readLine());
    var ordernedArray = [];

    for (let i = 0; i < numberOfElements; i++) {
        var lineValue = Number(readLine());
        // Starting array...
        if (i == 0) {
            ordernedArray.push(lineValue);
        // Check if value is lesser of all.
        } else if (ordernedArray[0] > lineValue) {
           ordernedArray.unshift(lineValue);
        // Check if value is greater of all.
        } else if (ordernedArray[ordernedArray.length - 1] < lineValue) {
            ordernedArray.push(lineValue);
        } else {
            // Insert value sorted.
            for (var j = 0; j < ordernedArray.length; j++) {
                if (ordernedArray[j] >= lineValue) {
                    ordernedArray.splice(j, 0, lineValue);
                    break;
                }
            }
        }

        var isEven = (ordernedArray.length % 2 == 0);
        var middle = Math.floor(ordernedArray.length / 2);
        if (!isEven){
            console.log(ordernedArray[middle].toFixed(1));
        } else {
            console.log(
                ((ordernedArray[middle - 1] + ordernedArray[middle]) / 2).toFixed(1)
            );
        } 
    }
}